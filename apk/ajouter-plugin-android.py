#!/usr/bin/env python3
"""Ajoute le plugin « ApkInstaller » (mise à jour de l'APK depuis l'appli) au projet Android généré par Capacitor.

Usage (dans build-apk.yml, APRÈS « npx cap add android » / « npx cap sync » et APRÈS le patch de MainActivity.java) :
    python3 apk/ajouter-plugin-android.py android

Fait, de façon répétable (sans doublon si relancé) :
  1. copie ApkInstallerPlugin.java et ApkFileProvider.java à côté de MainActivity (même package) ;
  2. copie apk_paths.xml dans app/src/main/res/xml/ ;
  3. manifeste : permission REQUEST_INSTALL_PACKAGES + <provider> « .apkprovider » ;
  4. MainActivity : registerPlugin(ApkInstallerPlugin.class) AVANT super.onCreate(...) (ajoute onCreate s'il n'existe pas).
Sort avec un code d'erreur et un message clair si quelque chose ne correspond pas (MainActivity en Kotlin, manifeste introuvable...).
"""
import pathlib
import re
import shutil
import sys

racine = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "android")
modeles = pathlib.Path(__file__).resolve().parent / "android-plugin"
main = racine / "app" / "src" / "main"


def erreur(msg):
    print("ERREUR ajouter-plugin-android : " + msg, file=sys.stderr)
    sys.exit(1)


manifeste = main / "AndroidManifest.xml"
if not manifeste.is_file():
    erreur("AndroidManifest.xml introuvable dans " + str(main))
activites = list((main / "java").rglob("MainActivity.java"))
if not activites:
    if list((main / "java").rglob("MainActivity.kt")):
        erreur("MainActivity.kt (Kotlin) : ce script ne gère que MainActivity.java.")
    erreur("MainActivity.java introuvable sous " + str(main / "java"))
activite = activites[0]
texte = activite.read_text(encoding="utf-8")
m = re.search(r"^\s*package\s+([\w.]+)\s*;", texte, re.M)
if not m:
    erreur("ligne « package ... ; » introuvable dans " + str(activite))
paquet = m.group(1)

# 1) classes Java
for nom in ("ApkInstallerPlugin.java", "ApkFileProvider.java"):
    src = (modeles / nom).read_text(encoding="utf-8").replace("PACKAGE_APP", paquet)
    (activite.parent / nom).write_text(src, encoding="utf-8")

# 2) chemins du FileProvider
(main / "res" / "xml").mkdir(parents=True, exist_ok=True)
shutil.copyfile(modeles / "apk_paths.xml", main / "res" / "xml" / "apk_paths.xml")

# 3) manifeste
man = manifeste.read_text(encoding="utf-8")
if "REQUEST_INSTALL_PACKAGES" not in man:
    man, n = re.subn(r"(\s*)<application", r'\1<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />\1<application', man, count=1)
    if n != 1:
        erreur("balise <application> introuvable dans le manifeste")
if "apkprovider" not in man:
    bloc = ('    <provider\n'
            '        android:name="' + paquet + '.ApkFileProvider"\n'
            '        android:authorities="${applicationId}.apkprovider"\n'
            '        android:exported="false"\n'
            '        android:grantUriPermissions="true">\n'
            '        <meta-data\n'
            '            android:name="android.support.FILE_PROVIDER_PATHS"\n'
            '            android:resource="@xml/apk_paths" />\n'
            '    </provider>\n')
    man, n = re.subn(r"</application>", bloc + "    </application>", man, count=1)
    if n != 1:
        erreur("balise </application> introuvable dans le manifeste")
manifeste.write_text(man, encoding="utf-8")

# 4) MainActivity.java
if "registerPlugin(ApkInstallerPlugin.class)" not in texte:
    ligne = re.search(r"^([ \t]*)super\.onCreate\(", texte, re.M)
    if ligne:   # onCreate existe déjà (ex. patch du ServiceWorkerClient) : on s'enregistre juste avant super.onCreate
        texte = texte[:ligne.start()] + ligne.group(1) + "registerPlugin(ApkInstallerPlugin.class);\n" + texte[ligne.start():]
    else:
        classe = re.search(r"class\s+MainActivity\s+extends\s+BridgeActivity\s*\{", texte)
        if not classe:
            erreur("déclaration « class MainActivity extends BridgeActivity { » introuvable")
        ajout = ("\n    @Override\n    public void onCreate(android.os.Bundle savedInstanceState) {\n"
                 "        registerPlugin(ApkInstallerPlugin.class);\n"
                 "        super.onCreate(savedInstanceState);\n    }\n")
        texte = texte[:classe.end()] + ajout + texte[classe.end():]
    activite.write_text(texte, encoding="utf-8")

print("Plugin ApkInstaller ajouté : paquet " + paquet + ", activité " + str(activite))
