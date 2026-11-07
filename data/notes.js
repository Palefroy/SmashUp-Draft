// NOTES — un bloc par faction. Case vide ("") = rien n'est affiché.
// Ne pas supprimer de faction ni changer les noms de champs.
//   fr / en : précisions utiles en phrases courtes (ne pas recopier le texte des cartes)
//   statut  : "officiel" | "communautaire" | "a-verifier"

DATA.notes = {

  // Aliens
  ALI: { fr: "• Renvoie-les d’où ils viennent ! Renvoie les créatures dans la main des joueurs\n• Deux créatures sont faibles mais permettent de gagner 1 PV\n• Actions pour changer de base", en: "• Send them back where they came from! Returns minions to players' hands\n• Two minions are weak but let you gain 1 VP\n• Actions to change bases", statut: "a-verifier" },

  // Dinosaures
  DIN: { fr: "• Joue de grosses créatures\n• 7 créatures fortes et les autres le deviennent grâce à leur pouvoir\n• Augmente le pouvoir jusqu’à la fin de leur tour\n• Détruit les créatures généralement à 3 de forces ou moins", en: "• Plays big minions\n• 7 strong minions, and the others become strong thanks to their abilities\n• Boosts power until the end of the turn\n• Destroys minions, usually those with power 3 or less", statut: "a-verifier" },

  // Ninjas
  NIN: { fr: "• Joue des créatures spéciales avant la capture d’une base\n• Détruit les créatures ennemies\n• Détruit les actions affectées aux bases", en: "• Plays special minions before a base scores\n• Destroys enemy minions\n• Destroys actions played on bases", statut: "a-verifier" },

  // Pirates
  PIR: { fr: "• Déplace les créatures\n• Détruit les créatures de force 2 ou moins\n• Déplace les créatures vers une autre base après la résolution d’une base\n• Gagne temporairement de la force supplémentaire", en: "• Moves minions\n• Destroys minions with power 2 or less\n• Moves minions to another base after a base scores\n• Temporarily gains extra power", statut: "a-verifier" },

  // Robots
  ROB: { fr: "• 18 (contre 10) petites créatures et seulement 2 actions\n• Joue beaucoup de créatures supplémentaires par tour\n• Beaucoup de créatures se donnent mutuellement un peu de force supplémentaire\n• Tire des cartes supplémentaires", en: "• 18 (vs. the usual 10) small minions and only 2 actions\n• Plays many extra minions per turn\n• Many minions give each other a little extra power\n• Draws extra cards", statut: "a-verifier" },

  // Petit Peuple
  PTP: { fr: "• Limite le choix des adversaires\n• Force les joueurs à abandonner leurs cartes\n• Élimine les actions adverses\n• Joue des créatures supplémentaires\n• Détruit les créatures faibles", en: "• Limits your opponents' choices\n• Forces players to give up their cards\n• Eliminates opponents' actions\n• Plays extra minions\n• Destroys weak minions", statut: "a-verifier" },

  // Sorciers
  SOR: { fr: "• Pioche des cartes supplémentaires\n• Force les joueurs à abandonner leurs cartes\n• 4 des créatures ont des forces inférieures à la moyenne\n• Élimine les actions adverses\n• Joue des créatures supplémentaires\n• Détruit les créatures faibles", en: "• Draws extra cards\n• Forces players to give up their cards\n• 4 of the minions have below-average power\n• Eliminates opponents' actions\n• Plays extra minions\n• Destroys weak minions", statut: "a-verifier" },

  // Zombies
  ZOM: { fr: "• Ressuscité d’entre les morts\n• Défausse tes cartes\n• Récupère les cartes de ta défausse dans ta main\n• Joue des créatures supplémentaires depuis ta défausse\n• 3 des créatures ont des forces inférieures à la moyenne", en: "• Back from the dead\n• Discards your cards\n• Returns cards from your discard pile to your hand\n• Plays extra minions from your discard pile\n• 3 of the minions have below-average power", statut: "a-verifier" },

  // Cavalerie Ours
  CAO: { fr: "• Déplace les créatures ennemies\n• Détruit les créatures après leur déplacement\n• Tes créatures gagnent en forces supplémentaires\n• Joue des créatures supplémentaires\n• Créer des créatures indestructibles", en: "• Moves enemy minions\n• Destroys minions after they move\n• Your minions gain extra power\n• Plays extra minions\n• Creates indestructible minions", statut: "a-verifier" },

  // Fantômes
  FAN: { fr: "• Défausse tes cartes pour tuer les créatures ennemies et gagner en force ou reconstituer ta main\n• Avec 2 cartes ou moins, gagne des PV, de la force supplémentaire, des renvois de créatures et des créatures à jouer en plus", en: "• Discards your cards to kill enemy minions and gain power, or to refill your hand\n• With 2 cards or fewer, gains VP, extra power, minion returns and extra minions to play", statut: "a-verifier" },

  // Plantes Carnivores
  PLC: { fr: "• Pioche des cartes supplémentaires, joue des créatures supplémentaires, remplace les faibles créatures par des plus fortes\n• Diminue les forces des adversaires\n• Empêche les créatures de se déplacer et de retourner à la main", en: "• Draws extra cards, plays extra minions, replaces weak minions with stronger ones\n• Lowers opponents' power\n• Prevents minions from moving or returning to hand", statut: "a-verifier" },

  // Steampunks
  STE: { fr: "• Joue des actions sur les bases et ajoute de la force entre autres\n• Déplace tes actions de base en base\n• Place les actions de ta défausse vers ta main", en: "• Plays actions on bases and adds power, among other things\n• Moves your actions from base to base\n• Returns actions from your discard pile to your hand", statut: "a-verifier" },

  // Grands Anciens
  GRA: { fr: "", en: "", statut: "" },

  // Innsmouth
  INN: { fr: "", en: "", statut: "" },

  // Serviteurs de Cthulhu
  SDC: { fr: "", en: "", statut: "" },

  // Université Miskatonic
  MIS: { fr: "", en: "", statut: "" },

  // Métamorphes
  MET: { fr: "• Copie les pouvoirs ennemis\n• Détruit les créatures ou remélange-les dans la pioche pour retrouver dans ta pioche des créatures supplémentaires à jouer\n• Copie les forces des ennemis\n• Gagne en force", en: "• Copies enemy abilities\n• Destroys minions, or reshuffles them into the deck to draw extra minions to play\n• Copies enemy power\n• Gains power", statut: "a-verifier" },

  // Singes Cyborgs
  SIC: { fr: "Joue sur une créature des actions pour augmenter sa force, la rendre invincible, la déplacer, et pour avoir des cartes supplémentaires", en: "Plays actions on a minion to boost its power, make it invincible, move it, and draw extra cards", statut: "a-verifier" },

  // Super Espions
  SUE: { fr: "• Regarde en avance ta pioche pour manipuler les cartes que tu as\n• Oblige tes adversaires de défausser ou de mettre leur carte en haut de leur pile\n• Joue des actions supplémentaires", en: "• Looks ahead at your deck to manipulate the cards you get\n• Forces opponents to discard or put their card on top of their deck\n• Plays extra actions", statut: "a-verifier" },

  // Voyageurs du Temps
  VDT: { fr: "• Ramène tes créatures dans ta pile après avoir résolu une base\n• Met des cartes de ta défausse à ta main\n• Utilise 2x les pouvoirs des créatures\n• Renvoie les cartes ennemies et les tiennes dans la main\n• Joue des actions supplémentaires", en: "• Returns your minions to your deck after a base scores\n• Puts cards from your discard pile into your hand\n• Uses minion abilities twice\n• Returns enemy cards and your own to hand\n• Plays extra actions", statut: "a-verifier" },

  // Fourmis Géantes
  FOU: { fr: "Place 1 ou 2 jeton +1 force sur tes créatures et transferts-les librement entre tes créatures", en: "Places 1 or 2 +1 power counters on your minions and moves them freely between your minions", statut: "a-verifier" },

  // Loups-Garous
  LOU: { fr: "• Augmente la force jusqu’à la fin du tour\n• Détruit les créatures plus faibles que les tiennes", en: "• Boosts power until the end of the turn\n• Destroys minions weaker than yours", statut: "a-verifier" },

  // Savants Fous
  SAF: { fr: "• Ajoute continuellement des jetons de forces à tes créatures\n• Créer des créatures indestructibles\n• Joue des créatures supplémentaires", en: "• Continually adds power counters to your minions\n• Creates indestructible minions\n• Plays extra minions", statut: "a-verifier" },

  // Vampires
  VAM: { fr: "• Détruit des faibles créatures et gagne des jetons de forces\n• Rappelle des faibles créatures depuis ta défausse", en: "• Destroys weak minions and gains power counters\n• Brings back weak minions from your discard pile", statut: "a-verifier" },

  // Chatons
  CHA: { fr: "• Réduit la force des ennemis\n• Prend le contrôle des ennemis faibles (et parfois des forts)\n• Détruit les créatures que tu contrôles en échange d’une pioche supplémentaire, actions et créatures", en: "• Reduces enemy power\n• Takes control of weak enemies (and sometimes strong ones)\n• Destroys minions you control in exchange for extra draws, actions and minions", statut: "a-verifier" },

  // Fées
  FEE: { fr: "• La plupart des cartes donnent 2 options, connaître les cartes à venir, actions supplémentaires ou augmente/réduit la force des créatures\n• Joue les actions ennemies contre eux", en: "• Most cards give 2 options: see upcoming cards, extra actions, or raise/lower minions' power\n• Plays enemy actions against them", statut: "a-verifier" },

  // Poneys Magiques
  PON: { fr: "Les créatures augmentent leur force quand ils sont sur la même base avec de nouvelles capacités comme jouer plus de créatures, se déplacer ou piocher de nouvelles cartes", en: "Minions gain power when they share a base, with new abilities such as playing more minions, moving or drawing new cards", statut: "a-verifier" },

  // Princesses
  PRI: { fr: "• 6 créatures de forces 5\n• Pioche des cartes supplémentaires\n• Déplace tes créatures\n• Replace les créatures défaussées dans ta pioche\n• Détruit les créatures de force <= 2\n• Gagne +1 en force en jouant avec des actions sur les créatures", en: "• 6 minions with power 5\n• Draws extra cards\n• Moves your minions\n• Puts discarded minions back into your deck\n• Destroys minions with power 2 or less\n• Gains +1 power when playing actions on minions", statut: "a-verifier" },

  // Geeks
  GEE: { fr: "• Immunisé contre les effets des cartes adverses\n• Manipule la main des adversaires\n• Défausse tes cartes pour de nouvelles", en: "• Immune to the effects of opposing cards\n• Manipulates opponents' hands\n• Discards your cards for new ones", statut: "a-verifier" },

  // Elfes
  ELF: { fr: "", en: "", statut: "" },

  // Guerriers
  GUE: { fr: "", en: "", statut: "" },

  // Halfelins
  HAL: { fr: "", en: "", statut: "" },

  // Magiciens
  MAG: { fr: "", en: "", statut: "" },

  // Nains
  NAI: { fr: "", en: "", statut: "" },

  // Orques
  ORQ: { fr: "", en: "", statut: "" },

  // Prêtres
  PRE: { fr: "", en: "", statut: "" },

  // Voleurs
  VOL: { fr: "", en: "", statut: "" },

  // Changeformers
  CHF: { fr: "• Sacrifie ta force pour des pouvoirs comme se déplacer, des actions supplémentaires et détruire\n• Déplace tes créatures\n• Sacrifie tes pouvoirs pour gagner en force", en: "• Sacrifices your power for abilities such as moving, extra actions and destroying\n• Moves your minions\n• Sacrifices your abilities to gain power", statut: "a-verifier" },

  // Chevaliers des Étoiles
  CDE: { fr: "• Augmente ta force avec des actions\n• Joue des cartes supplémentaires\n• Utilise des pouvoirs spéciaux avant la conquête d’une base", en: "• Boosts your power with actions\n• Plays extra cards\n• Uses special abilities before a base scores", statut: "a-verifier" },

  // Squatteurs de Trône
  SDT: { fr: "• Donne le contrôle de tes créatures pour jouer des créatures supplémentaires et des PV s’ils gagnent une conquête\n• Reprend le contrôle pour des actions supplémentaires ou avant une conquête de base\n• Détruit les autres créatures", en: "• Gives away control of your minions to play extra minions and gain VP if they win a base\n• Takes back control for extra actions or before a base is captured\n• Destroys other minions", statut: "a-verifier" },

  // Voyageurs de l'Espace
  VDE: { fr: "• Renvoie tes créatures ou celles des autres dans leur main\n• Joue avant une conquête ou pour jouer une autre créature\n• Transfert les effets adverses vers la créature la plus faible\n• Déplace les créatures\n• Découvre de nouvelles bases", en: "• Returns your minions or others' to their hand\n• Plays before a base scores or to play another minion\n• Transfers opposing effects to the weakest minion\n• Moves minions\n• Discovers new bases", statut: "a-verifier" },

  // Dragons
  DRA: { fr: "• Rend les bases plus difficiles à conquérir pour tes adversaires\n• Décroît les PV des bases capturées par tes adversaires\n• Réduit les points de conquêtes\n• Joue des créatures avant la résolution d’une base\n• Pioche des cartes supplémentaires", en: "• Makes bases harder for your opponents to capture\n• Lowers the VP of bases captured by your opponents\n• Reduces conquest points\n• Plays minions before a base scores\n• Draws extra cards", statut: "a-verifier" },

  // Mythologies Grecques
  MYG: { fr: "• Gagne des jetons de forces ou de la force jusqu’à la fin de ton tour quand tu joues des actions\n• Joue des créatures de force 2 en tant qu’action\n• Joue des actions supplémentaires", en: "• Gains power counters or power until the end of your turn when you play actions\n• Plays power-2 minions as actions\n• Plays extra actions", statut: "a-verifier" },

  // Requins
  REQ: { fr: "• Quand les créatures sont détruites, gagne des pouvoirs comme jouer des créatures supplémentaires, ajouter des jetons de force +1, jouer des cartes supplémentaires\n• Détruit les créatures de force <= 3\n• Joue des cartes supplémentaires", en: "• When minions are destroyed, gains powers such as playing extra minions, adding +1 power counters, playing extra cards\n• Destroys minions with power 3 or less\n• Plays extra cards", statut: "a-verifier" },

  // Super-Héros
  SUH: { fr: "• Transforme les créatures de forces 2 en forces 5 avec de nouveaux pouvoirs et talents\n• Renvoie tes créatures de la défausse sur la pioche ou dans ta main\n• Gagne de la force jusqu’à la fin du tour\n• Rend les créatures invincibles", en: "• Turns power-2 minions into power-5 ones with new abilities and talents\n• Returns your minions from the discard pile to your deck or hand\n• Gains power until the end of the turn\n• Makes minions invincible", statut: "a-verifier" },

  // Tornades
  TOR: { fr: "• Déplace toutes les créatures de tout le monde vers une autre base\n• Déplace tes créatures de force 2 vers une base avant une conquête\n• Échange la place de 2 créatures\n• Détruit ou transfert les actions des adversaires", en: "• Moves everyone's minions to another base\n• Moves your power-2 minions to a base before it scores\n• Swaps the places of 2 minions\n• Destroys or transfers opponents' actions", statut: "a-verifier" },

  // Explorateurs
  EXP: { fr: "• Manipule l’ordre des bases dans la pioche à ton avantage\n• Joue des créatures supplémentaires dans les nouvelles bases\n• Déplace tes créatures vers ou depuis les bases et gagnent temporairement de la force", en: "• Manipulates the order of the bases in the deck to your advantage\n• Plays extra minions on the new bases\n• Moves your minions to or from bases, and they temporarily gain power", statut: "a-verifier" },

  // Grands-Mères
  GME: { fr: "• Regarde les cartes au-dessus de la pioche et décide si tu souhaites les conserver ou les envoyer au fond du paquet\n• Joue des actions supplémentaires\n• Met les cartes de ta main sous la pioche pour de nouvelles cartes", en: "• Looks at the top cards of your deck and decides whether to keep them or send them to the bottom\n• Plays extra actions\n• Puts cards from your hand under your deck to get new ones", statut: "a-verifier" },

  // Oursons
  OUR: { fr: "• Joue des créatures en plus\n• Même force que la plus forte créature en jeu\n• Gagne de la force quand les autres jouent ou déplacent leurs créatures sur une base où tu es\n• Pioche des cartes\n• Annule les pouvoirs des adversaires", en: "• Plays extra minions\n• Same power as the strongest minion in play\n• Gains power when others play or move minions to a base where you are present\n• Draws cards\n• Cancels opponents' abilities", statut: "a-verifier" },

  // Rockstars
  ROK: { fr: "• Récupère tes 5 créatures à force 2 pour les jouer en plus\n• Pioche des cartes supplémentaires sur une base à 21 ou plus\n• Déplace les créatures vers une base plus grosse\n• Pioche des cartes supplémentaires\n• Donne +1 force à toutes tes créatures", en: "• Retrieves your 5 power-2 minions to play them as extras\n• Draws extra cards at a base with 21 power or more\n• Moves minions to a bigger base\n• Draws extra cards\n• Gives +1 power to all your minions", statut: "a-verifier" },

  // Kaijū
  KAI: { fr: "• Tes actions ont de la puissance\n• Gagne de la force grâce aux actions des bases\n• Détruit les cartes des autres joueurs\n• Joue des actions supplémentaires\n• Réduit les points de conquêtes des bases", en: "• Your actions have power\n• Gains power from base actions\n• Destroys other players' cards\n• Plays extra actions\n• Reduces the conquest points of bases", statut: "a-verifier" },

  // Monstrapoches
  MON: { fr: "Joue de faibles créatures qui vont sous la pioche à la fin du tour et qui offre un large choix de pouvoirs lors des pioches comme des accroissements de forces et une boîte à outils de pouvoirs", en: "Plays weak minions that go under the deck at the end of the turn and offer a wide range of abilities when drawn, such as power boosts and a toolbox of powers", statut: "a-verifier" },

  // Petites Magiciennes
  PMA: { fr: "• Utilise les capacités qui sont meilleurs plus il y a de créatures dans la même base\n• Récupère ta meilleure créature\n• Déplace les créatures\n• Joue des créatures supplémentaires", en: "• Uses abilities that get better the more minions share a base\n• Retrieves your best minion\n• Moves minions\n• Plays extra minions", statut: "a-verifier" },

  // Super Combattants
  SUC: { fr: "• Joue des créatures spéciales et des actions avant la conquête d’une base\n• Gagne de la force jusqu’à la fin du tour", en: "• Plays special minions and actions before a base scores\n• Gains power until the end of the turn", statut: "a-verifier" },

  // Danseurs Disco
  DIS: { fr: "• Bénéficier des cartes actions standards\n• Copie les effets des actions standards\n• Gagne +1 jeton de force\n• Joue des actions supplémentaires\n• Récupère les cartes depuis ou qui vont vers la défausse", en: "• Benefits from standard action cards\n• Copies the effects of standard actions\n• Gains a +1 power counter\n• Plays extra actions\n• Retrieves cards from, or sends cards to, the discard pile", statut: "a-verifier" },

  // Justiciers
  JUS: { fr: "• 7 unique créature de force 4\n• Réagit immédiatement après l’effet d’un joueur\n• Gagne 1 à 3 de forces jusqu’à la fin du tour\n• Pioche des cartes", en: "• 7 unique minions with power 4\n• Reacts immediately after another player's effect\n• Gains 1 to 3 power until the end of the turn\n• Draws cards", statut: "a-verifier" },

  // Maîtres Kung-Fu
  KUN: { fr: "• Transfert tes jetons de forces\n• Place des jetons de forces sur tes créatures\n• Détruit les créatures", en: "• Transfers your power counters\n• Places power counters on your minions\n• Destroys minions", statut: "a-verifier" },

  // Routiers
  ROU: { fr: "• Transfert des actions d’une base vers une autre\n• Place des actions sur les bases\n• Déplace tes créatures\n• Les actions des bases augmentent ta force", en: "• Transfers actions from one base to another\n• Places actions on bases\n• Moves your minions\n• Base actions increase your power", statut: "a-verifier" },

  // Anciens Égyptiens
  EGY: { fr: "• Place des cartes face cachés, rendant difficiles de savoir ce que c’est pour l’adversaire\n• Conserve des créatures de force 2 en les jouant faces cachées", en: "• Places cards face down, making it hard for opponents to know what they are\n• Keeps power-2 minions by playing them face down", statut: "a-verifier" },

  // Cow-Boys
  COW: { fr: "• Une créature peut faire un duel contre une autre, les 2 joueurs peuvent jouer une action face cachée pour ajouter de la force\n• La créature avec la plus grande force gagne et le perdant est normalement détruit", en: "• A minion can duel another; both players may play an action face down to add power\n• The minion with the highest power wins and the loser is normally destroyed", statut: "a-verifier" },

  // Samouraïs
  SAM: { fr: "Quand une créature va faire la défausse, tu peux piocher une carte supplémentaire, jouer une carte action, avoir un boost de force ou même des PV", en: "When a minion goes to the discard pile, you can draw an extra card, play an action, get a power boost or even gain VP", statut: "a-verifier" },

  // Vikings
  VIK: { fr: "• Vole les cartes depuis la pioche ou la main de ton adversaire\n• Gagne temporairement de la force en plaçant des cartes au-dessus de ta pioche", en: "• Steals cards from your opponent's deck or hand\n• Temporarily gains power by placing cards on top of your deck", statut: "a-verifier" },

  // Dream Team
  DRE: { fr: "Cette faction réunis des cartes de pleins d'autres factions existantes", en: "This faction brings together cards from many other existing factions", statut: "a-verifier" },

  // Luchadors
  LUC: { fr: "• Jouez des actions sur les sbires des autres qui vous profitent\n• Cherchez ces actions dans votre deck/défausse pour les ajouter à votre main\n• Obtenez des avantages de puissance en ayant ces actions sur vos ennemis", en: "• Play actions on other players' minions that benefit you\n• Search your deck/discard pile for those actions to add them to your hand\n• Gain power bonuses by having those actions on your enemies", statut: "a-verifier" },

  // Mousquetaires
  MOU: { fr: "• Jouez des cartes qui affectent directement vos sbires, puis jouez une action supplémentaire\n• Profitez des actions qui vous affectent directement\n• Piochez des cartes supplémentaires", en: "• Play cards that directly affect your minions, then play an extra action\n• Benefit from actions that directly affect you\n• Draw extra cards", statut: "a-verifier" },

  // Police Montée
  POM: { fr: "• Déplacez-vous vers des bases où se trouvent des sbires d'autres joueurs\n• Augmentez votre puissance là où des sbires d'autres joueurs sont présents", en: "• Move to bases where other players' minions are\n• Increase your power where other players' minions are present", statut: "a-verifier" },

  // Sumos
  SUM: { fr: "• Défaussez des cartes pour gagner de la puissance et des marqueurs de puissance\n• Déplacez les sbires des autres joueurs loin des bases où vous avez des sbires\n• Piochez des cartes supplémentaires", en: "• Discard cards to gain power and power counters\n• Move other players' minions away from bases where you have minions\n• Draw extra cards", statut: "a-verifier" },

  // Knights of the Round Table
  KRT: { fr: "• Faction avec beaucoup de mouvement\n• Se renforce en bougant\n• Gagne des PV directement", en: "• A faction with lots of movement\n• Gets stronger by moving\n• Gains VP directly", statut: "a-verifier" },

  // Avengers
  AVE: { fr: "", en: "", statut: "" },

  // Hydra
  HYD: { fr: "", en: "", statut: "" },

  // Kree
  KRE: { fr: "", en: "", statut: "" },

  // Masters of Evil
  MOE: { fr: "", en: "", statut: "" },

  // S.H.I.E.L.D.
  SHI: { fr: "", en: "", statut: "" },

  // Sinister Six
  SIS: { fr: "", en: "", statut: "" },

  // Spider-Verse
  SPI: { fr: "", en: "", statut: "" },

  // Ultimates
  ULT: { fr: "", en: "", statut: "" },

  // Anciens Incas
  AIN: { fr: "Piochez, jouez et rejouez des actions sur des bases qui activent des capacités déclenchées à chaque fois que vous jouez une action sur des bases, surtout sur la même base", en: "Draw, play and replay actions on bases that trigger abilities each time you play an action on bases, especially on the same base", statut: "a-verifier" },

  // Contes d'Anansi
  ANA: { fr: "• Donnez des cartes à d'autres joueurs pour en tirer profit\n• Obtenez des avantages lorsqu'ils les jouent ou les défaussent\n• Offrez des actions qui sont continuellement échangées entre les joueurs", en: "• Give cards to other players to profit from it\n• Gain benefits when they play or discard them\n• Offer actions that are constantly passed between players", statut: "a-verifier" },

  // Contes de Grimm
  GRI: { fr: "Jouez avec une équipe composée de plusieurs paires de sbires qui ne peuvent travailler que lorsqu'ils sont ensemble avec leur partenaire", en: "Play with a team made up of several pairs of minions that only work when together with their partner", statut: "a-verifier" },

  // Contes Féeriques Russes
  CFR: { fr: "Remplacez n'importe quels sbires en jeu par d'autres, généralement des sbires aléatoires joués depuis le sommet du deck de leur propriétaire", en: "Replace any minions in play with others, usually random minions played from the top of their owner's deck", statut: "a-verifier" },

  // Voyageurs Polynésiens
  VPO: { fr: "• Déplacez-vous vers des bases où vous n'avez pas encore de sbire\n• Gagnez de la puissance et des marqueurs +1 de puissance grâce aux actions jouées sur les sbires\n• Ajoutez des bases supplémentaires en jeu", en: "• Move to bases where you don't have a minion yet\n• Gain power and +1 power counters from actions played on minions\n• Add extra bases to the game", statut: "a-verifier" },

  // Moutons
  MOT: { fr: "• Déplace les créatures quand une créature se déplace\n• Déplace tes créatures, et parfois les autres\n• Pioche en plus et joue les cartes actions\n• Copie et joue les actions des adversaires", en: "• Moves minions when a minion moves\n• Moves your minions, and sometimes others'\n• Draws extra and plays action cards\n• Copies and plays opponents' actions", statut: "a-verifier" },

  // Aladdin
  ALA: { fr: "", en: "", statut: "" },

  // Beauty and the Beast
  BAB: { fr: "", en: "", statut: "" },

  // Big Hero 6
  BIG: { fr: "", en: "", statut: "" },

  // Frozen
  FRO: { fr: "", en: "", statut: "" },

  // Mulan
  MUL: { fr: "", en: "", statut: "" },

  // The Lion King
  LIK: { fr: "", en: "", statut: "" },

  // The Nightmare Before Christmas
  NBC: { fr: "", en: "", statut: "" },

  // Wreck-It Ralph
  WIR: { fr: "", en: "", statut: "" },

  // Pingouins
  PIN: { fr: "• Jouez des sbires supplémentaires aléatoires directement depuis votre deck\n• Déclenche des capacités à chaque fois que vous jouez un sbire de cette manière", en: "• Play extra random minions directly from your deck\n• Triggers abilities each time you play a minion this way", statut: "a-verifier" },

  // Teens
  TEE: { fr: "• Synergie entre les différentes créatures\n• Que des créatures à 3 de force\n• Multiples effets de renforcement sur les créatures", en: "• Synergy between the different minions\n• Only power-3 minions\n• Multiple power-boost effects on minions", statut: "a-verifier" },

  // Traqueurs de Spectres
  TDS: { fr: "", en: "", statut: "" },

  // Extramorphes
  EXT: { fr: "", en: "", statut: "" },

  // Hommes d'Action
  HDA: { fr: "", en: "", statut: "" },

  // Retourneurs du Futur
  RDF: { fr: "", en: "", statut: "" },

  // Champions du Monde
  CDM: { fr: "Cette faction réunis des cartes de pleins d'autres factions existantes", en: "This faction brings together cards from many other existing factions", statut: "a-verifier" },

  // Gobelins
  GOB: { fr: "• Faction porté sur le hasard et la chance\n• Munissez-vous d'une pièce de monnaie pour jouer", en: "• A faction built on randomness and luck\n• Grab a coin to play", statut: "a-verifier" },

  // Sirènes
  SIR: { fr: "• Déplacer vos créatures et celles de vos adversaires\n• Empêcher vos adversaires d'ajouter leur force à une base", en: "• Move your minions and your opponents'\n• Prevent your opponents from adding their power to a base", statut: "a-verifier" },

  // Squelettes
  SQU: { fr: "Enterre les cartes pour surprendre vos adversaires", en: "Buries cards to surprise your opponents", statut: "a-verifier" },

  // Adolescent Epic Geckos
  GEC: { fr: "", en: "", statut: "" },

  // G.I. Gerald
  GIG: { fr: "", en: "", statut: "" },

  // Pearl and the Images
  PEA: { fr: "", en: "", statut: "" },

  // Rulers of the Cosmos
  RTC: { fr: "", en: "", statut: "" },

  // Slashers
  SLA: { fr: "", en: "", statut: "" },

  // Clowns
  CLO: { fr: "", en: "", statut: "" },
};
