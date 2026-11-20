package PACKAGE_APP;   // remplacé par apk/ajouter-plugin-android.py (même package que MainActivity)

import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.Locale;

/**
 * Plugin « ApkInstaller » : mise à jour de l'APK depuis l'appli (appelé par apk-maj.js).
 *
 * Méthodes JS : version, peutInstaller, ouvrirReglages, telecharger, annuler, installer, effacer.
 * Événement : « progression » { octets, total } pendant telecharger().
 *
 * Sécurité : URL https uniquement (redirections comprises), SHA-256 obligatoire (comparé à apk.json),
 * l'APK doit porter le même nom de paquet que l'appli, le fichier reste dans le cache privé de l'appli
 * (partagé à l'installateur par un FileProvider dédié « .apkprovider »). Android refuse de toute façon
 * une APK signée avec une autre clé que l'appli installée.
 */
@CapacitorPlugin(name = "ApkInstaller")
public class ApkInstallerPlugin extends Plugin {

    private static final String DOSSIER = "apk-update";      // dans getCacheDir() ; doit correspondre à res/xml/apk_paths.xml
    private static final String FICHIER = "SmashUp-Draft.apk";
    private static final long MARGE_ESPACE = 20L * 1024 * 1024;

    private volatile boolean annule = false;
    private volatile Thread tache = null;

    /** Erreur avec un code lisible côté JavaScript (e.code). */
    private static class Echec extends IOException {
        final String code;
        Echec(String code, String message) { super(message); this.code = code; }
    }

    private File dossier() { return new File(getContext().getCacheDir(), DOSSIER); }

    // --- Infos ------------------------------------------------------------------

    @PluginMethod
    public void version(PluginCall call) {
        try {
            PackageInfo pi = getContext().getPackageManager().getPackageInfo(getContext().getPackageName(), 0);
            JSObject r = new JSObject();
            r.put("code", Build.VERSION.SDK_INT >= 28 ? pi.getLongVersionCode() : pi.versionCode);
            r.put("nom", pi.versionName == null ? "" : pi.versionName);
            call.resolve(r);
        } catch (Exception e) {
            call.reject(String.valueOf(e.getMessage()), "ERREUR");
        }
    }

    @PluginMethod
    public void peutInstaller(PluginCall call) {
        JSObject r = new JSObject();
        r.put("autorise", autorise());
        call.resolve(r);
    }

    private boolean autorise() {
        return Build.VERSION.SDK_INT < Build.VERSION_CODES.O || getContext().getPackageManager().canRequestPackageInstalls();
    }

