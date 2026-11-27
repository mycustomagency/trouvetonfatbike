export const AUTHOR = {
  name: 'Vanessa',
  role: 'Fondatrice de TrouveTonFatbike',
  short:
    "Rideuse en fatbike 250 W, toujours accompagnée de ses molosses. Formée à l'éducation canine, elle vérifie la réglementation et les fiches techniques avant de recommander.",
  photo: '/img/vanessa-fatbike-chemin-chien.webp',
  url: '/a-propos/',
};

export const UPDATED = new Date('2026-11-22');
export const UPDATED_LABEL = 'novembre 2026';

export const NAV = [
  { label: 'Comparatif 2026', href: '/guide/meilleur-fatbike-electrique-2026/' },
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
