// ─── Categories data — single source of truth ───────────────────────────────
// Used by [slug].astro dynamic routes AND CategoryGrid component

export interface CategoryData {
  slug:        string;
  title:       string;
  titleSEO:    string;          // <title> tag
  h1?:         string;          // SEO H1 (falls back to titleSEO in layout)
  description: string;         // meta description ≤160 chars
  terrain:     string;
  icon:        string;
  coverImage:  string;
  budgetMin:   number;
  budgetMax:   number;
  intro:       string;
  benefits:    string[];
  advantages?: { title: string; body: string }[];
  buyingCriteria: { title: string; value: string }[];
  topPicks:    string[];        // ASINs — resolved against bikes.ts
  faq:         { question: string; answer: string }[];
  relatedSlugs: string[];
  seoKeywords: string[];
  sortOrder:   number;
}

export const CATEGORIES: CategoryData[] = [
  // ─── 1. Montagne ────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-montagne',
    title:       'Fatbike Montagne',
    titleSEO:    'Meilleur Fatbike Électrique Montagne 2026 — Comparatif & Guide',
    h1:          'Meilleur Fatbike Électrique Montagne 2026 — Notre Sélection',
    description: 'Découvrez notre sélection indépendante des meilleurs fatbikes électriques montagne 2026. Trails, dénivelés, single tracks : 3 modèles testés avec moteur puissant, fourche suspendue et freins hydrauliques.',
    terrain:     'Trails, sentiers, single tracks, dénivelés',
    icon:        '⛰️',
    coverImage:  'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1600&q=80',
    budgetMin:   1099,
    budgetMax:   4500,
    sortOrder:   1,
    intro:       "Les trails alpins, les dénivelés répétés et les sentiers techniques tracés en forêt dense ou sur terrain rocheux ne pardonnent pas. Le fatbike électrique montagne est conçu précisément pour ces conditions exigeantes : une machine robuste, motorisée et stable, capable d'avaler les obstacles là où les vélos classiques s'avouent vaincus.\n\nÀ la différence d'un VTT traditionnel, il associe des pneus XXL de 4 à 5 pouces — offrant une traction exceptionnelle sur les surfaces meubles, rocailleuses ou humides — à un moteur à fort couple qui efface les montées sans que tu n'aies à forcer. Résultat : tu enchaînes les dénivelés positifs sans épuiser tes jambes, et tu descends en confiance grâce aux freins hydrauliques et à la fourche suspendue.\n\nNotre sélection 2026 pour le meilleur fatbike montagne repose sur trois modèles testés selon des critères stricts : puissance réelle du moteur, qualité des suspensions, fiabilité du freinage et autonomie suffisante pour des sorties de 3 à 5 heures. Du meilleur fatbike électrique montagne entrée de gamme à la référence premium, tu trouveras ici la sélection indépendante la plus complète pour trouver ton fatbike montagne idéal.",
    benefits: [
      'Moteur 500W+ pour grimper les dénivelés sans effort',
      'Fourche suspendue pour absorber les chocs sur sentiers',
      'Freins hydrauliques pour un freinage précis en descente',
      'Pneus 4 pouces minimum pour une traction maximale',
    ],
    advantages: [
      {
        title: 'Pneus 4–5 pouces : traction maximale sur tout terrain',
        body:  'Les pneus surdimensionnés du fatbike offrent une surface de contact bien supérieure à celle d\'un VTT classique. Sur sentiers rocheux, chemins boueux ou terrain meuble, ils s\'accrochent là où les pneus fins patinent. En montagne, cette adhérence change tout : les virages sont plus sûrs, les montées raides plus gérables et les descentes techniques moins stressantes.',
      },
      {
        title: 'Motorisation puissante : les dénivelés s\'effacent',
        body:  'Un moteur à fort couple (180–200 Nm) transforme les côtes à 15–20% en portions gérables. L\'assistance électrique s\'adapte à ton pédalage et décuple ta force sur les passages les plus exigeants. Tu enchaînes des dénivelés de 800 à 1 200 m sans épuiser tes jambes, et tu gardes de l\'énergie pour profiter pleinement de tes descentes.',
      },
      {
        title: 'Fourche suspendue : confort et contrôle en descente',
        body:  'Sur les terrains chaotiques de la montagne, une fourche suspendue de 80 à 140 mm de débattement absorbe les chocs, maintient le contact roue-sol et améliore la précision de la direction. Sans suspension, chaque pierre et chaque racine se ressent dans les mains. Avec elle, tu roules plus vite, plus longtemps et avec plus de confiance dans les portions techniques.',
      },
      {
        title: 'Autonomie adaptée aux longues sorties montagne',
        body:  'En montagne, la consommation électrique est 2 à 3 fois plus élevée qu\'à plat. Nos sélections embarquent des batteries de 48V 16Ah à 60V 35Ah pour tenir 40 à 120 km selon le dénivelé et le mode d\'assistance. Le mode Eco sur les montées combiné au mode Sport en descente permet d\'optimiser l\'autonomie pour des sorties de 3 à 5 heures.',
      },
    ],
    buyingCriteria: [
      { title: 'Moteur',     value: '500W minimum' },
      { title: 'Suspension', value: 'Fourche suspendue' },
      { title: 'Freins',     value: 'Hydrauliques' },
      { title: 'Pneus',      value: '4 pouces minimum' },
    ],
    topPicks: ['B0CXLL12PQ', 'B0GFCX4SXQ', 'B0H1BRC2QN'],
    faq: [
      {
        question: 'Quel est le meilleur fatbike électrique pour la montagne en 2026 ?',
        answer:   'Notre sélection 2026 recommande le YVY C26 Pro (double moteur 180 Nm, 1 499 €) pour son équilibre puissance/prix, le YVY Q8 (200 Nm, 60V 35Ah, 1 899 €) pour les sorties longues et exigeantes, et l\'Ankeleisi RV700 (1 099 €) pour le meilleur rapport qualité/prix en terrain montagneux. Les trois modèles embarquent freins hydrauliques et fourche suspendue.',
      },
      {
        question: 'Faut-il une suspension sur un fatbike montagne ?',
        answer:   'Une fourche suspendue est fortement recommandée pour la montagne. Elle absorbe les chocs sur les sentiers pierreux, réduit la fatigue dans les bras et améliore la précision du pilotage en descente. Sans suspension, les terrains techniques deviennent rapidement inconfortables et dangereux.',
      },
      {
        question: 'Quelle autonomie espérer avec un fatbike électrique en montagne ?',
        answer:   'En montagne avec dénivelé, l\'autonomie est réduite de 30 à 50 % par rapport au plat. Avec une batterie 48V 23Ah (YVY C26 Pro), espère 60–90 km réels. Le YVY Q8 et sa batterie 60V 35Ah permet d\'atteindre 100–120 km même sur parcours accidenté. Active le mode Eco dès que possible pour préserver l\'autonomie.',
      },
    ],
    relatedSlugs: ['fatbike-neige', 'fatbike-puissant', 'fatbike-autonomie'],
    seoKeywords:  ['fatbike montagne électrique', 'meilleur fatbike montagne', 'fatbike électrique montagne 2026', 'fatbike trail électrique', 'fatbike fourche suspendue'],
  },

  // ─── 2. Plage ───────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-plage',
    title:       'Fatbike Plage',
    titleSEO:    'Meilleur Fatbike Électrique Plage 2026 — Comparatif & Guide',
    description: 'Les meilleurs fatbikes électriques pour la plage et le sable en 2026. Rouler sur la plage, les dunes et le bord de mer avec le bon matériel.',
    terrain:     'Sable mou, plages, dunes, sentiers côtiers',
    icon:        '🏖️',
    coverImage:  'https://images.unsplash.com/photo-1559741033-d28f8e36a744?w=1600&q=80',
    budgetMin:   799,
    budgetMax:   3000,
    sortOrder:   2,
    intro:       "Rouler sur la plage avec un fatbike électrique est une expérience unique. Les pneus ballons permettent de flotter sur le sable sans s'enfoncer, là où tout autre vélo s'immobilise.",
    benefits:    ['Pneus 4" minimum pour le sable mou', 'Pression basse 0.3–0.8 bar', 'Cadre résistant à la corrosion', 'Moteur hub arrière suffisant'],
    buyingCriteria: [
      { title: 'Largeur de pneus',      value: 'Minimum 4", idéalement 4.8". En sable mou, plus le pneu est large, moins tu t\'enfonces. Gonfle à 0.3–0.5 bar pour une traction optimale.' },
      { title: 'Protection corrosion',  value: 'L\'air marin attaque l\'aluminium et l\'acier. Choisis un cadre aluminium (pas acier) et lubrifie la chaîne avec un lubrifiant résistant à l\'eau après chaque sortie.' },
      { title: 'Moteur hub ou mid-drive', value: 'Sur terrain plat comme la plage, un moteur hub 500W suffit et coûte moins cher. Le mid-drive n\'est utile que si tu combines plage et dénivelés côtiers.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Quelle pression de pneu sur sable ?', answer: 'Entre 0.3 et 0.8 bar selon la dureté du sable. Sable humide et compact : 0.6–0.8 bar. Sable sec et mou : 0.3–0.5 bar. À ajuster sur place selon le ressenti.' },
      { question: 'Le sel de mer abîme-t-il le fatbike ?', answer: 'Oui, l\'air marin est corrosif. Rince le vélo à l\'eau douce après chaque sortie en bord de mer, lubrifie la chaîne et les câbles, et protège les connecteurs électriques.' },
    ],
    relatedSlugs: ['fatbike-urbain', 'fatbike-debutant', 'fatbike-petit-budget'],
    seoKeywords:  ['fatbike plage électrique', 'vélo sable électrique', 'fatbike bord de mer', 'fatbike dunes'],
  },

  // ─── 3. Neige ───────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-neige',
    title:       'Fatbike Neige',
    titleSEO:    'Meilleur Fatbike Électrique Neige 2026 — Rouler sur la Neige',
    description: 'Comparatif fatbikes électriques pour rouler sur la neige et en hiver 2026. Traction, batterie par grand froid, équipements recommandés.',
    terrain:     'Neige damée, glace, chemins enneigés, pistes forestières',
    icon:        '❄️',
    coverImage:  'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1600&q=80',
    budgetMin:   999,
    budgetMax:   4000,
    sortOrder:   3,
    intro:       "La neige n'est plus un obstacle avec un fatbike électrique. Les pneus 4.8\"–5\" offrent une traction remarquable sur neige damée, et l'assistance électrique compense la résistance accrue du terrain.",
    benefits:    ['Pneus 4.8"–5" cloutés recommandés', 'Batterie conservée au chaud', 'Mode éco pour prolonger l\'autonomie', 'Guidon et freins adaptés aux gants épais'],
    buyingCriteria: [
      { title: 'Pneus pour la neige',      value: 'Pneus 4.8" à 5" minimum. Pour la glace et neige verglacée, des pneus cloutés (spike tires) sont indispensables. Schwalbe Ice Spiker Pro ou 45NRTH Dillinger sont des références.' },
      { title: 'Gestion batterie par froid', value: 'Le froid réduit l\'autonomie de 20–40%. Conserve la batterie au chaud avant la sortie, utilise un couvre-batterie isolant et commence en mode Eco.' },
      { title: 'Visibilité & équipement', value: 'En hiver, pars avec éclairage avant/arrière puissant, vêtements waterproof, gants chauds compatibles tactiles. Prévoir une dérive possible sur glace.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Les fatbikes peuvent-ils rouler sur la neige fraîche ?', answer: 'Oui sur neige fraîche légère (< 20cm) et neige damée. La neige profonde, poudreuse ou avec croûte de glace reste difficile même avec des pneus 5".' },
      { question: 'La batterie tient-elle par grand froid ?', answer: 'Les batteries lithium-ion perdent 20–40% de capacité en dessous de 0°C. Conserve la batterie au chaud avant de partir et utilise un manchon isolant pendant la sortie.' },
    ],
    relatedSlugs: ['fatbike-montagne', 'fatbike-puissant', 'fatbike-autonomie'],
    seoKeywords:  ['fatbike neige électrique', 'vélo électrique neige', 'fatbike hiver', 'fatbike pneus cloutés'],
  },

  // ─── 4. Urbain ──────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-urbain',
    title:       'Fatbike Urbain',
    titleSEO:    'Meilleur Fatbike Électrique Urbain 2026 — Ville & Quotidien',
    description: 'Fatbike électrique pour la ville et le quotidien en 2026. Confort, maniabilité, autonomie : trouver le fatbike parfait pour vos trajets urbains.',
    terrain:     'Ville, pavés, pistes cyclables, quotidien',
    icon:        '🏙️',
    coverImage:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    budgetMin:   799,
    budgetMax:   3500,
    sortOrder:   4,
    intro:       "En ville, le fatbike électrique offre un confort incomparable sur pavés et nids-de-poule, une stabilité rassurante dans la circulation dense et une polyvalence idéale pour les week-ends hors asphalte.",
    benefits:    ['Confort sur pavés sans suspension', 'Compact et facile à garer', 'Idéal pour trajets quotidiens', 'Polyvalent ville + nature'],
    buyingCriteria: [
      { title: 'Taille & maniabilité',       value: 'En ville, privilégie un modèle compact ou pliant. Un guidon réglable et une hauteur de selle adaptable facilitent les arrêts fréquents.' },
      { title: 'Autonomie pour le quotidien', value: 'Pour 10–25 km/jour de trajet, une batterie 48V 10Ah suffit. Pour des trajets plus longs ou des utilisateurs lourds, vise 48V 14Ah.' },
      { title: 'Éclairage & sécurité',        value: 'Vérifie que le fatbike dispose d\'éclairages intégrés conformes au Code de la Route français (feu avant blanc, feu arrière rouge, catadioptres). Ajoute un antivol U de qualité.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Un fatbike est-il pratique en ville ?', answer: 'Oui, malgré sa taille imposante. Le confort sur pavés est excellent, les pneus larges absorbent les vibrations et la stabilité est rassurante. Le point négatif est le stationnement qui nécessite un espace plus grand.' },
    ],
    relatedSlugs: ['fatbike-plage', 'fatbike-pliant', 'fatbike-debutant'],
    seoKeywords:  ['fatbike électrique urbain', 'fatbike ville', 'vae fatbike quotidien', 'fatbike trajet travail'],
  },

  // ─── 5. Pliant ──────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-pliant',
    title:       'Fatbike Pliant',
    titleSEO:    'Meilleur Fatbike Électrique Pliant 2026 — Compact & Pratique',
    description: 'Comparatif fatbikes électriques pliants 2026. Transport, stockage facile, appartement ou coffre de voiture : les meilleurs modèles compacts.',
    terrain:     'Tous terrains, transport facile, stockage',
    icon:        '🔀',
    coverImage:  'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1600&q=80',
    budgetMin:   899,
    budgetMax:   3000,
    sortOrder:   5,
    intro:       "Le fatbike électrique pliant combine le confort des gros pneus avec la praticité du pliage. Idéal si tu manques de place chez toi ou si tu veux transporter ton vélo en voiture ou en transports.",
    benefits:    ['Pliage en 10–20 secondes', 'Stockage en appartement', 'Transport en voiture facilité', 'Idéal camping & voyages'],
    buyingCriteria: [
      { title: 'Qualité du mécanisme de pliage', value: 'Vérifie la robustesse de la charnière centrale. Un verrou de qualité (Dahon, KHS) garantit 10 000+ cycles de pliage sans jeu. Évite les modèles avec charnière en plastique.' },
      { title: 'Poids & portabilité',             value: 'Les fatbikes pliants pèsent 28–36 kg. Prévoir une aide ou un chariot pour les porter dans des escaliers. Certains modèles ont des roues de transport sous le cadre.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Un fatbike pliant est-il aussi solide qu\'un modèle classique ?', answer: 'Oui pour un usage normal. La charnière est le point sensible : vérifie le serrage régulièrement (tous les 300–500 km) et ne dépasse pas le poids maximum recommandé.' },
    ],
    relatedSlugs: ['fatbike-urbain', 'fatbike-petit-budget', 'fatbike-debutant'],
    seoKeywords:  ['fatbike pliant électrique', 'vélo pliant gros pneus', 'fatbike compact', 'fatbike pliable électrique'],
  },

  // ─── 6. Débutant ────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-debutant',
    title:       'Fatbike pour Débutants',
    titleSEO:    'Meilleur Fatbike Électrique Débutant 2026 — Facile & Accessible',
    description: 'Quel fatbike électrique choisir quand on débute ? Nos recommandations 2026 pour les débutants : modèles faciles, stables et accessibles.',
    terrain:     'Chemins forestiers, pistes cyclables, tous terrains modérés',
    icon:        '🚴',
    coverImage:  'https://images.unsplash.com/photo-1624366573671-4685b51e0558?w=1600&q=80',
    budgetMin:   799,
    budgetMax:   2500,
    sortOrder:   6,
    intro:       "Le fatbike est l'un des vélos les plus faciles à prendre en main grâce à sa stabilité naturelle. Les pneus larges pardonnent les imprécisions et l'assistance électrique évite le découragement.",
    benefits:    ['Stabilité naturelle des gros pneus', 'Assistance modulable', 'Parfait pour reprendre le vélo', 'Idéal seniors et familles'],
    buyingCriteria: [
      { title: 'Assistance progressive', value: 'Cherche un fatbike avec 3–5 niveaux d\'assistance clairement distincts. Le mode 1 (Eco) doit laisser pédaler, le mode 3–5 (Boost) doit assister généreusement sans déséquilibrer.' },
      { title: 'Géométrie accessible',   value: 'Une selle basse (hauteur de selle < 80cm du sol), un guidon droit et relevé et un cadre step-through (mixte) facilitent les montées/descentes de selle.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Faut-il un permis pour rouler en fatbike électrique ?', answer: 'Non, si le fatbike respecte la norme VAE : moteur ≤ 250W nominal, assistance coupée à 25 km/h. Dans ce cas, pas de permis, assurance ou casque obligatoires (mais vivement recommandé).' },
    ],
    relatedSlugs: ['fatbike-petit-budget', 'fatbike-femme', 'fatbike-plage'],
    seoKeywords:  ['fatbike débutant électrique', 'premier fatbike électrique', 'fatbike facile', 'fatbike accessible'],
  },

  // ─── 7. Petit budget ────────────────────────────────────────────────────────
  {
    slug:        'fatbike-petit-budget',
    title:       'Fatbike Électrique Pas Cher',
    titleSEO:    'Meilleur Fatbike Électrique Pas Cher 2026 — Budget 499–1500€',
    description: 'Les meilleurs fatbikes électriques pas chers en 2026. Sélection rigoureuse entre 499€ et 1500€ : qualité, fiabilité et rapport qualité/prix.',
    terrain:     'Tous terrains, usage polyvalent',
    icon:        '💰',
    coverImage:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    budgetMin:   499,
    budgetMax:   1500,
    sortOrder:   7,
    intro:       "Le marché du fatbike électrique abordable a explosé ces dernières années. Des marques chinoises comme Engwe, Eleglide ou Fafrees proposent des modèles fiables entre 600€ et 1500€.",
    benefits:    ['Budget 499–1500€', 'Marques fiables sélectionnées', 'SAV disponible en France', 'Rapport qualité/prix testé'],
    buyingCriteria: [
      { title: 'Fiabilité > prix',      value: 'Sous 600€, méfie-toi des modèles sans SAV ni pièces détachées disponibles en Europe. Préfère des marques avec représentation française ou européenne.' },
      { title: 'Vérifier la garantie', value: 'Exige 2 ans minimum sur le cadre et la batterie (droit européen). Vérifie que le SAV répond en français ou a un revendeur local.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Peut-on trouver un bon fatbike électrique à moins de 1000€ ?', answer: 'Oui, des modèles comme l\'Engwe EP-2 Pro (~900€) ou l\'Eleglide Tankroll (~800€) offrent un excellent rapport qualité/prix avec moteur 500W et batterie 48V. Évite les modèles sous 500€ sans marque connue.' },
    ],
    relatedSlugs: ['fatbike-debutant', 'fatbike-pliant', 'fatbike-urbain'],
    seoKeywords:  ['fatbike électrique pas cher', 'fatbike moins de 1000 euros', 'fatbike budget', 'fatbike abordable'],
  },

  // ─── 8. Femme ───────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-femme',
    title:       'Fatbike Électrique Femme',
    titleSEO:    'Meilleur Fatbike Électrique pour Femme 2026 — Guide & Sélection',
    description: 'Fatbike électrique adapté aux femmes en 2026. Cadre mixte, ergonomie, hauteur de selle, confort : notre guide et sélection personnalisée.',
    terrain:     'Tous terrains, polyvalent',
    icon:        '👩',
    coverImage:  'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1600&q=80',
    budgetMin:   799,
    budgetMax:   3000,
    sortOrder:   8,
    intro:       "Il n'existe pas de \"fatbike pour femme\" à proprement parler, mais certains critères ergonomiques rendent un modèle plus adapté : hauteur de selle, cadre step-through, largeur de guidon et position de conduite.",
    benefits:    ['Cadre step-through accessible', 'Selle courte anatomique', 'Position de conduite droite', 'Poids maîtrisé < 30kg idéalement'],
    buyingCriteria: [
      { title: 'Hauteur de cadre',   value: 'Un cadre "low step" ou "step-through" permet de poser les deux pieds à terre facilement. Crucial pour les personnes de petite taille ou avec mobilité réduite.' },
      { title: 'Selle anatomique',   value: 'Les selles larges generiques sont inconfortables sur de longues distances. Une selle anatomique féminine (plus courte, avec canal central) fait une vraie différence.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Quelle taille de fatbike pour une femme de 1m60 ?', answer: 'Une hauteur de selle ajustable entre 75 et 90cm convient pour 1m55–1m70. Privilégie un cadre taille S ou M et vérifie que tu peux poser les deux pieds à plat à l\'arrêt.' },
    ],
    relatedSlugs: ['fatbike-debutant', 'fatbike-urbain', 'fatbike-plage'],
    seoKeywords:  ['fatbike femme électrique', 'vélo électrique gros pneus femme', 'fatbike step through', 'fatbike cadre mixte'],
  },

  // ─── 9. Puissant ────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-puissant',
    title:       'Fatbike Électrique Puissant',
    titleSEO:    'Fatbike Électrique Puissant 2026 — Moteur 750W à 1500W',
    description: 'Les fatbikes électriques les plus puissants en 2026. Moteurs 750W, 1000W et 1500W pour les terrains exigeants et les gabarits lourds.',
    terrain:     'Montagne, terrains exigeants, tout-terrain extrême',
    icon:        '⚡',
    coverImage:  'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1600&q=80',
    budgetMin:   1500,
    budgetMax:   6000,
    sortOrder:   9,
    intro:       "Pour les terrains les plus exigeants, les gabarits lourds ou simplement les riders qui veulent la puissance maximale, les fatbikes 750W à 1500W offrent des performances inégalées.",
    benefits:    ['Moteur 750W–1500W', 'Couple > 100 Nm', 'Idéal gabarits > 100kg', 'Pour terrains extrêmes'],
    buyingCriteria: [
      { title: 'Légalité en France',   value: 'Les moteurs > 250W nominal dépassent la limite VAE française. Un 750W non bridé est légalement un cyclomoteur (assurance, casque et permis AM obligatoires). Certains modèles sont bridables à 250W.' },
      { title: 'Couple vs puissance',  value: 'Un moteur 750W mid-drive à 120 Nm de couple sera plus efficace en côte qu\'un 1000W hub à 80 Nm. En montagne, le couple est plus important que la puissance brute.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Un fatbike 1000W est-il légal en France ?', answer: 'Pas en usage VAE. Un moteur > 250W nominal est considéré comme cyclomoteur : plaque d\'immatriculation, assurance RC, casque homologué et permis AM obligatoires. En vélo de loisir hors voie publique, aucune restriction.' },
    ],
    relatedSlugs: ['fatbike-montagne', 'fatbike-gros-gabarit', 'fatbike-autonomie'],
    seoKeywords:  ['fatbike puissant électrique', 'fatbike 1000w', 'fatbike 750w', 'fatbike moteur puissant'],
  },

  // ─── 10. Autonomie ──────────────────────────────────────────────────────────
  {
    slug:        'fatbike-autonomie',
    title:       'Fatbike Grande Autonomie',
    titleSEO:    'Fatbike Électrique Grande Autonomie 2026 — 80 à 150 km',
    description: 'Comparatif fatbikes électriques grande autonomie 2026. Batteries 48V 20Ah+, bikepacking, longues distances : notre sélection pour aller loin.',
    terrain:     'Longues distances, bikepacking, randonnées côtières',
    icon:        '🔋',
    coverImage:  'https://images.unsplash.com/photo-1624366573671-4685b51e0558?w=1600&q=80',
    budgetMin:   1500,
    budgetMax:   5000,
    sortOrder:   10,
    intro:       "Pour le bikepacking, les longues randonnées ou simplement ne jamais tomber en rade, les fatbikes grande autonomie embarquent des batteries 48V 17Ah à 25Ah, soit 80 à 150 km d'autonomie réelle.",
    benefits:    ['Batterie 48V 17–25Ah', '80–150km autonomie réelle', 'Compatible batterie de range', 'Idéal bikepacking'],
    buyingCriteria: [
      { title: 'Capacité batterie (Wh)', value: 'Multiplie la tension par l\'ampérage pour obtenir les Wh réels. Exemple : 48V × 20Ah = 960 Wh. En mode Eco, espère 80–100 km par tranche de 500 Wh.' },
      { title: 'Double batterie',        value: 'Certains modèles permettent d\'ajouter une batterie secondaire (range extender). Himiway, Bafang et quelques marques offrent cette option pour doubler l\'autonomie.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Quelle batterie pour 100 km d\'autonomie ?', answer: 'En mode Eco sur terrain plat, une batterie 48V 17Ah (816 Wh) permet d\'atteindre 100 km. Pour du tout-terrain ou des reliefs, vise 48V 20Ah (960 Wh) minimum.' },
    ],
    relatedSlugs: ['fatbike-montagne', 'fatbike-puissant', 'fatbike-gros-gabarit'],
    seoKeywords:  ['fatbike grande autonomie', 'fatbike longue distance', 'fatbike bikepacking', 'fatbike 100km autonomie'],
  },

  // ─── 11. Gros gabarit ───────────────────────────────────────────────────────
  {
    slug:        'fatbike-gros-gabarit',
    title:       'Fatbike Gros Gabarit',
    titleSEO:    'Fatbike Électrique Gros Gabarit 2026 — Charge > 120 kg',
    description: 'Fatbike électrique pour personnes lourdes et gros gabarits en 2026. Charge utile 130–200 kg, cadres renforcés, moteurs puissants.',
    terrain:     'Tous terrains, usage quotidien et loisir',
    icon:        '💪',
    coverImage:  'https://images.unsplash.com/photo-1559741033-d28f8e36a744?w=1600&q=80',
    budgetMin:   999,
    budgetMax:   4500,
    sortOrder:   11,
    intro:       "Le fatbike électrique est l'un des meilleurs choix pour les personnes en surpoids ou de grand gabarit. Cadre renforcé, pneus larges, motorisation puissante : certains modèles supportent jusqu'à 200 kg.",
    benefits:    ['Charge max 130–200 kg', 'Cadre aluminium renforcé', 'Moteur 500W–750W minimum', 'Selle XXL incluse ou disponible'],
    buyingCriteria: [
      { title: 'Charge maximale',   value: 'Vérifie toujours la charge maximale totale (rider + équipement). La plupart des fatbikes standard supportent 120–150 kg. Des modèles spécialisés montent à 180–200 kg.' },
      { title: 'Résistance cadre',  value: 'Préfère un cadre aluminium 6061 ou 7005 série aéro. Méfie-toi des cadres acier lourds ou des soudures proéminentes qui signalent une finition bas de gamme.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Quel fatbike pour 130 kg de charge rider ?', answer: 'Des modèles comme le Himiway Cruiser (supportant 160 kg) ou le Addmotor M-330 (180 kg) sont spécialement conçus pour les gabarits lourds. Vérifie aussi les roues (rayons renforcés) et les freins (hydrauliques obligatoires).' },
    ],
    relatedSlugs: ['fatbike-puissant', 'fatbike-autonomie', 'fatbike-debutant'],
    seoKeywords:  ['fatbike gros gabarit', 'fatbike personne lourde', 'fatbike 150kg', 'fatbike grande taille'],
  },

  // ─── 12. Cani-fatbike ───────────────────────────────────────────────────────
  {
    slug:        'cani-fatbike',
    title:       'Cani-Fatbike',
    titleSEO:    'Meilleur Équipement Cani-Fatbike 2026 — Courir avec son Chien',
    description: 'Guide complet du cani-fatbike 2026. Harnais, fixations, fatbikes recommandés pour courir avec votre chien en sécurité sur tous terrains.',
    terrain:     'Forêt, chemins, nature, cross-country',
    icon:        '🐕',
    coverImage:  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80',
    budgetMin:   1000,
    budgetMax:   4000,
    sortOrder:   12,
    intro:       "Le cani-fatbike est la discipline qui unit cyclisme et chien de sport. Le rider utilise un fatbike (électrique ou musculaire) et son chien tire en tête avec un harnais de traction adapté.",
    benefits:    ['Idéal pour races sportives', 'Exercice intense pour le chien', 'Renforce le lien humain-animal', 'Praticable toute l\'année'],
    buyingCriteria: [
      { title: 'Harnais de traction',   value: 'Un harnais canicross adapté est obligatoire (jamais un harnais de marche). Marques : Non-Stop Dogwear, Ruffwear, Julius-K9. Le chien doit avoir la nuque libre pour respirer.' },
      { title: 'Fixation sur le vélo',  value: 'La laisse s\'attache sur la tige de selle (Springer) ou sur un amortisseur de corde. Jamais sur le guidon. Le système Walky Dog ou Trixie Springer absorbent les à-coups.' },
      { title: 'Âge et santé du chien', value: 'Attends que le chien ait 18 mois minimum (croissance terminée). Consulte un vétérinaire avant. Exclure les races brachycéphales (bouledogues, carlins) incapables d\'efforts intenses.' },
    ],
    topPicks: [],
    faq: [
      { question: 'Quelle race de chien pour le cani-fatbike ?', answer: 'Husky, Malamute, Berger Allemand, Border Collie, Labrador, Vizsla... Les races à fort instinct de traction et à l\'endurance naturelle sont idéales. Les petits chiens peuvent pratiquer à moindre intensité.' },
      { question: 'Le fatbike électrique est-il recommandé en cani-fatbike ?', answer: 'Oui, surtout pour les sorties longues ou les terrains vallonnés. L\'assistance électrique permet de garder une vitesse régulière sans distancer le chien. En mode Eco, laisse le chien tirer et complète avec les jambes.' },
    ],
    relatedSlugs: ['fatbike-montagne', 'fatbike-autonomie', 'fatbike-puissant'],
    seoKeywords:  ['cani-fatbike', 'cani vélo fatbike', 'fatbike avec chien', 'harnais cani-fatbike'],
  },
];

// Helper: get category by slug
export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}

// Helper: get related categories
export function getRelatedCategories(slugs: string[]): CategoryData[] {
  return slugs.map(s => CATEGORIES.find(c => c.slug === s)).filter(Boolean) as CategoryData[];
}

// Helper: all slugs for getStaticPaths
export function getAllCategorySlugs(): string[] {
  return CATEGORIES.map(c => c.slug);
}
