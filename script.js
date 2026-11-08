// Appli : zoom interdit (pincer, double appui). Conserve les autres réglages du <meta viewport> existant ; le blocage de la sélection est dans style.css.
(function () {
    function fixerViewport() {
        let metas = document.querySelectorAll('meta[name="viewport"]');
        if (!metas.length) {
            const m = document.createElement("meta"); m.name = "viewport"; m.content = "width=device-width, initial-scale=1";
            document.head.appendChild(m); metas = [m];
        }
        metas.forEach(m => {
            const c = (m.getAttribute("content") || "width=device-width, initial-scale=1").replace(/,?\s*(maximum-scale|minimum-scale|user-scalable)\s*=\s*[^,]*/gi, "");
            m.setAttribute("content", c + ", maximum-scale=1, user-scalable=no");
        });
    }
    fixerViewport();
    document.addEventListener("DOMContentLoaded", fixerViewport);
    ["gesturestart", "gesturechange", "gestureend"].forEach(ev => document.addEventListener(ev, e => e.preventDefault(), { passive: false }));   // iOS (PWA)
})();

const donneesCSV = `Smash Up|(2013)|1|Aliens;Dinosaures;Ninjas;Pirates;Robots;Petit Peuple;Sorciers;Zombies
Smash Up : Même Pas Mort|(2013)|1|Cavalerie Ours;Fantômes;Plantes Carnivores;Steampunks
Smash Up : Cthulhu Fhtagn !|(2014)|1|Grands Anciens;Innsmouth;Serviteurs de Cthulhu;Université Miskatonic
Smash Up : Séries B|(2014)|1|Métamorphes;Singes Cyborgs;Super Espions;Voyageurs du Temps
Smash Up : Monstres Sacrés|(2015)|1|Fourmis Géantes;Loups-Garous;Savants Fous;Vampires
Smash Up : Trop Minions|(2015)|1|Chatons;Fées;Poneys Magiques;Princesses
Smash Up : La Grosse Boîte pour Geek|(2015)|0|Geeks
Smash Up : Munchkin|(2016)|1|Elfes;Guerriers;Halfelins;Magiciens;Nains;Orques;Prêtres;Voleurs
Smash Up : Ressemblances Fortuites|(2017)|1|Changeformers;Chevaliers des Étoiles;Squatteurs de Trône;Voyageurs de l'Espace
Smash Up : Vous l'aurez voulu !|(2017)|1|Dragons;Mythologies Grecques;Requins;Super-Héros;Tornades
Smash Up : Conflit de Générations|(2017)|1|Explorateurs;Grands-Mères;Oursons;Rockstars
Smash Up : Rois du Japon|(2018)|1|Kaijū;Monstrapoches;Petites Magiciennes;Super Combattants
Smash Up : Ces Années-Là|(2019)|0|Danseurs Disco;Justiciers;Maîtres Kung-Fu;Routiers
Smash Up : Vous en voulez encore ?|(2020)|0|Anciens Égyptiens;Cow-Boys;Samouraïs;Vikings
Smash Up : L'Énorme Boîte pour Geek|(2020)|0|Dream Team
Smash Up : Tournée Mondiale - Incident Diplomatique|(2021)|0|Luchadors;Mousquetaires;Police Montée;Sumos
Smash Up Knights of the Round Table|(2021 VO)|0|Knights of the Round Table
Smash Up : Marvel|(2022)|1|Avengers;Hydra;Kree;Masters of Evil;S.H.I.E.L.D.;Sinister Six;Spider-Verse;Ultimates
Smash Up : Tournée Mondiale - Choc des Cultures|(2022)|1|Anciens Incas;Contes d'Anansi;Contes de Grimm;Contes Féeriques Russes;Voyageurs Polynésiens
Mini-extension Smash Up : Faction Moutons|(2022)|1|Moutons
Smash Up - Disney|(2022 VO)|0|Aladdin;Beauty and the Beast;Big Hero 6;Frozen;Mulan;The Lion King;The Nightmare Before Christmas;Wreck-It Ralph
Mini-extension Smash Up : Faction Pingouins|(2023)|0|Pingouins
Smash Up Teens|(2023 VO)|0|Teens
Smash Up Fait son Cinéma|(2024)|0|Traqueurs de Spectres;Extramorphes;Hommes d'Action;Retourneurs du Futur
Smash Up : Édition Anniversaire|(2025)|1|Champions du Monde;Gobelins;Sirènes;Squelettes
Smash Up Half the Battle|(2025 VO)|0|Adolescent Epic Geckos;G.I. Gerald;Pearl and the Images;Rulers of the Cosmos
Smash Up Slashers|(2025 VO)|0|Slashers
Smash Up Clowns|(2025 VO)|0|Clowns`;

const DOSSIER_ILLUS = "img/illus/", DOSSIER_CARDS = "img/cards/";   // grandes illustrations et montage des 3 cartes : <dossier>/<CODE>.<format>
// Formats d'image acceptés (extensions en minuscules), essayés dans cet ordre : le premier fichier trouvé est utilisé. Les formats peuvent être mélangés.
// Le navigateur doit savoir afficher le format (TIFF, BMP, RAW... ne marchent pas : les convertir en WebP avant de les déposer dans img/).
const FORMATS_IMG = [".webp", ".jpg", ".jpeg", ".png", ".avif"];
// Données des fiches : dossier data/ (un fichier JS par type : titans, notes, sources, stats, cartes), chargé via data/data.js.
// Sans ce dossier, la page fonctionne : les modules sans données n'apparaissent simplement pas.
const FICHES = {};
for (const [type, parCode] of Object.entries(window.DATA || {}))
    for (const [code, v] of Object.entries(parCode)) (FICHES[code] = FICHES[code] || {})[type === "cartes" ? "cards" : type === "titans" ? "titan" : type] = v;
