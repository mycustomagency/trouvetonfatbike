import { buyLink } from '@utils/affiliate';

// ─── Catalogue : UNIQUEMENT des fatbikes vendus en version VAE légale ──────────
// Règle du site : 250 W nominal, assistance coupée à 25 km/h, pédalage obligatoire.
// Prix = ordres de grandeur constatés en 2026 chez les revendeurs. Ils bougent souvent.

export type Tier = 'budget' | 'milieu' | 'premium';

export interface Bike {
  id: string;
  name: string;
  brand: string;
  tier: Tier;
  priceFrom: number;
  priceNote: string;
  format: string;
  wheels: string;
  motor: string;
  battery: string;
  weight: string;
  suspension: string;
  sensor: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  check: string; // le point à vérifier avant d'acheter
  dogFriendly: 1 | 2 | 3; // aptitude balades avec chien / remorque
  usages: ('ville' | 'chemins' | 'plage-neige' | 'pliant' | 'chien' | 'style')[];
  href: string;
  cta: string;
  tested?: boolean;
}

export const BIKES: Bike[] = [
  {
    id: 'colorway-bk29',
    name: 'Colorway BK29',
    brand: 'Colorway',
    tier: 'budget',
    priceFrom: 800,
    priceNote: 'autour de 800 € en promotion (prix public 1 100 à 1 300 €)',
    format: 'Style moto, cadre acier',
    wheels: '20 × 4,0"',
    motor: '250 W moyeu arrière',
    battery: '36 V 12 Ah (BK29G) ou 48 V 15 Ah (BK29T), amovible',
    weight: 'env. 30 à 35 kg',
    suspension: 'Fourche avant (+ arrière selon version)',
    sensor: 'Capteur de rotation',
    bestFor: 'Découvrir le fatbike légal sans se ruiner',
    pros: ['Le look moto pour moins de 1 000 €', 'Grosse batterie sur la version T', 'Selle longue très confortable'],
    cons: ['Lourd (cadre acier)', 'Capteur de rotation moins naturel', 'Plusieurs versions (G, T) : bien lire la fiche'],
    check: "Le mien n'a pas de gâchette, juste un boîtier + / − pour choisir le niveau d'assistance. Certaines annonces de revendeurs parlent pourtant d'« accélérateur » : vérifie la version proposée.",
    dogFriendly: 2,
    usages: ['ville', 'chemins', 'style', 'chien'],
    href: buyLink({ amazon: 'Colorway BK29 vélo électrique fatbike 250W' }),
    cta: 'Voir le prix',
    tested: true,
  },
  {
    id: 'engwe-l20-boost',
    name: 'ENGWE L20 Boost',
    brand: 'ENGWE',
    tier: 'budget',
    priceFrom: 1149,
    priceNote: 'environ 1 150 € (site officiel, 2026)',
    format: 'Cadre bas, facile à enjamber',
    wheels: '20 × 4,0"',
    motor: '250 W, bouton Boost',
    battery: '48 V 13 Ah',
    weight: 'env. 30 kg',
    suspension: 'Fourche avant',
    sensor: 'Capteur de couple',
    bestFor: 'Petits gabarits et usage ville + chemins',
    pros: ['Capteur de couple (assistance naturelle)', 'Cadre bas très accessible', 'Marque qui vend des versions UE conformes'],
    cons: ['Fourche basique', 'Poids élevé pour le porter'],
    check: 'Commande bien la version européenne 250 W, vendue par un revendeur établi dans l\'UE.',
    dogFriendly: 2,
    usages: ['ville', 'chemins', 'chien'],
    href: buyLink({ partner: 'engwe', partnerTarget: 'https://engwe.com/fr/', amazon: 'ENGWE L20 Boost 250W' }),
    cta: 'Voir le prix',
  },
  {
    id: 'fiido-m1-pro',
    name: 'Fiido M1 Pro',
    brand: 'Fiido',
    tier: 'milieu',
    priceFrom: 1099,
    priceNote: 'environ 1 100 € en promotion (2026)',
    format: 'Pliant',
    wheels: '20 × 4,0"',
    motor: '250 W',
    battery: '557 Wh amovible',
    weight: 'env. 27 kg',
    suspension: 'Double (fourche 80 mm + amortisseur)',
    sensor: 'Capteur de rotation',
    bestFor: 'Coffre de voiture, appartement, camping-car',
    pros: ['Parmi les plus légers de la catégorie', 'Double suspension', 'Se range partout une fois plié'],
    cons: ['SAV et documentation surtout en anglais', 'Batterie moyenne'],
    check: 'Vérifie que la fiche indique bien 25 km/h et la conformité EN 15194.',
    dogFriendly: 1,
    usages: ['pliant', 'ville', 'chemins'],
    href: buyLink({ amazon: 'Fiido M1 Pro fatbike 250W' }),
    cta: 'Voir le prix',
  },
  {
    id: 'engwe-ep2-3-boost',
    name: 'ENGWE EP-2 3.0 Boost',
    brand: 'ENGWE',
    tier: 'milieu',
    priceFrom: 1199,
    priceNote: 'environ 1 200 € (site officiel, 2026)',
    format: 'Pliant',
    wheels: '20 × 4,0"',
    motor: '250 W, 75 Nm, Boost',
    battery: 'env. 600 Wh',
    weight: 'env. 32 kg',
    suspension: 'Fourche avant',
    sensor: 'Capteur de couple',
    bestFor: 'Le meilleur compromis pliant, légal et polyvalent',
    pros: ['Annoncé « EU Legal » par la marque', 'Capteur de couple', 'Bonne autonomie pour le prix'],
    cons: ['Lourd une fois plié', 'Pas de suspension arrière'],
    check: 'Les anciennes versions EP-2 étaient plus puissantes : prends bien la 3.0 Boost 250 W.',
    dogFriendly: 2,
    usages: ['pliant', 'ville', 'chemins', 'chien'],
    href: buyLink({ partner: 'engwe', partnerTarget: 'https://engwe.com/fr/', amazon: 'ENGWE EP-2 3.0 Boost' }),
    cta: 'Voir le prix',
  },
  {
    id: 'engwe-e26',
    name: 'ENGWE E26',
    brand: 'ENGWE',
    tier: 'milieu',
    priceFrom: 1099,
    priceNote: 'entre 1 099 et 1 499 € selon les offres (2026)',
    format: 'Grand cadre (existe en cadre bas « ST »)',
    wheels: '26 × 4,0"',
    motor: '250 W',
    battery: '48 V 16 Ah (768 Wh)',
    weight: 'env. 33 kg',
    suspension: 'Double suspension',
    sensor: 'Capteur de rotation',
    bestFor: 'Chemins, sable, neige et grands gabarits',
    pros: ['Roues 26" : passe partout', 'Grosse batterie', 'Double suspension'],
    cons: ['Encombrant', 'Pas pliable'],
    check: 'Fiche à contrôler : 250 W, 25 km/h, et revendeur basé dans l\'UE.',
    dogFriendly: 3,
    usages: ['chemins', 'plage-neige', 'chien'],
    href: buyLink({ partner: 'engwe', partnerTarget: 'https://engwe.com/fr/', amazon: 'ENGWE E26 fatbike 250W' }),
    cta: 'Voir le prix',
  },
  {
    id: 'engwe-engine-pro-3',
    name: 'ENGWE Engine Pro 3.0 Boost',
    brand: 'ENGWE',
    tier: 'milieu',
    priceFrom: 1699,
    priceNote: 'environ 1 700 € (2026)',
    format: 'Pliant tout-suspendu',
    wheels: '20 × 4,0"',
    motor: '250 W, 90 Nm',
    battery: '720 Wh',
    weight: 'env. 34 kg',
    suspension: 'Tout-suspendu',
    sensor: 'Capteur de couple',
    bestFor: 'Confort maximal sur chemins cassants',
    pros: ['Très confortable', 'Couple élevé pour les côtes', 'Annoncé « EU Legal »'],
    cons: ['Prix', 'Poids'],
    check: 'L\'ancienne Engine Pro 2.0 existait en 750 W : ne confonds pas les versions.',
    dogFriendly: 3,
    usages: ['chemins', 'pliant', 'chien'],
    href: buyLink({ partner: 'engwe', partnerTarget: 'https://engwe.com/fr/', amazon: 'ENGWE Engine Pro 3.0 Boost' }),
    cta: 'Voir le prix',
  },
  {
    id: 'ruff-lil-buddy-edge',
    name: "Ruff Cycles Lil'Buddy Edge",
    brand: 'Ruff Cycles',
    tier: 'premium',
    priceFrom: 1699,
    priceNote: 'de 1 700 à 2 200 € selon coloris (2026)',
    format: 'Cruiser rétro',
    wheels: '20 × 4,0"',
    motor: 'Bafang 250 W, 60 Nm',
    battery: 'amovible',
    weight: 'env. 25 kg',
    suspension: 'Selon version',
    sensor: 'Selon version',
    bestFor: 'Le style, la qualité et un poids raisonnable',
    pros: ['Léger pour un fatbike', 'Cadre garanti 10 ans', 'Marque européenne reconnue'],
    cons: ['Plus cher', 'Moins équipé que les marques en ligne à prix égal'],
    check: 'Achat chez un revendeur agréé pour profiter du SAV.',
    dogFriendly: 2,
    usages: ['ville', 'style', 'chemins'],
    href: buyLink({ amazon: "Ruff Cycles Lil'Buddy" }),
    cta: 'Voir le prix',
  },
  {
    id: 'super73-s2-se',
    name: 'Super73 S2 SE',
    brand: 'Super73',
    tier: 'premium',
    priceFrom: 3999,
    priceNote: 'environ 4 000 € (2026)',
    format: 'Style moto iconique',
    wheels: '20 × 4,0"',
    motor: '250 W moyeu',
    battery: 'amovible',
    weight: 'env. 30 kg',
    suspension: 'Fourche avant',
    sensor: 'Selon version',
    bestFor: 'Le design culte, en version européenne 25 km/h',
    pros: ['Design de référence', 'Finitions haut de gamme', 'Version UE 250 W / 25 km/h'],
    cons: ['Très cher', 'Pensé pour le style plus que la rando'],
    check: 'N\'achète que la version européenne. Les modes « off-road » sont interdits sur la voie publique.',
    dogFriendly: 1,
    usages: ['ville', 'style'],
    href: buyLink({ amazon: 'Super73 S2 SE' }),
    cta: 'Voir le prix',
  },
];

export const byId = (id: string) => BIKES.find((b) => b.id === id)!;
export const euro = (n: number) => n.toLocaleString('fr-FR').replace(/\s/g, '\u00a0') + '\u00a0€';
