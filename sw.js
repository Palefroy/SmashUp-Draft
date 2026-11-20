// Service Worker — Smash Up Draft.
// MODE WEB (PWA, sw.js sans paramètre) :
// - Écoute 'fetch' (obligatoire pour l'installation sur Android/Chrome).
// - self.skipWaiting() + clients.claim() : une nouvelle version s'active immédiatement.
// - Fichiers du site (HTML/CSS/JS/data) : réseau d'abord (toujours à jour en ligne), copie en cache si hors-ligne.
// - Images (img/) : copie en cache + mise à jour en arrière-plan ; elles se mettent en cache au fil de l'utilisation.
// MODE APK (enregistré par index.html sous « sw.js?apk=1 » dans l'application Android) :
// - Ne touche à rien sauf data/* et img/* : sert la copie du cache « smashup-contenu » (contenu mis à jour par maj.js), sinon laisse passer vers les fichiers embarqués dans l'APK.
// - index.html, script.js, style.css restent toujours ceux de l'APK. Une entrée du cache en 404 = fichier retiré du contenu.
// Pour forcer la purge des anciens caches après une grosse mise à jour : changer VERSION ci-dessous.
// Tous les chemins sont relatifs : le site peut vivre dans un sous-dossier (GitHub Pages : /SmashUp-Draft/).

const VERSION = "v8";
const CACHE_SITE = "smashup-site-" + VERSION;
const CACHE_IMG = "smashup-img-" + VERSION;
const CONTENU = "smashup-contenu", CONTENU_TMP = "smashup-contenu-tmp";   // mode APK : ne jamais les supprimer ici (gérés par maj.js)
const APK = new URL(self.location.href).searchParams.has("apk");
const IMG_MAX = 700;   // nombre maximum d'images gardées en cache (les plus anciennes sont supprimées)

const SITE = [
  "./", "index.html", "style.css", "script.js", "maj.js", "apk-maj.js", "manifest.json",
  "data/data.js", "data/factions.js", "data/titans.js", "data/notes.js", "data/sources.js", "data/stats.js", "data/cartes.js", "data/rank.js", "data/combo.js", "data/credit.js", "data/traductions.js", "data/fonts/CurseCasualJVE.woff2", "data/fonts/CurseCasualJVE.ttf", "data/fonts/HennyPenny.woff2", "data/fonts/HennyPenny.ttf", "data/fonts/Shojumaru.woff2", "data/fonts/Shojumaru.ttf", "data/fonts/Fairydust.woff2", "data/fonts/Fairydust.ttf", "data/fonts/DeadheadRough.woff2", "data/fonts/DeadheadRough.ttf", "data/fonts/StickRice.woff2", "data/fonts/StickRice.ttf", "data/fonts/PricedownBlack.woff2", "data/fonts/PricedownBlack.ttf", "data/fonts/RageItalic.woff2", "data/fonts/RageItalic.ttf", "data/fonts/BankGothic.woff2", "data/fonts/BankGothic.ttf", "data/fonts/Diploma.woff2", "data/fonts/Diploma.ttf", "data/fonts/FuturaCondensedExtraBold.woff2", "data/fonts/FuturaCondensedExtraBold.ttf",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  if (APK) { event.waitUntil(self.skipWaiting()); return; }   // APK : rien à précharger, tout est embarqué
  event.waitUntil(
    caches.open(CACHE_SITE)
      // Un fichier manquant ne doit pas faire échouer toute l'installation : on les ajoute un par un.
      .then(cache => Promise.all(SITE.map(u => cache.add(new Request(u, { cache: "reload" })).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n !== CACHE_SITE && n !== CACHE_IMG && n !== CONTENU && n !== CONTENU_TMP).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

const cacheable = rep => rep && rep.status === 200 && rep.type === "basic";

async function limiter(nom, max) {
  const cache = await caches.open(nom);
  const cles = await cache.keys();
  for (let i = 0; i < cles.length - max; i++) await cache.delete(cles[i]);
}

async function reseauDAbord(req) {
  try {
    const rep = await fetch(req, { cache: "no-cache" });
    if (cacheable(rep)) { const c = await caches.open(CACHE_SITE); c.put(req, rep.clone()); }
    return rep;
  } catch (err) {
    const copie = await caches.match(req, { ignoreSearch: true });
    if (copie) return copie;
    if (req.mode === "navigate") { const page = await caches.match("index.html"); if (page) return page; }
    throw err;
  }
}

async function cacheEtMiseAJour(req) {
  const cache = await caches.open(CACHE_IMG);
  const copie = await cache.match(req);
  const reseau = fetch(req).then(rep => {
    if (cacheable(rep)) { cache.put(req, rep.clone()).then(() => limiter(CACHE_IMG, IMG_MAX)); }
    return rep;
  }).catch(() => null);
  return copie || (await reseau) || Response.error();
}

// Mode APK : contenu mis à jour s'il existe, sinon fichier embarqué (le fetch est servi par le serveur local de Capacitor, cf. MainActivity).
async function depuisContenu(req) {
  try {
    const cache = await caches.open(CONTENU);
    const copie = await cache.match(req, { ignoreSearch: true });
    if (copie) return copie;
  } catch (err) { /* cache illisible : on retombe sur les fichiers embarqués */ }
  return fetch(req);
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // liens externes : on ne touche à rien
  if (req.headers.has("range")) return;              // requêtes partielles (vidéo/audio) : laissées au navigateur
  const scope = new URL("./", self.location).pathname;
  const chemin = url.pathname.slice(scope.length);
  if (APK) {   // mode APK : seulement data/ et img/ ; le reste (index.html, script.js...) n'est jamais intercepté
    if (chemin.startsWith("data/") || chemin.startsWith("img/")) event.respondWith(depuisContenu(req));
    return;
  }
  if (chemin.startsWith("img/")) event.respondWith(cacheEtMiseAJour(req));
  else event.respondWith(reseauDAbord(req));
});
