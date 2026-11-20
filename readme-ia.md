# README POUR IA — Générateur Smash Up (SmashUp-Draft)
Lis ce fichier en premier : il décrit la structure du projet et QUEL FICHIER MODIFIER selon la demande.
(Le README.md du dépôt GitHub est un simple titre + l'adresse du site : il ne contient pas ces infos.)
L'utilisateur ne code pas et ne peut pas relire le code : sois très prudent, ne change que ce qui est demandé.
Dernière mise à jour de ce fichier : d'après le code de novembre 2026 (index.html, script.js, style.css, sw.js, manifest.json, maj.js, workflows) + mise à jour de l'APK depuis l'appli (section 13).

## 1. PRINCIPE
Application web statique, sans serveur, sans framework, sans compilation, sans Python : on ouvre index.html
dans un navigateur (même en double-cliquant depuis le disque). Elle tire au sort des factions Smash Up
(modes Tirage / Draft / Pick / Pick & Ban), bilingue FR/EN, avec 13 thèmes. Appui long (ou clic) sur l'icône
d'une faction = "fiche" (illustration, cartes, Titan, notes, stats, rang, combos). Installable comme application (PWA).

    index.html  --charge-->  data/data.js (sommaire)  --charge-->  data/factions.js, titans.js, notes.js, sources.js, stats.js, cartes.js, rank.js, combo.js, credit.js
    index.html  --utilise-->  style.css (apparence) + script.js (logique)

Tout est du JavaScript simple, modifiable à la main. Rien à générer ni à lancer.
Le site est publié sur GitHub Pages : https://palefroy.github.io/SmashUp-Draft/ (sous-dossier /SmashUp-Draft/ : tous les chemins sont relatifs).

## 2. FICHIERS ET DOSSIERS
index.html        Squelette HTML : décors de thèmes (SVG), boutons thème/langue, bouton « Tirer les Factions », zone #resultat, panneaux
                  Paramètres / Historique / Extensions (onglets en bas), texte FR/EN de l'interface via data-t. Enregistre le service worker
                  (sauf dans l'application Android : test de window.Capacitor). Charge data/data.js puis script.js.
style.css         Tout le CSS : apparence, thèmes (variables dans :root, [data-theme="..."]), fiches, bulles, boutons, animations, pop-up.
script.js         Tout le JavaScript : tirage, draft, thèmes, langue, fiches, combos, sauvegarde du draft, dictionnaire EN.
sw.js             Service worker (PWA) : voir section 7.
maj.js            Mise à jour du CONTENU (data/ + img/) dans l'APK : voir section 12.
apk-maj.js        Mise à jour de l'APK elle-même depuis l'appli (Android) : voir section 13.
apk/              Outils de build : compresser-images.sh, contenu.mjs, api-min.txt, capacitor.config.json, debug.keystore (clé de signature fixe), apk-json.mjs,
                  ajouter-plugin-android.py, android-plugin/ (plugin natif ApkInstaller en Java). Voir sections 12 et 13.
.github/workflows/  build-apk.yml (APK + apk.json), publish-content.yml (contenu). Branches générées automatiquement : « content » et « apk-info » (ne jamais les éditer à la main).
manifest.json     Manifeste PWA (nom, icônes, couleurs).
icons/            5 PNG : icon-192, icon-512, icon-maskable-192, icon-maskable-512, apple-touch-icon.
data/data.js      Sommaire : crée window.DATA et charge les fichiers de données listés. Ne s'édite que pour ajouter un type de données.
data/factions.js  Extensions et factions : window.FACTIONS = { csv (extensions et leurs factions), codes (nom -> code), anneeEn,
                  speciales (cartes spéciales : MONSTRES, TRESORS, DEMENCE, avec nom FR/EN) }. Lu en tête de script.js (FAC, donneesCSV, CODES, ANNEE_EN, SPECIALES).
data/titans.js    Titan de chaque faction (nom, capacité FR/EN, statut).
data/notes.js     Notes de chaque faction (FR/EN, statut).
data/sources.js   Sources (liens) justifiant les données ci-dessus. Plusieurs par faction.
data/stats.js     Stats de chaque faction : 10 critères notés de 0 à 5 (demi-étoiles permises), affichés en étoiles dans la bulle « Stats ».
                  Critères (STATS_CRITERES, script.js) : creatures, renforcement, attache_base, attache_creature, deplacement, destruction, pioche, defausse, controle, conquete.
data/cartes.js    Optionnel : 3 cartes séparées à la place du montage.
data/rank.js      Rang de complexité de chaque faction (code 1 à 5 = S, A, B, C, D) + définition des 5 rangs (window.RANK_TIERS : emoji, nom FR/EN, couleurs).
data/combo.js     Synergies / menaces / contres / tags de style de jeu : DATA.combo[CODE] = { tags: [id], syn: [CODE], men: [CODE qui contrent CODE], con: [CODE que CODE contre] }
                  et window.COMBO_INFO = { tags: { id: { fr, en } }, expl: { "p:A|B" ou "c:A>B": { fr, en } } } (explications affichées au clic sur une pastille).
data/traductions.js  Dictionnaire anglais de l'interface : DATA.traductions.en = { "texte français": "English text" } (blocs fusionnés par Object.assign ; lu par script.js sous le nom EN, utilisé par t()).
                  Modifiable sans nouvel APK (contenu mis à jour dans l'appli). Les textes écrits en dur avec L("fr", "en") dans le code et ceux de index.html (data-t) restent dans l'APK.
data/credit.js     Crédits : textes de la fenêtre « À propos » (sections, avertissement, mentions de source, liens APK). Voir section 11.
data/fonts/       Polices du titre (woff2 + ttf, stockées en local) : CurseCasualJVE, HennyPenny, Shojumaru, Fairydust, DeadheadRough, StickRice, PricedownBlack, RageItalic, BankGothic, Diploma, FuturaCondensedExtraBold. Associées aux thèmes dans style.css.
img/illus/<CODE>.<format>   Grande illustration de la faction (haut de la fiche). Optionnel : <CODE>2.<format> = 2e illustration (retournement, section 9).
img/cards/<CODE>.<format>   Montage des 3 cartes de la faction.
img/ico/<CODE>.<format>     Icône ronde de la faction (bouton dans les résultats).
img/WORK.<format>           Image « en chantier » (IMG_DEFAUT) utilisée quand l'illustration ou les cartes d'une faction n'existent pas.
                  <format> = webp (recommandé), jpg, jpeg, png ou avif : détecté automatiquement (liste FORMATS_IMG en haut de script.js,
                  extensions en minuscules ; TIFF/BMP non affichables par les navigateurs). Réglages conseillés : WebP qualité 85-90,
                  800 px de large pour illus et cards, 160 px pour ico.
README.md         README GitHub (titre + adresse du site).
archive/          Outils de l'utilisateur, HORS fonctionnement du site : export_excel.py exporte data/ vers un tableur (sens unique, n'écrit jamais dans data/).
                  Ne pas s'en servir pour remplir les données : on édite directement les fichiers de data/.
SmashUp-Draft-main/  Copie du dépôt GitHub : ne pas s'en servir sauf demande explicite.

<CODE> = code de faction sur 3 lettres (ex. DIN = Dinosaures). La table nom -> code est la propriété codes de data/factions.js
(lue dans script.js sous le nom CODES). Chaque fichier de data/ contient les 106 factions, déjà listées avec leur code et leur nom en commentaire.
Les images sont dans le dossier img/ (sous-dossiers ico, illus, cards) ; il doit rester à côté de index.html. Image absente = ignorée ; sans illustration ni cartes,
l'icône de la faction est désactivée.

## 3. QUEL FICHIER MODIFIER ?
Remplir/changer des Titans            -> data/titans.js  (+ une ligne dans data/sources.js)
Remplir/changer des notes             -> data/notes.js   (+ sources.js)
Ajouter des stats                     -> data/stats.js
Cartes séparées                       -> data/cartes.js
Changer le rang d'une faction          -> data/rank.js (champ code, de 1 à 5)
Synergies, menaces, contres, tags     -> data/combo.js (relations lues dans les deux sens : un oubli d'un côté ne fait pas disparaître la relation)
Taille auto de la réserve (Pick = 2 x joueurs + 2 ; Pick & Ban = 5 x joueurs) -> script.js, fonction poolAuto
Interface (apparence, thèmes, boutons, animations, mise en page) -> style.css (variables dans :root, thèmes via [data-theme="..."])
Comportement (tirage, draft, historique, fiche) -> script.js. Fonctions : lancerTirage, demarrerDraft, rendreDraft,
    choisirDraft, validerMain, ouvrirFiche, fermerFiche, appliquerLangue, toggleTheme, htmlCombo, sauverDraft / proposerReprise.
Libellé d'interface ou traduction -> index.html : texte FR dans l'HTML (attribut data-t, l'anglais est le contenu de la balise)
    et data/traductions.js : dictionnaire EN (clé = texte français). Ne plus ajouter de Object.assign(EN, ...) dans script.js ni dans maj.js : tout va dans data/traductions.js.
Ajouter/renommer une extension ou une faction -> data/factions.js (csv, codes, anneeEn) ; convention des titres d'extensions : « Smash Up : Nom » (le jeu de base reste « Smash Up »).
    ATTENTION : le nom d'extension du csv sert de clé dans anneeEn (factions.js) ET dans le dictionnaire EN de script.js (t(ext) traduit le nom) : les trois doivent être renommés ensemble ; la table de traduction EN est dans data/traductions.js ;
    puis ajouter le bloc de la faction dans CHAQUE fichier de data/ et déposer img/illus/, img/cards/, img/ico/.
Cartes spéciales (Monstres, Trésors, Démences) -> data/factions.js (propriété speciales) ; elles s'ouvrent avec le même ouvrirFiche().
Nouveau type de données -> créer data/<nom>.js (commence par DATA.<nom> = { ... }), l'ajouter à la liste dans data/data.js,
    et gérer son affichage dans ouvrirFiche() de script.js. Prévenir l'utilisateur avant.
Crédits, remerciements, liens APK / releases -> data/credit.js (texte FR/EN ; aucune modification de code nécessaire)
Nouvelle PWA / cache -> sw.js (liste SITE, VERSION) et manifest.json.

## 4. RÈGLES POUR REMPLIR LES DONNÉES (data/*.js)
- Travaille sur UN seul fichier à la fois et renvoie-le COMPLET (toutes les factions, même vides), avec les mêmes noms de champs.
- Ne supprime aucune faction, ne renomme aucun champ. Respecte la syntaxe JS : guillemets "...", virgules entre les champs
  et entre les blocs, accolades fermées. Une erreur de syntaxe casse le chargement de TOUTES les données.
- Si un texte contient des guillemets doubles, échappe-les (\") ou utilise des apostrophes.
- Ne rien inventer : sans source trouvée, laisser la case vide ("" ou []).
- Reformuler en phrases courtes, ne pas copier-coller livrets ou wikis ; ne pas recopier le texte des cartes.
- Remplir FR et EN ; si une seule existe, ne remplir l'autre que si la traduction est fiable (sinon vide : la page affiche l'autre langue).
- statut : "officiel" (livret / site AEG / wiki de règles AEG), "communautaire" (wiki, forum), "a-verifier" (traduction maison, doute).
- Chaque info ajoutée dans titans.js ou notes.js = une source dans sources.js (type, label, url, langue, date, statut).
- Titans : seul le texte (nom + capacité) est affiché dans la fiche, sans image. Les champs source et crop de titans.js ne servent plus : ne pas en ajouter.
- Case vide = le module n'est pas affiché (aucun espace réservé). Les Dinosaures (DIN) contiennent des données de TEST (a-verifier).

## 5. FORMAT INTERNE (pour info)
Au chargement, script.js fusionne window.DATA en FICHES[code] = { titan, notes, sources, stats, cards, rank, combo, ... }
(le type "titans" devient "titan", "cartes" devient "cards").
Fiche (ouvrirFiche) : illustration en haut, 3 cartes en bas, boutons en colonnes. Colonne de droite (de haut en bas) : Titan, Stats, Notes ;
colonne de gauche : bouton de rang (S/A/B/C/D, texture métal), puis bouton Combo (icône chaîne), au-dessus des cartes. Chaque bouton ouvre une bulle.
Un bouton n'existe que si sa donnée existe. Le bouton Combo disparaît si les trois filtres (Synergies / Menaces / Contre) sont coupés.
Bulle Combo : tags, synergies (vert), menaces (rouge), contres (jaune) ; un clic sur une pastille affiche son explication (COMBO_INFO.expl).

## 6. MODES DE JEU, DRAFT, SAUVEGARDE
- Modes (MODES) : tirage, draft, pick, pickban. Paramètres P (DEFAUTS) : nbJ, mode, mainK, poolAuto, poolVal, syn, men, con, rang.
- Barre « Afficher : Synergies · Menaces · Contre · Rang » (FILTRES) dans les écrans de choix : boutons à bascule (vert / rouge / jaune / violet).
  Halos verts (synergie) et rouges (menace) sur les factions ; indicateurs de la réserve (majIndicateursPool) ; mini icône de rang en bas à gauche des factions ; légende de complexité.
- Pick & Ban : bans (ordre normal) -> picks -> bans (inversé) -> picks (inversé) ; phase Ban en bleu assombri (bouton « Bannir », nom barré).
- Le draft en cours est sauvegardé (sauverDraft, clé smashup_draft, oublié après 24 h). Au lancement : pop-up « Reprendre la partie ? » (Reprendre / Abandonner).
  Retour arrière du téléphone pendant un draft : pop-up « Quitter la partie ? » (Rester / Quitter) via history.pushState (armerRetour / libererRetour / popstate).
  Les pop-up utilisent .dlg-fond / .dlg / .reprise (style.css, fin du fichier).
- Mode Draft : mains secrètes, écran neutre « Passe l'écran à… ».
- Historique des tirages : expire après 5 h (smashup_historique). Boutons « Vider l'historique » et « Réinitialiser » (efface factions, paramètres, noms, mode, draft).
- Cartes spéciales : encadré sous « Personnalisé » (pas de case à cocher), bouton Détails. Factions « Personnalisé » ajoutées par l'utilisateur : clé smashup_custom.

## 7. PWA ET APPLICATION ANDROID
manifest.json, sw.js (à la racine, ne pas déplacer) et icons/ (5 PNG). Chemins relatifs, compatibles GitHub Pages (sous-dossier).
sw.js (VERSION "v8") : fichiers du site en "réseau d'abord" (copie en cache si hors-ligne, liste SITE), images (img/) en cache + mise à jour en arrière-plan
(maximum 700 images, IMG_MAX). Un fichier manquant dans SITE ne fait pas échouer l'installation. Après une grosse mise à jour : changer VERSION dans sw.js.
Si tu ajoutes un fichier dans data/ ou un dossier de ressources, pense à l'ajouter à la liste SITE de sw.js.
Le fichier APK n'est pas dans le dépôt : il est publié dans la release GitHub « apk-latest » (asset SmashUp-Draft.apk), construit par GitHub Actions (.github/workflows).
index.html enregistre le service worker en http(s) : « sw.js » sur le web, « sw.js?apk=1 » dans l'application Android (window.Capacitor), mais jamais en ouvrant le fichier depuis le disque (file://).
Marges de sécurité iPhone : fin de style.css (env(safe-area-inset-*)). Zoom interdit (pincer, double appui) : bloc en tête de script.js + viewport.

## 8. THÈMES, ASTUCES ET GESTES CACHÉS
- 13 thèmes (themesList) : light, sepia, dark, parchment, felt, wood (THEMES_BASE) + japan, china, halloween, christmas, easter, vicecity, sanandreas (THEMES_SPECIAUX). Chaque thème : une icône #icon-xxx (index.html),
  iconMap, NOMS_THEMES (+ EN), un bloc [data-theme="xxx"] dans style.css. Les thèmes festifs ont un décor SVG animé (#scene-xxx dans index.html, animations légères,
  fixes si l'utilisateur a demandé de réduire les animations) et une police de titre propre (data/fonts/).
- Thème par défaut (fonction themeParDefaut, script.js) : 1) choix de l'utilisateur, 2) thème de saison (themeDeSaison : Pâques = 10 jours avant -> 1 jour après (PAQUES_AVANT / PAQUES_APRES) ;
  Nouvel An chinois = 5 jours avant -> 15 jours après (CHINE_AVANT / CHINE_APRES, dates 2026-2040 dans NOUVEL_AN_CHINOIS) ; puis PERIODES_THEME : Vice City (2026 uniquement : VICE_CITY_2026, 5 -> 30 novembre ; à changer ou supprimer l'an prochain), Halloween 15/10 -> 02/11,
  Noël 01/12 -> 06/01, Japon 20/03 -> 10/04 ; date de l'appareil), 3) réglage du téléphone/navigateur via prefers-color-scheme (sombre -> "dark", sinon "light").
  Le thème suit le téléphone en direct tant que l'utilisateur n'a rien choisi. Un thème par défaut n'est JAMAIS enregistré : smashup_theme n'est écrit (appliquerTheme) que quand
  l'utilisateur choisit lui-même un thème (clic ou menu) ; son choix l'emporte ensuite toujours.
- Bouton de thème (#themeToggle) : toucher = ouvre / ferme le menu #themeMenu (ouvrirMenuTheme) ; appui long (250 ms, DELAI_MENU_THEME) = thème suivant dans la catégorie du thème actif (themeSuivant : THEMES_BASE ou THEMES_SPECIAUX).
  Détail du menu (glisser / relâcher) : voir les commentaires de script.js autour de ouvrirMenuTheme.
  Chaque ligne (.theme-opt) porte data-theme : elle reprend les vraies couleurs du thème (d'où [data-theme="light"] à côté de :root dans style.css).
- Bouton de langue (#langToggle, globe) : même geste. Toucher = ouvre / ferme le menu #langMenu (ouvrirMenuLangue) ; appui long = langue suivante (langueSuivante). LANGUES : fr, en. Choix mémorisé (smashup_lang).
- Astuce du premier lancement (« Appui long : choisir un thème ») : afficherAstuceTheme(), une seule fois (clé smashup_astuce_theme).
- Petit « i » en haut à droite de la zone des factions (Draft / Pick / Pick & Ban, écrans de choix seulement) : htmlInfo(), basculerInfo(), style .btn-info / .astuce.
  La bulle explique l'appui long sur une faction ; elle s'ouvre toute seule UNE fois, au premier écran de choix (clé smashup_astuce_info), et se referme seule après 7 s.
- « i » des modes (#btnModesInfo, panneau Paramètres) : basculerInfoModes(), explication des quatre modes. Bouton en haut à GAUCHE du panneau (les ornements des thèmes Halloween / Japon / Chine
  occupent le coin haut-droit), bulle #modesInfo sur toute la largeur du panneau, pointe alignée sur le bouton (style.css, fin de fichier : sélecteurs #paramContainer ... plus spécifiques que .astuce).
- Bouton « Tirer les Factions » : classe .btn-tirer (taille et marge du dessous dans style.css).
- Pour revoir les astuces en test : supprimer smashup_astuce_theme / smashup_astuce_info dans le localStorage du navigateur.
- Clés localStorage utilisées (toutes dans try/catch via l'objet LS) : smashup_lang, smashup_theme, smashup_params, smashup_factions, smashup_noms, smashup_mode,
  smashup_historique, smashup_custom, smashup_draft, smashup_astuce_theme, smashup_astuce_info.

## 9. FICHE : GESTES, FOCUS, 2e ILLUSTRATION
- Ouverture : appui long de 340 ms (DELAI_APPUI_FACTION) sur une faction du draft / pick / pick & ban ; clic sur l'icône ronde (.ico-btn) dans les résultats ;
  bouton « Détails » (.btn-det) dans l'onglet Extensions (disparaît pour les factions sans fiche). Le menu contextuel du navigateur est bloqué sur ces éléments.
- Appui long (400 ms, DELAI_FOCUS) sur l'illustration = mode focus : boutons, cartes et bulle masqués tant que l'appui dure (classe .focus sur .fiche-fond, style.css).
  Le CADRE entier grandit (x1.10 : --zoom-focus dans style.css et ZOOM_FOCUS dans script.js, limité pour garder une marge avec l'écran) ; l'image ne doit JAMAIS zoomer dans son cadre.
  Appui long sur les 3 cartes = focus des cartes (elles glissent au centre de l'écran en grossissant). La sortie du focus se fait au relâchement.
- Fermeture : clic sur le fond sombre ou sur l'illustration (.fiche-art) ; Échap (ferme la bulle, puis la fiche). Les boutons, les bulles et les 3 cartes (.fiche-cartes) ne ferment pas.
  Bulle ouverte : le 1er clic ferme la bulle, le 2e ferme la fiche. Les images de la fiche ont pointer-events:none : la cible d'un clic est le conteneur (.fiche-art ou .fiche-cartes), pas l'image.
- 2e illustration : img/illus/<CODE>2.<format> (ex. DIN2.webp), optionnelle (chargée par assets(), champ illus2). Si elle existe : un CLIC (pas un appui long) sur l'illustration
  retourne la carte (classes .flip / .retourne / .verso). Au verso : seule l'illustration 2 est visible (boutons, cartes, bulles masqués). Une pastille (.flip-badge : icône + 2 points)
  en haut à droite de l'illustration signale la 2e face. Sans 2e illustration : un clic sur l'illustration ne fait plus rien (le fond sombre ou Échap ferment la fiche).
- Position de la fenêtre : --monte-fiche = 41px (style.css, fin de fichier ; padding-bas = 26 px + 2 x --monte-fiche) ; en focus : MONTE_FOCUS_ART = 12 et MONTE_FOCUS_CARTES = 12 (script.js).
- Les images se préchargent dès l'appui (assets(code), PRET / EXT_TROUVEE) ; un indicateur « Chargement… » s'affiche si besoin (avecChargement).

## 10. CONVENTIONS ET PIÈGES
- Réponds en français. Langue par défaut de la page : français (choix mémorisé dans localStorage).
- Préférences (langue, thème, paramètres, historique, draft) : localStorage, toujours dans try/catch (objet LS, fonction jsonLS).
- Mobile d'abord : tout geste doit marcher au doigt (pointerdown / pointerup), pas seulement à la souris.
- Quand tu modifies index.html, style.css ou script.js, renvoie le fichier COMPLET concerné, pas des extraits.
- index.html est lourd (décors SVG des thèmes festifs sur les lignes 29 à ~280) : ne pas toucher à ces blocs sans demande.
- Teste dans un navigateur de bureau si possible, mais précise que le toucher long sur un vrai téléphone n'est pas vérifié.
- Texte affiché : toujours passer par t("texte français") et le dictionnaire EN de data/traductions.js (ou data-t dans index.html) pour que l'anglais fonctionne.

## 11. À PROPOS : CRÉDITS ET APPLICATION
- Entrée discrète : une ligne « Crédits · Application » tout en bas de l'onglet Paramètres (index.html, fin de #paramContainer, classe .apropos-lien, style.css fin de fichier).
  Les deux boutons ouvrent la même fenêtre (ouvrirApropos('credits') ou ouvrirApropos('appli')) ; deux onglets dedans, bouton Fermer, fond sombre cliquable, Échap, retour arrière.
- Code : bloc « À propos » à la fin de script.js (avant l'appel final à initialiser()) : ouvrirApropos, rendreApropos, htmlCredits, htmlAppli, installerAppliWeb, mentionCredit.
  Fenêtre = .dlg-fond.dlg-apropos + .reprise.apropos (mêmes pop-up que « Reprendre la partie ? »). Traductions : Object.assign(EN, ...) au début du bloc.
- Contenu : DATA.credit (data/credit.js) = { intro, sections: [{ titre, lignes: [{ nom, role, url }] }], avertissement, licence: { texte, url }, mentions: { combo, donnees }, donneesCodes, application: { apk, versions } }.
  Licence : texte copyleft + symbole (SVG inline .ap-copyleft) en bas de l'onglet Crédits ; url = lien vers le fichier LICENSE du dépôt (vide = pas de lien). Une ligne sans « nom » n'affiche que son rôle.
  Section sans ligne = non affichée. Seules les adresses http(s) deviennent des liens.
- Mentions de source : petite ligne grise en pied des bulles Combo (mentions.combo) et Notes / Stats (mentions.donnees) via mentionCredit(). donneesCodes = [] : toutes les factions ;
  sinon seulement les codes listés (ex. ["DIN", "NIN"]).
- Onglet Application : 1) carte « Application Android (APK) » : lien vers application.apk (masquée sur iPhone / iPad) + lien « Toutes les versions » ;
  2) carte « Appli web (installation rapide) » = PWA : bouton « Installer l'appli web » si le navigateur propose l'installation (événement beforeinstallprompt), « Déjà installée ✓ » si l'appli
  tourne déjà en mode installé (display-mode: standalone), sinon une phrase d'aide (iPhone : Partager > Sur l'écran d'accueil ; autres : menu du navigateur).
  Dans l'application Android (window.Capacitor) l'onglet affiche « Tu utilises déjà l'application Android (version N, date) », la carte « Mise à jour de l'appli » (apk-maj.js, section 13), la carte APK (plan B) et la carte « Contenu de l'appli » (maj.js).
- Ajouter un logo ou une image de crédit : pas prévu pour l'instant (texte seul) ; si besoin, déposer les images dans img/credits/ et prévenir l'utilisateur avant de modifier htmlCredits().

## 12. MISE À JOUR DU CONTENU DANS L'APK (sans nouvel APK)
- maj.js (chargé après script.js) : interface (carte « Contenu de l'appli » dans À propos > Application) + téléchargement. Dans l'APK : Mettre à jour (différentiel) / Vérifier-réparer / Tout réinstaller, progression, annulation, reprise.
  Sur le web : seulement un bouton « Vider le cache des images ». Branché par htmlAppli() et le clic de ouvrirApropos() (script.js) via htmlContenuMaj() / clicMaj().
- sw.js?apk=1 : dans l'APK, sert le cache « smashup-contenu » pour data/* et img/* (404 = fichier retiré), sinon les fichiers embarqués. index.html, script.js, style.css, maj.js restent ceux de l'APK.
  Le service worker n'est enregistrable sous Capacitor Android que grâce au ServiceWorkerClient ajouté dans MainActivity.java par build-apk.yml.
- .github/workflows/publish-content.yml : à chaque modif de data/ ou img/, publie sur la branche « content » (raw.githubusercontent.com) data/ + img/ compressés + contenu.json (p chemin, s taille, h SHA-256, k clé de la source).
- apk/compresser-images.sh : réglages de compression UNIQUES (APK et contenu publié). apk/contenu.mjs : génère contenu.json et contenu-apk.json (inventaire embarqué dans l'APK).
- apk/api-min.txt + constante APP_API (maj.js) : numéro de compatibilité du code. Si un contenu exige du nouveau code, monter les deux : les anciens APK refusent alors le contenu et proposent le nouvel APK.
- Nouveau fichier JS/CSS à la racine : l'ajouter à sw.js (SITE), aux paths: et au cp de build-apk.yml. Les fichiers de data/ et img/ sont pris automatiquement.
- ATTENTION : publish-content.yml recrée la branche « content » à zéro à chaque publication : n'y mettre aucun autre fichier (apk.json est sur la branche « apk-info »).

## 13. MISE À JOUR DE L'APK DEPUIS L'APPLI (Android)
- apk-maj.js (racine, chargé après script.js et maj.js) : carte « Mise à jour de l'appli » dans À propos > Application (htmlMajApk(), appelée par htmlAppli() de script.js, Android seulement).
  Complète maj.js : maj.js met à jour le CONTENU (data/ + img/) ; apk-maj.js remplace l'APK (index.html, script.js, style.css, maj.js, code natif).
- apk.json = { build, version, url (https), taille, sha256, notes? { fr, en } }, publié par build-apk.yml sur la branche « apk-info » (PAS « content » : publish-content.yml la réécrit),
  APRÈS l'envoi de l'APK dans la release apk-latest. Lu par apk-maj.js (BASE = raw.githubusercontent.com/Palefroy/SmashUp-Draft/apk-info/).
- Comparaison apk.json.build / build de l'APK installée (contenu-apk.json embarqué, même source que maj.js et versionApk()). Plus récent = mise à jour proposée.
- Plugin natif Capacitor « ApkInstaller » (apk/android-plugin/*.java, ajouté par apk/ajouter-plugin-android.py dans build-apk.yml, APRÈS le heredoc MainActivity) : télécharge (reprise Range), vérifie le SHA-256,
  contrôle le nom de paquet, ouvre l'installateur Android (l'utilisateur appuie toujours sur « Installer »). FileProvider dédié : <applicationId>.apkprovider.
- build de apk.json = build de contenu-apk.json = github.run_number (toujours croissant) ; version = date du dernier commit. L'APK doit être signée avec la même clé (apk/debug.keystore) à chaque build.
- apk/apk-json.mjs génère apk.json. Vérification auto : 6 s après le lancement, 1×/24 h (smashup_apk_verif), toast une fois par build (smashup_apk_vu). Clics : attribut data-apk (pas data-m).
- Web / iPhone : rien. Sans le plugin (ancien APK) : message + lien « Télécharger l'APK » (plan B). La première APK contenant le plugin s'installe à la main.
- Nouveau fichier JS racine : ajouter à sw.js (SITE), aux paths: et au cp de build-apk.yml.
