import { amazonSearch } from '@utils/affiliate';

export interface Accessory {
  name: string;
  why: string;
  price: string;
  href: string;
  tag?: string;
}
export interface AccessoryGroup {
  id: string;
  title: string;
  intro: string;
  img: string;
  items: Accessory[];
}

// Liens Amazon de recherche (toujours valides). À remplacer par des liens produits
// précis ou par Alltricks / Upway quand les programmes seront acceptés.
export const ACCESSORY_GROUPS: AccessoryGroup[] = [
  {
    id: 'securite',
    title: 'Sécurité : les indispensables',
    intro: "Un fatbike pèse 30 kg et freine plus long qu'un vélo classique. Voir et être vu, c'est la base.",
    img: '/img/pexels-assedrani-official-177638678-26825340.webp',
    items: [
      { name: 'Casque VAE certifié NTA 8776', why: 'Norme pensée pour les vélos électriques, plus protectrice aux vitesses d\'un VAE.', price: '60 à 150 €', href: amazonSearch('casque vélo électrique NTA 8776'), tag: 'Prioritaire' },
      { name: 'Éclairage avant puissant rechargeable USB', why: 'Le phare d\'origine des fatbikes d\'entrée de gamme éclaire souvent peu sur les chemins.', price: '25 à 80 €', href: amazonSearch('éclairage vélo avant 1000 lumens rechargeable') },
      { name: 'Rétroviseur de guidon', why: 'Sur un vélo lourd, tourner la tête déstabilise. Un rétro change la vie en ville.', price: '15 à 30 €', href: amazonSearch('rétroviseur vélo guidon') },
      { name: 'Gilet ou veste réfléchissante', why: 'Obligatoire hors agglomération la nuit ou par mauvaise visibilité.', price: '10 à 40 €', href: amazonSearch('gilet réfléchissant vélo') },
    ],
  },
  {
    id: 'antivol',
    title: 'Antivol : protéger 1 000 € et plus',
    intro: "Les assureurs demandent souvent un antivol agréé SRA (ou FUB). Vérifie ton contrat avant d'acheter.",
    img: '/img/pexels-assedrani-official-177638678-26936495.webp',
    items: [
      { name: 'Antivol en U agréé SRA', why: 'Le meilleur rapport sécurité / poids pour attacher le cadre à un point fixe.', price: '60 à 120 €', href: amazonSearch('antivol U SRA vélo'), tag: 'Recommandé' },
      { name: 'Antivol pliable', why: 'Plus pratique à transporter, il entoure les gros tubes de cadre des fatbikes.', price: '50 à 120 €', href: amazonSearch('antivol pliable vélo ABUS Bordo') },
      { name: 'Traceur GPS discret pour vélo', why: 'En complément de l\'antivol, pour retrouver le vélo en cas de vol.', price: '20 à 60 €', href: amazonSearch('traceur GPS vélo') },
    ],
  },
  {
    id: 'pneus',
    title: 'Pneus et pression : le secret du fatbike',
    intro: "Sur 4 pouces de large, quelques dixièmes de bar changent tout : adhérence, confort, autonomie.",
    img: '/img/pexels-g-force-bike-95411088-13633037.webp',
    items: [
      { name: 'Pompe avec manomètre basse pression', why: 'Un fatbike roule souvent entre 0,5 et 1,4 bar : il faut un manomètre précis dans les basses valeurs.', price: '25 à 50 €', href: amazonSearch('pompe vélo manomètre basse pression fatbike'), tag: 'Indispensable' },
      { name: 'Chambres à air 20 × 4,0 ou 26 × 4,0', why: 'Garde-en une d\'avance : on en trouve rarement en magasin.', price: '10 à 20 €', href: amazonSearch('chambre à air 20x4.0 fatbike') },
      { name: 'Liquide préventif anti-crevaison', why: 'Limite les crevaisons lentes, pratique sur les chemins à ronces.', price: '10 à 25 €', href: amazonSearch('liquide préventif crevaison vélo') },
    ],
  },
  {
    id: 'confort',
    title: 'Confort et transport',
    intro: 'Les petits plus qui rendent les sorties plus agréables, seul ou avec ton chien.',
    img: '/img/pexels-assedrani-official-177638678-26825343.webp',
    items: [
      { name: 'Sacoche de cadre ou de porte-bagages', why: 'Eau, laisse, sachets, en-cas : tout reste à portée de main.', price: '20 à 60 €', href: amazonSearch('sacoche porte bagage vélo étanche') },
      { name: 'Support smartphone de guidon', why: 'Pour suivre l\'itinéraire sans sortir le téléphone.', price: '15 à 50 €', href: amazonSearch('support téléphone vélo guidon') },
      { name: 'Porte-vélo d\'attelage pour vélo électrique', why: 'Un fatbike dépasse souvent 30 kg : il faut un porte-vélo prévu pour ce poids et des pneus larges.', price: '250 à 600 €', href: amazonSearch('porte vélo attelage vélo électrique fatbike') },
      { name: 'Housse de protection', why: 'Si le vélo dort dehors ou dans un garage poussiéreux.', price: '15 à 30 €', href: amazonSearch('housse protection vélo électrique') },
    ],
  },
  {
    id: 'batterie',
    title: 'Batterie : la protéger et la charger sans risque',
    intro: "La batterie est la pièce la plus chère du vélo, et la plus sensible au froid et aux chocs.",
    img: '/img/pexels-assedrani-official-177638678-26733813.webp',
    items: [
      { name: 'Sac de charge ignifugé pour batterie', why: 'Pour charger à la maison avec une sécurité en plus en cas de surchauffe.', price: '20 à 40 €', href: amazonSearch('sac ignifugé batterie vélo électrique'), tag: 'Sécurité' },
      { name: 'Housse néoprène pour batterie', why: "En hiver, garde la batterie au chaud et limite la perte d'autonomie.", price: '15 à 30 €', href: amazonSearch('housse néoprène batterie vélo électrique') },
      { name: 'Détecteur de fumée pour le garage', why: 'Indispensable si le vélo et la batterie dorment dans un garage ou une cave.', price: '15 à 30 €', href: amazonSearch('détecteur de fumée garage') },
    ],
  },
  {
    id: 'hiver',
    title: 'Hiver et pluie : rouler toute l\'année',
    intro: 'Le fatbike adore la boue et la neige. Toi, un peu moins : voici de quoi rester au sec et au chaud.',
    img: '/img/john-nzoka-fehf_9os_mi-unsplash.webp',
    items: [
      { name: 'Gants vélo hiver coupe-vent', why: "À 25 km/h, le vent glace les doigts bien avant le reste du corps.", price: '25 à 60 €', href: amazonSearch('gants vélo hiver coupe vent') },
      { name: 'Veste de pluie vélo réfléchissante', why: 'Imperméable et visible : deux problèmes réglés en une pièce.', price: '40 à 100 €', href: amazonSearch('veste pluie vélo réfléchissante') },
      { name: 'Garde-boue larges pour fatbike', why: 'Beaucoup de fatbikes en sont livrés sans. Indispensable sur chemin mouillé.', price: '20 à 50 €', href: amazonSearch('garde boue fatbike 4.0') },
      { name: 'Cache-cou et sous-casque', why: 'Petit, léger, et ça change tout par temps froid.', price: '10 à 25 €', href: amazonSearch('sous casque vélo hiver') },
    ],
  },
  {
    id: 'entretien',
    title: 'Entretien : le minimum pour faire durer ton fatbike',
    intro: "Un fatbike bien entretenu garde ses freins, sa chaîne et sa batterie plus longtemps. Inutile d'être mécanicien.",
    img: '/img/pexels-g-force-bike-95411088-13738415.webp',
    items: [
      { name: 'Kit de nettoyage vélo', why: 'Brosses et nettoyant adaptés, sans karcher (l\'eau sous pression abîme moteur et roulements).', price: '20 à 40 €', href: amazonSearch('kit nettoyage vélo brosses') },
      { name: 'Lubrifiant chaîne conditions humides', why: 'Boue, sable, pluie : une chaîne propre et graissée dure deux fois plus longtemps.', price: '8 à 15 €', href: amazonSearch('lubrifiant chaîne vélo conditions humides') },
      { name: 'Multi-outil vélo', why: 'Pour resserrer une vis ou régler une selle en pleine balade.', price: '15 à 35 €', href: amazonSearch('multi outil vélo') },
      { name: 'Pied d\'atelier ou béquille de maintenance', why: 'Un fatbike de 30 kg ne se retourne pas facilement : un support rend l\'entretien bien plus simple.', price: '30 à 90 €', href: amazonSearch('pied atelier vélo électrique') },
    ],
  },
  {
    id: 'filmer',
    title: 'Filmer tes sorties',
    intro: 'Pour garder des souvenirs de tes balades (avec ou sans ton chien), ou partager tes itinéraires.',
    img: '/img/lucas-qb_lxmfkhb0-unsplash.webp',
    items: [
      { name: 'Caméra embarquée type action cam', why: 'Stabilisée, étanche, elle filme le chemin et le chien sans tenir le téléphone.', price: '150 à 450 €', href: amazonSearch('caméra sport stabilisée 4K') },
      { name: 'Support caméra pour guidon', why: 'Fixation solide pour les gros tubes de guidon des fatbikes.', price: '15 à 30 €', href: amazonSearch('support caméra guidon vélo') },
      { name: 'Montre ou compteur GPS', why: 'Pour suivre distance, dénivelé et retrouver ton itinéraire.', price: '50 à 250 €', href: amazonSearch('compteur GPS vélo') },
    ],
  },
];

