// SOMMAIRE DES DONNÉES — point d'entrée unique, chargé par index.html.
// Chaque type de données est dans son propre fichier de ce dossier. Pour en ajouter un :
// créer data/<nom>.js (qui commence par DATA.<nom> = {...}) puis ajouter "<nom>" à la liste ci-dessous.
window.DATA = { titans: {}, notes: {}, sources: {}, stats: {}, cartes: {}, rank: {}, speciales: {} };
["titans", "notes", "sources", "stats", "cartes", "rank", "speciales"].forEach(function (n) {
  document.write('<script src="data/' + n + '.js"><\/script>');
});
