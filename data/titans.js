// TITANS — un bloc par faction. Case vide ("") = rien n'est affiché.
// Ne pas supprimer de faction ni changer les noms de champs. Garder les virgules et les guillemets.
//   nom / capacite : texte FR et EN (reformulé, pas copié-collé)
//   statut         : "officiel" | "communautaire" | "a-verifier"
//   Optionnel (à ajouter dans le bloc si besoin) :
//     source: "illus" ou "cards"  → image utilisée pour la vignette
//     crop: { x: 70, y: 30, zoom: 2 }  → point focal en % (0-100) et zoom ; sans crop = carte entière
//
// LOTS 1-3 remplis : les 32 factions avec titan officiel (liste AEG). Les autres factions n'ont pas de titan : champs vides.
// Convention : capacite.en = reformulation fidèle d'un texte officiel AEG ; capacite.fr = traduction NON officielle ;
// nom.fr vide tant que le nom français officiel n'est pas retrouvé.

DATA.titans = {
  // Aliens
  ALI: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Dinosaures
  DIN: {
    nom: { fr: "Fort Titanosaurus", en: "Fort Titanosaurus" },
    capacite: { fr: "Spécial : pendant votre tour, si vous n'avez pas joué de serviteur, vous pouvez détruire l'un de vos serviteurs pour jouer ce titan sur sa base ; placez sur lui un nombre de marqueurs +1 de puissance égal à la puissance du serviteur détruit. Continu : une fois par tour, après avoir joué une action qui affecte directement un ou plusieurs serviteurs, vous pouvez placer un marqueur +1 de puissance sur l'un de ces serviteurs et/ou sur ce titan. Talent : si ce titan porte au moins quatre marqueurs +1 de puissance, piochez une carte.", en: "Special: on your turn, if you have not played a minion, you may destroy one of your minions to play this titan on its base; place +1 power counters on it equal to the power of the destroyed minion. Ongoing: once per turn, after you play an action that directly affects one or more minions, you may place a +1 power counter on one of those minions and/or on this titan. Talent: if this titan has four or more +1 power counters on it, draw a card." },
    statut: "a-verifier",
    source: "illus",
    crop: { x: 70, y: 30, zoom: 2 },
  },

  // Ninjas
  NIN: {
    nom: { fr: "", en: "Invisible Ninja" },
    capacite: { fr: "Spécial : pendant votre tour, si ce titan n'était pas en jeu au début de votre tour, vous pouvez défausser une carte pour le jouer sur une base où vous avez un serviteur. Continu : une fois par tour, après avoir détruit une carte d'un autre joueur ou renvoyé l'un de vos serviteurs dans votre main, vous pouvez regarder les deux cartes du dessus de votre pioche, en piocher une et mélanger l'autre dans votre pioche. Spécial : au début de votre tour, vous pouvez détruire ce titan pour jouer un serviteur supplémentaire de puissance 3 ou moins.", en: "Special: on your turn, if this titan was not in play at the start of your turn, you may discard a card to play it at a base where you have a minion. Ongoing: once per turn, after you destroy another player's card or return one of your minions to your hand, you may look at the top two cards of your deck, draw one, and shuffle the other into your deck. Special: at the start of your turn, you may destroy this titan to play an extra minion of power 3 or less." },
    statut: "a-verifier",
  },

  // Pirates
  PIR: {
    nom: { fr: "", en: "The Kraken" },
    capacite: { fr: "Spécial : après qu'une base où vous aviez un serviteur a été marquée, tant que ce titan n'est pas en jeu, vous pouvez dire « Libérez le Kraken ! » pour le jouer sur la base qui la remplace. Talent : déplacez ce titan vers une autre base ; les serviteurs des autres joueurs présents sur cette base subissent -1 de puissance jusqu'au début de votre prochain tour. Spécial : après que cette base a été marquée, déplacez l'un de vos serviteurs présents ici vers une autre base.", en: "Special: after a base scores where you had a minion, while this titan is not in play, you may say \"Release the Kraken!\" to play it on the base that replaces it. Talent: move this titan to another base; other players' minions there get -1 power until the start of your next turn. Special: after this base scores, move one of your minions from here to another base." },
    statut: "a-verifier",
  },

  // Robots
  ROB: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Petit Peuple
  PTP: {
    nom: { fr: "", en: "Big Funny Giant" },
    capacite: { fr: "Spécial : à la place de votre jeu de serviteur normal, vous pouvez jouer ce titan. Continu : après qu'un autre joueur a joué un serviteur ici, il doit défausser une carte. À la fin du tour de chaque autre joueur, s'il n'a pas de serviteur ici, vous pouvez placer un marqueur +1 de puissance sur ce titan. Spécial : lorsque cette base est marquée, si vous êtes le vainqueur et qu'au moins un autre joueur n'a pas de serviteur ici, gagnez 1 PV.", en: "Special: instead of your regular minion play, you may play this titan. Ongoing: after another player plays a minion here, that player must discard a card. At the end of each other player's turn, if they have no minion here, you may place a +1 power counter on this titan. Special: when this base scores, if you are the winner and at least one other player has no minion here, gain 1 VP." },
    statut: "a-verifier",
  },

  // Sorciers
  SOR: {
    nom: { fr: "", en: "Arcane Protector" },
    capacite: { fr: "Spécial : après avoir joué votre cinquième carte (ou plus) du tour, vous pouvez jouer ce titan. Continu : vous avez +1 de puissance ici pour chaque tranche de deux cartes dans votre main. Talent : piochez une carte.", en: "Special: after you play your fifth or later card in a turn, you may play this titan (at any point in the turn, whatever the phase). Ongoing: you have +1 power here for every two cards in your hand. Talent: draw a card." },
    statut: "a-verifier",
  },

  // Zombies
  ZOM: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Cavalerie Ours
  CAO: {
    nom: { fr: "", en: "Major Ursa" },
    capacite: { fr: "Spécial : à la place de votre jeu de serviteur normal, vous pouvez jouer ce titan. Continu : après qu'un serviteur d'un autre joueur s'est déplacé vers cette base ou depuis celle-ci, vous pouvez placer un marqueur +1 de puissance sur ce titan. Talent : placez un marqueur +1 de puissance sur un serviteur présent ici OU déplacez ce titan.", en: "Special: instead of your regular minion play, you may play this titan. Ongoing: after another player's minion moves to or from this base, you may place a +1 power counter on this titan. Talent: place a +1 power counter on a minion here OR move this titan." },
    statut: "a-verifier",
  },

  // Fantômes
  FAN: {
    nom: { fr: "", en: "Creampuff Man" },
    capacite: { fr: "Spécial : pendant votre tour, vous pouvez jouer ce titan si vous n'avez aucune carte en main. Continu : vous avez +5 de puissance ici moins le nombre de cartes dans votre main (minimum 0). Talent : défaussez une carte pour jouer, comme action supplémentaire, une action standard (qui ne se place ni sur une base ni sur un serviteur) depuis votre défausse ; placez-la sous votre pioche au lieu de la défausse.", en: "Special: on your turn, you may play this titan if you have no cards in your hand. Ongoing: you have +5 power here minus the number of cards in your hand (minimum 0). Talent: discard a card to play a standard action (one that is not played on a base or on a minion) from your discard pile as an extra action; place that action on the bottom of your deck instead of the discard pile." },
    statut: "a-verifier",
  },

  // Plantes Carnivores
  PLC: {
    nom: { fr: "", en: "Killer Kudzu" },
    capacite: { fr: "Spécial : au début de votre tour, si ce titan n'est pas en jeu, placez un marqueur +1 de puissance dessus. Pendant votre tour, si ce titan porte au moins trois marqueurs, vous pouvez le jouer à la place de votre jeu de serviteur normal, en conservant jusqu'à six marqueurs dessus. Continu : après que ce titan a quitté le jeu, mélangez dans votre pioche jusqu'à deux serviteurs de votre défausse OU piochez deux cartes. Talent : détruisez ce titan pour jouer, comme serviteur supplémentaire, un serviteur de votre défausse dont la puissance est égale ou inférieure au nombre de marqueurs +1 de puissance sur ce titan.", en: "Special: at the start of your turn, if this titan is not in play, place a +1 power counter on it. On your turn, if this titan has three or more counters on it, you may play it instead of your regular minion play, keeping up to six counters on it. Ongoing: after this titan leaves play, shuffle up to two minions from your discard pile into your deck OR draw two cards. Talent: destroy this titan to play an extra minion from your discard pile whose power is equal to or less than the number of +1 power counters on this titan." },
    statut: "a-verifier",
  },

  // Steampunks
  STE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Grands Anciens
  GRA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Innsmouth
  INN: {
    nom: { fr: "", en: "Dagon" },
    capacite: { fr: "Spécial : pendant votre tour, vous pouvez jouer ce titan sur une base où vous avez au moins deux serviteurs portant le même nom. Continu : vous avez +1 de puissance ici pour chacun de vos serviteurs présents qui porte le même nom qu'un autre serviteur présent ici. Talent : jouez un serviteur supplémentaire.", en: "Special: on your turn, you may play this titan on a base where you have two or more minions with the same name. Ongoing: you have +1 power here for each of your minions here that has the same name as another minion here. Talent: play an extra minion." },
    statut: "a-verifier",
  },

  // Serviteurs de Cthulhu
  SDC: {
    nom: { fr: "", en: "Cthulhu" },
    capacite: { fr: "Spécial : à la place de votre jeu d'action normal, piochez deux cartes Folie pour jouer ce titan sur une base où vous avez un de vos serviteurs. Continu : après avoir joué ou pioché une carte Folie, placez un marqueur +1 de puissance sur ce titan (aucun marqueur n'est placé lors de la toute première mise en jeu). Talent : piochez une carte Folie, OU placez une carte Folie de votre main dans la main d'un autre joueur.", en: "Special: instead of your regular action play, draw two Madness cards to play this titan on a base where you have one of your minions. Ongoing: after you play or draw a Madness card, place a +1 power counter on this titan (none is placed when the titan is first played). Talent: draw a Madness card, OR place a Madness card from your hand into another player's hand." },
    statut: "a-verifier",
  },

  // Université Miskatonic
  MIS: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Métamorphes
  MET: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Singes Cyborgs
  SIC: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Super Espions
  SUE: {
    nom: { fr: "", en: "Moon Zero Three" },
    capacite: { fr: "Spécial : à la place de votre jeu d'action normal, vous pouvez jouer ce titan pour regarder la main d'un joueur ayant un serviteur sur sa base. Talent : regardez la carte du dessus de n'importe quelle pioche et replacez-la dessus ou dessous. Continu : après qu'un autre joueur a défaussé une ou plusieurs cartes de sa main ou de sa pioche, vous pouvez placer un marqueur +1 de puissance sur ce titan.", en: "Special: instead of your regular action play, you may play this titan to look at the hand of a player who has a minion at its base. Talent: look at the top card of any deck and place it on the top or bottom of that deck. Ongoing: after another player discards one or more cards from their hand or deck, you may place a +1 power counter on this titan." },
    statut: "a-verifier",
  },

  // Voyageurs du Temps
  VDT: {
    nom: { fr: "", en: "Time Box" },
    capacite: { fr: "Spécial : au début de votre tour, ou lorsqu'une carte va dans votre main depuis le jeu ou depuis la défausse, placez un marqueur sur ce titan s'il n'est pas en jeu. Après avoir placé le 5e marqueur (ou plus), vous pouvez retirer tous les marqueurs et jouer ce titan. (Ces marqueurs ne servent qu'à compter ; ce ne sont pas des marqueurs +1 de puissance.) Talent : jouez ici un serviteur supplémentaire de puissance 2 ou moins, et/ou jouez une action supplémentaire.", en: "Special: at the start of your turn, or when a card goes to your hand from play or from the discard pile, place a counter on this titan if it is not in play. After you place the 5th or higher counter on it, you may remove all counters and play this titan. (These counters are only for counting; they are not +1 power counters.) Talent: play an extra minion here with power 2 or less, and/or play an extra action." },
    statut: "a-verifier",
  },

  // Fourmis Géantes
  FOU: {
    nom: { fr: "", en: "Death on Six Legs" },
    capacite: { fr: "Spécial : pendant votre tour, vous pouvez jouer ce titan s'il y a au moins sept marqueurs +1 de puissance sur vos serviteurs. Continu : lorsqu'un serviteur va à la défausse, transférez un de ses marqueurs +1 de puissance sur ce titan. Talent : jouez une action supplémentaire.", en: "Special: on your turn, you may play this titan if there are seven or more +1 power counters on your minions. Ongoing: when a minion goes to the discard pile, transfer one of its +1 power counters to this titan. Talent: play an extra action." },
    statut: "a-verifier",
  },

  // Loups-Garous
  LOU: {
    nom: { fr: "", en: "Great Wolf Spirit" },
    capacite: { fr: "Spécial : pendant votre tour, si vous avez le plus de puissance sur au moins deux bases, vous pouvez jouer ce titan sur l'une d'elles. Continu : vos cartes présentes ici peuvent utiliser leur Talent une seconde fois pendant votre tour. Au début de votre tour, vous pouvez déplacer ce titan vers une base où vous avez plus de puissance que tout autre joueur. Talent : l'un de vos serviteurs gagne +1 de puissance jusqu'à la fin du tour.", en: "Special: on your turn, if you have the most power on two or more bases, you may play this titan on one of them. Ongoing: your cards here may use their Talents a second time on your turn. At the start of your turn, you may move this titan to a base where you have more power than any other player. Talent: one of your minions gains +1 power until the end of the turn." },
    statut: "a-verifier",
  },

  // Savants Fous
  SAF: {
    nom: { fr: "", en: "The Bride" },
    capacite: { fr: "Spécial : au début de votre tour, vous pouvez choisir deux des effets suivants et les réaliser dans l'ordre de votre choix, sur des serviteurs différents, pour jouer ce titan : remettre dans la boîte un serviteur vous appartenant, depuis votre main ou votre défausse ; détruire l'un de vos serviteurs ; retirer un marqueur +1 de puissance de l'un de vos serviteurs. Continu : une fois par tour, après avoir placé ou retiré un marqueur de puissance sur vos serviteurs, piochez une carte. Talent : placez un marqueur +1 de puissance sur l'un de vos serviteurs présents ici OU retirez deux marqueurs +1 de puissance au total de vos serviteurs pour jouer une action supplémentaire.", en: "Special: at the start of your turn, you may choose two of the following effects and carry them out in any order, on different minions, to play this titan: put a minion you own from your hand or discard pile into the box; destroy one of your minions; remove a +1 power counter from one of your minions. Ongoing: once per turn, after you place or remove a power counter on your minions, draw a card. Talent: place a +1 power counter on one of your minions here OR remove two +1 power counters in total from your minions to play an extra action." },
    statut: "a-verifier",
  },

  // Vampires
  VAM: {
    nom: { fr: "", en: "Ancient Lord" },
    capacite: { fr: "Spécial : lorsque vous devez placer un ou plusieurs marqueurs +1 de puissance sur vos serviteurs, si ce titan n'est pas en jeu, vous pouvez en placer un sur ce titan à la place. Ensuite, si ce titan a au moins trois marqueurs +1 de puissance, vous pouvez tous les retirer pour le jouer. Continu : après avoir placé un marqueur +1 de puissance sur l'un de vos serviteurs présents ici qui n'en avait pas, placez-y-en un second. Talent : placez un marqueur +1 de puissance sur l'un de vos serviteurs qui en a déjà un.", en: "Special: when you would place one or more +1 power counters on your minions, if this titan is not in play, you may place one of them on this titan instead. Then, if this titan has at least three +1 power counters, you may remove all of them to play it. Ongoing: after you place a +1 power counter on one of your minions here that had none, place another +1 power counter on it. Talent: place a +1 power counter on one of your minions that already has one." },
    statut: "a-verifier",
  },

  // Chatons
  CHA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Fées
  FEE: {
    nom: { fr: "", en: "Spirit of the Forest" },
    capacite: { fr: "Spécial : à la place de votre jeu de serviteur et de votre jeu d'action normaux, vous pouvez jouer ce titan. Continu : une fois par tour, lorsque vous utilisez une capacité qui contient un OU, vous pouvez en utiliser les deux parties, dans l'ordre de votre choix. Continu : si ce titan devait être retiré du jeu après avoir perdu un affrontement de titans, vous pouvez le déplacer vers une autre base à la place.", en: "Special: instead of your regular minion and action play, you may play this titan. Ongoing: once per turn, when you use an ability that says OR, you may use both parts in any order. Ongoing: if this titan would be removed after losing a clash of titans, you may move it to another base instead." },
    statut: "a-verifier",
  },

  // Poneys Magiques
  PON: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Princesses
  PRI: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Geeks
  GEE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Elfes
  ELF: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Guerriers
  GUE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Halfelins
  HAL: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Magiciens
  MAG: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Nains
  NAI: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Orques
  ORQ: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Prêtres
  PRE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Voleurs
  VOL: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Changeformers
  CHF: {
    nom: { fr: "", en: "Mergacon" },
    capacite: { fr: "Spécial : au début de votre tour, si vous avez au moins deux serviteurs sur une base, vous pouvez jouer ce titan sur celle-ci. Continu : vous avez +3 de puissance ici. Talent : déplacez ce titan vers une autre base ; il perd sa capacité continue jusqu'à la fin du tour.", en: "Special: at the start of your turn, if you have two or more minions on a base, you may play this titan there. Ongoing: you have +3 power here. Talent: move this titan to another base; it loses its ongoing ability until the end of the turn." },
    statut: "a-verifier",
  },

  // Chevaliers des Étoiles
  CDE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Squatteurs de Trône
  SDT: {
    nom: { fr: "", en: "The Hill that Strolls" },
    capacite: { fr: "Spécial : pendant votre tour, vous pouvez jouer ce titan si au moins deux serviteurs qui vous appartiennent sont contrôlés par d'autres joueurs. Continu : après avoir donné le contrôle d'un de vos serviteurs à un autre joueur, vous pouvez placer un marqueur +1 de puissance dessus. Talent : donnez le contrôle d'un de vos serviteurs à un autre joueur pour piocher une carte, OU reprenez le contrôle d'un serviteur présent ici qui vous appartient.", en: "Special: on your turn, you may play this titan if two or more minions you own are controlled by other players. Ongoing: after you give control of one of your minions to another player, you may place a +1 power counter on it. Talent: give control of one of your minions to another player to draw a card, OR take control of a minion here that you own." },
    statut: "a-verifier",
  },

  // Voyageurs de l'Espace
  VDE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Dragons
  DRA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Mythologies Grecques
  MYG: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Requins
  REQ: {
    nom: { fr: "", en: "Helicoprion" },
    capacite: { fr: "Spécial : tant que ce titan n'est pas en jeu, au début de votre tour ou après la destruction d'un serviteur, placez un marqueur sur ce titan ; ensuite, s'il y a au moins quatre marqueurs dessus, vous pouvez les retirer et le jouer. Continu : une fois par tour, après avoir détruit le serviteur de n'importe quel joueur, vous pouvez soit déplacer ce titan vers la base de ce serviteur et ajouter sa puissance à votre total là-bas jusqu'à la fin du tour, soit placer un marqueur +1 de puissance sur ce titan. Talent : mélangez dans votre pioche un serviteur de puissance 3 ou moins de votre défausse, OU cherchez un Mako dans votre pioche et/ou votre défausse et mettez-le dans votre main.", en: "Special: while this titan is not in play, at the start of your turn or after any minion is destroyed, place a counter on this titan; then, if there are four or more counters on it, you may remove them and play it. Ongoing: once per turn, after you destroy any player's minion, you may either move this titan to that minion's base and add its power to your total there until the end of the turn, or place a +1 power counter on this titan. Talent: shuffle a minion of power 3 or less from your discard pile into your deck, OR search your deck and/or discard pile for a Mako and put it into your hand." },
    statut: "a-verifier",
  },

  // Super-Héros
  SUH: {
    nom: { fr: "", en: "The Everything Glove" },
    capacite: { fr: "Spécial : après la destruction de l'un de vos serviteurs, vous pouvez jouer ce titan sur sa base. Continu : vos serviteurs de puissance 3 ou moins présents ici ne sont pas affectés par les capacités des autres joueurs. Talent : jouez ici un serviteur supplémentaire de puissance 2 ou moins OU piochez une carte.", en: "Special: after one of your minions is destroyed, you may play this titan at its base. Ongoing: your minions of power 3 or less here are not affected by other players' abilities. Talent: play an extra minion here of power 2 or less OR draw a card." },
    statut: "a-verifier",
  },

  // Tornades
  TOR: {
    nom: { fr: "", en: "Category 5" },
    capacite: { fr: "Spécial : après avoir déplacé deux serviteurs ou plus pendant un tour, vous pouvez jouer ce titan sur une base où vous avez un serviteur. Continu : après qu'un ou plusieurs de vos serviteurs se sont déplacés vers cette base ou depuis celle-ci, placez un marqueur +1 de puissance sur l'un d'eux. Talent : déplacez ce titan vers une autre base OU placez un marqueur +1 de puissance sur ce titan.", en: "Special: after you move two or more minions in a turn, you may play this titan on a base where you have a minion. Ongoing: after one or more of your minions move to or from here, place a +1 power counter on one of them. Talent: move this titan to another base OR place a +1 power counter on this titan." },
    statut: "a-verifier",
  },

  // Explorateurs
  EXP: {
    nom: { fr: "", en: "Very Large Boulder" },
    capacite: { fr: "Spécial : à la place de votre jeu de serviteur normal, vous pouvez jouer ce titan sur une base qui ne contient aucun serviteur, quel que soit le joueur. Continu : une fois par tour, après qu'un serviteur a quitté cette base, vous pouvez déplacer ce titan vers cette même base ; détruisez alors un serviteur sur cette base dont la puissance est inférieure au nombre de marqueurs +1 de puissance sur ce titan. Continu : à la fin de votre tour, si ce titan ne s'est pas déplacé, placez un marqueur +1 de puissance dessus.", en: "Special: instead of your regular minion play, you may play this titan on a base that has no player's minions. Ongoing: once per turn, after a minion moves from here, you may move this titan to that same base; then destroy a minion at that base with less power than the number of +1 power counters on this titan. Ongoing: at the end of your turn, if this titan did not move, place a +1 power counter on it." },
    statut: "a-verifier",
  },

  // Grands-Mères
  GME: {
    nom: { fr: "", en: "Great Grandma" },
    capacite: { fr: "Spécial : pendant votre tour, si vous n'avez aucun titan en jeu, vous pouvez dire « action » ou « serviteur » et révéler soit les deux cartes du dessus, soit les deux cartes du dessous de votre pioche ; si les deux sont de ce type, jouez ce titan. Remettez les cartes dans le même ordre. Continu : après avoir révélé ou regardé une ou plusieurs cartes de votre pioche, vous pouvez donner +1 de puissance à l'un de vos serviteurs jusqu'à la fin du tour. Talent : révélez la carte du dessous de votre pioche ; si c'est un serviteur de puissance 3 ou moins, jouez-le ici comme serviteur supplémentaire, sinon remettez-la.", en: "Special: on your turn, if you have no titan in play, you may say either \"action\" or \"minion\" and reveal either the top two or the bottom two cards of your deck; if both are of that type, play this titan. Put the cards back in the same order. Ongoing: after you reveal or look at one or more cards from your deck, you may give one of your minions +1 power until the end of the turn. Talent: reveal the bottom card of your deck; if it is a minion of power 3 or less, play it here as an extra minion, otherwise put it back." },
    statut: "a-verifier",
  },

  // Oursons
  OUR: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Rockstars
  ROK: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Kaijū
  KAI: {
    nom: { fr: "", en: "Gorgodzolla" },
    capacite: { fr: "Spécial : à la place de votre jeu de serviteur normal, vous pouvez jouer ce titan sur une base où vous avez au moins deux actions (les actions placées sur des serviteurs comptent). Continu : après avoir joué une action ou un serviteur sur cette base, placez un marqueur +1 de puissance sur ce titan. Continu : après avoir joué une action sur cette base, vous pouvez piocher une carte.", en: "Special: instead of your regular minion play, you may play this titan on a base where you have two or more actions (actions on minions there count). Ongoing: after you play an action or a minion on this base, place a +1 power counter on this titan. Ongoing: after you play an action on this base, you may draw a card." },
    statut: "a-verifier",
  },

  // Monstrapoches
  MON: {
    nom: { fr: "", en: "Rainboroc" },
    capacite: { fr: "Spécial : après avoir remporté une base alors que ce titan n'est pas en jeu, vous pouvez le jouer sur la base qui la remplace. Continu : la première fois à chaque tour que vous jouez ici un serviteur de puissance 2 ou moins, placez un marqueur +1 de puissance sur ce titan. Talent : mélangez dans votre pioche un serviteur de puissance 2 ou moins de votre défausse. Si vous le faites, vous pouvez déplacer ce titan vers une autre base.", en: "Special: after you win a base while this titan is not in play, you may play it on the base that replaces it. Ongoing: the first time each turn you play a minion here with power 2 or less, place a +1 power counter on this titan. Talent: shuffle a minion with power 2 or less from your discard pile into your deck; if you do, you may move this titan to another base." },
    statut: "a-verifier",
  },

  // Petites Magiciennes
  PMA: {
    nom: { fr: "", en: "Walking Castle" },
    capacite: { fr: "Spécial : à la place de votre jeu de serviteur normal, vous pouvez jouer ce titan sur une base où vous avez au moins deux serviteurs. Continu : vos serviteurs ici ne peuvent pas être détruits par les capacités des autres joueurs. Talent : déplacez ce titan et jusqu'à trois de vos serviteurs présents ici vers une autre base.", en: "Special: instead of your regular minion play, you may play this titan on a base where you have at least two minions. Ongoing: your minions here cannot be destroyed by other players' abilities. Talent: move this titan and up to three of your minions here to another base." },
    statut: "a-verifier",
  },

  // Super Combattants
  SUC: {
    nom: { fr: "", en: "Megabot" },
    capacite: { fr: "Spécial : à la place de votre jeu de serviteur normal, vous pouvez jouer ce titan sur une base où vous avez au moins trois serviteurs. Continu : vous avez +1 de puissance ici pour chacun de vos serviteurs présents. Spécial : avant qu'une autre base ne soit marquée, vous pouvez déplacer ce titan vers elle.", en: "Special: instead of your regular minion play, you may play this titan on a base where you have at least three minions. Ongoing: you have +1 power here for each of your minions here. Special: before another base scores, you may move this titan to there." },
    statut: "a-verifier",
  },

  // Danseurs Disco
  DIS: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Justiciers
  JUS: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Maîtres Kung-Fu
  KUN: {
    nom: { fr: "", en: "Sifu" },
    capacite: { fr: "Spécial : pendant votre tour, si vous avez au moins deux marqueurs +1 de puissance sur vos serviteurs, vous pouvez jouer ce titan et lui transférer deux marqueurs +1 de puissance ou plus provenant de vos serviteurs. Continu : lorsque vous transférez un ou plusieurs marqueurs +1 de puissance sur un serviteur, vous pouvez placer un marqueur +1 de puissance supplémentaire sur ce serviteur. Talent : transférez un marqueur +1 de puissance d'un de vos serviteurs vers un autre serviteur OU placez un marqueur +1 de puissance sur un serviteur qui n'en a pas.", en: "Special: on your turn, if you have two or more +1 power counters on your minions, you may play this titan and transfer two or more +1 power counters from your minions to it. Ongoing: when you transfer one or more +1 power counters to a minion, you may place an additional +1 power counter on that minion. Talent: transfer a +1 power counter from one of your minions to another minion OR place a +1 power counter on a minion that has none." },
    statut: "a-verifier",
  },

  // Routiers
  ROU: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Anciens Égyptiens
  EGY: {
    nom: { fr: "", en: "Sphinx" },
    capacite: { fr: "Spécial : au début de votre tour, vous pouvez renvoyer dans votre main l'une de vos cartes enterrées pour jouer ce titan sur sa base. Spécial : après qu'une base est marquée alors que ce titan est en jeu, vous pouvez renvoyer dans votre main l'une de vos cartes enterrées sur cette base. Talent : enterrez ici une carte de votre main.", en: "Special: at the start of your turn, you may return one of your buried cards to your hand to play this titan on its base. Special: after a base scores while this titan is in play, you may return one of your buried cards there to your hand. Talent: bury a card from your hand here." },
    statut: "a-verifier",
  },

  // Cow-Boys
  COW: {
    nom: { fr: "", en: "Pecos Bill" },
    capacite: { fr: "Spécial : lorsque vous devenez le challenger d'un duel, vous pouvez défausser une carte pour jouer ce titan à cet endroit ; ne résolvez aucun affrontement de titans avant la fin du duel. Continu : pendant les duels ici, les autres joueurs ne peuvent pas déplacer de serviteurs depuis cette base ni les renvoyer dans la main d'un joueur. Continu : après avoir remporté un duel, piochez une carte.", en: "Special: when you become the challenger in a duel, you may discard a card to play this titan there; do not resolve any titan clash until after the duel ends. Ongoing: during duels here, other players may not move minions from here or return them to a player's hand. Ongoing: after you win a duel, draw a card." },
    statut: "a-verifier",
  },

  // Samouraïs
  SAM: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Vikings
  VIK: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Dream Team
  DRE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Luchadors
  LUC: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Mousquetaires
  MOU: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Police Montée
  POM: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Sumos
  SUM: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Knights of the Round Table
  KRT: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Avengers
  AVE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Hydra
  HYD: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Kree
  KRE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Masters of Evil
  MOE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // S.H.I.E.L.D.
  SHI: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Sinister Six
  SIS: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Spider-Verse
  SPI: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Ultimates
  ULT: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Anciens Incas
  AIN: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Contes d'Anansi
  ANA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Contes de Grimm
  GRI: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Contes Féeriques Russes
  CFR: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Voyageurs Polynésiens
  VPO: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Moutons
  MOT: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Aladdin
  ALA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Beauty and the Beast
  BAB: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Big Hero 6
  BIG: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Frozen
  FRO: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Mulan
  MUL: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // The Lion King
  LIK: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // The Nightmare Before Christmas
  NBC: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Wreck-It Ralph
  WIR: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Pingouins
  PIN: {
    nom: { fr: "", en: "Emperor Penguin" },
    capacite: { fr: "Spécial : au début de votre tour, vous pouvez jouer ce titan sur une base où vous avez au moins trois serviteurs. Continu : à la place de votre jeu de serviteur normal, vous pouvez jouer ici un serviteur depuis le dessus de votre pioche.", en: "Special: at the start of your turn, you may play this titan on a base where you have three or more minions. Ongoing: instead of your regular minion play, you may play a minion off the top of your deck here." },
    statut: "a-verifier",
  },

  // Teens
  TEE: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Traqueurs de Spectres
  TDS: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Extramorphes
  EXT: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Hommes d'Action
  HDA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Retourneurs du Futur
  RDF: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Champions du Monde
  CDM: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Gobelins
  GOB: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Sirènes
  SIR: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Squelettes
  SQU: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Adolescent Epic Geckos
  GEC: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // G.I. Gerald
  GIG: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Pearl and the Images
  PEA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Rulers of the Cosmos
  RTC: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Slashers
  SLA: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

  // Clowns
  CLO: {
    nom: { fr: "", en: "" },
    capacite: { fr: "", en: "" },
    statut: "",
  },

};