const DOSSIER_ICO = "img/ico/";   // icônes : img/ico/<CODE>.<format>
const CODES = {"Aliens":"ALI","Dinosaures":"DIN","Ninjas":"NIN","Pirates":"PIR","Robots":"ROB","Petit Peuple":"PTP","Sorciers":"SOR","Zombies":"ZOM","Cavalerie Ours":"CAO","Fantômes":"FAN","Plantes Carnivores":"PLC","Steampunks":"STE","Grands Anciens":"GRA","Innsmouth":"INN","Serviteurs de Cthulhu":"SDC","Université Miskatonic":"MIS","Métamorphes":"MET","Singes Cyborgs":"SIC","Super Espions":"SUE","Voyageurs du Temps":"VDT","Fourmis Géantes":"FOU","Loups-Garous":"LOU","Savants Fous":"SAF","Vampires":"VAM","Chatons":"CHA","Fées":"FEE","Poneys Magiques":"PON","Princesses":"PRI","Geeks":"GEE","Elfes":"ELF","Guerriers":"GUE","Halfelins":"HAL","Magiciens":"MAG","Nains":"NAI","Orques":"ORQ","Prêtres":"PRE","Voleurs":"VOL","Changeformers":"CHF","Chevaliers des Étoiles":"CDE","Squatteurs de Trône":"SDT","Voyageurs de l'Espace":"VDE","Dragons":"DRA","Mythologies Grecques":"MYG","Requins":"REQ","Super-Héros":"SUH","Tornades":"TOR","Explorateurs":"EXP","Grands-Mères":"GME","Oursons":"OUR","Rockstars":"ROK","Kaijū":"KAI","Monstrapoches":"MON","Petites Magiciennes":"PMA","Super Combattants":"SUC","Danseurs Disco":"DIS","Justiciers":"JUS","Maîtres Kung-Fu":"KUN","Routiers":"ROU","Anciens Égyptiens":"EGY","Cow-Boys":"COW","Samouraïs":"SAM","Vikings":"VIK","Dream Team":"DRE","Luchadors":"LUC","Mousquetaires":"MOU","Police Montée":"POM","Sumos":"SUM","Knights of the Round Table":"KRT","Avengers":"AVE","Hydra":"HYD","Kree":"KRE","Masters of Evil":"MOE","S.H.I.E.L.D.":"SHI","Sinister Six":"SIS","Spider-Verse":"SPI","Ultimates":"ULT","Anciens Incas":"AIN","Contes d'Anansi":"ANA","Contes de Grimm":"GRI","Contes Féeriques Russes":"CFR","Voyageurs Polynésiens":"VPO","Moutons":"MOT","Aladdin":"ALA","Beauty and the Beast":"BAB","Big Hero 6":"BIG","Frozen":"FRO","Mulan":"MUL","The Lion King":"LIK","The Nightmare Before Christmas":"NBC","Wreck-It Ralph":"WIR","Pingouins":"PIN","Teens":"TEE","Traqueurs de Spectres":"TDS","Extramorphes":"EXT","Hommes d'Action":"HDA","Retourneurs du Futur":"RDF","Champions du Monde":"CDM","Gobelins":"GOB","Sirènes":"SIR","Squelettes":"SQU","Adolescent Epic Geckos":"GEC","G.I. Gerald":"GIG","Pearl and the Images":"PEA","Rulers of the Cosmos":"RTC","Slashers":"SLA","Clowns":"CLO"};
const ANNEE_EN = {"Smash Up":"(2012)","Smash Up : Même Pas Mort":"(2013)","Smash Up : Cthulhu Fhtagn !":"(2013)","Smash Up : Séries B":"(2014)","Smash Up : Monstres Sacrés":"(2014)","Smash Up : Trop Minions":"(2015)","Smash Up : La Grosse Boîte pour Geek":"(2014)","Smash Up : Munchkin":"(2015)","Smash Up : Ressemblances Fortuites":"(2016)","Smash Up : Vous l'aurez voulu !":"(2016)","Smash Up : Conflit de Générations":"(2017)","Smash Up : Rois du Japon":"(2017)","Smash Up : Ces Années-Là":"(2018)","Smash Up : Vous en voulez encore ?":"(2018)","Smash Up : L'Énorme Boîte pour Geek":"(2018)","Smash Up : Tournée Mondiale - Incident Diplomatique":"(2019)","Smash Up : Tournée Mondiale - Choc des Cultures":"(2019)","Mini-extension Smash Up : Faction Moutons":"(2017)","Mini-extension Smash Up : Faction Pingouins":"(2019)","Smash Up Fait son Cinéma":"(2024)","Smash Up : Édition Anniversaire":"(2022)","Smash Up : Marvel":"(2020)"};   // années de sortie originales
const EN = {"Tirage Smash Up": "Smash Up Draw", "Tirer les Factions": "Draw Factions", "Paramètres": "Settings", "Historique": "History", "Extensions": "Expansions", "Nb joueurs": "Players", "Tirage": "Random draw", "Tout cocher": "Check all", "Tout décocher": "Uncheck all", "Vider l'historique": "Clear history", "Réinitialiser": "Reset", "Personnalisé": "Custom", "Nouvelle faction": "New faction", "commence": "goes first", "Passe l'écran à": "Hand the screen to", "Je suis": "I'm", "choisis 2 factions": "pick 2 factions", "Valider": "Confirm", "Bannies": "Banned", "Smash Up : Même Pas Mort": "Smash Up: Awesome Level 9000", "Smash Up : Cthulhu Fhtagn !": "Smash Up: The Obligatory Cthulhu Set", "Smash Up : Séries B": "Smash Up: Science Fiction Double Feature", "Smash Up : Monstres Sacrés": "Smash Up: Monster Smash", "Smash Up : Trop Minions": "Smash Up: Pretty Pretty Smash Up", "Smash Up : La Grosse Boîte pour Geek": "Smash Up: The Big Geeky Box", "Smash Up : Ressemblances Fortuites": "Smash Up: Cease and Desist", "Smash Up : Vous l'aurez voulu !": "Smash Up: It's Your Fault!", "Smash Up : Conflit de Générations": "Smash Up: What Were We Thinking?", "Smash Up : Rois du Japon": "Smash Up: Big in Japan", "Smash Up : Ces Années-Là": "Smash Up: That '70s Expansion", "Smash Up : Vous en voulez encore ?": "Smash Up: Oops, You Did It Again", "Smash Up : L'Énorme Boîte pour Geek": "Smash Up: The Bigger Geekier Box", "Smash Up : Tournée Mondiale - Incident Diplomatique": "Smash Up: World Tour - International Incident", "Smash Up : Tournée Mondiale - Choc des Cultures": "Smash Up: World Tour - Culture Shock", "Mini-extension Smash Up : Faction Moutons": "Smash Up Sheep Promo", "Mini-extension Smash Up : Faction Pingouins": "Smash Up Penguins", "Smash Up Fait son Cinéma": "Smash Up: Excellent Movies, Dudes!", "Smash Up : Édition Anniversaire": "Smash Up: 10th Anniversary", "Dinosaures": "Dinosaurs", "Petit Peuple": "Tricksters", "Sorciers": "Wizards", "Cavalerie Ours": "Bear Cavalry", "Fantômes": "Ghosts", "Plantes Carnivores": "Killer Plants", "Grands Anciens": "Elder Things", "Serviteurs de Cthulhu": "Minions of Cthulhu", "Université Miskatonic": "Miskatonic University", "Métamorphes": "Shapeshifters", "Singes Cyborgs": "Cyborg Apes", "Super Espions": "Super Spies", "Voyageurs du Temps": "Time Travelers", "Fourmis Géantes": "Giant Ants", "Loups-Garous": "Werewolves", "Savants Fous": "Mad Scientists", "Chatons": "Kitty Cats", "Fées": "Fairies", "Poneys Magiques": "Mythic Horses", "Elfes": "Elves", "Guerriers": "Warriors", "Magiciens": "Mages", "Nains": "Dwarves", "Orques": "Orcs", "Prêtres": "Clerics", "Voleurs": "Thieves", "Changeformers": "Changerbots", "Chevaliers des Étoiles": "Astroknights", "Voyageurs de l'Espace": "Star Roamers", "Mythologies Grecques": "Mythic Greeks", "Requins": "Sharks", "Super-Héros": "Superheroes", "Tornades": "Tornados", "Explorateurs": "Explorers", "Grands-Mères": "Grannies", "Oursons": "Teddy Bears", "Rockstars": "Rock Stars", "Kaijū": "Kaiju", "Monstrapoches": "Itty Critters", "Petites Magiciennes": "Magical Girls", "Super Combattants": "Mega Troopers", "Danseurs Disco": "Disco Dancers", "Justiciers": "Vigilantes", "Maîtres Kung-Fu": "Kung Fu Fighters", "Routiers": "Truckers", "Anciens Égyptiens": "Ancient Egyptians", "Cow-Boys": "Cowboys", "Samouraïs": "Samurai", "Mousquetaires": "Musketeers", "Police Montée": "Mounties", "Sumos": "Sumo Wrestlers", "Anciens Incas": "Ancient Incas", "Contes d'Anansi": "Anansi Tales", "Contes de Grimm": "Grimms' Fairy Tales", "Contes Féeriques Russes": "Russian Fairy Tales", "Voyageurs Polynésiens": "Polynesian Voyagers", "Moutons": "Sheep", "Pingouins": "Penguins", "Traqueurs de Spectres": "Wraithrustlers", "Extramorphes": "Extramorphs", "Hommes d'Action": "Action Heroes", "Retourneurs du Futur": "Backtimers", "Gobelins": "Goblins", "Sirènes": "Mermaids", "Squelettes": "Skeletons"};
Object.assign(EN, {
    "Nombre de joueurs": "Number of players", "Mode": "Mode", "Draft": "Draft",
    "Factions proposées par joueur": "Factions offered per player",
    "Taille de la réserve": "Common pool size",
    "Générateur Smash Up Avancé": "Advanced Smash Up Generator",
    "Changer le thème": "Change theme",
    "Historique des tirages": "Draw history", "Extensions & factions": "Expansions & factions",
    "Halfelins": "Halflings", "Dream Team": "Smash Up All Stars", "Champions du Monde": "World Champs",
    "Squatteurs de Trône": "Ignobles", "Luchadors": "Luchadores"
});

const $ = id => document.getElementById(id);
const LS = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const jsonLS = (k, def) => { try { const v = JSON.parse(LS.get(k)); return v == null ? def : v; } catch (e) { return def; } };
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

let langue = LS.get("smashup_lang") === "en" ? "en" : "fr";   // français par défaut
const L = (fr, en) => langue === "en" ? en : fr;
Object.assign(EN, { "Fermer": "Close", "Titan": "Titan", "Notes": "Notes", "Stats": "Stats", "Statistiques": "Statistics",
    "Détails": "Details", "Chargement…": "Loading…", "Code de complexité": "Complexity code", "S = plus complexe · D = plus simple": "S = most complex · D = simplest" });
const t = n => langue === "en" ? (EN[n] || n.replace(" : ", ": ")) : n;

let structureExtensions = {}, compteurTirage = 1, nomsFixes = [], factionExt = {}, customs = [];
let draft = null, historique = [], dernierResultat = null;

const MODES = ["tirage", "draft", "pick", "pickban"];
const MODE_LABEL = { tirage: "Tirage", draft: "Draft", pick: "Pick", pickban: "Pick & Ban" };
const DEFAUTS = { nbJ: 2, mode: "tirage", mainK: 5, poolAuto: true, poolVal: 10 };
let P = { ...DEFAUTS };

const themesList = ["light", "sepia", "dark", "parchment", "felt", "wood", "halloween", "christmas"];
const iconMap = { light: "sun", sepia: "sepia", dark: "moon", parchment: "parchment", felt: "felt", wood: "wood", halloween: "halloween", christmas: "christmas" };
const PANNEAUX = [["paramContainer", "tabParam"], ["historiqueContainer", "tabHist"], ["extContainer", "tabExt"]];

function initialiser() {
    chargerTheme();
    chargerParametres();
    chargerHistorique();
    parserCSV();
    appliquerLangue();
    setTimeout(afficherAstuceTheme, 900);
}

