export const AUTHOR = {
  name: 'Vanessa',
  role: 'Fondatrice de TrouveTonFatbike',
  short:
    "Rideuse en fatbike 250 W, toujours accompagnée de ses molosses. Formée à l'éducation canine, elle vérifie la réglementation et les fiches techniques avant de recommander.",
  photo: '/img/vanessa-fatbike-chemin-chien.webp',
  url: '/a-propos/',
};

export const UPDATED = new Date('2026-11-22');
// Année affichée dans les titres : calculée au moment de la mise en ligne.
// Elle passe toute seule à l'année suivante dès la première publication après le 1er janvier.
export const YEAR = new Date().getFullYear();

export const NAV = [
  { label: `Comparatif ${YEAR}`, href: '/guide/meilleur-fatbike-electrique-2026/' },
  { label: 'Légal ou pas ?', href: '/simulateur-fatbike-legal/' },
  { label: 'Petit budget', href: '/guide/fatbike-electrique-pas-cher/' },
  { label: 'Style moto', href: '/guide/fatbike-style-moto/' },
  { label: 'Fatbike & chien', href: '/cani-fatbike/' },
  { label: 'Accessoires', href: '/accessoires/' },
];

// À remplir avec les vraies adresses des comptes (laisser null = lien masqué)
export const SOCIAL: Record<string, string | null> = {
  youtube: 'https://www.youtube.com/@TrouveTonFatbike',
  tiktok: 'https://www.tiktok.com/@trouvetonfatbike',
  pinterest: null,
};
