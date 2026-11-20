/* apk-maj.js — Mise à jour de l'APK depuis l'appli (Android uniquement), sans passer par le navigateur.
   Complète maj.js (qui ne met à jour que le CONTENU data/ + img/) : ici on remplace l'APK elle-même, utile quand index.html, script.js, style.css, maj.js ou le code natif changent.
   Principe (inspiré du mécanisme classique « manifeste + téléchargement vérifié + installateur Android ») :
     1. apk.json (publié sur la branche « apk-info » — et NON « content », réécrite par publish-content.yml — par build-apk.yml) décrit la dernière APK : build, version, url, taille, sha256, notes.
     2. On compare son « build » au build de l'APK installée (contenu-apk.json embarqué, même source que maj.js / window.versionApk).
     3. Le plugin natif « ApkInstaller » (apk/android-plugin/, ajouté au projet Android par build-apk.yml) télécharge l'APK (reprise possible), vérifie le SHA-256,
        puis ouvre l'installateur d'Android. L'utilisateur doit toujours appuyer sur « Installer » : Android l'impose.
   Sans le plugin (ancienne APK, web, iPhone) : ce fichier ne change rien : le lien « Télécharger l'APK » de script.js reste le plan B.
   Expose : window.htmlMajApk() (appelé par htmlAppli() dans script.js, carte « Mise à jour de l'appli » : état, version + date installées, « i » explicatif, lien « Toutes les versions »).
   Dépendances (script.js / maj.js) : L(), esc(), langue, ouvrirApropos(), classes CSS .ap-carte .ap-btn .maj-btns .maj-barre .maj-toast. Clics : attribut data-apk (pas data-m, réservé à maj.js). */