/* ---------- Langue ---------- */
function toggleLangue() {
    langue = langue === "fr" ? "en" : "fr";
    LS.set("smashup_lang", langue);
    appliquerLangue();
}

function appliquerLangue() {
    document.documentElement.lang = langue;
    document.title = t("Générateur Smash Up Avancé");
    document.querySelectorAll("[data-t]").forEach(el => el.textContent = (el.dataset.e || "") + t(el.dataset.t));
    document.querySelectorAll("[data-ttl]").forEach(el => el.title = t(el.dataset.ttl));
    genererHTMLFactions();
    chargerPreferencesFactions();
    rendreSegments();
    genererChampsJoueurs();
    rendreHistorique();
    if (draft) rendreDraft(); else if (dernierResultat) rendreResultat();
}

/* ---------- Thème ---------- */
// Thème par défaut selon la période de l'année (date de l'appareil). Utilisé TANT QUE l'utilisateur n'a jamais choisi de thème lui-même :
// il n'est jamais enregistré (smashup_theme n'est écrit que sur un choix de l'utilisateur), donc l'appli ne reste pas en Noël en mars.
// Pour changer une période : modifier [mois, jour] ci-dessous. Une période qui passe le nouvel an (fin avant début) est gérée.
const PERIODES_THEME = [
    { theme: "halloween", debut: [10, 15], fin: [11, 2] },   // 15 octobre → 2 novembre
    { theme: "christmas", debut: [12, 1], fin: [1, 6] }      // 1er décembre → 6 janvier
];
function themeDeSaison(date = new Date()) {
    const v = (date.getMonth() + 1) * 100 + date.getDate();
    for (const p of PERIODES_THEME) {
        const d = p.debut[0] * 100 + p.debut[1], f = p.fin[0] * 100 + p.fin[1];
        if (d <= f ? (v >= d && v <= f) : (v >= d || v <= f)) return p.theme;
    }
    return "light";
}

function chargerTheme() {
    const choisi = LS.get("smashup_theme");
    const theme = themesList.includes(choisi) ? choisi : themeDeSaison();
    document.documentElement.setAttribute("data-theme", theme);
    majIconeTheme(theme);
}

function appliquerTheme(theme) {                  // choix de l'utilisateur : mémorisé, il l'emporte désormais sur le thème saisonnier
    document.documentElement.setAttribute("data-theme", theme);
    LS.set("smashup_theme", theme);
    majIconeTheme(theme);
}

function toggleTheme() {                          // clic simple : thème suivant
    if (menuTheme.fait) return;                   // clic qui suit un appui long (menu de thèmes) : ignoré
    if (menuTheme.ouvert) return fermerMenuTheme();
    const current = document.documentElement.getAttribute("data-theme");
    appliquerTheme(themesList[(themesList.indexOf(current) + 1) % themesList.length]);
}

/* ---------- Menu de thèmes ----------
   Appui long (400 ms) sur le bouton de thème : une liste s'ouvre dessous. Le doigt glisse, la ligne survolée s'illumine, on relâche pour choisir.
   Relâcher en dehors de la liste annule. Relâcher sur le bouton laisse la liste ouverte : on peut alors toucher un thème. */
const NOMS_THEMES = { light: "Clair", sepia: "Sépia", dark: "Sombre", parchment: "Parchemin", felt: "Feutre", wood: "Bois", halloween: "Halloween", christmas: "Noël" };
Object.assign(EN, { "Clair": "Light", "Sépia": "Sepia", "Sombre": "Dark", "Parchemin": "Parchment", "Feutre": "Felt", "Bois": "Wood", "Noël": "Christmas",
    "Appui long : choisir un thème": "Long-press: choose a theme" });
const DELAI_MENU_THEME = 400;
const menuTheme = { ouvert: false, appui: false, fait: false, minuteur: null, x: 0, y: 0 };
const vibrer = ms => { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} };
const optSous = (x, y) => { const el = document.elementFromPoint(x, y); return el && el.closest ? el.closest(".theme-opt") : null; };

function ouvrirMenuTheme() {
    const m = $("themeMenu"), actuel = document.documentElement.getAttribute("data-theme");
    m.innerHTML = themesList.map(k => `<div class="theme-opt${k === actuel ? " actuel" : ""}" role="option" data-theme="${k}" data-k="${k}" aria-selected="${k === actuel}"><span class="theme-ico"></span><span class="theme-nom">${esc(t(NOMS_THEMES[k]))}</span><span class="theme-ech" aria-hidden="true"><i></i><i></i></span></div>`).join("");
    m.querySelectorAll(".theme-opt").forEach(o => {
        const svg = $("icon-" + iconMap[o.dataset.k]).cloneNode(true);
        svg.removeAttribute("id"); svg.style.display = "block";
        o.querySelector(".theme-ico").appendChild(svg);
    });
    m.hidden = false;
    menuTheme.ouvert = true;
    $("themeToggle").setAttribute("aria-expanded", "true");
    document.querySelectorAll(".astuce-theme").forEach(a => a.remove());   // l'astuce du premier lancement n'a plus de raison d'être
    vibrer(12);
}

function fermerMenuTheme() {
    clearTimeout(menuTheme.minuteur);
    menuTheme.ouvert = false;
    $("themeMenu").hidden = true;
    $("themeToggle").setAttribute("aria-expanded", "false");
}

(function () {
    const bt = $("themeToggle"), m = $("themeMenu");
    bt.addEventListener("pointerdown", e => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        if (menuTheme.ouvert) return;
        menuTheme.appui = true; menuTheme.x = e.clientX; menuTheme.y = e.clientY;
        clearTimeout(menuTheme.minuteur);
        menuTheme.minuteur = setTimeout(() => { menuTheme.fait = true; ouvrirMenuTheme(); }, DELAI_MENU_THEME);
    });
    window.addEventListener("pointermove", e => {
        if (!menuTheme.appui) return;
        if (!menuTheme.ouvert) { if (Math.hypot(e.clientX - menuTheme.x, e.clientY - menuTheme.y) > 12) clearTimeout(menuTheme.minuteur); return; }
        const opt = optSous(e.clientX, e.clientY), ancien = m.querySelector(".survol");
        if (ancien === opt) return;
        if (ancien) ancien.classList.remove("survol");
        if (opt) { opt.classList.add("survol"); vibrer(6); }
    }, true);
    window.addEventListener("pointerup", e => {
        if (!menuTheme.appui) return;
        menuTheme.appui = false;
        clearTimeout(menuTheme.minuteur);
        if (!menuTheme.ouvert) return;             // appui court : le clic normal (thème suivant) s'en charge
        const opt = optSous(e.clientX, e.clientY), surBouton = document.elementFromPoint(e.clientX, e.clientY);
        if (opt) { appliquerTheme(opt.dataset.k); fermerMenuTheme(); }
        else if (!(surBouton && surBouton.closest("#themeToggle"))) fermerMenuTheme();
        setTimeout(() => { menuTheme.fait = false; }, 400);   // laisse passer (et ignorer) le clic qui suit le relâchement
    }, true);
    window.addEventListener("pointercancel", () => {
        if (!menuTheme.appui) return;
        menuTheme.appui = false;
        fermerMenuTheme();
        setTimeout(() => { menuTheme.fait = false; }, 400);
    }, true);
    m.addEventListener("click", e => {             // mode « toucher » : la liste est restée ouverte après un appui long
        const opt = e.target.closest(".theme-opt");
        if (!opt) return;
        appliquerTheme(opt.dataset.k);
        fermerMenuTheme();
    });
    document.addEventListener("pointerdown", e => { if (menuTheme.ouvert && !e.target.closest("#themeMenu, #themeToggle")) fermerMenuTheme(); }, true);
    document.addEventListener("keydown", e => { if (e.key === "Escape" && menuTheme.ouvert) fermerMenuTheme(); });
    window.addEventListener("blur", () => { if (menuTheme.ouvert) fermerMenuTheme(); menuTheme.appui = false; menuTheme.fait = false; });
})();

// Astuce du premier lancement (une seule fois) : le geste d'appui long sur le bouton de thème n'a aucun indice visible.
function afficherAstuceTheme() {
    if (LS.get("smashup_astuce_theme")) return;
    LS.set("smashup_astuce_theme", "1");
    if (menuTheme.appui || menuTheme.ouvert) return;               // l'utilisateur utilise déjà le bouton : inutile
    const a = document.createElement("div");
    a.className = "astuce astuce-theme";
    a.setAttribute("role", "status");
    a.textContent = t("Appui long : choisir un thème");
    document.querySelector(".app-content").appendChild(a);
    let tm = null;
    const retirer = () => {
        clearTimeout(tm);
        document.removeEventListener("pointerdown", retirer, true);
        a.classList.add("sortie");
        setTimeout(() => a.remove(), 280);
    };
    tm = setTimeout(retirer, 5500);
    document.addEventListener("pointerdown", retirer, true);
}

function majIconeTheme(theme) {
    for (const [k, v] of Object.entries(iconMap)) {
        $("icon-" + v).style.display = (theme === k) ? "block" : "none";
    }
}

