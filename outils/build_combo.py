#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_combo.py — génère data/combo.js à partir du dépôt GitHub daniprec/Smash-Up-Synergies.

UTILISATION
  1. Télécharger depuis le dépôt (bouton « Download raw file ») : data.js, relationship-data.js, tag-data.js
     et les déposer dans outils/source/ (les noms peuvent différer, ex. data_1.js : le fichier des factions est reconnu à son contenu).
  2. Lancer :   python outils/build_combo.py            (ou : python outils/build_combo.py chemin/du/dossier)
  3. Le fichier data/combo.js est (ré)écrit. Rien d'autre n'est modifié.

TRADUCTIONS : outils/combo_fr.json  (tags, conditions, explications). Une explication sans traduction reste en anglais ;
  la liste des manquantes est écrite dans outils/combo_fr_manquant.json (à traduire puis à copier dans combo_fr.json).
NOMS : table NOM_EN -> CODE ci-dessous. Un nom inconnu est signalé (et ignoré) : ajouter une ligne dans NOM_EN.
"""
import json, os, re, sys, glob

ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(ICI)
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ICI, "source")
SORTIE = os.path.join(RACINE, "data", "combo.js")
FR_JSON = os.path.join(ICI, "combo_fr.json")
MANQUANT = os.path.join(ICI, "combo_fr_manquant.json")

# Nom anglais (dépôt Smash-Up-Synergies) -> code à 3 lettres de l'appli (data/factions.js)
NOM_EN = {
 "Action Heroes":"HDA","Adolescent Epic Geckos":"GEC","Aladdin":"ALA","Aliens":"ALI","Anansi Tales":"ANA",
 "Ancient Egyptians":"EGY","Ancient Incas":"AIN","Astroknights":"CDE","Avengers":"AVE","Backtimers":"RDF",
 "Bear Cavalry":"CAO","Beauty and the Beast":"BAB","Big Hero 6":"BIG","Changerbots":"CHF","Clerics":"PRE",
 "Clowns":"CLO","Cowboys":"COW","Cyborg Apes":"SIC","Dinosaurs":"DIN","Disco Dancers":"DIS","Dragons":"DRA",
 "Dwarves":"NAI","Elder Things":"GRA","Elves":"ELF","Explorers":"EXP","Extramorphs":"EXT","Fairies":"FEE",
 "Frozen":"FRO","G.I. Gerald":"GIG","Geeks":"GEE","Ghosts":"FAN","Giant Ants":"FOU","Goblins":"GOB",
 "Grannies":"GME","Grimms' Fairy Tales":"GRI","Halflings":"HAL","Hydra":"HYD","Ignobles":"SDT","Innsmouth":"INN",
 "Itty Critters":"MON","Kaiju":"KAI","Killer Plants":"PLC","Kitty Cats":"CHA","Knights of the Round Table":"KRT",
 "Kree":"KRE","Kung Fu Fighters":"KUN","Luchadors":"LUC","Mad Scientists":"SAF","Mages":"MAG","Magical Girls":"PMA",
 "Masters of Evil":"MOE","Mega Troopers":"SUC","Mermaids":"SIR","Minions of Cthulhu":"SDC","Miskatonic University":"MIS",
 "Mounties":"POM","Mulan":"MUL","Musketeers":"MOU","Mythic Greeks":"MYG","Mythic Horses":"PON","Ninjas":"NIN",
 "Orcs":"ORQ","Pearl and the Images":"PEA","Penguins":"PIN","Pirates":"PIR","Polynesian Voyagers":"VPO",
 "Princesses":"PRI","Robots":"ROB","Rock Stars":"ROK","Rulers of the Cosmos":"RTC","Russian Fairy Tales":"CFR",
 "S.H.I.E.L.D.":"SHI","Samurai":"SAM","Shapeshifters":"MET","Sharks":"REQ","Sheep":"MOT","Sinister Six":"SIS",
 "Skeletons":"SQU","Slashers":"SLA","Smash Up All Stars":"DRE","Spider-Verse":"SPI","Star Roamers":"VDE",
 "Steampunks":"STE","Sumo Wrestlers":"SUM","Super Heroes":"SUH","Superheroes":"SUH","Super Spies":"SUE",
 "Teddy Bears":"OUR","Teens":"TEE","The Lion King":"LIK","The Nightmare Before Christmas":"NBC","Thieves":"VOL",
 "Time Travelers":"VDT","Tornados":"TOR","Tricksters":"PTP","Truckers":"ROU","Ultimates":"ULT","Vampires":"VAM",
 "Vigilantes":"JUS","Vikings":"VIK","Warriors":"GUE","Werewolves":"LOU","Wizards":"SOR","World Champs":"CDM",
 "Wraithrustlers":"TDS","Wreck-It Ralph":"WIR","Zombies":"ZOM",
}
def code(nom):
    return NOM_EN.get(nom.replace("’", "'").strip())

# ---------- mini-lecteur de littéraux JavaScript (tableaux, chaînes, nombres) ----------
def lire_chaine(s, i):
    q = s[i]; i += 1; out = []
    while s[i] != q:
        if s[i] == "\\":
            i += 1; c = s[i]
            out.append({"n": "\n", "t": "\t"}.get(c, c))
        else:
            out.append(s[i])
        i += 1
    return "".join(out), i + 1

def lire_valeur(s, i):
    while s[i] in " \t\r\n,": i += 1
    if s[i] in "'\"": return lire_chaine(s, i)
    if s[i] == "[": return lire_tableau(s, i)
    m = re.compile(r"-?\d+(\.\d+)?").match(s, i)
    if m: return float(m.group()) if "." in m.group() else int(m.group()), m.end()
    raise ValueError("littéral JS inattendu près de : " + s[i:i + 60])

def lire_tableau(s, i):
    assert s[i] == "["; i += 1; out = []
    while True:
        while s[i] in " \t\r\n,": i += 1
        if s[i] == "]": return out, i + 1
        if s.startswith("//", i): i = s.index("\n", i); continue
        v, i = lire_valeur(s, i); out.append(v)

# ---------- lecture des 3 fichiers du dépôt ----------
def trouver(motif):
    for f in sorted(glob.glob(os.path.join(SRC, "*.js"))):
        if motif in open(f, encoding="utf-8").read(): return f
    sys.exit("Fichier introuvable dans %s (motif « %s »). Voir l'en-tête du script." % (SRC, motif))

f_fac = trouver("window.FACTION_DATA =")
f_rel = trouver("window.RELATIONSHIP_DATA")
f_tag = trouver("window.FACTION_TAG_DATA")
print("Factions :", os.path.basename(f_fac), "| Relations :", os.path.basename(f_rel), "| Tags :", os.path.basename(f_tag))

txt = open(f_fac, encoding="utf-8").read()
factions, _fin = json.JSONDecoder().raw_decode(txt, txt.index("[", txt.index("window.FACTION_DATA =")))   # le fichier peut contenir d'autres tableaux après le premier

rel = open(f_rel, encoding="utf-8").read()
entrees = []   # (type, de, vers, texte, conditions)
for m in re.finditer(r"batch\('([^']+)','(pair|counter)',\[", rel):
    rows, _ = lire_tableau(rel, m.end() - 1)
    for r in rows:
        entrees.append((m.group(2), r[0], r[1], r[3], r[4] if len(r) > 4 else []))

tg = open(f_tag, encoding="utf-8").read()
defs, _ = lire_tableau(tg, tg.index("[", tg.index("const definitions")))
assign, _ = lire_tableau(tg, tg.index("[", tg.index("const assignments")))

inconnus = set()
def c_ou_signale(nom):
    c = code(nom)
    if not c: inconnus.add(nom)
    return c

# ---------- graphe : synergies (paires), contres (A contre B) ----------
syn, ctr = set(), set()
for fa in factions:
    a = c_ou_signale(fa["name"])
    if not a: continue
    for p in fa.get("partners", []):
        b = c_ou_signale(p)
        if b: syn.add(frozenset((a, b)))
    for p in fa.get("counters", []):          # « Countered by » : p contre fa
        b = c_ou_signale(p)
        if b: ctr.add((b, a))
    for p in fa.get("counterTargets", []):    # « Counter of » : fa contre p
        b = c_ou_signale(p)
        if b: ctr.add((a, b))
for ty, x, y, _t, _c in entrees:
    a, b = c_ou_signale(x), c_ou_signale(y)
    if not (a and b): continue
    if ty == "pair": syn.add(frozenset((a, b)))
    else: ctr.add((a, b))
syn = {p for p in syn if len(p) == 2}

# ---------- traductions ----------
fr = json.load(open(FR_JSON, encoding="utf-8")) if os.path.exists(FR_JSON) else {}
fr_tags, fr_cond, fr_expl = fr.get("tags", {}), fr.get("conditions", {}), fr.get("explications", {})

tags = {d[0]: {"fr": fr_tags.get(d[0], d[1]), "en": d[1]} for d in defs}
manquant = {"tags": {}, "conditions": {}, "explications": {}}
for d in defs:
    if d[0] not in fr_tags: manquant["tags"][d[0]] = d[1]

expl = {}
for ty, x, y, texte, conds in entrees:
    a, b = code(x), code(y)
    if not (a and b): continue
    cle = ("p:" + "|".join(sorted((a, b)))) if ty == "pair" else ("c:%s>%s" % (a, b))
    en = texte + ("\n" + " ".join(conds) if conds else "")
    ligne_fr = fr_expl.get(cle)
    if ligne_fr is None:
        manquant["explications"][cle] = texte
        ligne_fr = texte
    cf = [fr_cond.get(c) for c in conds]
    for c, v in zip(conds, cf):
        if v is None: manquant["conditions"][c] = c
    fr_txt = ligne_fr + ("\n" + " ".join(v or c for c, v in zip(conds, cf)) if conds else "")
    expl[cle] = {"fr": fr_txt, "en": en}

# ---------- données par faction ----------
data = {}
def fiche(c): return data.setdefault(c, {"tags": [], "syn": [], "men": [], "con": []})
for nom, ids in [(a[0], a[1]) for a in assign]:
    c = c_ou_signale(nom)
    if c: fiche(c)["tags"] = ids.split(",")
for p in syn:
    a, b = sorted(p); fiche(a)["syn"].append(b); fiche(b)["syn"].append(a)
for a, b in ctr:
    fiche(a)["con"].append(b); fiche(b)["men"].append(a)
for v in data.values():
    for k in ("syn", "men", "con"): v[k] = sorted(set(v[k]))

# ---------- écriture ----------
def js(o): return json.dumps(o, ensure_ascii=False, separators=(",", ":"))
L = []
L.append("// COMBO — synergies, menaces et contres entre factions + tags de style de jeu. FICHIER GÉNÉRÉ par outils/build_combo.py : ne pas modifier à la main.")
L.append("// Source des analyses : podcast Use The Fours (dépôt GitHub daniprec/Smash-Up-Synergies). Chargé via data/data.js (clé « combo »).")
L.append("//   tags : ids des tags de style de jeu (libellés dans window.COMBO_INFO.tags)")
L.append("//   syn  : codes des factions qui font une bonne synergie avec celle-ci")
L.append("//   men  : codes des factions qui CONTRENT celle-ci (menaces)")
L.append("//   con  : codes des factions que celle-ci CONTRE")
L.append("//   COMBO_INFO.expl : explication courte d'une paire (clé « p:A|B », codes triés) ou d'un contre (clé « c:A>B », A contre B)")
L.append("DATA.combo = {")
for c in sorted(data): L.append("  %s: %s," % (c, js(data[c])))
L.append("};")
L.append("window.COMBO_INFO = {")
L.append("  tags: %s," % js(tags))
L.append("  expl: {")
for k in sorted(expl): L.append("    %s: %s," % (js(k), js(expl[k])))
L.append("  },")
L.append("};")
os.makedirs(os.path.dirname(SORTIE), exist_ok=True)
open(SORTIE, "w", encoding="utf-8").write("\n".join(L) + "\n")

# ---------- rapport ----------
print("Écrit : %s  (%d factions, %d synergies, %d contres, %d explications)" % (SORTIE, len(data), len(syn), len(ctr), len(expl)))
if inconnus: print("NOMS INCONNUS (ignorés) — ajouter dans NOM_EN :", sorted(inconnus))
nm = sum(len(v) for v in manquant.values())
if nm:
    json.dump(manquant, open(MANQUANT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("Traductions manquantes : %d (restent en anglais) -> %s" % (nm, MANQUANT))
else:
    if os.path.exists(MANQUANT): os.remove(MANQUANT)
    print("Toutes les traductions sont présentes.")
