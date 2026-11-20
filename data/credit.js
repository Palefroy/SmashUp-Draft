// CRÉDITS — textes de la fenêtre « À propos » (ligne discrète « Crédits · Application » en bas de l'onglet Paramètres) et petites mentions de source au pied des bulles.
// Chargé par data/data.js (type "credit"). Tout est modifiable à la main ; textes FR / EN (si l'un manque, l'autre est affiché).
//
// sections : liste de blocs. Chaque bloc = { titre: {fr, en}, lignes: [ { nom: "Nom affiché", role: {fr, en}, url: "https://..." } ] }
//            role et url sont optionnels ("" ou absent = rien). Un bloc sans ligne n'est pas affiché : pratique pour préparer des sections vides.
// licence : { texte: {fr, en}, url } (voir plus bas).
// mentions : petites lignes grisées en pied de bulle de fiche. "combo" = bulle Combo ; "donnees" = bulles Notes et Stats.
// donneesCodes : [] = la mention "donnees" apparaît pour toutes les factions. Pour la limiter, y mettre les codes concernés, ex. ["DIN", "NIN"].
// application : liens de l'onglet « Application » (APK = fichier de la release GitHub « apk-latest » ; versions = page de toutes les releases).

DATA.credit = {

  intro: {
    fr: "Smash Up Draft est un projet de fan, gratuit. Merci à toutes celles et ceux qui ont rendu cette appli possible.",
    en: "Smash Up Draft is a free fan project. Thank you to everyone who made this app possible."
  },

  sections: [

    {
      titre: { fr: "Le jeu", en: "The game" },
      lignes: [
        { nom: "Alderac Entertainment Group (AEG)", role: { fr: "Éditeur d'origine de Smash Up", en: "Original publisher of Smash Up" }, url: "https://www.alderac.com" },
        { nom: "Paul Peterson", role: { fr: "Auteur de Smash Up", en: "Designer of Smash Up" }, url: "" },
        { nom: "IELLO", role: { fr: "Édition française du jeu", en: "French edition of the game" }, url: "" }
      ]
    },

    {
      titre: { fr: "Données et analyses", en: "Data and analyses" },
      lignes: [
        { nom: "WellStudioGaming", role: { fr: "Source d'une partie des notes et des stats des factions", en: "Source of part of the faction notes and stats" }, url: "" },
        { nom: "UseTheFour", role: { fr: "Analyses utilisées pour les synergies", en: "Analyses used for the synergies" }, url: "" },
        { nom: "Daniel Precioso", role: { fr: "Compilation des analyses de UseTheFour", en: "Compiled UseTheFour's analyses" }, url: "" }
      ]
    },

    {
      titre: { fr: "Illustrations", en: "Artwork" },
      lignes: [
        { nom: "", role: { fr: "Une grande partie des illustrations a été scannée par l'auteur de l'appli à partir de ses boîtes de jeu", en: "Much of the artwork was scanned by the app's author from their own game boxes" }, url: "" }
      ]
    },

    // Remerciements : décommenter et compléter (testeurs, amis, communauté...).
    // {
    //   titre: { fr: "Remerciements", en: "Thanks" },
    //   lignes: [ { nom: "Prénom ou pseudo", role: { fr: "Ce qu'il a fait", en: "What they did" }, url: "" } ]
    // },
  ],

  avertissement: {
    fr: "Projet de fan, non affilié à AEG ni à IELLO. Smash Up, ses illustrations, ses noms et ses marques appartiennent à leurs propriétaires respectifs.",
    en: "Fan project, not affiliated with AEG or IELLO. Smash Up, its artwork, names and trademarks belong to their respective owners."
  },

  // Licence : texte affiché en bas de l'onglet Crédits, avec le symbole copyleft (C inversé). url = lien vers le fichier LICENSE du dépôt GitHub ("" = pas de lien).
  licence: {
    texte: {
      fr: "Le code et les contenus originaux de cette appli sont libres (copyleft) : tu peux les reprendre, les modifier et les partager, à condition que toute œuvre dérivée reste libre sous la même licence. Cela ne concerne pas les illustrations, noms et marques de Smash Up, qui appartiennent à leurs propriétaires.",
      en: "The code and original content of this app are free (copyleft): you may reuse, modify and share them, as long as any derivative work stays free under the same licence. This does not cover Smash Up's artwork, names and trademarks, which belong to their owners."
    },
    url: ""
  },

  mentions: {
    combo:   { fr: "Synergies d'après les analyses de UseTheFour (compilées par Daniel Precioso).", en: "Synergies based on UseTheFour's analyses (compiled by Daniel Precioso)." },
    donnees: { fr: "Certaines données d'après WellStudioGaming.", en: "Some data based on WellStudioGaming." }
  },

  donneesCodes: [],

  application: {
    apk: "https://github.com/Palefroy/SmashUp-Draft/releases/download/apk-latest/SmashUp-Draft.apk",
    versions: "https://github.com/Palefroy/SmashUp-Draft/releases"
  }
};