/* ---------- Paramètres (boutons à bascule) ---------- */
function sauvegarderParametres() { LS.set("smashup_params", JSON.stringify(P)); }

function chargerParametres() {
    const p = jsonLS("smashup_params", null);
    if (!p || typeof p.nbJ !== "number") return;
    P = { ...DEFAUTS, ...p };
    P.nbJ = Math.min(20, Math.max(1, P.nbJ | 0));
    P.mainK = Math.min(20, Math.max(3, P.mainK | 0));
    P.poolVal = Math.min(60, Math.max(2, P.poolVal | 0));
    if (!MODES.includes(P.mode)) P.mode = "tirage";
}

function setP(k, v) {
    P[k] = v;
    sauvegarderParametres();
    rendreSegments();
    if (k === "nbJ") genererChampsJoueurs();
}

function setPInput(k, el, min, max) {
    let v = parseInt(el.value, 10);
    if (isNaN(v)) return rendreSegments();
    v = Math.min(max, Math.max(min, v));
    P[k] = v;
    if (k === "poolVal") P.poolAuto = false;
    sauvegarderParametres();
    rendreSegments();
    if (k === "nbJ") genererChampsJoueurs();
}

// Taille automatique de la réserve : Pick = 2 x joueurs + 2 (2 j -> 6, 3 j -> 8, 4 j -> 10) ; Pick & Ban = 5 x joueurs.
function poolAuto(mode, nbJ) { return mode === "pick" ? 2 * nbJ + 2 : 5 * nbJ; }

function rendreSegments() {
    const btn = (label, on, js) => `<button type="button" class="${on ? "on" : ""}" aria-pressed="${on}" onclick="${js}">${label}</button>`;
    const num = (id, val, on, min, max, js) =>
        `<input type="number" id="${id}" class="${on ? "on" : ""}" min="${min}" max="${max}" placeholder="…" value="${on ? val : ""}" onchange="${js}">`;
    const preJ = [2, 3, 4], preK = [3, 4, 5, 6];

    $("segJ").innerHTML = preJ.map(n => btn(n, P.nbJ === n, `setP('nbJ',${n})`)).join("") +
        num("inNbJ", P.nbJ, !preJ.includes(P.nbJ), 1, 20, "setPInput('nbJ',this,1,20)");
    $("segMode").innerHTML = MODES.map(m => btn(t(MODE_LABEL[m]), P.mode === m, `setP('mode','${m}')`)).join("");
    $("segMain").innerHTML = preK.map(n => btn(n, P.mainK === n, `setP('mainK',${n})`)).join("") +
        num("inMain", P.mainK, !preK.includes(P.mainK), 3, 20, "setPInput('mainK',this,3,20)");
    $("segPool").innerHTML = btn(`Auto (${poolAuto(P.mode, P.nbJ)})`, P.poolAuto, "setP('poolAuto',true)") +
        num("inPool", P.poolVal, !P.poolAuto, 2, 60, "setPInput('poolVal',this,2,60)");

    $("rowMain").classList.toggle("tab-hidden", P.mode !== "draft");
    $("rowPool").classList.toggle("tab-hidden", P.mode !== "pick" && P.mode !== "pickban");
}

function genererChampsJoueurs() {
    const c = $("nomsJoueursContainer");
    const saisis = Array.from(c.querySelectorAll("input")).map(inp => inp.value);
    let html = "";
    for (let i = 1; i <= P.nbJ; i++) {
        const nom = saisis[i - 1] !== undefined ? saisis[i - 1] : (nomsFixes[i - 1] || "");
        html += `<input type="text" id="nomJoueur${i}" placeholder="${L("Joueur", "Player")} ${i}" value="${esc(nom)}">`;
    }
    c.innerHTML = html;
}

/* ---------- Historique ---------- */
function chargerHistorique() {
    const noms = jsonLS("smashup_noms", null);
    if (Array.isArray(noms)) nomsFixes = noms;
    const h = jsonLS("smashup_historique", null);
    if (!h || !Array.isArray(h.items)) return;   // ancien format (html) ignoré
    if ((Date.now() - h.timestamp) / 36e5 > 5) { LS.del("smashup_historique"); return; }
    historique = h.items;
    compteurTirage = h.compteur || historique.length + 1;
}

function sauverHistorique() {
    LS.set("smashup_historique", JSON.stringify({ items: historique, compteur: compteurTirage, timestamp: Date.now() }));
}

function rendreHistorique() {
    const loc = langue === "en" ? "en-GB" : "fr-FR";
    $("historiqueListe").innerHTML = historique.map(h => {
        const heure = new Date(h.ts).toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        return `<li class="historique-item"><div class="historique-titre"><b>${L("Tirage", "Draw")} ${h.n}</b><span class="historique-heure">${heure}</span></div>` +
            h.groupes.map((g, i) => `<b>${nomJ(i, h.noms)}</b> : ${g.map(t).join(" & ")}<br>`).join("") +
            `🎲 ${nomJ(h.premier, h.noms)} ${t("commence")}<br></li>`;
    }).join("");
    majTabHist();
}

function majTabHist() {
    const vide = !historique.length;
    $("historiqueContainer").style.display = vide ? "none" : "inline-block";
    $("tabHist").style.display = vide ? "none" : "";
    if (vide) { $("historiqueContainer").classList.add("tab-hidden"); $("tabHist").classList.remove("actif"); }
}

function verifierExpirationHistorique() {
    const h = jsonLS("smashup_historique", null);
    if (h && (Date.now() - h.timestamp) / 36e5 > 5) viderHistorique();
}

function remonter() { window.scrollTo({ top: 0, behavior: "smooth" }); }

function viderHistorique() {
    historique = [];
    dernierResultat = null;
    compteurTirage = 1;
    $("resultat").innerHTML = "";
    LS.del("smashup_historique");
    majTabHist();
    rendreHistorique();
    remonter();
}

function reinitialiserTout() {
    viderHistorique();
    ["smashup_factions", "smashup_params", "smashup_noms", "smashup_mode"].forEach(k => LS.del(k));
    P = { ...DEFAUTS };
    nomsFixes = [];
    $("nomsJoueursContainer").innerHTML = "";
    rendreSegments();
    genererChampsJoueurs();
    chargerPreferencesFactions();
    remonter();
}

/* ---------- Factions / extensions ---------- */
function parserCSV() {
    donneesCSV.split(/\r?\n/).forEach(ligne => {
        if (!ligne.trim()) return;
        const [nomExt, annee, def, facs] = ligne.split("|");
        const parDefaut = def === "1";
        structureExtensions[nomExt] = { annee, factions: facs.split(";").map(nom => ({ nom, parDefaut })) };
        facs.split(";").forEach(f => factionExt[f] = nomExt);
    });
}

function genererHTMLFactions() {
    let html = "", idCounter = 0;
    for (const [ext, data] of Object.entries(structureExtensions)) {
        const id = "ext_" + idCounter++;
        const annee = langue === "en" ? (ANNEE_EN[ext] || data.annee.replace(" VO", "")) : data.annee;
        html += `<details class="ext-details"><summary><input type="checkbox" id="${id}" onclick="toggleExtension(event,'${id}')">${t(ext)} ${annee}</summary><div class="factions-list">`;
        data.factions.forEach(f => {
            const det = CODES[f.nom] ? `<button type="button" class="btn-det" data-det="${encodeURIComponent(f.nom)}">${t("Détails")}</button>` : "";
            html += `<div class="fac-row"><label><input type="checkbox" class="fac_${id} faction-cb" value="${f.nom}" data-default="${f.parDefaut}" onchange="updateMasterCb('${id}');sauvegarderPreferencesFactions()"> ${t(f.nom)}</label>${det}</div>`;
        });
        html += `</div></details>`;
    }
    html += `<details class="ext-details" open><summary><input type="checkbox" id="ext_custom" onclick="toggleExtension(event,'ext_custom')">${t("Personnalisé")}</summary><div class="factions-list"><div id="customList"></div><input type="text" id="customNom" placeholder="${t("Nouvelle faction")}" maxlength="30"><button class="btn-compact" onclick="ajouterCustom()">+</button></div></details>`;
    $("optionsExtensions").innerHTML = html;
    majBoutonsDetails();
    customs = jsonLS("smashup_custom", []);
    customs.forEach(n => factionExt[n] = "Personnalisé");
    rendreCustoms();
}

function rendreCustoms() {
    $("customList").innerHTML = customs.map((n, i) => `<label><input type="checkbox" class="fac_ext_custom faction-cb" value="${esc(n)}" data-default="true" onchange="updateMasterCb('ext_custom');sauvegarderPreferencesFactions()"> ${esc(n)} <button class="btn-compact btn-danger" onclick="supprimerCustom(${i})">✕</button></label>`).join("");
}

