package PACKAGE_APP;   // remplacé par apk/ajouter-plugin-android.py (même package que MainActivity)

import androidx.core.content.FileProvider;

/**
 * FileProvider dédié aux mises à jour de l'APK (autorité « <applicationId>.apkprovider »).
 * Sous-classe volontaire : Capacitor déclare déjà son propre FileProvider ; un nom de composant distinct évite tout conflit de fusion du manifeste.
 */
public class ApkFileProvider extends FileProvider {
}
