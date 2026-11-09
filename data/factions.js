// FACTIONS — point unique pour tout ce qui décrit les extensions, les factions et les cartes spéciales (chargé par data/data.js, avant script.js).
// Pour ajouter une extension ou une faction : modifier "csv" (liste), "codes" (code à 3 lettres) et, pour l'anglais, "anneeEn" ; puis ajouter le même code dans
// stats.js, notes.js, cartes.js, rank.js, etc. Les images se nomment avec le CODE : img/illus/<CODE>.webp, img/ico/<CODE>.webp, img/cards/<CODE>.jpg.

window.FACTIONS = {

  // Extensions et factions. Une ligne par extension :  Nom de l'extension|(année)|1 si cochée par défaut sinon 0|Faction1;Faction2;...
  csv: `Smash Up|(2013)|1|Aliens;Dinosaures;Ninjas;Pirates;Robots;Petit Peuple;Sorciers;Zombies
Smash Up : Même Pas Mort|(2013)|1|Cavalerie Ours;Fantômes;Plantes Carnivores;Steampunks
Smash Up : Cthulhu Fhtagn !|(2014)|1|Grands Anciens;Innsmouth;Serviteurs de Cthulhu;Université Miskatonic
Smash Up : Séries B|(2014)|1|Métamorphes;Singes Cyborgs;Super Espions;Voyageurs du Temps
Smash Up : Monstres Sacrés|(2015)|1|Fourmis Géantes;Loups-Garous;Savants Fous;Vampires
Smash Up : Trop Minions|(2015)|1|Chatons;Fées;Poneys Magiques;Princesses
Smash Up : La Grosse Boîte pour Geek|(2015)|0|Geeks
Smash Up : Munchkin|(2016)|1|Elfes;Guerriers;Halfelins;Magiciens;Nains;Orques;Prêtres;Voleurs
Smash Up : Ressemblances Fortuites|(2017)|1|Changeformers;Chevaliers des Étoiles;Squatteurs de Trône;Voyageurs de l'Espace
Smash Up : Vous l'aurez voulu !|(2017)|1|Dragons;Mythologies Grecques;Requins;Super-Héros;Tornades
Smash Up : Conflit de Générations|(2017)|1|Explorateurs;Grands-Mères;Oursons;Rockstars
Smash Up : Rois du Japon|(2018)|1|Kaijū;Monstrapoches;Petites Magiciennes;Super Combattants
Smash Up : Ces Années-Là|(2019)|0|Danseurs Disco;Justiciers;Maîtres Kung-Fu;Routiers
Smash Up : Vous en voulez encore ?|(2020)|0|Anciens Égyptiens;Cow-Boys;Samouraïs;Vikings
Smash Up : L'Énorme Boîte pour Geek|(2020)|0|Dream Team
Smash Up : Tournée Mondiale - Incident Diplomatique|(2021)|0|Luchadors;Mousquetaires;Police Montée;Sumos
Smash Up Knights of the Round Table|(2021 VO)|0|Knights of the Round Table
Smash Up : Marvel|(2022)|1|Avengers;Hydra;Kree;Masters of Evil;S.H.I.E.L.D.;Sinister Six;Spider-Verse;Ultimates
Smash Up : Tournée Mondiale - Choc des Cultures|(2022)|1|Anciens Incas;Contes d'Anansi;Contes de Grimm;Contes Féeriques Russes;Voyageurs Polynésiens
Mini-extension Smash Up : Faction Moutons|(2022)|1|Moutons
Smash Up - Disney|(2022 VO)|0|Aladdin;Beauty and the Beast;Big Hero 6;Frozen;Mulan;The Lion King;The Nightmare Before Christmas;Wreck-It Ralph
Mini-extension Smash Up : Faction Pingouins|(2023)|0|Pingouins
Smash Up Teens|(2023 VO)|0|Teens
Smash Up Fait son Cinéma|(2024)|0|Traqueurs de Spectres;Extramorphes;Hommes d'Action;Retourneurs du Futur
Smash Up : Édition Anniversaire|(2025)|1|Champions du Monde;Gobelins;Sirènes;Squelettes
Smash Up Half the Battle|(2025 VO)|0|Adolescent Epic Geckos;G.I. Gerald;Pearl and the Images;Rulers of the Cosmos
Smash Up Slashers|(2025 VO)|0|Slashers
Smash Up Clowns|(2025 VO)|0|Clowns`,

  // Nom de la faction -> code à 3 lettres (nom des images et clé des fichiers de données)
  codes: {
    "Aliens": "ALI", "Dinosaures": "DIN", "Ninjas": "NIN", "Pirates": "PIR",
    "Robots": "ROB", "Petit Peuple": "PTP", "Sorciers": "SOR", "Zombies": "ZOM",
    "Cavalerie Ours": "CAO", "Fantômes": "FAN", "Plantes Carnivores": "PLC", "Steampunks": "STE",
    "Grands Anciens": "GRA", "Innsmouth": "INN", "Serviteurs de Cthulhu": "SDC", "Université Miskatonic": "MIS",
    "Métamorphes": "MET", "Singes Cyborgs": "SIC", "Super Espions": "SUE", "Voyageurs du Temps": "VDT",
    "Fourmis Géantes": "FOU", "Loups-Garous": "LOU", "Savants Fous": "SAF", "Vampires": "VAM",
    "Chatons": "CHA", "Fées": "FEE", "Poneys Magiques": "PON", "Princesses": "PRI",
    "Geeks": "GEE", "Elfes": "ELF", "Guerriers": "GUE", "Halfelins": "HAL",
    "Magiciens": "MAG", "Nains": "NAI", "Orques": "ORQ", "Prêtres": "PRE",
    "Voleurs": "VOL", "Changeformers": "CHF", "Chevaliers des Étoiles": "CDE", "Squatteurs de Trône": "SDT",
    "Voyageurs de l'Espace": "VDE", "Dragons": "DRA", "Mythologies Grecques": "MYG", "Requins": "REQ",
    "Super-Héros": "SUH", "Tornades": "TOR", "Explorateurs": "EXP", "Grands-Mères": "GME",
    "Oursons": "OUR", "Rockstars": "ROK", "Kaijū": "KAI", "Monstrapoches": "MON",
    "Petites Magiciennes": "PMA", "Super Combattants": "SUC", "Danseurs Disco": "DIS", "Justiciers": "JUS",
    "Maîtres Kung-Fu": "KUN", "Routiers": "ROU", "Anciens Égyptiens": "EGY", "Cow-Boys": "COW",
    "Samouraïs": "SAM", "Vikings": "VIK", "Dream Team": "DRE", "Luchadors": "LUC",
    "Mousquetaires": "MOU", "Police Montée": "POM", "Sumos": "SUM", "Knights of the Round Table": "KRT",
    "Avengers": "AVE", "Hydra": "HYD", "Kree": "KRE", "Masters of Evil": "MOE",
    "S.H.I.E.L.D.": "SHI", "Sinister Six": "SIS", "Spider-Verse": "SPI", "Ultimates": "ULT",
    "Anciens Incas": "AIN", "Contes d'Anansi": "ANA", "Contes de Grimm": "GRI", "Contes Féeriques Russes": "CFR",
    "Voyageurs Polynésiens": "VPO", "Moutons": "MOT", "Aladdin": "ALA", "Beauty and the Beast": "BAB",
    "Big Hero 6": "BIG", "Frozen": "FRO", "Mulan": "MUL", "The Lion King": "LIK",
    "The Nightmare Before Christmas": "NBC", "Wreck-It Ralph": "WIR", "Pingouins": "PIN", "Teens": "TEE",
    "Traqueurs de Spectres": "TDS", "Extramorphes": "EXT", "Hommes d'Action": "HDA", "Retourneurs du Futur": "RDF",
    "Champions du Monde": "CDM", "Gobelins": "GOB", "Sirènes": "SIR", "Squelettes": "SQU",
    "Adolescent Epic Geckos": "GEC", "G.I. Gerald": "GIG", "Pearl and the Images": "PEA", "Rulers of the Cosmos": "RTC",
    "Slashers": "SLA", "Clowns": "CLO",
  },

  // Année de sortie originale d'une extension, affichée en anglais (nom de l'extension tel qu'écrit dans "csv")
  anneeEn: {
    "Smash Up": "(2012)", "Smash Up : Même Pas Mort": "(2013)", "Smash Up : Cthulhu Fhtagn !": "(2013)", "Smash Up : Séries B": "(2014)",
    "Smash Up : Monstres Sacrés": "(2014)", "Smash Up : Trop Minions": "(2015)", "Smash Up : La Grosse Boîte pour Geek": "(2014)", "Smash Up : Munchkin": "(2015)",
    "Smash Up : Ressemblances Fortuites": "(2016)", "Smash Up : Vous l'aurez voulu !": "(2016)", "Smash Up : Conflit de Générations": "(2017)", "Smash Up : Rois du Japon": "(2017)",
    "Smash Up : Ces Années-Là": "(2018)", "Smash Up : Vous en voulez encore ?": "(2018)", "Smash Up : L'Énorme Boîte pour Geek": "(2018)", "Smash Up : Tournée Mondiale - Incident Diplomatique": "(2019)",
    "Smash Up : Tournée Mondiale - Choc des Cultures": "(2019)", "Mini-extension Smash Up : Faction Moutons": "(2017)", "Mini-extension Smash Up : Faction Pingouins": "(2019)", "Smash Up Fait son Cinéma": "(2024)",
    "Smash Up : Édition Anniversaire": "(2022)", "Smash Up : Marvel": "(2020)",
  },

  // Cartes spéciales (hors factions) : affichées dans l'encadré « Cartes spéciales » de l'onglet Extensions, sans case à cocher, jamais dans le tirage.
  // CODE -> nom affiché. Le CODE sert de nom d'image (img/illus/MONSTRES.webp, optionnel MONSTRES2.webp = 2e illustration)
  // et de clé dans notes.js (texte du bouton « Notes ») et cartes.js (images de cartes). L'ordre ici = l'ordre d'affichage.
  speciales: {
    MONSTRES: { nom: { fr: "Monstres", en: "Monsters" } },
    TRESORS: { nom: { fr: "Trésors", en: "Treasures" } },
    DEMENCE: { nom: { fr: "Démences", en: "Madness" } },
  },
};
