// RANK — rang de chaque faction, déduit de son code de complexité. Une ligne par faction.
//   code       : 1 à 5 (c'est la seule valeur à modifier pour changer le rang d'une faction)
//   complexite : texte d'origine ("High", "Medium-High", "Medium", "Low-Medium", "Low"), conservé pour information
// Correspondance code -> rang (définie en bas de ce fichier, dans RANK_TIERS) :
//   1 = S Tier (Diamant)  : complexité élevée
//   2 = A Tier (Or)       : complexité moyenne à élevée
//   3 = B Tier (Argent)   : complexité moyenne
//   4 = C Tier (Bronze)   : complexité faible à moyenne
//   5 = D Tier (Pierre)   : complexité faible

DATA.rank = {

  // Aliens
  ALI: { code: 4, complexite: "Low-Medium" },

  // Dinosaures
  DIN: { code: 5, complexite: "Low" },

  // Ninjas
  NIN: { code: 2, complexite: "Medium-High" },

  // Pirates
  PIR: { code: 4, complexite: "Low-Medium" },

  // Robots
  ROB: { code: 5, complexite: "Low" },

  // Petit Peuple
  PTP: { code: 3, complexite: "Medium" },

  // Sorciers
  SOR: { code: 3, complexite: "Medium" },

  // Zombies
  ZOM: { code: 5, complexite: "Low" },

  // Cavalerie Ours
  CAO: { code: 3, complexite: "Medium" },

  // Fantômes
  FAN: { code: 1, complexite: "High" },

  // Plantes Carnivores
  PLC: { code: 4, complexite: "Low-Medium" },

  // Steampunks
  STE: { code: 4, complexite: "Low-Medium" },

  // Grands Anciens
  GRA: { code: 2, complexite: "Medium-High" },

  // Innsmouth
  INN: { code: 2, complexite: "Medium-High" },

  // Serviteurs de Cthulhu
  SDC: { code: 1, complexite: "High" },

  // Université Miskatonic
  MIS: { code: 3, complexite: "Medium" },

  // Métamorphes
  MET: { code: 3, complexite: "Medium" },

  // Singes Cyborgs
  SIC: { code: 4, complexite: "Low-Medium" },

  // Super Espions
  SUE: { code: 3, complexite: "Medium" },

  // Voyageurs du Temps
  VDT: { code: 3, complexite: "Medium" },

  // Fourmis Géantes
  FOU: { code: 3, complexite: "Medium" },

  // Loups-Garous
  LOU: { code: 3, complexite: "Medium" },

  // Savants Fous
  SAF: { code: 4, complexite: "Low-Medium" },

  // Vampires
  VAM: { code: 3, complexite: "Medium" },

  // Chatons
  CHA: { code: 1, complexite: "High" },

  // Fées
  FEE: { code: 4, complexite: "Low-Medium" },

  // Poneys Magiques
  PON: { code: 5, complexite: "Low" },

  // Princesses
  PRI: { code: 3, complexite: "Medium" },

  // Geeks
  GEE: { code: 1, complexite: "High" },

  // Elfes
  ELF: { code: 3, complexite: "Medium" },

  // Guerriers
  GUE: { code: 3, complexite: "Medium" },

  // Halfelins
  HAL: { code: 3, complexite: "Medium" },

  // Magiciens
  MAG: { code: 3, complexite: "Medium" },

  // Nains
  NAI: { code: 3, complexite: "Medium" },

  // Orques
  ORQ: { code: 3, complexite: "Medium" },

  // Prêtres
  PRE: { code: 3, complexite: "Medium" },

  // Voleurs
  VOL: { code: 3, complexite: "Medium" },

  // Changeformers
  CHF: { code: 5, complexite: "Low" },

  // Chevaliers des Étoiles
  CDE: { code: 4, complexite: "Low-Medium" },

  // Squatteurs de Trône
  SDT: { code: 1, complexite: "High" },

  // Voyageurs de l'Espace
  VDE: { code: 2, complexite: "Medium-High" },

  // Dragons
  DRA: { code: 4, complexite: "Low-Medium" },

  // Mythologies Grecques
  MYG: { code: 4, complexite: "Low-Medium" },

  // Requins
  REQ: { code: 3, complexite: "Medium" },

  // Super-Héros
  SUH: { code: 4, complexite: "Low-Medium" },

  // Tornades
  TOR: { code: 3, complexite: "Medium" },

  // Explorateurs
  EXP: { code: 3, complexite: "Medium" },

  // Grands-Mères
  GME: { code: 2, complexite: "Medium-High" },

  // Oursons
  OUR: { code: 2, complexite: "Medium-High" },

  // Rockstars
  ROK: { code: 4, complexite: "Low-Medium" },

  // Kaijū
  KAI: { code: 2, complexite: "Medium-High" },

  // Monstrapoches
  MON: { code: 1, complexite: "High" },

  // Petites Magiciennes
  PMA: { code: 4, complexite: "Low-Medium" },

  // Super Combattants
  SUC: { code: 3, complexite: "Medium" },

  // Danseurs Disco
  DIS: { code: 1, complexite: "High" },

  // Justiciers
  JUS: { code: 1, complexite: "High" },

  // Maîtres Kung-Fu
  KUN: { code: 2, complexite: "Medium-High" },

  // Routiers
  ROU: { code: 4, complexite: "Low-Medium" },

  // Anciens Égyptiens
  EGY: { code: 1, complexite: "High" },

  // Cow-Boys
  COW: { code: 2, complexite: "Medium-High" },

  // Samouraïs
  SAM: { code: 3, complexite: "Medium" },

  // Vikings
  VIK: { code: 3, complexite: "Medium" },

  // Dream Team
  DRE: { code: 3, complexite: "Medium" },

  // Luchadors
  LUC: { code: 3, complexite: "Medium" },

  // Mousquetaires
  MOU: { code: 2, complexite: "Medium-High" },

  // Police Montée
  POM: { code: 4, complexite: "Low-Medium" },

  // Sumos
  SUM: { code: 4, complexite: "Low-Medium" },

  // Knights of the Round Table
  KRT: { code: 3, complexite: "Medium" },

  // Avengers
  AVE: { code: 5, complexite: "Low" },

  // Hydra
  HYD: { code: 2, complexite: "Medium-High" },

  // Kree
  KRE: { code: 4, complexite: "Low-Medium" },

  // Masters of Evil
  MOE: { code: 1, complexite: "High" },

  // S.H.I.E.L.D.
  SHI: { code: 5, complexite: "Low" },

  // Sinister Six
  SIS: { code: 2, complexite: "Medium-High" },

  // Spider-Verse
  SPI: { code: 3, complexite: "Medium" },

  // Ultimates
  ULT: { code: 4, complexite: "Low-Medium" },

  // Anciens Incas
  AIN: { code: 3, complexite: "Medium" },

  // Contes d'Anansi
  ANA: { code: 1, complexite: "High" },

  // Contes de Grimm
  GRI: { code: 3, complexite: "Medium" },

  // Contes Féeriques Russes
  CFR: { code: 3, complexite: "Medium" },

  // Voyageurs Polynésiens
  VPO: { code: 2, complexite: "Medium-High" },

  // Moutons
  MOT: { code: 2, complexite: "Medium-High" },

  // Aladdin
  ALA: { code: 2, complexite: "Medium-High" },

  // Beauty and the Beast
  BAB: { code: 4, complexite: "Low-Medium" },

  // Big Hero 6
  BIG: { code: 3, complexite: "Medium" },

  // Frozen
  FRO: { code: 3, complexite: "Medium" },

  // Mulan
  MUL: { code: 5, complexite: "Low" },

  // The Lion King
  LIK: { code: 3, complexite: "Medium" },

  // The Nightmare Before Christmas
  NBC: { code: 2, complexite: "Medium-High" },

  // Wreck-It Ralph
  WIR: { code: 3, complexite: "Medium" },

  // Pingouins
  PIN: { code: 3, complexite: "Medium" },

  // Teens
  TEE: { code: 2, complexite: "Medium-High" },

  // Traqueurs de Spectres
  TDS: { code: 3, complexite: "Medium" },

  // Extramorphes
  EXT: { code: 3, complexite: "Medium" },

  // Hommes d'Action
  HDA: { code: 4, complexite: "Low-Medium" },

  // Retourneurs du Futur
  RDF: { code: 1, complexite: "High" },

  // Champions du Monde
  CDM: { code: 3, complexite: "Medium" },

  // Gobelins
  GOB: { code: 2, complexite: "Medium-High" },

  // Sirènes
  SIR: { code: 2, complexite: "Medium-High" },

  // Squelettes
  SQU: { code: 3, complexite: "Medium" },

  // Adolescent Epic Geckos
  GEC: { code: 2, complexite: "Medium-High" },

  // G.I. Gerald
  GIG: { code: 3, complexite: "Medium" },

  // Pearl and the Images
  PEA: { code: 2, complexite: "Medium-High" },

  // Rulers of the Cosmos
  RTC: { code: 1, complexite: "High" },

  // Slashers
  SLA: { code: 3, complexite: "Medium" },

  // Clowns
  CLO: { code: 2, complexite: "Medium-High" },
};

