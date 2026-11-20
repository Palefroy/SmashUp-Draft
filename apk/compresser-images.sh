#!/usr/bin/env bash
# Compression des images : UNE SEULE source de réglages, utilisée par l'APK (build-apk.yml) ET par le contenu téléchargeable (publish-content.yml).
# Usage : bash apk/compresser-images.sh <dossier qui contient img/>   (ex. build/www ou out)
# Seule la copie passée en argument est modifiée : les fichiers du dépôt (et le site GitHub Pages) restent en pleine qualité.
# Noms et extensions inchangés : aucun lien à modifier dans le code. Changer un réglage ici change l'empreinte de ce script :
# tout le contenu est alors recompressé et republié (les téléphones retéléchargent les images).
# Réglages : taille max (ex. 1080x1080 ; le signe > ne réduit que les images plus grandes) et qualité (-quality 65, de 1 à 100).
set -e
D="$1/img"
test -d "$D"
command -v mogrify >/dev/null || { sudo apt-get update -qq; sudo apt-get install -y -qq imagemagick; }
echo "Avant : $(du -sh "$D" | cut -f1)"
comprimer() {   # $1 = sous-dossier de img/, le reste = options de mogrify
  local sous="$1"; shift
  find "$D" -path "*/img/$sous/*" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -exec mogrify "$@" {} +
}
comprimer illus -auto-orient -strip -resize "1080x1080>" -quality 65   # illustrations des factions
comprimer cards -auto-orient -strip -resize "1600x1600>" -quality 70   # montages des 3 cartes (images très larges)
comprimer ico   -strip -resize "512x512>" -quality 75                  # icônes des factions (petites)
echo "Après : $(du -sh "$D" | cut -f1)"