    @PluginMethod
    public void ouvrirReglages(PluginCall call) {
        try {
            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) { call.reject("Android 8.0 minimum", "NON_SUPPORTE"); return; }
            Intent intent = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES)
                    .setData(Uri.parse("package:" + getContext().getPackageName()))
                    .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
            call.resolve();
        } catch (Exception e) {
            call.reject(String.valueOf(e.getMessage()), "ERREUR");
        }
    }

    // --- Téléchargement ----------------------------------------------------------

    @PluginMethod
    public void telecharger(final PluginCall call) {
        final String url = call.getString("url", "");
        final String sha = call.getString("sha256", "").toLowerCase(Locale.ROOT);
        final int taille = call.getInt("taille", 0);
        if (!url.toLowerCase(Locale.ROOT).startsWith("https://")) { call.reject("Seules les adresses https:// sont acceptées", "URL"); return; }
        if (!sha.matches("[a-f0-9]{64}")) { call.reject("SHA-256 invalide", "SHA"); return; }
        if (tache != null && tache.isAlive()) { call.reject("Un téléchargement est déjà en cours", "OCCUPE"); return; }
        annule = false;
        tache = new Thread(() -> executer(call, url, sha, taille), "apk-telechargement");
        tache.start();
    }

    @PluginMethod
    public void annuler(PluginCall call) {
        annule = true;   // le fichier partiel est gardé : le prochain telecharger() reprend où il s'est arrêté
        call.resolve();
    }

    @PluginMethod
    public void effacer(PluginCall call) {
        File[] fichiers = dossier().listFiles();
        if (fichiers != null && (tache == null || !tache.isAlive())) for (File f : fichiers) f.delete();
        call.resolve();
    }

    private void executer(PluginCall call, String url, String sha, int taille) {
        File dir = dossier();
        File part = new File(dir, FICHIER + ".part");
        File fin = new File(dir, FICHIER);
        try {
            if (!dir.exists() && !dir.mkdirs()) throw new Echec("ECRITURE", "Dossier de téléchargement impossible à créer");
            if (fin.exists() && !fin.delete()) throw new Echec("ECRITURE", "Ancien fichier impossible à supprimer");
            if (!(taille > 0 && part.exists() && part.length() == taille)) copier(url, part, taille);   // déjà complet : on saute au contrôle
            if (taille > 0 && part.length() > taille) { part.delete(); throw new Echec("SHA", "Fichier plus gros qu'annoncé"); }
            if (taille > 0 && part.length() < taille) throw new Echec("RESEAU", "Téléchargement incomplet");
            String hash = sha256(part);
            if (!hash.equals(sha)) { part.delete(); throw new Echec("SHA", "Empreinte SHA-256 différente de celle annoncée"); }
            if (!part.renameTo(fin)) throw new Echec("ECRITURE", "Impossible d'enregistrer le fichier");
            JSObject r = new JSObject();
            r.put("taille", fin.length());
            call.resolve(r);
        } catch (Echec e) {
            call.reject(String.valueOf(e.getMessage()), e.code);
        } catch (IOException e) {
            call.reject(String.valueOf(e.getMessage()), "RESEAU");
        } catch (Exception e) {
            call.reject(String.valueOf(e.getMessage()), "ERREUR");
        }
    }

    /** Ouvre l'URL en suivant les redirections à la main (https uniquement, 6 maximum). Range = reprise à partir de « depuis ». */
    private HttpURLConnection ouvrir(String url, long depuis) throws IOException {
        String courant = url;
        for (int i = 0; i < 6; i++) {
            if (!courant.toLowerCase(Locale.ROOT).startsWith("https://")) throw new Echec("URL", "Redirection hors https refusée");
            HttpURLConnection c = (HttpURLConnection) new URL(courant).openConnection();
            c.setInstanceFollowRedirects(false);
            c.setConnectTimeout(15000);
            c.setReadTimeout(30000);
            c.setRequestProperty("Accept-Encoding", "identity");
            c.setRequestProperty("User-Agent", "SmashUpDraft-Android");
            if (depuis > 0) c.setRequestProperty("Range", "bytes=" + depuis + "-");
            int code = c.getResponseCode();
            if (code >= 300 && code < 400 && code != 304) {
                String loc = c.getHeaderField("Location");
                c.disconnect();
                if (loc == null) throw new IOException("Redirection invalide");
                courant = new URL(new URL(courant), loc).toString();
                continue;
            }
            return c;
        }
        throw new IOException("Trop de redirections");
    }

    private void copier(String url, File part, int taille) throws IOException {
        long deja = part.exists() ? part.length() : 0;
        if (taille > 0 && deja > taille) { part.delete(); deja = 0; }
        HttpURLConnection c = ouvrir(url, deja);
        try {
            int code = c.getResponseCode();
            if (code == 416) {   // reprise refusée : on repart de zéro
                c.disconnect();
                part.delete();
                deja = 0;
                c = ouvrir(url, 0);
                code = c.getResponseCode();
            }
            if (code != 200 && code != 206) throw new IOException("HTTP " + code);
            boolean ajout = code == 206;
            if (!ajout) deja = 0;
            long restant = c.getContentLengthLong();
            long total = restant > 0 ? deja + restant : taille;
            if (total > 0 && part.getParentFile().getUsableSpace() < (total - deja) + MARGE_ESPACE) throw new Echec("ESPACE", "Espace insuffisant");
            try (InputStream in = c.getInputStream(); FileOutputStream out = new FileOutputStream(part, ajout)) {
                byte[] tampon = new byte[65536];
                long fait = deja, dernier = 0;
                int n;
                while ((n = in.read(tampon)) != -1) {
                    if (annule) throw new Echec("ANNULE", "Annulé");
                    out.write(tampon, 0, n);
                    fait += n;
                    long maintenant = System.currentTimeMillis();
                    if (maintenant - dernier > 250) { dernier = maintenant; progres(fait, total); }
                }
                progres(fait, total);
            }
        } finally {
            c.disconnect();
        }
    }

    private void progres(long octets, long total) {
        JSObject e = new JSObject();
        e.put("octets", octets);
        e.put("total", total);
        notifyListeners("progression", e);
    }

    private static String sha256(File f) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        try (FileInputStream in = new FileInputStream(f)) {
            byte[] tampon = new byte[65536];
            int n;
            while ((n = in.read(tampon)) != -1) md.update(tampon, 0, n);
        }
        StringBuilder sb = new StringBuilder();
        for (byte b : md.digest()) sb.append(String.format("%02x", b));
        return sb.toString();
    }

    // --- Installation --------------------------------------------------------------

    @PluginMethod
    public void installer(PluginCall call) {
        try {
            File fin = new File(dossier(), FICHIER);
            if (!fin.isFile()) { call.reject("APK introuvable : télécharge-la d'abord", "INTROUVABLE"); return; }
            if (!autorise()) { call.reject("Installation depuis cette appli non autorisée", "PERMISSION"); return; }
            PackageManager pm = getContext().getPackageManager();
            PackageInfo info = pm.getPackageArchiveInfo(fin.getAbsolutePath(), 0);
            if (info == null || !getContext().getPackageName().equals(info.packageName)) { call.reject("Ce fichier n'est pas l'APK de l'appli", "APK_INVALIDE"); return; }
            Uri uri = FileProvider.getUriForFile(getContext(), getContext().getPackageName() + ".apkprovider", fin);
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setDataAndType(uri, "application/vnd.android.package-archive");
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            if (getActivity() != null) {
                getActivity().startActivity(intent);
            } else {
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getContext().startActivity(intent);
            }
            call.resolve();
        } catch (Exception e) {
            call.reject(String.valueOf(e.getMessage()), "ERREUR");
        }
    }
}
