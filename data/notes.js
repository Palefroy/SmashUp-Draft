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
  GRA: { fr: "• Distribue des Démences aux adversaires et profite d’eux s’ils les refusent\n• Place des jetons de force selon les Démences adverses en main\n• Replace des créatures de ta défausse sur ta pioche ou en jeu\n• Une créature de force 10, immunisée mais coûteuse à jouer", en: "• Hands Madness cards to opponents and profits if they refuse\n• Places power counters based on Madness cards in opponents' hands\n• Returns minions from your discard pile to your deck or into play\n• A power-10 minion, immune but costly to play", statut: "a-verifier" },

  // Innsmouth
  INN: { fr: "• 10 copies de la même créature de force 2, qui cherche ses semblables\n• Joue des créatures en plus de même nom que celles en jeu\n• Booste et protège les créatures de force 2 ou moins\n• Pioche (et prend des Démences) avec 3 créatures de même nom sur une base", en: "• 10 copies of the same power-2 minion, which fetches its twins\n• Plays extra minions sharing a name with minions in play\n• Boosts and protects minions with power 2 or less\n• Draws (and takes Madness cards) with 3 same-name minions on a base", statut: "a-verifier" },

  // Serviteurs de Cthulhu
  SDC: { fr: "• Pioche des Démences en échange de nombreuses actions en plus\n• Replace actions et créatures de force 3 ou moins de ta défausse sur ta pioche\n• Détruit des créatures ennemies et gagne des PV directement\n• Refile tes Démences aux adversaires", en: "• Draws Madness cards in exchange for many extra actions\n• Puts actions and minions with power 3 or less from your discard pile back on your deck\n• Destroys enemy minions and gains VP directly\n• Passes your Madness cards on to opponents", statut: "a-verifier" },

  // Université Miskatonic
  MIS: { fr: "• Pioche des Démences et les joue comme actions en plus\n• Défausse des Démences pour jouer des cartes en plus ou gagner de la force\n• Détruit la créature la plus forte d’une base avant sa conquête, ou ses actions\n• Pioche en plaçant des cartes sous la pioche", en: "• Draws Madness cards and plays them as extra actions\n• Discards Madness cards to play extra cards or gain power\n• Destroys the strongest minion on a base before it scores, or its actions\n• Draws by putting cards on the bottom of your deck", statut: "a-verifier" },

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
  ELF: { fr: "• Aide les autres joueurs (cartes, force) pour mieux en profiter\n• Pioche en plus et remélange les défausses dans les pioches\n• Prend le contrôle de créatures de force 3 ou moins contre une des tiennes\n• Déplace des créatures avant la conquête et échange des cartes avec les mains adverses", en: "• Helps other players (cards, power) to profit from it\n• Draws extra cards and shuffles discard piles back into decks\n• Takes control of minions with power 3 or less in exchange for one of yours\n• Moves minions before a base scores and swaps cards with opponents' hands", statut: "a-verifier" },

  // Guerriers
  GUE: { fr: "• Joue et détruit des monstres sur les bases\n• Gagne des jetons +1 à chaque monstre détruit\n• Détruit des monstres pour jouer des actions en plus ou des trésors\n• Détruit les créatures adverses de force imprimée 2 ou moins", en: "• Plays and destroys monsters on bases\n• Gains +1 counters each time a monster is destroyed\n• Destroys monsters to play extra actions or treasures\n• Destroys enemy minions with printed power 2 or less", statut: "a-verifier" },

  // Halfelins
  HAL: { fr: "• Chaque créature permet d’en jouer une autre en plus\n• Pioche en jouant sur une base et pose toute ta main sur une base en un tour\n• Replace des créatures de ta défausse sur ta pioche\n• Protège les créatures d’une base des actions adverses", en: "• Every minion lets you play another one\n• Draws while playing on a base and drops your whole hand on one base in a turn\n• Puts minions from your discard pile back on your deck\n• Protects the minions on a base from opposing actions", statut: "a-verifier" },

  // Magiciens
  MAG: { fr: "• Défausse des cartes pour jouer des créatures et actions en plus\n• Pioche beaucoup en échange de défausses\n• Joue, déplace ou prend le contrôle de monstres\n• Donne +3/-3 de force ou des jetons +1, et détruit les créatures de force 3 ou moins", en: "• Discards cards to play extra minions and actions\n• Draws many cards in exchange for discards\n• Plays, moves or takes control of monsters\n• Gives +3/-3 power or +1 counters, and destroys minions with power 3 or less", statut: "a-verifier" },

  // Nains
  NAI: { fr: "• Pioche des trésors et cherche des actions dans la pioche\n• Joue des trésors sur tes créatures, certaines gagnent +2 par trésor\n• Joue des trésors comme cartes en plus, ainsi que des actions\n• Modifie de 4 le seuil de conquête d’une base et détruit une action", en: "• Draws treasures and digs through the deck for actions\n• Plays treasures on your minions, some gain +2 power per treasure\n• Plays treasures as extra cards, plus extra actions\n• Raises or lowers a base's breakpoint by 4 and destroys an action", statut: "a-verifier" },

  // Orques
  ORQ: { fr: "• Booste tes créatures (+1 à toutes, jetons, actions sur les bases)\n• Détruit les créatures plus faibles que les tiennes ou de force 3 ou moins\n• Réduit le seuil de conquête et gagne 1 PV quand une base est largement dépassée\n• Protège tes créatures et les déplace vers une base où tu es déjà", en: "• Boosts your minions (+1 to all, counters, actions on bases)\n• Destroys minions weaker than yours or with power 3 or less\n• Lowers breakpoints and gains 1 VP when a base is well exceeded\n• Protects your minions and moves them to a base where you already are", statut: "a-verifier" },

  // Prêtres
  PRE: { fr: "• Remet des cartes de ta défausse en pioche ou en main, et met des actions en stase\n• Joue et manipule des monstres morts-vivants\n• Annule les pouvoirs d’une créature ou l’empêche d’ajouter sa force\n• Prend le contrôle de créatures de force 3 ou moins et déplace les tiennes", en: "• Returns cards from your discard pile to your deck or hand, and puts actions into stasis\n• Plays and manipulates undead monsters\n• Cancels a minion's abilities or stops it from adding its power\n• Takes control of minions with power 3 or less and moves yours", statut: "a-verifier" },

  // Voleurs
  VOL: { fr: "• Pioche des trésors et beaucoup de cartes, et agrandit ta main maximale\n• Défausse des trésors pour gagner des PV, jouer des cartes ou donner de la force\n• Vole des actions et des cartes aux adversaires\n• Détruit des créatures de force 3 ou moins et gagne des PV ou en prend 1 à un adversaire", en: "• Draws treasures and plenty of cards, and raises your maximum hand size\n• Discards treasures to gain VP, play extra cards or give power\n• Steals actions and cards from opponents\n• Destroys minions with power 3 or less and gains VP or takes 1 from an opponent", statut: "a-verifier" },

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
  AVE: { fr: "• Seulement 6 sbires, tous de force 5, chacun avec un pouvoir distinct\n• Pioche, trie et remélange des sbires de ta défausse dans ta pioche\n• Donne jusqu’à +3 de force et en retire aux adversaires avant une conquête\n• Détruit des sbires faibles ou des modificateurs, et déplace tes sbires", en: "• Only 6 minions, all power 5, each with its own ability\n• Draws, sorts and shuffles minions from your discard pile into your deck\n• Gives up to +3 power and takes power from opponents before a base scores\n• Destroys weak minions or modifiers, and moves your minions", statut: "a-verifier" },

  // Hydra
  HYD: { fr: "• Inonde les bases de petits sbires : 6 agents de force 2 en jouent en plus quand ils sont détruits\n• Détruit tes propres sbires pour piocher\n• Cherche et récupère des sbires de force 2 ou moins\n• Gagne de la force grâce aux petits sbires de la base", en: "• Floods bases with small minions: 6 power-2 agents play extra ones when destroyed\n• Destroys your own minions to draw cards\n• Searches for and recovers minions with power 2 or less\n• Gains power from the small minions on the base", statut: "a-verifier" },

  // Kree
  KRE: { fr: "• Joue des actions en plus et pioche surtout des actions\n• Replace des actions de ta défausse sur ta pioche\n• Gagne de la force à chaque action jouée et en donne à tes sbires\n• Ni déplacement, ni destruction, ni contrôle", en: "• Plays extra actions and mostly draws actions\n• Puts actions from your discard pile back on your deck\n• Gains power each time you play an action and boosts your minions\n• No movement, destruction or control", statut: "a-verifier" },

  // Masters of Evil
  MOE: { fr: "• Gagne des PV directement (en détruisant des sbires, en déplaçant, quand une base marque)\n• Ses sbires gagnent de la force ou piochent selon tes PV\n• Détruit tes propres sbires pour gagner 1 PV\n• Détruit des sbires adverses faibles et protège les tiens de la destruction", en: "• Gains VP directly (by destroying minions, moving, when a base scores)\n• Its minions gain power or draw depending on your VP\n• Destroys your own minions to gain 1 VP\n• Destroys weak enemy minions and protects yours from destruction", statut: "a-verifier" },

  // S.H.I.E.L.D.
  SHI: { fr: "• Joue des sbires en plus sur la même base\n• Gagne de la force en regroupant ses sbires\n• Pioche selon le nombre de sbires que tu as sur une base\n• Déplace jusqu’à 2 sbires, détruit une action sur une base ou un sbire de force 3 ou moins", en: "• Plays extra minions on the same base\n• Gains power by grouping its minions\n• Draws based on the number of your minions on a base\n• Moves up to 2 minions, destroys an action on a base or a minion with power 3 or less", statut: "a-verifier" },

  // Sinister Six
  SIS: { fr: "• Abaisse le seuil de conquête des bases (jusqu’à 4)\n• Joue beaucoup d’actions sur les bases (7 sur 20) et les réutilise\n• Gagne de la force quand le seuil d’une base est de 19 ou moins\n• Réduit la force des adversaires ou annule leurs capacités", en: "• Lowers bases' breakpoints (by up to 4)\n• Plays plenty of actions on bases (7 out of 20) and reuses them\n• Gains power when a base's breakpoint is 19 or less\n• Reduces opponents' power or cancels their abilities", statut: "a-verifier" },

  // Spider-Verse
  SPI: { fr: "• Joue sbires et actions juste avant ou après la conquête d’une base\n• Joue un sbire en plus sur la base qui va marquer\n• Donne +3 de force jusqu’à la fin du tour\n• Pioche, trie sa pioche et protège ses petits sbires", en: "• Plays minions and actions right before or after a base scores\n• Plays an extra minion on the scoring base\n• Gives +3 power until the end of the turn\n• Draws, sorts its deck and protects its small minions", statut: "a-verifier" },

  // Ultimates
  ULT: { fr: "• Déplace ses sbires d’une base à l’autre, et même un sbire adverse\n• Gagne de la force à chaque déplacement\n• Donne de la force avec des actions\n• Pioche en déplaçant des sbires et joue un sbire en plus sur une base vide", en: "• Moves its minions from base to base, and even an opposing minion\n• Gains power on every move\n• Boosts power with actions\n• Draws when moving minions and plays an extra minion on a base where you have none", statut: "a-verifier" },

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
  ALA: { fr: "• Enchaîne les recherches dans la pioche et la défausse\n• Joue 2 cartes en plus ou donne +5 de force avec ses 3 actions à usage unique\n• Défausse des actions pour obtenir des bonus\n• Pioche et récupère des actions, déplace jusqu’à 3 sbires", en: "• Chains searches through your deck and discard pile\n• Plays 2 extra cards or gives +5 power with its 3 one-time-use actions\n• Discards actions for bonuses\n• Draws and recovers actions, moves up to 3 minions", statut: "a-verifier" },

  // Beauty and the Beast
  BAB: { fr: "• 11 cartes sur 20 se jouent toutes seules quand elles sont défaussées de la main\n• Défausse des cartes pour jouer actions et sbires en plus ou piocher\n• Pioche pour refaire sa main\n• Rejoue ses sbires, se renforce modestement et relève le seuil de conquête", en: "• 11 cards out of 20 play themselves when discarded from your hand\n• Discards cards to play extra actions and minions or to draw\n• Draws to refill your hand\n• Replays its minions, gets modestly stronger and raises a base's breakpoint", statut: "a-verifier" },

  // Big Hero 6
  BIG: { fr: "• Pose des jetons +1 en masse et les déplace\n• Améliore les sbires qui ont un jeton et progresse avec leur nombre\n• Joue en essaim avec 4 Microbot Swarm de force 2\n• Gêne les sbires sans jeton", en: "• Places +1 counters in bulk and moves them\n• Upgrades minions with a counter and scales with their number\n• Plays in a swarm with 4 power-2 Microbot Swarms\n• Hinders minions without counters", statut: "a-verifier" },

  // Frozen
  FRO: { fr: "• Chaîne ses sbires : chacun en cherche ou en joue un autre\n• Rejoue des sbires depuis la défausse\n• Cherche des sbires et regarde le dessus de sa pioche\n• Gagne de la force selon ses sbires et protège les siens de la destruction", en: "• Chains its minions: each one fetches or plays another\n• Replays minions from the discard pile\n• Searches for minions and looks at the top of your deck\n• Gains power from its minions and protects them from destruction", statut: "a-verifier" },

  // Mulan
  MUL: { fr: "• Pose des jetons +1 en masse\n• Ses 4 sbires clés ne s’activent que quand un jeton leur est posé (pioche, action en plus)\n• Détruit les sbires de faible force\n• Protège ses sbires et joue des sbires en plus", en: "• Places +1 counters in bulk\n• Its 4 key minions only trigger when a counter is placed on them (draw, extra action)\n• Destroys low-power minions\n• Protects its minions and plays extra minions", statut: "a-verifier" },

  // The Lion King
  LIK: { fr: "• Fait vivre sa défausse : le sbire de force 6 pose jusqu’à 4 jetons +1 en y allant\n• Cherche des remplaçants quand ses 4 sbires de force 2 vont en défausse\n• Rejoue et échange ses sbires\n• Pioche, renforce et détruit un sbire de force 3 ou moins", en: "• Makes its discard pile work: the power-6 minion places up to 4 +1 counters when it goes there\n• Fetches replacements when its 4 power-2 minions go to the discard pile\n• Replays and swaps its minions\n• Draws, boosts and destroys a minion with power 3 or less", statut: "a-verifier" },

  // The Nightmare Before Christmas
  NBC: { fr: "• Mise sur les modificateurs de sbire : 8 cartes sur 20\n• Recycle et joue ses modificateurs depuis la défausse ou en action en plus\n• Déplace et exploite ses modificateurs pour gagner de la force\n• Regarde la main d’un adversaire", en: "• Bets on minion modifiers: 8 of its 20 cards\n• Recycles and plays its modifiers from the discard pile or as extra actions\n• Moves and exploits its modifiers to gain power\n• Looks at an opponent's hand", statut: "a-verifier" },

  // Wreck-It Ralph
  WIR: { fr: "• Mise sur les modificateurs de base : 7 cartes sur 20\n• Déplace ses sbires pour les renforcer\n• Fuit et regroupe les sbires pour les garder après la conquête\n• Remplace ou détruit une base sans la faire marquer", en: "• Bets on base modifiers: 7 of its 20 cards\n• Moves its minions to power them up\n• Flees and regroups minions to keep them after a base scores\n• Replaces or destroys a base without scoring it", statut: "a-verifier" },

  // Pingouins
  PIN: { fr: "• Jouez des sbires supplémentaires aléatoires directement depuis votre deck\n• Déclenche des capacités à chaque fois que vous jouez un sbire de cette manière", en: "• Play extra random minions directly from your deck\n• Triggers abilities each time you play a minion this way", statut: "a-verifier" },

  // Teens
  TEE: { fr: "• Synergie entre les différentes créatures\n• Que des créatures à 3 de force\n• Multiples effets de renforcement sur les créatures", en: "• Synergy between the different minions\n• Only power-3 minions\n• Multiple power-boost effects on minions", statut: "a-verifier" },

  // Traqueurs de Spectres
  TDS: { fr: "• Pose 6 Spectres sur les bases : chacun relève de 3 le seuil de conquête\n• Les détruit pour des bonus (seuil abaissé, jeton +1, carte ou action en plus)\n• Transfère ses actions d’une base à une autre\n• Pioche, cherche des spectres et stocke des sbires dessous", en: "• Places 6 Wraiths on bases: each raises the breakpoint by 3\n• Destroys them for bonuses (lowered breakpoint, +1 counter, extra card or action)\n• Transfers its actions from one base to another\n• Draws, searches for Wraiths and stores minions under them", statut: "a-verifier" },

  // Extramorphes
  EXT: { fr: "• Joue des sbires en plus depuis le dessus de la pioche\n• Transforme des sbires de force 3 ou moins en les détruisant pour en jouer un autre\n• Détruit une base et ses cartes avec une action\n• Déplace des sbires, trie sa pioche et cherche ses cartes clés", en: "• Plays extra minions off the top of your deck\n• Transforms minions with power 3 or less by destroying them and playing another\n• Destroys a base and its cards with an action\n• Moves minions, sorts your deck and searches for key cards", statut: "a-verifier" },

  // Hommes d'Action
  HDA: { fr: "• 6 sbires uniques de force 5 et 14 actions\n• Presque tout marche avec un seul sbire sur la base : force en plus ou jetons\n• Abaisse le seuil de conquête (jusqu’à 5) pour marquer avec un gros sbire\n• Joue des actions en plus, pioche et détruit des sbires adverses faibles", en: "• 6 unique power-5 minions and 14 actions\n• Almost everything works with a single minion on the base: extra power or counters\n• Lowers the breakpoint (by up to 5) to score with one big minion\n• Plays extra actions, draws and destroys weak opposing minions", statut: "a-verifier" },

  // Retourneurs du Futur
  RDF: { fr: "• Met des cartes en stase pour les jouer gratuitement et en plus lors d’un tour suivant\n• Ajoute ou retire des jetons de stase pour retarder ou accélérer ses cartes\n• Pose des jetons +1 quand un jeton de stase est retiré\n• Pioche, récupère des cartes et abaisse le seuil de conquête selon les jetons de stase", en: "• Puts cards into stasis to play them for free as extras on a later turn\n• Adds or removes stasis counters to delay or speed up its cards\n• Places +1 counters whenever a stasis counter is removed\n• Draws, recovers cards and lowers a base's breakpoint based on stasis counters", statut: "a-verifier" },

  // Champions du Monde
  CDM: { fr: "Cette faction réunis des cartes de pleins d'autres factions existantes", en: "This faction brings together cards from many other existing factions", statut: "a-verifier" },

  // Gobelins
  GOB: { fr: "• Faction porté sur le hasard et la chance\n• Munissez-vous d'une pièce de monnaie pour jouer", en: "• A faction built on randomness and luck\n• Grab a coin to play", statut: "a-verifier" },

  // Sirènes
  SIR: { fr: "• Déplacer vos créatures et celles de vos adversaires\n• Empêcher vos adversaires d'ajouter leur force à une base", en: "• Move your minions and your opponents'\n• Prevent your opponents from adding their power to a base", statut: "a-verifier" },

  // Squelettes
  SQU: { fr: "Enterre les cartes pour surprendre vos adversaires", en: "Buries cards to surprise your opponents", statut: "a-verifier" },

  // Adolescent Epic Geckos
  GEC: { fr: "• Enchaîne les actions : 8 sur 10 donnent une action en plus si c’est la première du tour\n• Pose beaucoup de jetons +1 sur ses sbires dès la 2e action du tour\n• Échange ses sbires en jeu contre un sbire de nom différent\n• Pioche, déplace des sbires et récupère des actions standard", en: "• Chains actions: 8 out of 10 give an extra action if it is the first one this turn\n• Places many +1 counters on its minions from the 2nd action of the turn\n• Swaps its minions in play for a minion with a different name\n• Draws, moves minions and recovers standard actions", statut: "a-verifier" },

  // G.I. Gerald
  GIG: { fr: "• 17 cartes Fusion sur 20, jouables comme sbire ou comme action avec un effet différent\n• Joue des sbires de force 2 ou moins et des actions en plus\n• Pose des jetons +1 et donne de la force jusqu’à la fin du tour\n• Pioche, remélange la défausse, copie l’action d’une autre fusion et déplace un sbire", en: "• 17 Fusion cards out of 20, played as a minion or an action with a different effect\n• Plays extra minions of power 2 or less and extra actions\n• Places +1 counters and gives power until the end of the turn\n• Draws, shuffles the discard pile back, copies another fusion's action and moves a minion", statut: "a-verifier" },

  // Pearl and the Images
  PEA: { fr: "• Réagit à la force adverse : 4 sbires de force 2 gagnent un jeton +1 ou la rejoignent\n• Partage ses jetons +1 avec les adversaires pour en profiter\n• Aide tous les joueurs (force, sbires, pioche) pour mieux en profiter\n• Contrôle léger sans destruction", en: "• Reacts to opposing power gains: 4 power-2 minions get a +1 counter or join the base\n• Shares its +1 counters with opponents to profit from it\n• Helps every player (power, minions, draws) to profit more\n• Light control, no destruction", statut: "a-verifier" },

  // Rulers of the Cosmos
  RTC: { fr: "• 7 actions sur 20 se posent sur des sbires et leur donnent un Talent\n• Transfère ses actions d’un sbire à un autre, même avant la conquête\n• Joue des actions en plus et en pioche\n• Échange un sbire de force 2 portant une épée contre un sbire de force 5 ou plus", en: "• 7 actions out of 20 are played on minions and give them a Talent\n• Transfers its actions from one minion to another, even before a base scores\n• Plays extra actions and draws them\n• Swaps a power-2 minion carrying a Sword for a power-5-or-more minion", statut: "a-verifier" },

  // Slashers
  SLA: { fr: "• 5 sbires uniques de force 5, chacun cherche son équipement (une action sur sbire)\n• Détruit les sbires adverses de faible force, avant la conquête ou après un déplacement\n• Se renforce en détruisant\n• Se déplace vers les sbires adverses et les harcèle avec ses actions", en: "• 5 unique power-5 minions, each fetching its own gear (an action played on a minion)\n• Destroys weak opposing minions, before a base scores or after a move\n• Grows by destroying\n• Moves toward opposing minions and harasses them with its actions", statut: "a-verifier" },

  // Clowns
  CLO: { fr: "• Rejoue les actions standard de ta défausse (4 sbires)\n• Remplit sa défausse d’actions en les cherchant dans la pioche\n• Bonus aux actions jouées depuis la défausse : action, carte ou sbire en plus, ou plus de force\n• Pioche, donne de la force et déplace jusqu’à 2 sbires", en: "• Replays standard actions from your discard pile (4 minions)\n• Fills its discard pile with actions searched from your deck\n• Bonus for actions played from the discard pile: extra action, card or minion, or more power\n• Draws, gives power and moves up to 2 minions", statut: "a-verifier" },

  // ----- Cartes spéciales (voir data/factions.js) : texte vide = pas de bouton « Notes » -----
  // Monstres
  MONSTRES: { fr: "• 20 cartes disponibles — extension Munchkin\n• Apparaissent automatiquement sur certaines bases et augmentent leur seuil de conquête\n• Lorsqu'ils sont détruits, rapportent des trésors selon leur valeur\n• Si une base est conquise, les trésors des monstres survivants sont partagés entre les joueurs présents", en: "• 20 cards available — Munchkin expansion\n• Appear automatically on some bases and raise their breakpoint\n• When destroyed, they reward treasures according to their value\n• If a base scores, the treasures of the surviving monsters are shared among the players present", statut: "a-verifier" },

  // Trésors
  TRESORS: { fr: "• 22 cartes disponibles — extension Munchkin (3 créatures et 19 actions)\n• Récompenses obtenues principalement en détruisant des monstres\n• Jouées comme des créatures ou des actions classiques\n• Permettent d'obtenir des effets supplémentaires et de renforcer son jeu", en: "• 22 cards available — Munchkin expansion (3 minions and 19 actions)\n• Rewards mainly obtained by destroying monsters\n• Played like regular minions or actions\n• Grant extra effects and strengthen your game", statut: "a-verifier" },

  // Démences
  DEMENCE: { fr: "• 30 cartes disponibles — extension Cthulhu Fhtagn !\n• Cartes communes accessibles grâce aux capacités de certaines factions\n• Chaque carte permet de piocher 2 cartes ou de retourner dans la pioche commune\n• Chaque paire conservée en fin de partie fait perdre 1 PV", en: "• 30 cards available — Cthulhu Fhtagn! expansion\n• Shared cards obtained through the abilities of certain factions\n• Each card lets you draw 2 cards or return to the shared deck\n• Each pair kept at the end of the game costs 1 VP", statut: "a-verifier" },
};
