#!/usr/bin/env node
// Génère apk.json (description de la dernière APK) pour la mise à jour de l'APK depuis l'appli (voir apk-maj.js).
// Usage : node apk/apk-json.mjs <fichier.apk> <sortie.json> --build <N> [--version <secondes>] [--url <https://...>] [--notes-fr "..."] [--notes-en "..."]
//   --build    numéro de build : DOIT être le même que le « build » écrit dans contenu-apk.json pour cette APK (apk/contenu.mjs), et toujours croissant.
//   --version  horodatage en secondes (défaut : maintenant) : DOIT être le même que le « version » de contenu-apk.json.
//   --url      adresse https de l'APK (défaut : asset SmashUp-Draft.apk de la release « apk-latest »).
// Écrit : { build, version, url, taille, sha256, notes?: { fr, en } }
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, statSync } from "node:fs";

const args = process.argv.slice(2);
const pos = args.filter((a, i) => !a.startsWith("--") && !(i > 0 && args[i - 1].startsWith("--")));
const opt = n => { const i = args.indexOf("--" + n); return i >= 0 ? args[i + 1] : undefined; };
const [apk, sortie] = pos;
if (!apk || !sortie || !opt("build")) {
    console.error("Usage : node apk/apk-json.mjs <fichier.apk> <sortie.json> --build <N> [--version <s>] [--url <https://...>] [--notes-fr \"...\"] [--notes-en \"...\"]");
    process.exit(2);
}
const build = Number(opt("build"));
if (!Number.isInteger(build) || build < 1) { console.error("--build doit être un entier >= 1"); process.exit(2); }
const url = opt("url") || "https://github.com/Palefroy/SmashUp-Draft/releases/download/apk-latest/SmashUp-Draft.apk";
if (!/^https:\/\//i.test(url)) { console.error("--url doit commencer par https://"); process.exit(2); }

const o = {
    build,
    version: Number(opt("version")) || Math.floor(Date.now() / 1000),
    url,
    taille: statSync(apk).size,
    sha256: createHash("sha256").update(readFileSync(apk)).digest("hex"),
};
if (opt("notes-fr") || opt("notes-en")) o.notes = { fr: opt("notes-fr") || opt("notes-en"), en: opt("notes-en") || opt("notes-fr") };
writeFileSync(sortie, JSON.stringify(o, null, 2) + "\n");
console.log("apk.json écrit :", sortie, "(" + o.taille + " octets, build " + o.build + ")");
