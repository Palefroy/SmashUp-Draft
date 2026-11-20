// TRADUCTIONS ANGLAISES de l'interface — dictionnaire lu par script.js (const EN) et maj.js.
// Clé = texte FRANÇAIS exact affiché dans l'appli, valeur = traduction anglaise. Texte absent = le français est affiché.
// Modifiable à la main : ce fichier fait partie du contenu mis à jour dans l'appli SANS nouvel APK (sauf les textes écrits en dur dans le code avec L("fr", "en") et ceux de index.html).
// Plusieurs blocs : si une même clé apparaît deux fois, le dernier bloc l'emporte. Ajouter une traduction = ajouter une ligne "français": "english", dans n'importe quel bloc.
// Les noms d'extensions (« Smash Up : Nom ») et de thèmes se traduisent ici aussi (voir readme-ia.txt, section 3).
DATA.traductions = {
  en: Object.assign({},
    // ---- Interface générale (écrans, boutons, modes, paramètres) ----
    {"Cartes spéciales": "Special cards", "Tirage Smash Up": "Smash Up Draw", "Tirer les Factions": "Draw Factions", "Paramètres": "Settings", "Historique": "History", "Extensions": "Expansions", "Nb joueurs": "Players", "Tirage": "Random draw", "Tout cocher": "Check all", "Tout décocher": "Uncheck all", "Vider l'historique": "Clear history", "Réinitialiser": "Reset", "Personnalisé": "Custom", "Nouvelle faction": "New faction", "commence": "goes first", "Passe l'écran à": "Hand the screen to", "Je suis": "I'm", "choisis 2 factions": "pick 2 factions", "Valider": "Confirm", "Bannies": "Banned", "Smash Up : Même Pas Mort": "Smash Up: Awesome Level 9000", "Smash Up : Cthulhu Fhtagn !": "Smash Up: The Obligatory Cthulhu Set", "Smash Up : Séries B": "Smash Up: Science Fiction Double Feature", "Smash Up : Monstres Sacrés": "Smash Up: Monster Smash", "Smash Up : Trop Minions": "Smash Up: Pretty Pretty Smash Up", "Smash Up : La Grosse Boîte pour Geek": "Smash Up: The Big Geeky Box", "Smash Up : Ressemblances Fortuites": "Smash Up: Cease and Desist", "Smash Up : Vous l'aurez voulu !": "Smash Up: It's Your Fault!", "Smash Up : Conflit de Générations": "Smash Up: What Were We Thinking?", "Smash Up : Rois du Japon": "Smash Up: Big in Japan", "Smash Up : Ces Années-Là": "Smash Up: That '70s Expansion", "Smash Up : Vous en voulez encore ?": "Smash Up: Oops, You Did It Again", "Smash Up : L'Énorme Boîte pour Geek": "Smash Up: The Bigger Geekier Box", "Smash Up : Tournée Mondiale - Incident Diplomatique": "Smash Up: World Tour - International Incident", "Smash Up : Tournée Mondiale - Choc des Cultures": "Smash Up: World Tour - Culture Shock", "Smash Up : Faction Moutons": "Smash Up Sheep Promo", "Smash Up : Faction Pingouins": "Smash Up Penguins", "Smash Up : Fait son Cinéma": "Smash Up: Excellent Movies, Dudes!", "Smash Up : Édition Anniversaire": "Smash Up: 10th Anniversary", "Dinosaures": "Dinosaurs", "Petit Peuple": "Tricksters", "Sorciers": "Wizards", "Cavalerie Ours": "Bear Cavalry", "Fantômes": "Ghosts", "Plantes Carnivores": "Killer Plants", "Grands Anciens": "Elder Things", "Serviteurs de Cthulhu": "Minions of Cthulhu", "Université Miskatonic": "Miskatonic University", "Métamorphes": "Shapeshifters", "Singes Cyborgs": "Cyborg Apes", "Super Espions": "Super Spies", "Voyageurs du Temps": "Time Travelers", "Fourmis Géantes": "Giant Ants", "Loups-Garous": "Werewolves", "Savants Fous": "Mad Scientists", "Chatons": "Kitty Cats", "Fées": "Fairies", "Poneys Magiques": "Mythic Horses", "Elfes": "Elves", "Guerriers": "Warriors", "Magiciens": "Mages", "Nains": "Dwarves", "Orques": "Orcs", "Prêtres": "Clerics", "Voleurs": "Thieves", "Changeformers": "Changerbots", "Chevaliers des Étoiles": "Astroknights", "Voyageurs de l'Espace": "Star Roamers", "Mythologies Grecques": "Mythic Greeks", "Requins": "Sharks", "Super-Héros": "Superheroes", "Tornades": "Tornados", "Explorateurs": "Explorers", "Grands-Mères": "Grannies", "Oursons": "Teddy Bears", "Rockstars": "Rock Stars", "Kaijū": "Kaiju", "Monstrapoches": "Itty Critters", "Petites Magiciennes": "Magical Girls", "Super Combattants": "Mega Troopers", "Danseurs Disco": "Disco Dancers", "Justiciers": "Vigilantes", "Maîtres Kung-Fu": "Kung Fu Fighters", "Routiers": "Truckers", "Anciens Égyptiens": "Ancient Egyptians", "Cow-Boys": "Cowboys", "Samouraïs": "Samurai", "Mousquetaires": "Musketeers", "Police Montée": "Mounties", "Sumos": "Sumo Wrestlers", "Anciens Incas": "Ancient Incas", "Contes d'Anansi": "Anansi Tales", "Contes de Grimm": "Grimms' Fairy Tales", "Contes Féeriques Russes": "Russian Fairy Tales", "Voyageurs Polynésiens": "Polynesian Voyagers", "Moutons": "Sheep", "Pingouins": "Penguins", "Traqueurs de Spectres": "Wraithrustlers", "Extramorphes": "Extramorphs", "Hommes d'Action": "Action Heroes", "Retourneurs du Futur": "Backtimers", "Gobelins": "Goblins", "Sirènes": "Mermaids", "Squelettes": "Skeletons"},
    // ---- Fiche d'une faction (Fermer, Titan, Notes, Stats…) ----
    {
    "Nombre de joueurs": "Number of players", "Mode": "Mode", "Draft": "Draft",
    "Factions proposées par joueur": "Factions offered per player",
    "Taille de la réserve": "Common pool size",
    "Générateur Smash Up Avancé": "Advanced Smash Up Generator",
    "Changer le thème": "Change theme",
    "Historique des tirages": "Draw history", "Extensions & factions": "Expansions & factions",
    "Halfelins": "Halflings", "Dream Team": "Smash Up All Stars", "Champions du Monde": "World Champs",
    "Squatteurs de Trône": "Ignobles", "Luchadors": "Luchadores"
},
    // ---- Combos (Synergies, Menaces, Contre…) ----
    { "Fermer": "Close", "Titan": "Titan", "Notes": "Notes", "Stats": "Stats", "Statistiques": "Statistics",
    "Détails": "Details", "Chargement…": "Loading…", "Code de complexité": "Complexity code", "S = plus complexe · D = plus simple": "S = most complex · D = simplest" },
    // ---- Japon / Chine ----
    { "Combo": "Combo", "Synergies": "Synergies", "Menaces": "Threats", "Contre": "Counters",
    "Afficher les synergies": "Show synergies", "Afficher les menaces et contres": "Show threats and counters", "Activé": "On", "Désactivé": "Off",
    "Synergie avec ta sélection": "Synergy with your selection", "Synergie avec tes factions": "Synergy with your factions",
    "Contre une faction adverse": "Counters an opponent faction", "Menace tes factions": "Threatens your factions",
    "Afficher :": "Show:", "Rang": "Tier", "Bannir": "Ban", "Complexe": "Complex", "Simple": "Simple",
    "Reprendre la partie ?": "Resume the game?", "joueurs": "players", "étape": "step", "Reprendre": "Resume", "Abandonner": "Discard",
    "Quitter la partie ?": "Leave the game?", "Ta partie est sauvegardée : tu pourras la reprendre au prochain lancement.": "Your game is saved: you can resume it next time you open the app.",
    "Rester": "Stay", "Quitter": "Leave", "Contrée par ta sélection": "Countered by your selection", "Menace ta sélection": "Threatens your selection",
    "Explication des modes": "What the modes mean",
    "Tirage au sort : chaque joueur reçoit ses factions au hasard, sans choisir.": "Random draw: each player is dealt factions at random, no choice involved.",
    "Draft : chaque joueur reçoit sa propre main de factions (nombre réglable) et en garde 2. Les mains sont secrètes : on se passe l'écran.": "Draft: each player gets their own hand of factions (adjustable size) and keeps 2. Hands are secret, so you pass the screen around.",
    "Pick : une réserve commune est affichée. Chacun prend une faction à tour de rôle, en serpent (1→n puis n→1), jusqu'à en avoir 2.": "Pick: a shared pool is shown. Players take one faction each in turn, snake order (1→n then n→1), until everyone has 2.",
    "Pick & Ban : réserve commune plus grande. Chacun bannit une faction, puis chacun en choisit une ; puis on recommence dans l'ordre inverse (2 bans et 2 picks par joueur).": "Pick & Ban: larger shared pool. Everyone bans a faction, then everyone picks one; then the same again in reverse order (2 bans and 2 picks per player)." },
    // ---- Noms des thèmes ----
    { "Japon": "Japan", "Chine": "China" },
    // ---- Aide ----
    { "Clair": "Light", "Sépia": "Sepia", "Sombre": "Dark", "Parchemin": "Parchment", "Feutre": "Felt", "Bois": "Wood", "Noël": "Christmas", "Pâques": "Easter",
    "Appui long : choisir un thème": "Long-press: choose a theme" },
    // ---- À propos (Crédits, Application) ----
    { "Aide": "Help", "Appuie longtemps sur une faction pour voir ses détails.": "Press and hold a faction to see its details." },
    // ---- Bloc 8 ----
    { "À propos": "About", "Crédits": "Credits", "Application": "App", "Licence": "License", "Voir la licence": "View the license", "Aucun crédit pour l'instant.": "No credits yet.",
    "Tu utilises déjà l'application Android.": "You are already using the Android app.",
    "Application Android (APK)": "Android app (APK)", "Télécharger l'APK": "Download the APK", "Toutes les versions": "All versions",
    "Un vrai fichier à installer, comme une appli classique. Android te demandera d'autoriser l'installation depuis ton navigateur (source inconnue).": "A real file to install, like any other app. Android will ask you to allow installs from your browser (unknown source).",
    "Appli web (installation rapide)": "Web app (quick install)", "Installer l'appli web": "Install the web app", "Déjà installée ✓": "Already installed ✓",
    "Pas de fichier à télécharger : l'appli s'ajoute à l'écran d'accueil depuis ton navigateur et se met à jour toute seule.": "No file to download: the app is added to your home screen from your browser and updates itself.",
    "Sur iPhone / iPad : touche le bouton Partager, puis « Sur l'écran d'accueil ».": "On iPhone / iPad: tap the Share button, then “Add to Home Screen”.",
    "Dans le menu de ton navigateur (⋮), choisis « Installer l'application » ou « Ajouter à l'écran d'accueil ».": "In your browser menu (⋮), choose “Install app” or “Add to Home screen”." },
    // ---- Mise à jour du contenu (maj.js) ----
    { "Contenu de l'appli": "App content", "Vérification…": "Checking…", "À jour ✓": "Up to date ✓", "Mettre à jour": "Update",
        "Vérifier / réparer": "Check / repair", "Tout réinstaller": "Reinstall everything", "Réessayer": "Retry", "Continuer": "Continue", "Annuler": "Cancel",
        "Reprendre": "Resume", "Recharger l'appli": "Reload the app", "Enregistrement…": "Saving…",
        "Connexion impossible : serveur injoignable ou hors ligne.": "Connection failed: server unreachable or offline.",
        "Nouvel APK nécessaire : ce contenu demande une version plus récente de l'appli.": "New APK required: this content needs a newer version of the app.",
        "Mise à jour du contenu indisponible sur cet appareil : l'appli utilise son contenu intégré.": "Content update unavailable on this device: the app uses its built-in content.",
        "Contenu mis à jour ✓ Recharge l'appli pour l'utiliser.": "Content updated ✓ Reload the app to use it.",
        "Annulé. Les fichiers déjà téléchargés sont gardés : la reprise sera rapide.": "Cancelled. Files already downloaded are kept: resuming will be quick.",
        "Du nouveau contenu est disponible": "New content is available", "Une nouvelle version de l'appli est disponible": "A new app version is available",
        "Voir": "View", "Information": "Information",
        "Mettre à jour l'APK de temps en temps vaut le coup : il apporte l'interface et les nouveautés de l'appli. Le contenu (images, textes, données) se met à jour sans APK, avec le bouton « Mettre à jour » plus bas.": "Updating the APK from time to time is worthwhile: it brings the interface and new app features. The content (images, texts, data) updates without an APK, with the “Update” button below.",
        "Cache des images": "Image cache", "Vider le cache des images": "Clear the image cache", "Cache vidé ✓": "Cache cleared ✓",
        "Les images déjà vues sont gardées sur l'appareil pour s'afficher plus vite. Tu peux les effacer : elles seront retéléchargées au besoin.": "Images you have seen are kept on the device to load faster. You can clear them: they will be downloaded again when needed." }
  )
};