export const DOG_GEAR: Accessory[] = [
  { name: 'Harnais de traction (type Non-stop Freemotion ou Julius-K9 IDC)', why: "Répartit l'effort sur le poitrail. Jamais de collier pour courir à côté d'un vélo.", price: '45 à 100 €', href: amazonSearch('harnais traction chien canicross'), tag: 'Indispensable' },
  { name: 'Barre d\'attache vélo pour chien (type Springer ou Walky Dog)', why: "Tient le chien à distance de la roue et amortit les à-coups. Se fixe sur la tige de selle ou le cadre, jamais au guidon.", price: '35 à 70 €', href: amazonSearch('barre attache vélo chien Springer Walky Dog'), tag: 'Indispensable' },
  { name: 'Ligne de trait élastique', why: 'Absorbe les départs brusques et protège le dos du chien.', price: '15 à 30 €', href: amazonSearch('laisse élastique canicross amortisseur') },
  { name: 'Gourde-gamelle pour chien', why: 'Une pause eau toutes les 15 à 20 minutes quand il fait doux.', price: '10 à 25 €', href: amazonSearch('gourde chien gamelle balade') },
  { name: 'Baume protecteur de coussinets', why: 'Protège des graviers, du bitume et du sel en hiver.', price: '12 à 20 €', href: amazonSearch('baume coussinets chien') },
  { name: 'Panier de transport pour petit chien', why: 'Pour les chiens de moins de 8 à 10 kg, ou pour finir la balade au repos. Vérifie la charge du porte-bagages.', price: '40 à 120 €', href: amazonSearch('panier vélo chien porte bagage') },
  { name: 'Gilet réfléchissant ou lumineux pour chien', why: 'Pour être vus des voitures au crépuscule.', price: '10 à 30 €', href: amazonSearch('gilet réfléchissant chien lumineux') },
];

export const DOG_TRAILERS: Accessory[] = [
  { name: 'Croozer Dog (Enna, Mikke, Tamaro)', why: 'La référence du confort. Selon les modèles, de 35 à 45 kg de chien.', price: '650 à 900 €', href: amazonSearch('Croozer Dog remorque vélo chien'), tag: 'Haut de gamme' },
  { name: 'Burley Bark Ranger / Bark Ranger XL', why: 'Robuste, transformable en poussette. Environ 34 kg (45 kg pour la XL).', price: '650 à 800 €', href: amazonSearch('Burley Bark Ranger remorque chien'), tag: 'Grands chiens' },
  { name: 'Remorques d\'entrée de gamme (type DoggyHut)', why: 'Pour tester sans gros budget, chiens de petite et moyenne taille. Finitions plus simples.', price: '150 à 300 €', href: amazonSearch('remorque vélo chien'), tag: 'Petit budget' },
];