(function () {
    "use strict";
    const BASE = "https://raw.githubusercontent.com/Palefroy/SmashUp-Draft/apk-info/";   // branche DIFFÉRENTE de maj.js : publish-content.yml écrase la branche « content »
    const NOM_PLUGIN = "ApkInstaller";
    const CLE_VERIF = "smashup_apk_verif", CLE_VU = "smashup_apk_vu";
    const DELAI_VERIF = 6000, INTERVALLE_VERIF = 24 * 3600 * 1000;   // vérification auto : 6 s après le lancement (maj.js : 4 s), au plus une fois par 24 h
    const SEUIL_WIFI = 20 * 1048576;

    const C = window.Capacitor;
    const ANDROID = !!(C && (typeof C.getPlatform !== "function" || C.getPlatform() === "android"));
    if (!ANDROID) return;   // web, PWA, iPhone : rien à faire ici

    let ui = { type: "init", t: 0 }, local = null, plug = null, occupe = false, attente = false, ecouteur = null, infoOuverte = false;
    const mo = n => (n / 1048576).toFixed(n < 10485760 ? 1 : 0);
    const poser = o => { ui = Object.assign({ t: Date.now() }, o); };
    const lib = (fr, en) => L(fr, en);

    function plugin() {
        if (plug) return plug;
        try {
            const dispo = typeof C.isPluginAvailable === "function" ? C.isPluginAvailable(NOM_PLUGIN) : !!(C.Plugins && C.Plugins[NOM_PLUGIN]);
            if (!dispo) return null;
            plug = (C.Plugins && C.Plugins[NOM_PLUGIN]) || (typeof C.registerPlugin === "function" ? C.registerPlugin(NOM_PLUGIN) : null);
        } catch (e) { plug = null; }
        return plug;
    }

    // Build / version de l'APK installée : contenu-apk.json est embarqué dans l'APK (généré par build-apk.yml), comme pour maj.js.
    async function lireLocal() {
        if (local) return local;
        try {
            const j = await (await fetch("contenu-apk.json", { cache: "no-store" })).json();
            local = { build: Number(j.build) || 0, version: Number(j.version) || 0 };
        } catch (e) { local = { build: 0, version: 0 }; }
        return local;
    }

    function manifesteValide(m) {
        return !!m && typeof m === "object"
            && Number.isInteger(m.build) && m.build > 0
            && typeof m.url === "string" && /^https:\/\//i.test(m.url)
            && Number.isInteger(m.taille) && m.taille > 0
            && typeof m.sha256 === "string" && /^[a-f0-9]{64}$/.test(m.sha256)
            && (m.version === undefined || Number.isFinite(m.version));
    }
    async function chargerManifeste() {
        const r = await fetch(BASE + "apk.json?t=" + Date.now(), { cache: "no-store" });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const m = await r.json();
        if (!manifesteValide(m)) throw new Error(lib("apk.json invalide", "invalid apk.json"));
        return m;
    }
    // true = plus récente que l'APK installée, false = à jour, null = impossible à comparer (numéro local inconnu)
    function plusRecente(m, loc) {
        if (loc.build && m.build) return m.build > loc.build;
        if (loc.version && m.version) return m.version > loc.version;
        return null;
    }

    async function verifier() {
        if (occupe) return;
        const p = plugin();
        if (!p) { poser({ type: "indispo" }); rendre(); return; }
        poser({ type: "verif" }); rendre();
        try {
            const [m, loc] = [await chargerManifeste(), await lireLocal()];
            const neuve = plusRecente(m, loc);
            if (neuve === true) poser({ type: "dispo", m });
            else if (neuve === false) { poser({ type: "ajour" }); try { p.effacer(); } catch (e) { /* nettoyage facultatif */ } }
            else poser({ type: "inconnu", m });
        } catch (e) { poser({ type: "hors" }); }
        finally { rendre(); }
    }

    function messageErreur(e) {
        const c = e && e.code, m = (e && e.message) || String(e);
        if (c === "SHA") return lib("Le fichier téléchargé est corrompu ou ne correspond pas à la version annoncée. Réessaie.", "The downloaded file is corrupted or doesn't match the announced version. Try again.");
        if (c === "ESPACE") return lib("Espace insuffisant sur l'appareil.", "Not enough free space on the device.");
        if (c === "RESEAU") return lib("Connexion interrompue. Le début est gardé : la reprise sera rapide.", "Connection interrupted. What was downloaded is kept: resuming will be quick.");
        if (c === "APK_INVALIDE") return lib("Ce fichier n'est pas l'APK de l'appli.", "This file is not the app's APK.");
        return m;
    }

    async function aller() {   // télécharger + vérifier + ouvrir l'installateur
        if (occupe) return;
        const m = ui.m;
        if (!m) return verifier();
        const p = plugin();
        if (!p) { poser({ type: "indispo" }); return rendre(); }
        occupe = true;
        try {
            const r = await p.peutInstaller();
            if (!r || !r.autorise) { poser({ type: "permission", m }); return; }
            poser({ type: "dl", m, fait: 0, total: m.taille }); rendre();
            ecouteur = await p.addListener("progression", e => { if (ui.type === "dl") { ui.fait = e.octets || 0; ui.total = e.total || m.taille; rendre(); } });
            await p.telecharger({ url: m.url, sha256: m.sha256, taille: m.taille });
            poser({ type: "pret", m }); rendre();
            await p.installer();
        } catch (e) {
            if (e && e.code === "ANNULE") poser({ type: "annule", m });
            else if (e && e.code === "PERMISSION") poser({ type: "permission", m });
            else poser({ type: "erreur", m, msg: messageErreur(e) });
        } finally {
            if (ecouteur) { try { ecouteur.remove(); } catch (e) { /* rien */ } ecouteur = null; }
            occupe = false; rendre();
        }
    }
    async function installerDeNouveau() {   // APK déjà téléchargée et vérifiée (l'utilisateur avait refusé l'installateur)
        const p = plugin(), m = ui.m;
        if (!p || occupe) return;
        try { await p.installer(); }
        catch (e) { poser({ type: "erreur", m, msg: messageErreur(e) }); rendre(); }
    }

    function corps() {
        const u = ui, bt = (a, texte) => `<button type="button" class="ap-btn" data-apk="${a}">${texte}</button>`;
        let msg = "", btns = "", barre = "";
        const nb = u.m && u.m.notes ? (u.m.notes[langue] || u.m.notes.fr || u.m.notes.en || "") : "";
        const notes = nb ? `<p>${esc(nb)}</p>` : "";
        const wifi = u.m && u.m.taille > SEUIL_WIFI ? lib(" Wi-Fi conseillé.", " Wi-Fi recommended.") : "";
        const poids = u.m ? mo(u.m.taille) : "";
        if (u.type === "init" || u.type === "verif") msg = lib("Vérification…", "Checking…");
        else if (u.type === "ajour") { msg = lib("L'appli est à jour ✓", "The app is up to date ✓"); btns = bt("verif", lib("Revérifier", "Check again")); }
        else if (u.type === "dispo") {
            msg = lib(`Nouvelle version de l'appli disponible (≈ ${poids} Mo).${wifi}`, `A new version of the app is available (≈ ${poids} MB).${wifi}`);
            btns = bt("go", lib("Mettre à jour l'appli", "Update the app"));
        }
        else if (u.type === "inconnu") {
            msg = lib(`Impossible de comparer avec la version installée. La dernière version publiée pèse ≈ ${poids} Mo.${wifi}`, `Can't compare with the installed version. The latest published version is ≈ ${poids} MB.${wifi}`);
            btns = bt("go", lib("Installer la dernière version", "Install the latest version"));
        }
        else if (u.type === "hors") { msg = lib("Connexion impossible : serveur injoignable ou hors ligne.", "Connection failed: server unreachable or offline."); btns = bt("verif", lib("Réessayer", "Retry")); }
        else if (u.type === "indispo") msg = lib("La mise à jour intégrée n'est pas disponible dans cette version de l'appli : télécharge la dernière APK via « Toutes les versions » ci-dessous, une seule fois.", "In-app update isn't available in this version of the app: download the latest APK via “All versions” below, just this once.");
        else if (u.type === "permission") {
            msg = lib("Android doit d'abord t'autoriser à installer des applis depuis Smash Up Draft : active « Autoriser depuis cette source », puis reviens ici.", "Android must first allow installing apps from Smash Up Draft: turn on “Allow from this source”, then come back here.");
            btns = bt("perm", lib("Ouvrir les réglages", "Open settings"));
        }
        else if (u.type === "dl") {
            msg = lib(`Téléchargement… ${mo(u.fait)} / ${mo(u.total)} Mo`, `Downloading… ${mo(u.fait)} / ${mo(u.total)} MB`);
            barre = `<div class="maj-barre"><i style="width:${u.total ? Math.min(100, Math.round(100 * u.fait / u.total)) : 100}%"></i></div>`;
            btns = bt("stop", lib("Annuler", "Cancel"));
        }
        else if (u.type === "pret") {
            msg = lib("Téléchargée et vérifiée ✓ Android va te proposer d'installer la mise à jour. Si rien ne s'affiche, touche « Installer ».", "Downloaded and verified ✓ Android will offer to install the update. If nothing shows up, tap “Install”.");
            btns = bt("installer", lib("Installer", "Install"));
        }
        else if (u.type === "annule") { msg = lib("Annulé. Ce qui est déjà téléchargé est gardé : la reprise sera rapide.", "Cancelled. What was already downloaded is kept: resuming will be quick."); btns = bt("go", lib("Reprendre", "Resume")); }
        else if (u.type === "erreur") { msg = lib("Échec : ", "Failed: ") + esc(u.msg || ""); btns = bt(u.m ? "go" : "verif", lib("Réessayer", "Retry")); }
        const aide = (u.type === "dispo" || u.type === "inconnu") ? notes : "";
        return `<b>${lib("Mise à jour de l'appli", "App update")}</b>${boutonInfo()}<p>${msg}</p>${infosVersion()}${aide}${barre}<div class="maj-btns">${btns}</div>${lienVersions()}`;
    }
    // Version et date de l'APK installée (contenu-apk.json embarqué) : une ligne n'apparaît que si sa valeur est connue.
    function infosVersion() {
        if (!local) return "";
        const l = [];
        if (local.build > 0) l.push(lib("Version installée : ", "Installed version: ") + local.build);
        if (local.version > 0) l.push(lib("Date de la version : ", "Version date: ") + new Date(local.version * 1000).toLocaleDateString(langue === "en" ? "en-GB" : "fr-FR"));
        return l.length ? `<p class="ap-aide">${l.join("<br>")}</p>` : "";
    }
    // Petit « i » en haut à droite de la carte. L'état ouvert / fermé est gardé (infoOuverte) : la carte est réécrite à chaque étape du téléchargement.
    function boutonInfo() {
        return `<button type="button" class="btn-info" data-apk="info" aria-label="${lib("Information", "Information")}" aria-expanded="${infoOuverte}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16.5v-5M12 7.8h.01"/></svg></button>`
            + `<div class="astuce apk-info-bulle" style="top:40px;right:8px;--pointe:14px" role="status"${infoOuverte ? "" : " hidden"}>${lib("Mettre à jour l'APK de temps en temps vaut le coup : il apporte l'interface et les nouveautés de l'appli. Le contenu (images, textes, données) se met à jour sans APK, avec le bouton « Mettre à jour » plus bas.", "Updating the APK from time to time is worth it: it brings the app's interface and new features. The content (images, texts, data) updates without an APK, with the “Update” button below.")}</div>`;
    }
    function lienVersions() {
        const u = window.DATA && DATA.credit && DATA.credit.application && DATA.credit.application.versions;
        return typeof u === "string" && /^https?:\/\//i.test(u) ? `<a class="ap-lien" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${lib("Toutes les versions", "All versions")}</a>` : "";
    }
    function rendre() {
        if (attente) return;
        attente = true;
        requestAnimationFrame(() => { attente = false; const c = document.querySelector(".apk-carte"); if (c) c.innerHTML = corps(); });
    }

    window.htmlMajApk = function () {
        if (!local) lireLocal().then(rendre);   // version / date : lues une fois, puis la carte se redessine
        if (!occupe && (ui.type === "init" || (/^(ajour|dispo|hors|indispo|inconnu)$/.test(ui.type) && Date.now() - ui.t > 60000))) setTimeout(verifier, 0);
        return `<div class="ap-carte apk-carte">${corps()}</div>`;
    };

    // Clics de la carte (délégation : la fenêtre À propos est réécrite à chaque rendu).
    document.addEventListener("click", e => {
        const b = e.target.closest && e.target.closest(".apk-carte [data-apk]");
        if (!b) return;
        const a = b.dataset.apk, p = plugin();
        if (a === "info") {
            infoOuverte = !infoOuverte;
            const c = b.closest(".apk-carte"), bulle = c && c.querySelector(".apk-info-bulle");
            if (bulle) bulle.hidden = !infoOuverte;
            b.setAttribute("aria-expanded", String(infoOuverte));
            return;
        }
        if (a === "verif") verifier();
        else if (a === "go") aller();
        else if (a === "installer") installerDeNouveau();
        else if (a === "stop") { if (p) p.annuler(); }
        else if (a === "perm" && p) p.ouvrirReglages().catch(() => {});
    });
    // Retour des réglages Android : si l'installation est maintenant autorisée, on le dit et on repropose le bouton.
    document.addEventListener("visibilitychange", async () => {
        if (document.visibilityState !== "visible" || ui.type !== "permission") return;
        const p = plugin(), m = ui.m;
        try { const r = await p.peutInstaller(); if (r && r.autorise) { poser({ type: "dispo", m }); rendre(); } } catch (e) { /* on reste sur l'écran d'autorisation */ }
    });

    // Petit message au lancement quand une nouvelle APK est publiée : une seule fois par build, au plus une vérification par 24 h.
    function toast(msg) {
        if (document.querySelector(".maj-toast")) return;   // maj.js en affiche déjà un (nouveau contenu / APK requise)
        const d = document.createElement("div");
        d.className = "maj-toast"; d.setAttribute("role", "status");
        d.innerHTML = `<span>${esc(msg)}</span><button type="button" data-v>${lib("Voir", "View")}</button><button type="button" data-x aria-label="${lib("Fermer", "Close")}">×</button>`;
        d.addEventListener("click", e => {
            if (e.target.closest("[data-v]")) { d.remove(); if (window.ouvrirApropos) ouvrirApropos("appli"); }
            else if (e.target.closest("[data-x]")) d.remove();
        });
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 15000);
    }
    async function verifAuto() {
        try {
            if (!navigator.onLine || occupe || !plugin()) return;
            if (Date.now() - Number(localStorage.getItem(CLE_VERIF) || 0) < INTERVALLE_VERIF) return;
            await verifier();
            if (ui.type === "hors") return;   // pas de réponse : on réessaiera au prochain lancement
            localStorage.setItem(CLE_VERIF, String(Date.now()));
            if (ui.type !== "dispo" || localStorage.getItem(CLE_VU) === String(ui.m.build)) return;
            localStorage.setItem(CLE_VU, String(ui.m.build));
            toast(lib("Une nouvelle version de l'appli est disponible", "A new version of the app is available"));
        } catch (e) { /* silencieux */ }
    }
    setTimeout(verifAuto, DELAI_VERIF);
})();
