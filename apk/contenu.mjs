// Inventaire du contenu (data/ + img/), sans dépendance. Deux usages :
//  node apk/contenu.mjs publier <out> <prev|-> <version> <apiMin> <empreinteScript>
//      -> écrit <out>/contenu.json { version, apiMin, date, total, fichiers: [{ p chemin, s taille, h SHA-256 du fichier livré, k clé de la source }] }
//         Si la source d'un fichier n'a pas changé depuis la publication précédente (<prev> = copie de la branche « content »),
//         on réutilise SON fichier compressé et son empreinte : les hash restent stables même si ImageMagick change de version.
//  node apk/contenu.mjs apk <sortie.json> <version> <empreinteScript> <numéroDeBuild>
//      -> écrit la liste { version, build, fichiers: [{ p, k }] } du contenu embarqué dans l'APK (sert à ne rien retélécharger d'inutile).
// k = SHA-256( SHA-256(fichier source du dépôt) + empreinte de compresser-images.sh si le fichier est compressé ).
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, copyFileSync } from "node:fs";
import { join, relative } from "node:path";

const sha = b => createHash("sha256").update(b).digest("hex");
const COMPRESSE = /^img\/(illus|cards|ico)\/.*\.(jpe?g|png|webp)$/i;   // mêmes règles que apk/compresser-images.sh
const IGNORE = /^(\.|Thumbs\.db$|desktop\.ini$)/i;

function lister(dir, base) {
  let r = [];
  for (const n of readdirSync(dir).sort()) {
    if (IGNORE.test(n)) continue;
    const p = join(dir, n);
    if (statSync(p).isDirectory()) r = r.concat(lister(p, base));
    else r.push(relative(base, p).split("\\").join("/"));
  }
  return r;
}
const cle = (p, script) => sha(sha(readFileSync(p)) + (COMPRESSE.test(p) ? script : ""));   // la source est lue dans le dépôt (dossier courant)

const [mode, ...a] = process.argv.slice(2);
if (mode === "publier") {
  const [out, prev, version, apiMin, script] = a;
  let ancien = new Map();
  try { ancien = new Map(JSON.parse(readFileSync(join(prev, "contenu.json"), "utf8")).fichiers.map(f => [f.p, f])); }
  catch (e) { console.log("Pas de publication précédente : tout est calculé."); }
  let reutilises = 0;
  const fichiers = lister(out, out).filter(p => p !== "contenu.json").map(p => {
    const k = cle(p, script), av = ancien.get(p);
    if (av && av.k === k) {
      try {
        const b = readFileSync(join(prev, p));
        if (b.length === av.s && sha(b) === av.h) { copyFileSync(join(prev, p), join(out, p)); reutilises++; return av; }
      } catch (e) { /* fichier précédent absent : on prend le neuf */ }
    }
    const b = readFileSync(join(out, p));
    return { p, s: b.length, h: sha(b), k };
  });
  const total = fichiers.reduce((n, f) => n + f.s, 0);
  writeFileSync(join(out, "contenu.json"), JSON.stringify({ version: Number(version), apiMin: Number(apiMin) || 1, date: new Date().toISOString(), total, fichiers }));
  console.log(`contenu.json : ${fichiers.length} fichiers, ${(total / 1048576).toFixed(1)} Mo, ${reutilises} réutilisés de la publication précédente.`);
} else if (mode === "apk") {
  const [sortie, version, script, build] = a;
  const fichiers = ["data", "img"].filter(d => existsSync(d)).flatMap(d => lister(d, ".")).map(p => ({ p, k: cle(p, script) }));
  writeFileSync(sortie, JSON.stringify({ version: Number(version), build: Number(build) || 0, fichiers }));
  console.log(`Inventaire embarqué : ${fichiers.length} fichiers.`);
} else { console.error("Usage : voir l'en-tête de apk/contenu.mjs"); process.exit(1); }