function ajouterCustom() {
    const n = $("customNom").value.trim().replace(/[<>"]/g, "");
    if (!n || factionExt[n]) return;
    customs.push(n);
    factionExt[n] = "Personnalisé";
    LS.set("smashup_custom", JSON.stringify(customs));
    rendreCustoms();
    Array.from(document.querySelectorAll(".fac_ext_custom")).pop().checked = true;
    $("customNom").value = "";
    updateMasterCb("ext_custom");
    sauvegarderPreferencesFactions();
}

function supprimerCustom(i) {
    delete factionExt[customs[i]];
    customs.splice(i, 1);
    LS.set("smashup_custom", JSON.stringify(customs));
    rendreCustoms();
    updateMasterCb("ext_custom");
    sauvegarderPreferencesFactions();
}

function sauvegarderPreferencesFactions() {
    const cochees = Array.from(document.querySelectorAll(".faction-cb:checked")).map(cb => cb.value);
    LS.set("smashup_factions", JSON.stringify(cochees));
}

function chargerPreferencesFactions() {
    const list = jsonLS("smashup_factions", null);
    document.querySelectorAll(".faction-cb").forEach(cb => {
        cb.checked = Array.isArray(list) ? list.includes(cb.value) : cb.getAttribute("data-default") === "true";
    });
    document.querySelectorAll(".ext-details").forEach(d => updateMasterCb(d.querySelector("summary input").id));
}

function toggleExtension(event, extId) {
    event.stopPropagation();
    const etat = $(extId).checked;
    document.querySelectorAll(".fac_" + extId).forEach(cb => cb.checked = etat);
    sauvegarderPreferencesFactions();
}

function updateMasterCb(extId) {
    const l = Array.from(document.querySelectorAll(".fac_" + extId));
    $(extId).checked = l.length > 0 && l.every(cb => cb.checked);
}

function actionToutesFactions(coche) {
    document.querySelectorAll(".faction-cb, .ext-details summary input").forEach(cb => cb.checked = coche);
    sauvegarderPreferencesFactions();
}

/* ---------- Panneaux ---------- */
function fermerPanneaux() {
    PANNEAUX.forEach(([p, b]) => { $(p).classList.add("tab-hidden"); $(b).classList.remove("actif"); });
}

function ouvrirOnglet(panneau, bouton) {
    const ouvre = $(panneau).classList.contains("tab-hidden");
    fermerPanneaux();
    if (ouvre) {
        $(panneau).classList.remove("tab-hidden");
        $(bouton).classList.add("actif");
        $(panneau).scrollIntoView({ behavior: "smooth" });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });   // fermeture : retour en haut
    }
}

