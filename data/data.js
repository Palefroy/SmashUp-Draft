// SOMMAIRE DES DONNÉES — point d'entrée unique, chargé par index.html.
// Chaque type de données est dans son propre fichier de ce dossier. Pour en ajouter un :
// créer data/<nom>.js (qui commence par DATA.<nom> = {...}) puis ajouter "<nom>" à la liste ci-dessous.
// Exception : "factions" (data/factions.js) définit window.FACTIONS (extensions, codes, cartes spéciales) et non DATA.<nom> ; il est chargé en premier.
window.DATA = { titans: {}, notes: {}, sources: {}, stats: {}, cartes: {}, rank: {} };
["factions", "titans", "notes", "sources", "stats", "cartes", "rank"].forEach(function (n) {
  document.write('<script src="data/' + n + '.js"><\/script>');
});
