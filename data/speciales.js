// CARTES SPÉCIALES — cartes qui ne sont pas des factions (Monstres, Trésors, Démences). Elles apparaissent dans l'onglet Extensions,
// sous « Personnalisé », dans un encadré « Cartes spéciales » (sans case à cocher : elles ne participent jamais au tirage).
// Chaque entrée = un CODE (aussi utilisé comme nom d'image). Ce fichier ne contient que le NOM affiché ; le reste se renseigne comme pour une faction :
//   - illustration   : img/illus/<CODE>.webp  (ex. MONSTRES.webp ; optionnel : <CODE>2.webp = 2e illustration, retournement au clic)
//   - cartes         : data/cartes.js  -> <CODE>: []  (montage img/cards/<CODE>.jpg)  ou 3 noms de fichiers : ["MONSTRES_1.jpg", "MONSTRES_2.jpg", "MONSTRES_3.jpg"]
//   - notes (texte)  : data/notes.js   -> <CODE>: { fr: "...", en: "...", statut: "" }   (le bouton « Notes » n'apparaît que si le texte n'est pas vide)
// Pour ajouter une carte spéciale : une ligne ici + une ligne dans notes.js et cartes.js (même CODE, en MAJUSCULES, sans espace).
// L'ordre ci-dessous = l'ordre d'affichage.

DATA.speciales = {

  MONSTRES: { nom: { fr: "Monstres", en: "Monsters" } },

  TRESORS: { nom: { fr: "Trésors", en: "Treasures" } },

  DEMENCE: { nom: { fr: "Démences", en: "Madness" } },
};