/* ---------- Tirage ---------- */
function melanger(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function nomJ(i, noms = nomsFixes) { return noms[i] ? esc(noms[i]) : `${L("Joueur", "Player")} ${i + 1}`; }

const ASSETS = {}, PRET = {};   // PRET[code] = images déjà chargées
const chargerImg = src => new Promise(r => { const i = new Image(); i.onload = () => r(i); i.onerror = () => r(null); i.src = src; });
// Détection automatique du format : l'extension déjà trouvée dans un dossier est essayée en premier (évite les erreurs 404 inutiles).
const EXT_TROUVEE = {};
const ordreExt = dossier => [EXT_TROUVEE[dossier], ...FORMATS_IMG].filter((e, i, a) => e && a.indexOf(e) === i);
const chargerImgAuto = async (dossier, code) => {
    for (const ext of ordreExt(dossier)) {
        const img = await chargerImg(dossier + code + ext);
        if (img) { EXT_TROUVEE[dossier] = ext; return img; }
    }
    return null;
};
// Icônes (balises <img> des résultats) : en cas d'échec, on passe au format suivant ; après le dernier, on affiche le badge à initiales.
function icoOk(img) { EXT_TROUVEE[DOSSIER_ICO] = img.dataset.exts.split(",")[+img.dataset.i || 0]; }
function icoSuivante(img) {
    const exts = img.dataset.exts.split(","), i = (+img.dataset.i || 0) + 1;
    if (i < exts.length) { img.dataset.i = i; img.src = DOSSIER_ICO + img.dataset.code + exts[i]; }
    else img.outerHTML = `<span class=badge>${img.dataset.ini}</span>`;
}
function assets(code) {
    if (!code) return Promise.resolve({});
    return ASSETS[code] || (ASSETS[code] = (async () => {
        const f = FICHES[code] || {};
        const [illus, cards, ...ind] = await Promise.all([
            chargerImgAuto(DOSSIER_ILLUS, code), chargerImgAuto(DOSSIER_CARDS, code),
            ...(f.cards || []).map(x => chargerImg(DOSSIER_CARDS + x))]);
        PRET[code] = true;
        return { illus, cards, ind: ind.length && ind.every(Boolean) ? ind : null };
    })());
}
const fichePossible = a => !!(a.illus || a.cards || a.ind);

// Préchargement : dès qu'une faction apparaît à l'écran, ses images sont chargées ; sans illustration ni cartes, le bouton est désactivé.
function precharger(racine) {
    racine.querySelectorAll("[data-f]").forEach(el => {
        const code = CODES[decodeURIComponent(el.dataset.f)];
        assets(code).then(a => {
            if (code) { FICHE_OK[code] = fichePossible(a); majBoutonsDetails(); }
            if (el.classList.contains("ico-btn") && !fichePossible(a)) el.classList.add("off");
        });
    });
}

// Boutons « Détails » : visibles tant qu'on ne sait pas, cachés dès qu'on sait qu'une faction n'a ni illustration ni cartes.
// Dans les résultats du tirage (data-need="ok") le bouton reste caché tant que la fiche n'est pas confirmée.
const FICHE_OK = {};
function majBoutonsDetails() {
    document.querySelectorAll(".btn-det").forEach(b => {
        const ok = FICHE_OK[CODES[decodeURIComponent(b.dataset.det)]];
        b.hidden = b.dataset.need === "ok" ? ok !== true : ok === false;
    });
}
new MutationObserver(() => precharger($("resultat"))).observe($("resultat"), { childList: true });

// Critères des statistiques (ordre d'affichage). Clé = nom du champ dans data/stats.js, valeur de 0 à 5 (demi-étoiles permises : 3.5).
const STATS_CRITERES = [
    ["creatures", "Créatures", "Minions"],
    ["renforcement", "Renforcement", "Power boost"],
    ["attache_base", "Attachez Base", "Attach to base"],
    ["attache_creature", "Attachez Créature", "Attach to minion"],
    ["deplacement", "Déplacement", "Movement"],
    ["destruction", "Destruction", "Destruction"],
    ["pioche", "Pioche", "Draw"],
    ["defausse", "Défausse", "Discard"],
    ["controle", "Contrôle", "Control"],
    ["conquete", "Conquête", "Conquest"]
];
const rgbDe = h => { const n = parseInt(String(h).slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const luminance = ([r, g, b]) => (0.299 * r + 0.587 * g + 0.114 * b) / 255;
const ICONES_FICHE = {
    notes: '<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
    stats: '<svg viewBox="0 0 24 24" style="stroke-width:2.6"><path d="M5.5 20v-8M12 20V4.5M18.5 20v-5"/></svg>',
    titan: '<svg viewBox="0 0 24 24"><path d="M3.5 4.5 8 7.5h8l4.5-3-1.2 7.2c-.5 5-3.3 8.8-7.3 8.8s-6.8-3.8-7.3-8.8z"/><circle cx="9" cy="12.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="12.5" r="1.1" fill="currentColor" stroke="none"/></svg>'
};
let ficheCtl = null;   // contrôleur de la fiche ouverte : { fermerBulle, nettoyer }

// Place la bulle dans la fiche, sans jamais dépasser : à gauche des boutons si la place le permet, sinon au-dessus, sinon en dessous.
function placerBulle(scene, bulle, btn) {
    const S = scene.getBoundingClientRect();
    const rel = el => { const r = el.getBoundingClientRect(); return { l: r.left - S.left, t: r.top - S.top, r: r.right - S.left, b: r.bottom - S.top, w: r.width, h: r.height }; };
    const B = rel(btn);
    const corps = bulle.querySelector(".bulle-corps");
    const M = 8, F = 11, WMAX = 330;
    const borne = (v, mi, ma) => Math.max(mi, Math.min(v, ma));
    const mesurer = (w, maxH) => { bulle.style.width = w + "px"; corps.style.maxHeight = Math.max(maxH, 90) + "px"; return bulle.offsetHeight; };
    let mode, left, top, w, h, p;
    if (btn.classList.contains("rkbtn")) {                // bouton de rang (en bas à gauche) : mini-fenêtre au-dessus, sinon en dessous
        w = Math.min(S.width - 2 * M, 270); left = borne(B.l, M, S.width - M - w);
        const dispoH = B.t - F - M, naturelle = mesurer(w, 9999);
        if (dispoH >= naturelle || dispoH >= 110) { mode = "h"; h = mesurer(w, dispoH); top = B.t - F - h; }
        else { mode = "b"; top = B.b + F; h = mesurer(w, S.height - top - M); }
        p = borne(B.l + B.w / 2 - left, 18, w - 18);
        bulle.className = "bulle " + mode;
        bulle.style.left = left + "px"; bulle.style.top = top + "px";
        bulle.style.setProperty("--p", p + "px");
        return;
    }
    const col = rel(scene.querySelector(".fiche-boutons")), C = rel(scene.querySelector(".fiche-cartes"));
    const dispoG = col.l - F - 2 * M;
    if (dispoG >= 190) {                       // à gauche, au niveau du bouton
        mode = "g"; w = Math.min(dispoG, WMAX); left = col.l - F - w;
        const bas = C.t - 6;                              // la bulle reste au-dessus des cartes
        h = mesurer(w, bas - M);
        top = borne(B.t + B.h / 2 - h / 2, M, Math.max(M, bas - h));
        p = borne(B.t + B.h / 2 - top, 18, h - 18);
    } else {
        w = Math.min(S.width - 2 * M, WMAX); left = borne(B.l + B.w / 2 - w / 2, M, S.width - M - w);
        const dispoH = col.t - F - M;
        const dispoB = S.height - (col.b + F) - M;
        const naturelle = mesurer(w, 9999);               // hauteur complète de la bulle
        if (dispoH >= 110 && (naturelle <= dispoH || naturelle > dispoB)) {   // au-dessus des boutons (défilement interne si besoin)
            mode = "h"; h = mesurer(w, dispoH); top = col.t - F - h;
        } else {                                          // en dessous des boutons (recouvre les cartes)
            mode = "b"; top = col.b + F; h = mesurer(w, dispoB);
        }
        p = borne(B.l + B.w / 2 - left, 18, w - 18);
    }
    bulle.className = "bulle " + mode;
    bulle.style.left = left + "px"; bulle.style.top = top + "px";
    bulle.style.setProperty("--p", p + "px");
}

// Indicateur de chargement : n'apparaît que si les images tardent (> 150 ms) ; toucher le fond l'annule.
let reqFiche = 0;
function avecChargement(code) {
    const p = assets(code);
    if (PRET[code]) return p;
    let boite = null;
    const tm = setTimeout(() => {
        boite = document.createElement("div");
        boite.className = "charge-fond";
        boite.setAttribute("role", "status");
        boite.innerHTML = `<div class="charge-boite"><i class="charge-rond"></i><span>${t("Chargement…")}</span></div>`;
        boite.addEventListener("click", () => { reqFiche++; boite.remove(); });
        document.body.appendChild(boite);
    }, 150);
    return p.finally(() => { clearTimeout(tm); if (boite) boite.remove(); });
}

async function ouvrirFiche(n) {
    const code = CODES[n];
    if (!code) return;
    const req = ++reqFiche;
    const a = await avecChargement(code);
    FICHE_OK[code] = fichePossible(a); majBoutonsDetails();
    if (req !== reqFiche || !fichePossible(a)) return;   // annulé, ou remplacé par une autre ouverture
    const d = FICHES[code] || {};
    const tx = o => o ? (o[langue] || o.fr || o.en || "") : "";
    const src = i => esc(i.src);
    const ti = d.titan && (tx(d.titan.nom) || tx(d.titan.capacite)) ? d.titan : null;
    const no = tx(d.notes);
    // Stats : objet { creatures: 4, pioche: 2.5, ... } (0 à 5). Champ absent ou vide = critère non affiché.
    const sd = d.stats && typeof d.stats === "object" && !Array.isArray(d.stats) ? d.stats : {};
    const st = STATS_CRITERES.map(([k, fr, en]) => {
        const v = sd[k];
        if (v == null || v === "" || isNaN(Number(v))) return null;
        return { label: langue === "en" ? en : fr, v: Math.round(Math.max(0, Math.min(5, Number(v))) * 2) / 2 };
    }).filter(Boolean);

    // Rang de complexité (data/rank.js) : { code: 1..5 } -> RANK_TIERS[code] = { tier, metal, complexite, couleurs }
    const rk = d.rank && window.RANK_TIERS ? window.RANK_TIERS[d.rank.code] : null;
    let rkVars = "";
    if (rk && Array.isArray(rk.couleurs) && rk.couleurs.length === 3) {
        const [c0, c1, c2] = rk.couleurs, glow = luminance(rgbDe(c1)) < 0.45 ? c0 : c1;
        rkVars = `--r0:${c0};--r1:${c1};--r2:${c2};--rg:${rgbDe(glow).join(",")}`;
    }
    const contenu = {
        rank: () => `<b class="bulle-titre">${esc(rk.tier)} Tier · ${esc(rk.metal[langue] || rk.metal.fr)}</b><p>${t("Code de complexité")} : ${esc(rk.complexite[langue] || rk.complexite.fr)}</p><p class="bulle-aide">${t("S = plus complexe · D = plus simple")}</p>`,
        titan: () => `<b class="bulle-titre">${esc(tx(ti.nom) || t("Titan"))}</b><p>${esc(tx(ti.capacite))}</p>`,
        notes: () => `<b class="bulle-titre">${t("Notes")}</b><p>${esc(no)}</p>`,
        stats: () => `<b class="bulle-titre">${t("Statistiques")}</b>${st.map(x => `<div class="stat-l"><span>${esc(x.label)}</span><span class="etoiles" style="--v:${x.v}" role="img" aria-label="${x.v}/5">★★★★★</span></div>`).join("")}`
    };
    const dispo = [ti && "titan", st.length && "stats", no && "notes"].filter(Boolean);   // ordre des boutons, de haut en bas : Titan, Stats, Notes

    const art = a.illus ? `<div class="fiche-art"><img src="${src(a.illus)}" alt=""></div>` : "";
    const rang = rkVars ? `<button type="button" class="rkbtn rk-${esc(d.rank.code)}" data-b="rank" aria-expanded="false" style="${esc(rkVars)}"><span class="rk-ico" aria-hidden="true">${esc(rk.icone || "🏅")}</span><span>${esc(rk.tier)} Tier</span></button>` : "";
    const nbBtn = Math.max(dispo.length, rang ? 1 : 0);   // hauteur réservée au-dessus des cartes (colonne de droite, ou rang seul)
    const boutons = dispo.length ? `<div class="fiche-boutons">${dispo.map(k => `<button type="button" class="fbtn" data-b="${k}" aria-expanded="false">${ICONES_FICHE[k]}<span>${t(k === "stats" ? "Stats" : k === "notes" ? "Notes" : "Titan")}</span></button>`).join("")}</div>` : "";
    const ouvertCartes = a.ind ? `<div class="fiche-cartes ind">${a.ind.map(i => `<img src="${src(i)}" alt="">`).join("")}`
        : a.cards ? `<div class="fiche-cartes"><img src="${src(a.cards)}" alt="">`
        : nbBtn ? `<div class="fiche-cartes vide">` : "";
    const cartes = ouvertCartes ? ouvertCartes + boutons + rang + "</div>" : "";

    fermerFiche(true);
    const f = document.createElement("div");
    f.className = "fiche-fond";
    f.innerHTML = `<div class="fiche${art ? "" : " sans-art"}" style="--nb:${nbBtn}"><div class="fiche-scene">${art}${cartes}</div></div>`;
    document.body.appendChild(f);

    const scene = f.querySelector(".fiche-scene"), zoneBtn = f.querySelector(".fiche-boutons");
    let actif = null, bulle = null, minuteur = null;
    const DUREE_RANG = 5000;                              // la mini-fenêtre du rang se referme seule après 5 s
    const fermerBulle = () => {
        clearTimeout(minuteur);
        if (!bulle) return false;
        bulle.remove(); bulle = null; actif = null;
        scene.classList.remove("ouvert");
        f.querySelectorAll(".fbtn, .rkbtn").forEach(b => { b.classList.remove("actif"); b.setAttribute("aria-expanded", "false"); });
        return true;
    };
    const placer = () => { if (bulle && actif) placerBulle(scene, bulle, f.querySelector(`[data-b="${actif}"]`)); };
    const ouvrirBulle = btn => {
        const k = btn.dataset.b, memeBouton = actif === k;
        fermerBulle();
        if (memeBouton) return;                           // second clic sur le même bouton = fermeture
        actif = k;
        bulle = document.createElement("div");
        bulle.className = "bulle";
        bulle.dataset.k = k;
        if (k === "rank") bulle.setAttribute("style", rkVars.replace("--rg", "--cg").replace(/--r0:([^;]+)/, "--c:$1"));   // couleurs de la mini-fenêtre = celles du rang
        bulle.setAttribute("role", "dialog");
        bulle.innerHTML = `<i class="bulle-pointe"></i><div class="bulle-corps">${contenu[k]()}</div>`;
        scene.appendChild(bulle);
        scene.classList.add("ouvert");
        btn.classList.add("actif"); btn.setAttribute("aria-expanded", "true");
        placer();
        if (k === "rank") minuteur = setTimeout(() => { if (actif === "rank") fermerBulle(); }, DUREE_RANG);
    };
    f.addEventListener("click", e => {
        if (focusFait) return;                             // clic qui suit un appui long sur l'illustration (mode focus) : ignoré
        const btn = e.target.closest(".fbtn, .rkbtn");
        if (btn) return ouvrirBulle(btn);
        if (e.target.closest(".bulle")) return;           // clic dans la bulle : on la laisse ouverte (lecture, défilement)
        if (fermerBulle()) return;                        // clic ailleurs : ferme la bulle
        // puis, sans bulle : clic à l'extérieur OU sur l'illustration (.fiche-art) = fermeture de la fiche.
        // Boutons, bulle et 3 cartes (.fiche-cartes) sont déjà traités plus haut ou ne sont pas dans .fiche-art : ils ne ferment pas.
        if (e.target === f || e.target.closest(".fiche-art")) fermerFiche();
    });
    // Appui long sur l'illustration = mode focus : boutons, cartes et bulle sont masqués (classe .focus, voir style.css).
    // Appui long sur les 3 cartes = focus des cartes (classe .focus-cartes) : elles passent au centre de l'écran, agrandies, le reste est masqué.
    // Le déclenchement (400 ms sur l'illustration) est inchangé. La SORTIE se fait uniquement au relâchement du doigt/de la souris,
    // quelle que soit la position du doigt à l'écran. Un appui simple ferme la fiche (ci-dessus) ; le clic qui suit un appui long est ignoré.
    const DELAI_FOCUS = 400;
    let focusTm = null, retourTm = null, focusFait = false, fx = 0, fy = 0;
    // Focus des cartes : on mesure les cartes à leur place normale, puis on calcule le décalage (--dx, --dy) et le grossissement (--sc)
    // qui les amènent au centre de l'écran (plein écran moins une marge, grossissement max x3). Le déplacement est animé par style.css.
    const debutFocusCartes = () => {
        const C = scene.querySelector(".fiche-cartes");
        if (!C) return;
        clearTimeout(retourTm);
        f.classList.remove("retour-cartes");
        f.classList.add("focus-cartes");
        C.style.transition = "none"; C.style.transform = "none";     // mesure sans l'effet d'une animation en cours
        const r = C.getBoundingClientRect();
        C.style.transform = ""; C.style.transition = "";
        const W = window.innerWidth, H = window.innerHeight, M = 12;
        const sc = Math.max(1, Math.min((W - 2 * M) / r.width, (H - 2 * M) / r.height, 3));
        C.style.setProperty("--sc", sc.toFixed(3));
        C.style.setProperty("--dx", (W / 2 - (r.left + r.width / 2)).toFixed(1) + "px");
        C.style.setProperty("--dy", (H / 2 - (r.top + r.height / 2)).toFixed(1) + "px");
    };
    const finFocus = () => {
        clearTimeout(focusTm);
        const enCartes = f.classList.contains("focus-cartes");
        if (!f.classList.contains("focus") && !enCartes) return;
        f.classList.remove("focus");
        if (enCartes) {                                              // retour animé des cartes ; la fiche reste "ouverte" (non rognée) pendant l'animation
            f.classList.remove("focus-cartes");
            f.classList.add("retour-cartes");
            clearTimeout(retourTm);
            retourTm = setTimeout(() => f.classList.remove("retour-cartes"), 360);
        }
        setTimeout(() => { focusFait = false; }, 150);
    };
    // Tactile : si le navigateur reprend le geste (défilement), il envoie "pointercancel" alors que le doigt est toujours posé.
    // On l'ignore pour le toucher ; la sortie se fait alors sur "touchend"/"touchcancel" (dernier doigt levé).
    const surAnnulation = e => { if (e.pointerType !== "touch") finFocus(); };
    const surToucherFin = e => { if (!e.touches || e.touches.length === 0) finFocus(); };
    // En focus, le doigt peut glisser n'importe où sans faire défiler la fiche ni la page.
    const bloquerGeste = e => { if ((f.classList.contains("focus") || f.classList.contains("focus-cartes")) && e.cancelable) e.preventDefault(); };
    f.addEventListener("pointerdown", e => {
        if (e.button !== 0) return;
        const surArt = !!e.target.closest(".fiche-art");
        // Appui long sur les 3 cartes (pas sur les boutons Titan/Stats/Notes/rang ni sur une bulle, pas si la fiche n'a pas de cartes) = focus des cartes.
        const surCartes = !surArt && !!e.target.closest(".fiche-cartes:not(.vide)") && !e.target.closest(".fbtn, .rkbtn, .bulle");
        if (!surArt && !surCartes) return;
        fx = e.clientX; fy = e.clientY;
        clearTimeout(focusTm);
        focusTm = setTimeout(() => { focusFait = true; if (surCartes) debutFocusCartes(); else f.classList.add("focus"); }, DELAI_FOCUS);
    });
    f.addEventListener("pointermove", e => { if (!focusFait && Math.hypot(e.clientX - fx, e.clientY - fy) > 12) clearTimeout(focusTm); });   // le doigt bouge (défilement) avant le focus : pas de focus
    f.addEventListener("touchmove", bloquerGeste, { passive: false });
    window.addEventListener("pointerup", finFocus, true);
    window.addEventListener("pointercancel", surAnnulation, true);
    window.addEventListener("touchend", surToucherFin, true);
    window.addEventListener("touchcancel", surToucherFin, true);
    window.addEventListener("blur", finFocus);            // sécurité : changement d'appli/onglet pendant le focus
    window.addEventListener("resize", placer);
    ficheCtl = { fermerBulle, nettoyer: () => {
        clearTimeout(minuteur); clearTimeout(focusTm); clearTimeout(retourTm);
        window.removeEventListener("resize", placer);
        window.removeEventListener("pointerup", finFocus, true);
        window.removeEventListener("pointercancel", surAnnulation, true);
        window.removeEventListener("touchend", surToucherFin, true);
        window.removeEventListener("touchcancel", surToucherFin, true);
        window.removeEventListener("blur", finFocus);
    } };
}

function fermerFiche(vite) {
    if (ficheCtl) { ficheCtl.nettoyer(); ficheCtl = null; }
    document.querySelectorAll(".fiche-fond:not(.sortie)").forEach(f => {
        if (vite === true || matchMedia("(prefers-reduced-motion: reduce)").matches) return f.remove();
        f.classList.add("sortie");
        setTimeout(() => f.remove(), 170);
    });
}

let lpTimer = null, lpFait = false;
document.addEventListener("pointerdown", e => {
    lpFait = false;
    const dd = e.target.closest(".btn-det");
    if (dd) assets(CODES[decodeURIComponent(dd.dataset.det)]);   // le chargement démarre dès l'appui
    const b = e.target.closest("button[data-f]");
    clearTimeout(lpTimer);
    if (b) lpTimer = setTimeout(() => { lpFait = true; ouvrirFiche(decodeURIComponent(b.dataset.f)); }, 450);
});
["pointerup", "pointercancel", "pointerleave", "scroll"].forEach(ev => document.addEventListener(ev, () => clearTimeout(lpTimer), true));
document.addEventListener("click", e => {
    if (lpFait) { lpFait = false; e.stopPropagation(); e.preventDefault(); return; }
    const dt = e.target.closest(".btn-det");              // bouton « Détails » (onglet Extensions) : ouvre la fiche sans cocher/décocher la faction
    if (dt) {
        e.preventDefault(); e.stopPropagation();
        ouvrirFiche(decodeURIComponent(dt.dataset.det));
        return;
    }
    const i = e.target.closest(".ico-btn");
    if (i && !i.classList.contains("off")) ouvrirFiche(decodeURIComponent(i.dataset.f));
}, true);
// Ouvrir une extension : on vérifie quelles factions ont une fiche (celles sans fiche perdent leur bouton « Détails ») ; les images chargées restent en cache pour l'ouverture.
document.addEventListener("toggle", e => {
    const d = e.target;
    if (!d.classList || !d.classList.contains("ext-details") || !d.open) return;
    d.querySelectorAll(".btn-det").forEach(b => {
        const code = CODES[decodeURIComponent(b.dataset.det)];
        assets(code).then(a => { FICHE_OK[code] = fichePossible(a); majBoutonsDetails(); });
    });
}, true);
document.addEventListener("contextmenu", e => { if (e.target.closest("button[data-f], .ico-btn, .fiche-fond, #themeToggle, .theme-menu")) e.preventDefault(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !(ficheCtl && ficheCtl.fermerBulle())) fermerFiche(); });   // Échap : ferme la bulle, puis la fiche

function carteFaction(n) {
    const ini = t(n).split(/[\s-]+/).map(w => w[0]).join("").replace(/[^\p{L}\p{N}]/gu, "").slice(0, 2).toUpperCase();
    const badge = `<span class=badge>${ini}</span>`;
    const exts = ordreExt(DOSSIER_ICO);
    const logo = CODES[n] ? `<img class="logo" src="${DOSSIER_ICO}${CODES[n]}${exts[0]}" alt="" data-code="${CODES[n]}" data-ini="${ini}" data-exts="${exts.join(",")}" onload="icoOk(this)" onerror="icoSuivante(this)">` : badge;
    const det = CODES[n] ? `<button type="button" class="btn-det" data-need="ok" data-det="${encodeURIComponent(n)}" hidden>${t("Détails")}</button>` : "";
    return `<span class="fac-res"><span class="ico-btn" data-f="${encodeURIComponent(n)}">${logo}</span><span class="fac-txt"><span>${t(n)}</span><small>${t(factionExt[n] || "")}</small></span>${det}</span>`;
}

function lancerTirage() {
    fermerPanneaux();
    remonter();
    verifierExpirationHistorique();
    const actives = Array.from(document.querySelectorAll(".faction-cb:checked")).map(cb => cb.value);
    const nbJ = P.nbJ, mode = P.mode;
    let besoin, min = 0;
    if (mode === "tirage") besoin = 2 * nbJ;
    else if (mode === "draft") besoin = nbJ * P.mainK;
    else {
        min = (mode === "pick" ? 2 : 4) * nbJ;
        besoin = P.poolAuto ? Math.min(poolAuto(mode, nbJ), actives.length) : P.poolVal;
    }
    if (besoin < min) {
        return alert(L(`Réserve trop petite : il faut au moins ${min} factions pour ${nbJ} joueur(s) dans ce mode.`,
                       `Pool too small: at least ${min} factions are needed for ${nbJ} player(s) in this mode.`));
    }
    if (besoin > actives.length || besoin <= 0) {
        return alert(L(`Impossible : ${besoin} factions nécessaires, mais seulement ${actives.length} sont cochées.`,
                       `Not possible: ${besoin} factions needed, but only ${actives.length} are checked.`));
    }

    nomsFixes = [];
    for (let i = 1; i <= nbJ; i++) {
        const el = $("nomJoueur" + i);
        nomsFixes.push(el ? el.value.trim() : "");
    }

    const pioche = melanger([...actives]);
    const premier = Math.floor(Math.random() * nbJ);
    draft = null;
    if (mode !== "tirage") return demarrerDraft(pioche, nbJ, mode, premier, besoin);
    afficherResultats(Array.from({ length: nbJ }, (_, i) => pioche.slice(i * 2, (i + 1) * 2)), premier);
}

function rendreResultat() {
    const r = dernierResultat;
    let html = "<ul>";
    r.groupes.forEach((g, i) => { html += `<li><b>${nomJ(i, r.noms)}</b><br>${g.map(carteFaction).join("")}</li>`; });
    $("resultat").innerHTML = html + `</ul><p>🎲 <b>${nomJ(r.premier, r.noms)}</b> ${t("commence")}</p>`;
}

function afficherResultats(groupes, premier) {
    const noms = groupes.map((_, i) => nomsFixes[i] || "");
    dernierResultat = { groupes, premier, noms };
    rendreResultat();
    historique.unshift({ n: compteurTirage, ts: Date.now(), groupes, premier, noms });
    compteurTirage++;
    rendreHistorique();
    LS.set("smashup_noms", JSON.stringify(nomsFixes));
    sauverHistorique();
}

/* ---------- Bulle « i » du draft (indice de l'appui long sur une faction) ---------- */
Object.assign(EN, { "Aide": "Help", "Appuie longtemps sur une faction pour voir ses détails.": "Press and hold a faction to see its details." });
let tmInfo = null;
function htmlInfo() {
    return `<button type="button" class="btn-info" onclick="basculerInfo()" aria-label="${t("Aide")}" aria-expanded="false">i</button>` +
        `<div class="astuce astuce-info" role="status" hidden>${t("Appuie longtemps sur une faction pour voir ses détails.")}</div>`;
}
function fermerInfo() {
    clearTimeout(tmInfo);
    const b = document.querySelector("#resultat .btn-info"), a = document.querySelector("#resultat .astuce-info");
    if (a) a.hidden = true;
    if (b) b.setAttribute("aria-expanded", "false");
}
function basculerInfo() {
    const b = document.querySelector("#resultat .btn-info"), a = document.querySelector("#resultat .astuce-info");
    if (!b || !a) return;
    const ouvrir = a.hidden;
    fermerInfo();
    if (!ouvrir) return;
    a.hidden = false;
    b.setAttribute("aria-expanded", "true");
    tmInfo = setTimeout(fermerInfo, 7000);         // se referme seule
}
// Ouverte automatiquement une seule fois, au premier écran de choix du premier draft ; ensuite, seulement quand on touche le « i ».
function astucePremierDraft() {
    if (LS.get("smashup_astuce_info")) return;
    LS.set("smashup_astuce_info", "1");
    basculerInfo();
}
// Un appui n'importe où ailleurs referme la bulle (sans empêcher le geste : un appui sur une faction fonctionne normalement).
document.addEventListener("pointerdown", e => {
    const a = document.querySelector("#resultat .astuce-info");
    if (a && !a.hidden && !e.target.closest(".btn-info")) fermerInfo();
}, true);

/* ---------- Draft / Pick / Pick & Ban ---------- */
function demarrerDraft(pioche, nbJ, mode, premier, taille) {
    const rot = Array.from({ length: nbJ }, (_, k) => (premier + k) % nbJ);   // le joueur qui commence passe en premier
    const inv = [...rot].reverse();
    draft = { mode, premier, etape: 0, sel: [], ecran: "attente", bannies: [], pris: Array.from({ length: nbJ }, () => []) };
    if (mode === "draft") {
        const k = P.mainK;
        draft.ordre = rot;
        draft.mains = rot.map((_, i) => pioche.slice(i * k, (i + 1) * k));
    } else {
        draft.pool = pioche.slice(0, taille);
        const pick = s => s.map(j => [j, "pick"]), ban = s => s.map(j => [j, "ban"]);
        draft.ordre = mode === "pick"
            ? [...pick(rot), ...pick(inv)]
            // Pick & Ban : bans (ordre normal) → picks (ordre normal) → bans (ordre inversé) → picks (ordre inversé)
            : [...ban(rot), ...pick(rot), ...ban(inv), ...pick(inv)];
    }
    rendreDraft();
}

function rendreDraft() {
    const d = draft;
    if (d.mode === "draft") return rendreMain();
    const [j, type] = d.ordre[d.etape];
    $("resultat").innerHTML = `${htmlInfo()}<div class="draft-tete"><b>${type === "ban" ? "Ban" : "Pick"} : ${nomJ(j)}</b> <small>(${d.etape + 1}/${d.ordre.length})</small></div><div class="draft-pool">` +
        d.pool.map((n, i) => `<button class="${type === "ban" ? "btn-danger" : ""}" data-f="${encodeURIComponent(n)}" onclick="choisirDraft(${i})">${t(n)}<br><small>${t(factionExt[n] || "")}</small></button>`).join("") + "</div>" +
        (d.bannies.length ? `<div><small>${t("Bannies")} : ${d.bannies.map(t).join(", ")}</small></div>` : "") +
        d.pris.map((g, i) => `<div><b>${nomJ(i)}</b> : ${g.map(t).join(" & ") || "—"}</div>`).join("");
    astucePremierDraft();
}

function choisirDraft(i) {
    const d = draft, [j, type] = d.ordre[d.etape], n = d.pool.splice(i, 1)[0];
    (type === "ban" ? d.bannies : d.pris[j]).push(n);
    if (++d.etape < d.ordre.length) return rendreDraft();
    draft = null;
    afficherResultats(d.pris, d.premier);
}

function rendreMain() {
    const d = draft, j = d.ordre[d.etape];
    if (d.ecran === "attente") {
        $("resultat").innerHTML = `<p>${t("Passe l'écran à")} <b>${nomJ(j)}</b></p><button onclick="draft.ecran='choix';rendreDraft()">${t("Je suis")} ${nomJ(j)}</button>`;
        return;
    }
    $("resultat").innerHTML = `${htmlInfo()}<div class="draft-tete"><b>${nomJ(j)}</b> : ${t("choisis 2 factions")} <small>(<span id="nbSel">${d.sel.length}</span>/2)</small></div><div class="draft-pool">` +
        d.mains[d.etape].map((n, i) => `<button class="carte-draft${d.sel.includes(i) ? " sel" : ""}" style="animation-delay:${i * 90}ms" data-f="${encodeURIComponent(n)}" onclick="basculerDraft(${i})">${t(n)}<br><small>${t(factionExt[n] || "")}</small></button>`).join("") +
        `</div><button id="btnValider" ${d.sel.length === 2 ? "" : "disabled"} onclick="validerMain()">${t("Valider")}</button>`;
    astucePremierDraft();
}

function basculerDraft(i) {
    const d = draft, p = d.sel.indexOf(i);
    if (p >= 0) d.sel.splice(p, 1); else if (d.sel.length < 2) d.sel.push(i);
    document.querySelectorAll(".carte-draft").forEach((b, k) => b.classList.toggle("sel", d.sel.includes(k)));
    $("nbSel").textContent = d.sel.length;
    $("btnValider").disabled = d.sel.length !== 2;
}

function validerMain() {
    const d = draft;
    d.pris[d.ordre[d.etape]] = d.sel.map(i => d.mains[d.etape][i]);
    d.sel = [];
    d.ecran = "attente";
    if (++d.etape < d.ordre.length) return rendreDraft();
    draft = null;
    afficherResultats(d.pris, d.premier);
}

initialiser();
