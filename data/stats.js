// STATS — une fiche de statistiques par faction, affichée dans la bulle "Stats" (étoiles).
// Chaque critère est noté de 0 à 5, demi-étoiles permises (ex. 3.5). 0 = étoiles vides.
// Critère absent ou "" = ligne non affichée. {} = aucune stat : le bouton "Stats" n'apparaît pas.
// Les 10 critères (noms des champs) :
//   creatures, renforcement, attache_base, attache_creature, deplacement,
//   destruction, pioche, defausse, controle, conquete
// Exemple :
//   XXX: { creatures: 4, renforcement: 2, pioche: 3.5 },

DATA.stats = {

  // Aliens
  ALI: { creatures: 2, renforcement: 0, attache_base: 2, attache_creature: 0, deplacement: 1, destruction: 0, pioche: 0, defausse: 0, controle: 4, conquete: 1 },

  // Dinosaures
  DIN: { creatures: 4, renforcement: 3, attache_base: 0, attache_creature: 2, deplacement: 0, destruction: 3, pioche: 0, defausse: 0, controle: 1, conquete: 0 },

  // Ninjas
  NIN: { creatures: 2, renforcement: 0, attache_base: 1, attache_creature: 2, deplacement: 1, destruction: 3, pioche: 0, defausse: 0, controle: 1, conquete: 2 },

  // Pirates
  PIR: { creatures: 2, renforcement: 1, attache_base: 0, attache_creature: 0, deplacement: 3, destruction: 4, pioche: 0, defausse: 0, controle: 0, conquete: 2 },

  // Robots
  ROB: { creatures: 5, renforcement: 1, attache_base: 0, attache_creature: 0, deplacement: 0, destruction: 2, pioche: 3, defausse: 0, controle: 1, conquete: 0 },

  // Petit Peuple
  PTP: { creatures: 2, renforcement: 0, attache_base: 3, attache_creature: 0, deplacement: 0, destruction: 2, pioche: 1, defausse: 0, controle: 4, conquete: 0 },

  // Sorciers
  SOR: { creatures: 2, renforcement: 0, attache_base: 0, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 5, defausse: 0, controle: 1, conquete: 0 },

  // Zombies
  ZOM: { creatures: 2, renforcement: 0, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 3, defausse: 4, controle: 0, conquete: 0 },

  // Cavalerie Ours
  CAO: { creatures: 3, renforcement: 0, attache_base: 1, attache_creature: 0, deplacement: 3, destruction: 3, pioche: 0, defausse: 0, controle: 0, conquete: 0 },

  // Fantômes
  FAN: { creatures: 2, renforcement: 2, attache_base: 1, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 3, defausse: 1, controle: 2, conquete: 0 },

  // Plantes Carnivores
  PLC: { creatures: 3, renforcement: 0, attache_base: 2, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 1, defausse: 0, controle: 1, conquete: 0 },

  // Steampunks
  STE: { creatures: 2, renforcement: 1, attache_base: 4, attache_creature: 0, deplacement: 2, destruction: 0, pioche: 0, defausse: 2, controle: 1, conquete: 0 },

  // Grands Anciens
  GRA: { creatures: 3, renforcement: 2, attache_base: 0, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 2, defausse: 2, controle: 3, conquete: 1 },

  // Innsmouth
  INN: { creatures: 4, renforcement: 1, attache_base: 2, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 3, defausse: 1, controle: 1, conquete: 1 },

  // Serviteurs de Cthulhu
  SDC: { creatures: 2, renforcement: 1, attache_base: 2, attache_creature: 0, deplacement: 0, destruction: 2, pioche: 2, defausse: 3, controle: 1, conquete: 2 },

  // Université Miskatonic
  MIS: { creatures: 3, renforcement: 2, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 1, pioche: 3, defausse: 2, controle: 1, conquete: 1 },

  // Métamorphes
  MET: { creatures: 3, renforcement: 1, attache_base: 0, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 1, defausse: 0, controle: 1, conquete: 0 },

  // Singes Cyborgs
  SIC: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 4, deplacement: 1, destruction: 2, pioche: 1, defausse: 2, controle: 1, conquete: 0 },

  // Super Espions
  SUE: { creatures: 2, renforcement: 0, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 2, defausse: 0, controle: 3, conquete: 2 },

  // Voyageurs du Temps
  VDT: { creatures: 2, renforcement: 0, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 0, defausse: 4, controle: 2, conquete: 1 },

  // Fourmis Géantes
  FOU: { creatures: 3, renforcement: 4, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 1, defausse: 0, controle: 0, conquete: 1 },

  // Loups-Garous
  LOU: { creatures: 2, renforcement: 4, attache_base: 1, attache_creature: 2, deplacement: 0, destruction: 2, pioche: 1, defausse: 0, controle: 1, conquete: 2 },

  // Savants Fous
  SAF: { creatures: 2, renforcement: 4, attache_base: 1, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 0, defausse: 0, controle: 0, conquete: 0 },

  // Vampires
  VAM: { creatures: 2, renforcement: 4, attache_base: 1, attache_creature: 1, deplacement: 0, destruction: 3, pioche: 0, defausse: 0, controle: 0, conquete: 1 },

  // Chatons
  CHA: { creatures: 2, renforcement: 0, attache_base: 1, attache_creature: 2, deplacement: 0, destruction: 1, pioche: 1, defausse: 0, controle: 4, conquete: 1 },

  // Fées
  FEE: { creatures: 2, renforcement: 2, attache_base: 1, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 2, defausse: 0, controle: 3, conquete: 0 },

  // Poneys Magiques
  PON: { creatures: 3, renforcement: 3, attache_base: 1, attache_creature: 1, deplacement: 1, destruction: 1, pioche: 2, defausse: 0, controle: 0, conquete: 1 },

  // Princesses
  PRI: { creatures: 4, renforcement: 2, attache_base: 0, attache_creature: 0, deplacement: 2, destruction: 2, pioche: 1, defausse: 2, controle: 1, conquete: 1 },

  // Geeks
  GEE: { creatures: 2, renforcement: 0, attache_base: 0, attache_creature: 0, deplacement: 1, destruction: 0, pioche: 2, defausse: 0, controle: 5, conquete: 0 },

  // Elfes
  ELF: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 1, deplacement: 2, destruction: 0, pioche: 3, defausse: 1, controle: 2, conquete: 2 },

  // Guerriers
  GUE: { creatures: 3, renforcement: 3, attache_base: 0, attache_creature: 2, deplacement: 0, destruction: 2, pioche: 0, defausse: 0, controle: 1, conquete: 0 },

  // Halfelins
  HAL: { creatures: 4, renforcement: 0, attache_base: 2, attache_creature: 1, deplacement: 0, destruction: 0, pioche: 2, defausse: 2, controle: 1, conquete: 1 },

  // Magiciens
  MAG: { creatures: 3, renforcement: 2, attache_base: 1, attache_creature: 1, deplacement: 1, destruction: 2, pioche: 3, defausse: 2, controle: 2, conquete: 0 },

  // Nains
  NAI: { creatures: 2, renforcement: 2, attache_base: 1, attache_creature: 3, deplacement: 0, destruction: 0, pioche: 3, defausse: 3, controle: 1, conquete: 1 },

  // Orques
  ORQ: { creatures: 2, renforcement: 3, attache_base: 2, attache_creature: 2, deplacement: 2, destruction: 3, pioche: 0, defausse: 0, controle: 2, conquete: 3 },

  // Prêtres
  PRE: { creatures: 2, renforcement: 1, attache_base: 1, attache_creature: 2, deplacement: 2, destruction: 0, pioche: 1, defausse: 4, controle: 3, conquete: 1 },

  // Voleurs
  VOL: { creatures: 2, renforcement: 2, attache_base: 2, attache_creature: 0, deplacement: 1, destruction: 1, pioche: 4, defausse: 2, controle: 2, conquete: 3 },

  // Changeformers
  CHF: { creatures: 3, renforcement: 3, attache_base: 0, attache_creature: 4, deplacement: 2, destruction: 1, pioche: 0, defausse: 0, controle: 2, conquete: 1 },

  // Chevaliers des Étoiles
  CDE: { creatures: 2, renforcement: 2, attache_base: 1, attache_creature: 1, deplacement: 1, destruction: 1, pioche: 3, defausse: 0, controle: 1, conquete: 1 },

  // Squatteurs de Trône
  SDT: { creatures: 2, renforcement: 0, attache_base: 0, attache_creature: 0, deplacement: 0, destruction: 1, pioche: 0, defausse: 0, controle: 5, conquete: 1 },

  // Voyageurs de l'Espace
  VDE: { creatures: 2, renforcement: 0, attache_base: 1, attache_creature: 0, deplacement: 3, destruction: 0, pioche: 1, defausse: 0, controle: 5, conquete: 1 },

  // Dragons
  DRA: { creatures: 2, renforcement: 1, attache_base: 0, attache_creature: 0, deplacement: 0, destruction: 1, pioche: 2, defausse: 1, controle: 3, conquete: 2 },

  // Mythologies Grecques
  MYG: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 2, defausse: 2, controle: 2, conquete: 0 },

  // Requins
  REQ: { creatures: 3, renforcement: 1, attache_base: 2, attache_creature: 1, deplacement: 1, destruction: 5, pioche: 1, defausse: 0, controle: 1, conquete: 0 },

  // Super-Héros
  SUH: { creatures: 4, renforcement: 2, attache_base: 1, attache_creature: 1, deplacement: 1, destruction: 0, pioche: 0, defausse: 2, controle: 2, conquete: 0 },

  // Tornades
  TOR: { creatures: 2, renforcement: 0, attache_base: 0, attache_creature: 0, deplacement: 5, destruction: 0, pioche: 0, defausse: 0, controle: 0, conquete: 3 },

  // Explorateurs
  EXP: { creatures: 2, renforcement: 1, attache_base: 1, attache_creature: 0, deplacement: 3, destruction: 0, pioche: 3, defausse: 0, controle: 1, conquete: 2 },

  // Grands-Mères
  GME: { creatures: 2, renforcement: 0, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 1, pioche: 5, defausse: 0, controle: 2, conquete: 1 },

  // Oursons
  OUR: { creatures: 3, renforcement: 2, attache_base: 2, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 2, defausse: 0, controle: 1, conquete: 1 },

  // Rockstars
  ROK: { creatures: 2, renforcement: 0, attache_base: 2, attache_creature: 0, deplacement: 1, destruction: 0, pioche: 4, defausse: 2, controle: 2, conquete: 1 },

  // Kaijū
  KAI: { creatures: 1, renforcement: 1, attache_base: 5, attache_creature: 0, deplacement: 0, destruction: 2, pioche: 0, defausse: 0, controle: 4, conquete: 0 },

  // Monstrapoches
  MON: { creatures: 3, renforcement: 1, attache_base: 1, attache_creature: 0, deplacement: 1, destruction: 2, pioche: 1, defausse: 2, controle: 0, conquete: 0 },

  // Petites Magiciennes
  PMA: { creatures: 3, renforcement: 2, attache_base: 0, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 1, defausse: 2, controle: 2, conquete: 0 },

  // Super Combattants
  SUC: { creatures: 3, renforcement: 1, attache_base: 0, attache_creature: 0, deplacement: 1, destruction: 1, pioche: 2, defausse: 0, controle: 0, conquete: 4 },

  // Danseurs Disco
  DIS: { creatures: 3, renforcement: 2, attache_base: 0, attache_creature: 1, deplacement: 1, destruction: 0, pioche: 1, defausse: 2, controle: 2, conquete: 1 },

  // Justiciers
  JUS: { creatures: 4, renforcement: 2, attache_base: 2, attache_creature: 1, deplacement: 1, destruction: 1, pioche: 2, defausse: 1, controle: 2, conquete: 1 },

  // Maîtres Kung-Fu
  KUN: { creatures: 2, renforcement: 4, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 2, pioche: 0, defausse: 0, controle: 2, conquete: 0 },

  // Routiers
  ROU: { creatures: 2, renforcement: 2, attache_base: 3, attache_creature: 0, deplacement: 2, destruction: 0, pioche: 2, defausse: 0, controle: 1, conquete: 1 },

  // Anciens Égyptiens
  EGY: { creatures: 2, renforcement: 3, attache_base: 0, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 1, defausse: 0, controle: 3, conquete: 4 },

  // Cow-Boys
  COW: { creatures: 2, renforcement: 2, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 4, pioche: 2, defausse: 0, controle: 0, conquete: 2 },

  // Samouraïs
  SAM: { creatures: 2, renforcement: 3, attache_base: 1, attache_creature: 1, deplacement: 0, destruction: 1, pioche: 2, defausse: 0, controle: 1, conquete: 1 },

  // Vikings
  VIK: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 1, deplacement: 0, destruction: 0, pioche: 4, defausse: 1, controle: 2, conquete: 0 },

  // Dream Team
  DRE: { creatures: 3, renforcement: 1, attache_base: 1, attache_creature: 0, deplacement: 1, destruction: 1, pioche: 3, defausse: 1, controle: 1, conquete: 0 },

  // Luchadors
  LUC: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 3, deplacement: 0, destruction: 0, pioche: 1, defausse: 2, controle: 4, conquete: 1 },

  // Mousquetaires
  MOU: { creatures: 3, renforcement: 3, attache_base: 0, attache_creature: 1, deplacement: 1, destruction: 0, pioche: 2, defausse: 1, controle: 1, conquete: 1 },

  // Police Montée
  POM: { creatures: 2, renforcement: 3, attache_base: 1, attache_creature: 1, deplacement: 3, destruction: 0, pioche: 0, defausse: 0, controle: 1, conquete: 0 },

  // Sumos
  SUM: { creatures: 2, renforcement: 3, attache_base: 0, attache_creature: 0, deplacement: 3, destruction: 1, pioche: 2, defausse: 0, controle: 0, conquete: 0 },

  // Knights of the Round Table
  KRT: { creatures: 2, renforcement: 1, attache_base: 3, attache_creature: 2, deplacement: 3, destruction: 0, pioche: 2, defausse: 1, controle: 1, conquete: 0 },

  // Avengers
  AVE: { creatures: 2, renforcement: 3, attache_base: 1, attache_creature: 2, deplacement: 2, destruction: 2, pioche: 3, defausse: 2, controle: 1, conquete: 2 },

  // Hydra
  HYD: { creatures: 4, renforcement: 2, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 3, defausse: 2, controle: 0, conquete: 0 },

  // Kree
  KRE: { creatures: 2, renforcement: 4, attache_base: 0, attache_creature: 2, deplacement: 0, destruction: 0, pioche: 4, defausse: 1, controle: 0, conquete: 0 },

  // Masters of Evil
  MOE: { creatures: 2, renforcement: 2, attache_base: 2, attache_creature: 1, deplacement: 1, destruction: 3, pioche: 1, defausse: 0, controle: 1, conquete: 4 },

  // S.H.I.E.L.D.
  SHI: { creatures: 4, renforcement: 3, attache_base: 2, attache_creature: 0, deplacement: 1, destruction: 1, pioche: 2, defausse: 1, controle: 0, conquete: 1 },

  // Sinister Six
  SIS: { creatures: 2, renforcement: 2, attache_base: 4, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 1, defausse: 2, controle: 2, conquete: 3 },

  // Spider-Verse
  SPI: { creatures: 3, renforcement: 2, attache_base: 0, attache_creature: 2, deplacement: 0, destruction: 0, pioche: 3, defausse: 1, controle: 1, conquete: 3 },

  // Ultimates
  ULT: { creatures: 2, renforcement: 3, attache_base: 1, attache_creature: 0, deplacement: 4, destruction: 0, pioche: 2, defausse: 0, controle: 0, conquete: 1 },

  // Anciens Incas
  AIN: { creatures: 2, renforcement: 2, attache_base: 4, attache_creature: 0, deplacement: 1, destruction: 0, pioche: 4, defausse: 1, controle: 2, conquete: 1 },

  // Contes d'Anansi
  ANA: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 0, deplacement: 1, destruction: 0, pioche: 3, defausse: 0, controle: 3, conquete: 0 },

  // Contes de Grimm
  GRI: { creatures: 3, renforcement: 2, attache_base: 1, attache_creature: 0, deplacement: 1, destruction: 2, pioche: 2, defausse: 1, controle: 1, conquete: 0 },

  // Contes Féeriques Russes
  CFR: { creatures: 3, renforcement: 2, attache_base: 1, attache_creature: 2, deplacement: 0, destruction: 0, pioche: 3, defausse: 2, controle: 0, conquete: 0 },

  // Voyageurs Polynésiens
  VPO: { creatures: 2, renforcement: 3, attache_base: 0, attache_creature: 2, deplacement: 1, destruction: 1, pioche: 1, defausse: 0, controle: 2, conquete: 1 },

  // Moutons
  MOT: { creatures: 2, renforcement: 0, attache_base: 0, attache_creature: 0, deplacement: 4, destruction: 0, pioche: 1, defausse: 1, controle: 2, conquete: 0 },

  // Aladdin
  ALA: { creatures: 2, renforcement: 3, attache_base: 0, attache_creature: 0, deplacement: 2, destruction: 0, pioche: 3, defausse: 3, controle: 1, conquete: 0 },

  // Beauty and the Beast
  BAB: { creatures: 4, renforcement: 2, attache_base: 2, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 3, defausse: 3, controle: 0, conquete: 1 },

  // Big Hero 6
  BIG: { creatures: 2, renforcement: 4, attache_base: 2, attache_creature: 1, deplacement: 1, destruction: 0, pioche: 1, defausse: 1, controle: 1, conquete: 1 },

  // Frozen
  FRO: { creatures: 3, renforcement: 2, attache_base: 2, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 3, defausse: 3, controle: 2, conquete: 0 },

  // Mulan
  MUL: { creatures: 3, renforcement: 4, attache_base: 1, attache_creature: 1, deplacement: 0, destruction: 3, pioche: 2, defausse: 0, controle: 1, conquete: 1 },

  // The Lion King
  LIK: { creatures: 3, renforcement: 3, attache_base: 2, attache_creature: 2, deplacement: 0, destruction: 1, pioche: 3, defausse: 2, controle: 0, conquete: 1 },

  // The Nightmare Before Christmas
  NBC: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 4, deplacement: 0, destruction: 0, pioche: 0, defausse: 1, controle: 2, conquete: 1 },

  // Wreck-It Ralph
  WIR: { creatures: 2, renforcement: 2, attache_base: 4, attache_creature: 0, deplacement: 3, destruction: 0, pioche: 0, defausse: 1, controle: 2, conquete: 1 },

  // Pingouins
  PIN: { creatures: 4, renforcement: 1, attache_base: 2, attache_creature: 0, deplacement: 1, destruction: 0, pioche: 3, defausse: 0, controle: 0, conquete: 1 },

  // Teens
  TEE: { creatures: 3, renforcement: 1, attache_base: 1, attache_creature: 1, deplacement: 1, destruction: 0, pioche: 2, defausse: 2, controle: 0, conquete: 0 },

  // Traqueurs de Spectres
  TDS: { creatures: 2, renforcement: 2, attache_base: 4, attache_creature: 1, deplacement: 1, destruction: 1, pioche: 3, defausse: 2, controle: 1, conquete: 2 },

  // Extramorphes
  EXT: { creatures: 4, renforcement: 1, attache_base: 2, attache_creature: 2, deplacement: 3, destruction: 3, pioche: 1, defausse: 2, controle: 1, conquete: 0 },

  // Hommes d'Action
  HDA: { creatures: 2, renforcement: 3, attache_base: 1, attache_creature: 2, deplacement: 1, destruction: 1, pioche: 2, defausse: 0, controle: 1, conquete: 3 },

  // Retourneurs du Futur
  RDF: { creatures: 3, renforcement: 3, attache_base: 0, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 2, defausse: 1, controle: 0, conquete: 1 },

  // Champions du Monde
  CDM: { creatures: 2, renforcement: 3, attache_base: 1, attache_creature: 2, deplacement: 1, destruction: 0, pioche: 1, defausse: 1, controle: 1, conquete: 1 },

  // Gobelins
  GOB: { creatures: 2, renforcement: 3, attache_base: 1, attache_creature: 1, deplacement: 0, destruction: 2, pioche: 0, defausse: 0, controle: 0, conquete: 1 },

  // Sirènes
  SIR: { creatures: 2, renforcement: 1, attache_base: 2, attache_creature: 0, deplacement: 2, destruction: 0, pioche: 1, defausse: 0, controle: 3, conquete: 0 },

  // Squelettes
  SQU: { creatures: 2, renforcement: 1, attache_base: 1, attache_creature: 0, deplacement: 0, destruction: 0, pioche: 1, defausse: 2, controle: 4, conquete: 1 },

  // Adolescent Epic Geckos
  GEC: { creatures: 3, renforcement: 4, attache_base: 0, attache_creature: 1, deplacement: 2, destruction: 0, pioche: 3, defausse: 2, controle: 0, conquete: 1 },

  // G.I. Gerald
  GIG: { creatures: 4, renforcement: 4, attache_base: 0, attache_creature: 0, deplacement: 1, destruction: 1, pioche: 2, defausse: 1, controle: 0, conquete: 1 },

  // Pearl and the Images
  PEA: { creatures: 2, renforcement: 4, attache_base: 2, attache_creature: 2, deplacement: 2, destruction: 0, pioche: 2, defausse: 1, controle: 1, conquete: 2 },

  // Rulers of the Cosmos
  RTC: { creatures: 2, renforcement: 3, attache_base: 0, attache_creature: 4, deplacement: 2, destruction: 0, pioche: 2, defausse: 2, controle: 1, conquete: 1 },

  // Slashers
  SLA: { creatures: 2, renforcement: 3, attache_base: 0, attache_creature: 4, deplacement: 2, destruction: 4, pioche: 2, defausse: 2, controle: 1, conquete: 1 },

  // Clowns
  CLO: { creatures: 2, renforcement: 2, attache_base: 0, attache_creature: 0, deplacement: 1, destruction: 0, pioche: 3, defausse: 4, controle: 0, conquete: 0 },
};