// RANK_TIERS — définition des 5 rangs (libellés FR/EN et palette de la texture du bouton).
// icone    : emoji affiché sur le bouton de rang (modifiable librement).
// couleurs : [reflet clair, teinte principale, ombre] — servent à dessiner la texture du métal.
// Ne pas supprimer de rang ni changer les noms de champs.
window.RANK_TIERS = {
  1: { icone: "💎", tier: "S", metal: { fr: "Diamant", en: "Diamond" }, complexite: { fr: "Élevée", en: "High" },                 couleurs: ["#e4fbff", "#6fd6f5", "#2f8fc4"] },
  2: { icone: "🥇", tier: "A", metal: { fr: "Or", en: "Gold" },         complexite: { fr: "Moyenne à élevée", en: "Medium-High" }, couleurs: ["#fff0b0", "#f2b630", "#a8700f"] },
  3: { icone: "🥈", tier: "B", metal: { fr: "Argent", en: "Silver" },   complexite: { fr: "Moyenne", en: "Medium" },               couleurs: ["#f6f8fb", "#c3cad3", "#7a8591"] },
  4: { icone: "🥉", tier: "C", metal: { fr: "Bronze", en: "Bronze" },   complexite: { fr: "Faible à moyenne", en: "Low-Medium" },  couleurs: ["#f0b98a", "#b8733a", "#6f3f1c"] },
  5: { icone: "🪨", tier: "D", metal: { fr: "Pierre", en: "Stone" },    complexite: { fr: "Faible", en: "Low" },                    couleurs: ["#a39b91", "#6e675f", "#3b3631"] }
};
