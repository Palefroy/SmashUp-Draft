/* maj.js — Mise à jour du contenu (data/ + img/) depuis l'appli, sans réinstaller l'APK.
   Principe : contenu.json (publié par .github/workflows/publish-content.yml sur la branche « content ») liste chaque fichier :
   p = chemin, s = taille, h = SHA-256 du fichier livré, k = clé de la source (sert à comparer avec le contenu embarqué dans l'APK, contenu-apk.json).
   Téléchargement dans un cache temporaire, vérification taille + SHA-256 (+ syntaxe des .js), puis recopie dans le cache « smashup-contenu »,
   état écrit en dernier. sw.js (mode APK) sert ce cache pour data/* et img/*, sinon les fichiers embarqués : l'appli démarre toujours hors-ligne.
   Dans l'APK : bloc « Contenu » (Mettre à jour / Vérifier-réparer / Tout réinstaller). Sur le web : simple bouton de purge du cache des images.
   Expose : htmlContenuMaj() (appelé par htmlAppli) et clicMaj(action) (appelé par le clic de la fenêtre À propos). */
(function () {
    "use strict";
    const APP_API = 1;   // numéro de compatibilité du code ; si contenu.json demande plus (apk/api-min.txt), il faut un nouvel APK
    const APK = !!window.Capacitor;
    const BASE = "https://raw.githubusercontent.com/Palefroy/SmashUp-Draft/content/";
    const CACHE = "smashup-contenu", TMP = "smashup-contenu-tmp";
    const ETAT_URL = new URL("__etat.json", document.baseURI).href, TMP_URL = new URL("__tmp.json", document.baseURI).href;
    const SEUIL = 20 * 1048576, PARALLELE = 5, ESSAIS = 3;
    const DELAI_VERIF = 4000, INTERVALLE_VERIF = 24 * 3600 * 1000;   // vérification automatique : 4 s après le lancement, au plus une fois par 24 h (seul contenu.json, quelques Ko, est téléchargé)
    const CLE_VERIF = "smashup_maj_verif", CLE_VU = "smashup_maj_vu";
    const MIME = { js: "text/javascript", json: "application/json", woff2: "font/woff2", ttf: "font/ttf", webp: "image/webp", jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", avif: "image/avif", gif: "image/gif", svg: "image/svg+xml" };
    const ANNULE = new Error("annule");


    let ui = { type: "init", t: 0 }, ctrl = null, occupe = false, purge = false, embarque = null, attente = false;
    const mime = p => MIME[(p.split(".").pop() || "").toLowerCase()] || "application/octet-stream";
    const urlLocale = p => new URL(p, document.baseURI).href;
    const urlDist = f => BASE + f.p.split("/").map(encodeURIComponent).join("/") + "?h=" + f.h.slice(0, 12);   // ?h= : évite un vieux fichier resté dans le cache du CDN
    const mo = n => (n / 1048576).toFixed(n < 10485760 ? 1 : 0);
    const pause = ms => new Promise(r => setTimeout(r, ms));
    const fich = n => L(n > 1 ? "fichiers" : "fichier", n > 1 ? "files" : "file");
    const sha = async buf => [...new Uint8Array(await crypto.subtle.digest("SHA-256", buf))].map(b => b.toString(16).padStart(2, "0")).join("");
    async function lireDoc(nom, url) { try { const r = await (await caches.open(nom)).match(url); return r ? await r.json() : null; } catch (e) { return null; } }
    async function ecrireDoc(nom, url, o) { await (await caches.open(nom)).put(url, new Response(JSON.stringify(o), { headers: { "Content-Type": "application/json" } })); }

    // Contenu embarqué dans l'APK : { version, k: { chemin: clé } } (contenu-apk.json, généré par build-apk.yml)
    async function lireEmbarque() {
        if (embarque) return embarque;
        try { const j = await (await fetch("contenu-apk.json", { cache: "no-store" })).json(); embarque = { version: j.version || 0, build: j.build || 0, k: Object.fromEntries((j.fichiers || []).map(f => [f.p, f.k])) }; }
        catch (e) { embarque = { version: 0, build: 0, k: {} }; }
        return embarque;
    }
    // Un nouvel APK plus récent que le contenu téléchargé : on jette l'ancien cache (sinon il masquerait le contenu neuf de l'APK).
    async function purgerSiPerime() {
        const emb = await lireEmbarque();   // (charge aussi la version de l'APK, affichée dans À propos)
        const etat = await lireDoc(CACHE, ETAT_URL);
        if (!etat) return;
        if (emb.version && emb.version >= etat.version) { await caches.delete(CACHE); await caches.delete(TMP); location.reload(); }
    }
    async function swPret() {
        try { const r = await navigator.serviceWorker.getRegistration(); return !!(r && (r.active || r.waiting || r.installing)); } catch (e) { return false; }
    }
    async function chargerManif() {
        const r = await fetch(BASE + "contenu.json?t=" + Date.now(), { cache: "no-store", signal: ctrl && ctrl.signal });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const m = await r.json();
        if (!m || !Array.isArray(m.fichiers)) throw new Error("contenu.json invalide");
        return m;
    }

    // Compare le contenu distant à ce que l'appareil a (cache d'abord, sinon APK). mode : "maj" | "reparer" | "tout".
    async function planifier(m, mode, prog) {
        const etat = (await lireDoc(CACHE, ETAT_URL)) || { version: 0, fichiers: {}, masques: [] };
        const emb = await lireEmbarque(), force = mode === "tout";
        const masq = new Set(etat.masques || []), dist = new Map(m.fichiers.map(f => [f.p, f])), dl = new Map();
        const masquer = Object.keys(emb.k).filter(p => !dist.has(p));   // dans l'APK mais retirés du dépôt : on les « masque » (réponse 404)
        for (const f of m.fichiers) {
            const k = masq.has(f.p) ? null : etat.fichiers[f.p] ? etat.fichiers[f.p].k : (emb.k[f.p] || null);
            if (force || k !== f.k) dl.set(f.p, f);
        }
        const supp = Object.keys(etat.fichiers).filter(p => !dist.has(p));
        if (mode === "reparer") {   // recalcule l'empreinte des fichiers du cache : manquant ou abîmé = à retélécharger
            const cache = await caches.open(CACHE), ps = Object.keys(etat.fichiers).filter(p => dist.has(p) && !dl.has(p));
            let i = 0;
            for (const p of ps) {
                if (ctrl.signal.aborted) throw ANNULE;
                if (prog) prog(++i, ps.length);
                let ok = false;
                try { const r = await cache.match(urlLocale(p)); if (r && r.status === 200) { const b = await r.arrayBuffer(); ok = b.byteLength === etat.fichiers[p].s && await sha(b) === etat.fichiers[p].h; } } catch (e) { /* illisible = abîmé */ }
                if (!ok) dl.set(p, dist.get(p));
            }
        }
        const liste = [...dl.values()];
        return { etat, dl: liste, supp, masquer, nouveauxMasques: masquer.filter(p => !masq.has(p)), octets: liste.reduce((n, f) => n + f.s, 0) };
    }

    async function telecharger(f, sig) {
        let derniere;
        for (let i = 1; i <= ESSAIS; i++) {
            try {
                const r = await fetch(urlDist(f), { signal: sig, cache: "no-store" });
                if (!r.ok) throw new Error("HTTP " + r.status);
                const buf = await r.arrayBuffer();
                if (buf.byteLength !== f.s) throw new Error(L("taille incorrecte", "wrong size"));
                if (await sha(buf) !== f.h) throw new Error(L("fichier corrompu", "corrupted file"));
                return buf;
            } catch (e) { if (sig.aborted) throw e; derniere = e; await pause(700 * i); }
        }
        throw new Error(f.p + " : " + (derniere && derniere.message));
    }
    // Test de chargement d'un .js de données : compilation sans exécution (aucun effet sur DATA). EvalError = eval interdit : test impossible, on laisse passer.
    function syntaxeOk(p, buf) {
        if (!/\.js$/i.test(p)) return true;
        try { new Function(new TextDecoder().decode(buf)); return true; } catch (e) { return !(e instanceof SyntaxError); }
    }
    const erreur = (e, mode) => (e === ANNULE || (e && e.name === "AbortError")) ? { type: "annule", mode } : { type: "erreur", mode, msg: (e && e.message) || String(e) };

    async function executer(m, p, mode) {
        occupe = true; ctrl = new AbortController();
        const sig = ctrl.signal;
        try {
            try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* facultatif */ }
            let libre = Infinity;
            try { const e = await navigator.storage.estimate(); libre = e.quota - e.usage; } catch (e) { /* inconnu */ }
            if (libre < p.octets * 2.2) throw new Error(L("Espace insuffisant sur l'appareil.", "Not enough free space on the device."));
            const tmp = await caches.open(TMP), jt = (await lireDoc(TMP, TMP_URL)) || { ok: {} };
            const reste = []; let fait = 0;
            for (const f of p.dl) { if (jt.ok[f.p] === f.h && await tmp.match(urlLocale(f.p))) fait += f.s; else reste.push(f); }   // reprise : déjà téléchargé et vérifié
            ui = { type: "travail", phase: "dl", n: p.dl.length - reste.length, N: p.dl.length, fait, total: p.octets, mode }; rendre();
            let chaine = Promise.resolve(), i = 0, echec = null;
            const ouvrier = async () => {
                while (!echec && !sig.aborted) {
                    const f = reste[i++];
                    if (!f) return;
                    try {
                        const buf = await telecharger(f, sig);
                        if (!syntaxeOk(f.p, buf)) throw new Error(f.p + L(" : fichier de données invalide, mise à jour refusée (l'ancien contenu est conservé).", ": invalid data file, update refused (the old content is kept)."));
                        await tmp.put(urlLocale(f.p), new Response(buf, { headers: { "Content-Type": mime(f.p) } }));
                        jt.ok[f.p] = f.h;
                        chaine = chaine.then(() => ecrireDoc(TMP, TMP_URL, jt)).catch(() => {});
                        ui.fait += f.s; ui.n++; rendre();
                    } catch (e) { echec = echec || e; ctrl.abort(); }
                }
            };
            await Promise.all(Array.from({ length: Math.min(PARALLELE, reste.length) }, ouvrier));
            await chaine;
            if (echec || sig.aborted) throw echec || ANNULE;
            // Tout est vérifié : bascule. On recopie dans le cache actif, on écrit l'état EN DERNIER.
            ui = { type: "travail", phase: "fin" }; rendre();
            const actif = await caches.open(CACHE);
            for (const f of p.dl) await actif.put(urlLocale(f.p), await tmp.match(urlLocale(f.p)));
            for (const x of p.supp) await actif.delete(urlLocale(x));
            for (const x of p.masquer) await actif.put(urlLocale(x), new Response(null, { status: 404 }));
            if (mode === "tout") {   // « tout réinstaller » : on retire aussi tout ce qui ne fait plus partie du contenu
                const garde = new Set([ETAT_URL, ...p.dl.map(f => urlLocale(f.p)), ...p.masquer.map(urlLocale)]);
                for (const r of await actif.keys()) if (!garde.has(r.url)) await actif.delete(r);
            }
            const fichiers = mode === "tout" ? {} : { ...p.etat.fichiers };
            p.supp.forEach(x => delete fichiers[x]);
            p.dl.forEach(f => { fichiers[f.p] = { s: f.s, h: f.h, k: f.k }; });
            await ecrireDoc(CACHE, ETAT_URL, { version: m.version, fichiers, masques: p.masquer });
            await caches.delete(TMP);
            ui = { type: "fini" };
        } catch (e) { ui = erreur(e, mode); }
        finally { occupe = false; rendre(); }
    }

    async function preparer(mode) {
        occupe = true; ctrl = new AbortController();
        try {
            ui = mode === "reparer" ? { type: "travail", phase: "verif", i: 0, N: 0, mode } : { type: "verif" }; rendre();
            const m = await chargerManif();
            if ((m.apiMin || 1) > APP_API) { ui = { type: "apk" }; return; }
            const p = await planifier(m, mode, (i, N) => { ui.i = i; ui.N = N; rendre(); });
            if (!p.dl.length && !p.supp.length && !p.nouveauxMasques.length && mode !== "tout") { ui = { type: "ajour", t: Date.now() }; return; }
            if (mode === "tout" || p.octets > SEUIL) { ui = { type: "confirme", mode, m, p }; return; }   // avertissement de poids
            occupe = false;
            await executer(m, p, mode);
        } catch (e) { ui = erreur(e, mode); }
        finally { occupe = false; rendre(); }
    }
    async function verifier() {   // simple état « à jour ? », sans rien modifier
        if (occupe) return;
        ctrl = new AbortController(); ui = { type: "verif" }; rendre();
        try {
            if (!window.caches || !(await swPret())) { ui = { type: "indispo" }; return; }
            const m = await chargerManif();
            if ((m.apiMin || 1) > APP_API) { ui = { type: "apk" }; return; }
            const p = await planifier(m, "maj");
            ui = (p.dl.length || p.supp.length || p.nouveauxMasques.length) ? { type: "dispo", p, t: Date.now() } : { type: "ajour", t: Date.now() };
        } catch (e) { ui = { type: "hors", t: Date.now() }; }
        finally { rendre(); }
    }

    function corps() {
        const u = ui, bt = (a, lib) => `<button type="button" class="ap-btn" data-m="${a}">${t(lib)}</button>`;
        const std = bt("reparer", "Vérifier / réparer") + bt("tout", "Tout réinstaller");
        let msg = "", btns = std, barre = "";
        if (u.type === "init" || u.type === "verif") { msg = t("Vérification…"); btns = ""; }
        else if (u.type === "ajour") msg = t("À jour ✓");
        else if (u.type === "dispo") {
            const n = u.p.dl.length, d = u.p.supp.length + u.p.nouveauxMasques.length;
            msg = n ? L(`${n} ${fich(n)}, ≈ ${mo(u.p.octets)} Mo à télécharger`, `${n} ${fich(n)}, ≈ ${mo(u.p.octets)} MB to download`)
                    : L(`${d} ${fich(d)} retiré${d > 1 ? "s" : ""} du contenu`, `${d} ${fich(d)} removed from the content`);
            btns = bt("maj", "Mettre à jour") + std;
        }
        else if (u.type === "hors") { msg = t("Connexion impossible : serveur injoignable ou hors ligne."); btns = bt("verif", "Réessayer"); }
        else if (u.type === "apk") {
            msg = t("Nouvel APK nécessaire : ce contenu demande une version plus récente de l'appli.");
            const a = (CREDIT().application || {}).apk;
            btns = urlOk(a) ? `<a class="ap-btn" href="${esc(a)}" target="_blank" rel="noopener noreferrer">${t("Télécharger l'APK")}</a>` : "";
        }
        else if (u.type === "indispo") { msg = t("Mise à jour du contenu indisponible sur cet appareil : l'appli utilise son contenu intégré."); btns = ""; }
        else if (u.type === "confirme") {
            const x = mo(u.p.octets);
            msg = u.mode === "tout" ? L(`Tout le contenu sera retéléchargé (≈ ${x} Mo), puis l'ancien sera remplacé. Wi-Fi conseillé. Continuer ?`, `All the content will be downloaded again (≈ ${x} MB), then the old one replaced. Wi-Fi recommended. Continue?`)
                                    : L(`≈ ${x} Mo à télécharger : Wi-Fi conseillé. Continuer ?`, `≈ ${x} MB to download: Wi-Fi recommended. Continue?`);
            btns = bt("oui", "Continuer") + bt("non", "Annuler");
        }
        else if (u.type === "travail") {
            btns = u.phase === "fin" ? "" : bt("stop", "Annuler");
            if (u.phase === "verif") msg = L(`Vérification des fichiers… ${u.i}/${u.N}`, `Checking files… ${u.i}/${u.N}`);
            else if (u.phase === "dl") {
                msg = L(`Téléchargement… ${u.n}/${u.N} (${mo(u.fait)} / ${mo(u.total)} Mo)`, `Downloading… ${u.n}/${u.N} (${mo(u.fait)} / ${mo(u.total)} MB)`);
                barre = `<div class="maj-barre"><i style="width:${u.total ? Math.min(100, Math.round(100 * u.fait / u.total)) : 100}%"></i></div>`;
            } else msg = t("Enregistrement…");
        }
        else if (u.type === "fini") { msg = t("Contenu mis à jour ✓ Recharge l'appli pour l'utiliser."); btns = bt("recharger", "Recharger l'appli") + std; }
        else if (u.type === "annule") { msg = t("Annulé. Les fichiers déjà téléchargés sont gardés : la reprise sera rapide."); btns = bt("reessayer", "Reprendre"); }
        else if (u.type === "erreur") { msg = L("Échec : ", "Failed: ") + esc(u.msg); btns = bt("reessayer", "Réessayer"); }
        return `<b>${t("Contenu de l'appli")}</b><p>${msg}</p>${barre}<div class="maj-btns">${btns}</div>`;
    }
    function rendre() {
        if (attente) return;
        attente = true;
        requestAnimationFrame(() => { attente = false; const c = document.querySelector(".maj-carte"); if (c) c.innerHTML = corps(); });
    }
    function htmlWeb() {   // web : seulement la purge du cache des images (sw.js)
        if (!window.caches || !/^https?:$/.test(location.protocol)) return "";
        return `<div class="ap-carte maj-web"><b>${t("Cache des images")}</b><p>${t("Les images déjà vues sont gardées sur l'appareil pour s'afficher plus vite. Tu peux les effacer : elles seront retéléchargées au besoin.")}</p>`
            + (purge ? `<button type="button" class="ap-btn" disabled>${t("Cache vidé ✓")}</button>` : `<button type="button" class="ap-btn" data-m="purge">${t("Vider le cache des images")}</button>`) + `</div>`;
    }
    async function purgerWeb() {
        try { for (const n of await caches.keys()) if (n.startsWith("smashup-img-")) await caches.delete(n); purge = true; } catch (e) { /* rien */ }
        const w = document.querySelector(".maj-web");
        if (w) w.outerHTML = htmlWeb();
    }

    // Petit message discret au lancement quand du nouveau contenu (ou un nouvel APK) est disponible. Une seule fois par version publiée.
    function toast(msg) {
        const d = document.createElement("div");
        d.className = "maj-toast"; d.setAttribute("role", "status");
        d.innerHTML = `<span>${esc(msg)}</span><button type="button" data-v>${t("Voir")}</button><button type="button" data-x aria-label="${t("Fermer")}">×</button>`;
        d.addEventListener("click", e => {
            if (e.target.closest("[data-v]")) { d.remove(); if (window.ouvrirApropos) ouvrirApropos("appli"); }
            else if (e.target.closest("[data-x]")) d.remove();
        });
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 15000);
    }
    async function verifAuto() {
        try {
            if (!navigator.onLine || occupe) return;
            if (Date.now() - Number(localStorage.getItem(CLE_VERIF) || 0) < INTERVALLE_VERIF) return;
            if (!window.caches || !(await swPret())) return;
            ctrl = new AbortController();
            const m = await chargerManif();
            localStorage.setItem(CLE_VERIF, String(Date.now()));
            const apk = (m.apiMin || 1) > APP_API;
            let neuf = apk;
            if (!apk) {
                const p = await planifier(m, "maj");
                neuf = !!(p.dl.length || p.supp.length || p.nouveauxMasques.length);
                if (neuf && !occupe) { ui = { type: "dispo", p, t: Date.now() }; rendre(); }
            } else if (!occupe) { ui = { type: "apk" }; rendre(); }
            if (!neuf || localStorage.getItem(CLE_VU) === String(m.version)) return;
            localStorage.setItem(CLE_VU, String(m.version));
            toast(apk ? t("Une nouvelle version de l'appli est disponible") : t("Du nouveau contenu est disponible"));
        } catch (e) { /* hors ligne ou erreur : silencieux, on réessaiera au prochain lancement */ }
    }
    // Version de l'APK pour la phrase « Tu utilises déjà l'application Android » (build + date du contenu embarqué), vide tant qu'elle n'est pas lue.
    window.versionApk = function () {
        if (!embarque || !embarque.version) return "";
        const d = new Date(embarque.version * 1000).toLocaleDateString(langue === "en" ? "en-GB" : "fr-FR");
        return embarque.build ? L(`version ${embarque.build}, ${d}`, `version ${embarque.build}, ${d}`) : d;
    };
    // Petit « i » de la carte APK : explication cachée par défaut (clic = afficher / masquer, voir clicMaj).
    window.htmlInfoApk = function () {
        return `<button type="button" class="btn-info" data-m="info-apk" aria-label="${t("Information")}" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16.5v-5M12 7.8h.01"/></svg></button>`
            + `<div class="astuce astuce-apk maj-info-apk" role="status" hidden>${t("Mettre à jour l'APK de temps en temps vaut le coup : il apporte l'interface et les nouveautés de l'appli. Le contenu (images, textes, données) se met à jour sans APK, avec le bouton « Mettre à jour » plus bas.")}</div>`;
    };

    window.htmlContenuMaj = function () {
        if (!APK) return htmlWeb();
        if (!window.caches) ui = { type: "indispo" };
        else if (!occupe && (ui.type === "init" || (/^(ajour|dispo|hors)$/.test(ui.type) && Date.now() - ui.t > 60000))) setTimeout(verifier, 0);
        return `<div class="ap-carte maj-carte">${corps()}</div>`;
    };
    window.clicMaj = function (a) {
        if (a === "purge") return purgerWeb();
        if (a === "info-apk") {
            const p = document.querySelector(".maj-info-apk"), b = document.querySelector("[data-m=\"info-apk\"]");
            if (p) { p.hidden = !p.hidden; if (b) b.setAttribute("aria-expanded", String(!p.hidden)); }
            return;
        }
        if (a === "recharger") return location.reload();
        if (a === "stop") { if (ctrl) ctrl.abort(); return; }
        if (occupe) return;
        if (a === "maj" || a === "reparer" || a === "tout") return preparer(a);
        if (a === "reessayer") return ui.mode ? preparer(ui.mode) : verifier();
        if (a === "verif" || a === "non") return verifier();
        if (a === "oui" && ui.type === "confirme") return executer(ui.m, ui.p, ui.mode);
    };

    const st = document.createElement("style");
    st.textContent = ".maj-i{width:1.5em;height:1.5em;border-radius:50%;border:1px solid currentColor;background:none;color:inherit;font:italic 700 .8em serif;line-height:1;padding:0;margin-left:8px;opacity:.7;cursor:pointer;vertical-align:middle}.maj-info-apk{font-size:.9em;opacity:.85}.maj-info-apk[hidden]{display:none}.maj-toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(76px + env(safe-area-inset-bottom,0px));z-index:9999;max-width:min(92vw,420px);display:flex;gap:10px;align-items:center;padding:10px 14px;border-radius:12px;background:rgba(32,32,36,.95);color:#fff;font-size:.9rem;box-shadow:0 4px 16px rgba(0,0,0,.35)}.maj-toast button{background:none;border:0;color:#fff;font:inherit;font-weight:700;padding:4px 6px;cursor:pointer;text-decoration:underline}.maj-toast [data-x]{text-decoration:none;font-size:1.3em;line-height:1}.maj-btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.maj-barre{height:8px;border-radius:4px;background:rgba(128,128,128,.28);overflow:hidden;margin:8px 0 4px}.maj-barre i{display:block;height:100%;background:currentColor;opacity:.75;transition:width .2s}";
    document.head.appendChild(st);
    if (APK && window.caches) { purgerSiPerime().catch(() => {}); setTimeout(verifAuto, DELAI_VERIF); }
})();
