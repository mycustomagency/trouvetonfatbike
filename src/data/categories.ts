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
    coverImage:  'https://m.media-amazon.com/images/I/61Euz4E5iML._AC_SL1001_.jpg',
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
    h1:          'Meilleur Fatbike Électrique de Plage 2026 — Notre Sélection',
    description: 'Découvrez notre sélection des meilleurs fatbikes électriques de plage 2026. Pneus 4–5 pouces, résistance au sel et au sable : roulez sur toutes les plages sans effort.',
    terrain:     'Sable mou, plages, dunes, sentiers côtiers',
    icon:        '🏖️',
    coverImage:  'https://m.media-amazon.com/images/I/81L424f+kJL._AC_SL1500_.jpg',
    budgetMin:   799,
    budgetMax:   3000,
    sortOrder:   2,
    intro:       "Le fatbike électrique de plage est idéal pour rouler sur le sable mou, longer les côtes et explorer les plages sauvages. Ses pneus larges 4 à 5 pouces flottent sur le sable sans s'enfoncer, là où tout autre vélo resterait bloqué.\n\nL'assistance électrique compense la résistance naturelle du sable et te permet d'avancer sans épuiser tes jambes sur plusieurs kilomètres de littoral. Combiné à un cadre traité anti-corrosion et un moteur imperméable, un bon fatbike de plage s'entretient facilement et dure plusieurs saisons malgré l'environnement marin.\n\nNotre sélection 2026 pour le meilleur fatbike électrique de plage a été établie selon des critères stricts : largeur de pneus (4 pouces minimum), indice d'étanchéité du moteur, traitement anti-corrosion du cadre et rapport poids/portabilité pour faciliter le transport jusqu'au bord de l'eau.",
    benefits: [
      'Pneus 4 pouces minimum pour flotter sur le sable',
      "Moteur imperméable résistant à l'humidité et au sel",
      'Cadre traité anti-corrosion',
      'Légèreté pour faciliter le transport sur la plage',
    ],
    buyingCriteria: [
      { title: 'Pneus 4"+',        value: 'Minimum 4 pouces, idéalement 4.8". En sable mou, plus le pneu est large, moins tu t\'enfonces. Gonfle à 0.3–0.5 bar pour une traction optimale sur sable sec.' },
      { title: 'Étanchéité',       value: 'Vérifie l\'indice IP du moteur (IP65 minimum) et des connecteurs. L\'humidité et l\'eau salée sont les ennemis numéro 1 des composants électriques côtiers.' },
      { title: 'Anti-corrosion',   value: 'L\'air marin attaque l\'aluminium et l\'acier. Choisis un cadre aluminium traité et lubrifie la chaîne avec un lubrifiant résistant à l\'eau après chaque sortie.' },
      { title: 'Poids léger',      value: 'Un fatbike léger (< 28 kg idéalement) est plus facile à porter sur la plage jusqu\'au bord de l\'eau. Les modèles > 35 kg deviennent pénibles à manœuvrer sur sable.' },
    ],
    topPicks: ['B0C7VDRXXP', 'B0CH9LJVC3'],
    faq: [
      {
        question: 'Quelle pression de pneu pour rouler sur le sable ?',
        answer:   'Entre 0.3 et 0.8 bar selon la dureté du sable. Sable humide et compact : 0.6–0.8 bar. Sable sec et mou : 0.3–0.5 bar. Dégonfle progressivement sur place et roule quelques mètres pour trouver le bon équilibre entre flottaison et effort de pédalage.',
      },
      {
        question: 'Le sel de mer abîme-t-il le fatbike électrique ?',
        answer:   'Oui, l\'air et l\'eau de mer sont corrosifs. Rince le vélo à l\'eau douce après chaque sortie en bord de mer, lubrifie la chaîne et les câbles, et protège les connecteurs électriques avec un spray anti-humidité. Un cadre aluminium résiste mieux que l\'acier au sel.',
      },
      {
        question: 'Peut-on rouler sur toutes les plages en France avec un fatbike ?',
        answer:   'Non, l\'accès aux plages à vélo est réglementé localement. Certaines plages sont interdites aux véhicules motorisés (même les VAE). En dehors des plages classées, les dunes et sentiers côtiers du Conservatoire du Littoral sont souvent accessibles. Renseigne-toi auprès de la mairie locale avant chaque sortie.',
      },
    ],
    relatedSlugs: ['fatbike-urbain', 'fatbike-debutant', 'fatbike-petit-budget'],
    seoKeywords:  ['fatbike plage électrique', 'vélo sable électrique', 'fatbike bord de mer', 'fatbike dunes', 'meilleur fatbike plage 2026'],
  },

  // ─── 3. Neige ───────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-neige',
    title:       'Fatbike Neige',
    titleSEO:    'Meilleur Fatbike Électrique Neige 2026 — Rouler sur la Neige',
    h1:          'Meilleur Fatbike Électrique Neige 2026 — Notre Sélection',
    description: 'Découvrez notre sélection des meilleurs fatbikes électriques pour rouler sur la neige en 2026. Pneus 4–5 pouces, résistance au froid, freins hydrauliques : roulez en hiver en toute sécurité.',
    terrain:     'Neige damée, glace, chemins enneigés, pistes forestières',
    icon:        '❄️',
    coverImage:  'https://m.media-amazon.com/images/I/71KO30o+wbL._AC_SL1500_.jpg',
    budgetMin:   999,
    budgetMax:   4000,
    sortOrder:   3,
    intro:       "Le fatbike électrique pour la neige transforme l'hiver en terrain de jeu. Ses pneus larges 4 à 5 pouces mordent dans la neige et la glace là où tout autre vélo déraperait.\n\nL'assistance électrique compense la résistance naturelle de la neige et des chemins enneigés, te permettant de maintenir une allure régulière même dans les montées. Combiné à des freins hydrauliques qui restent efficaces par températures négatives et un moteur étanche à l'humidité, le bon fatbike hiver te donne accès à des paysages et sentiers inaccessibles l'hiver à vélo classique.\n\nNotre sélection 2026 des meilleurs fatbikes électriques neige a été établie selon des critères stricts : largeur de pneus (4 pouces minimum, 4.8\" recommandé), résistance au froid des composants électriques, efficacité des freins par temps humide et étanchéité de l'ensemble moteur-batterie.",
    benefits: [
      'Pneus 4–5 pouces pour traction optimale sur neige',
      'Moteur puissant pour chemins enneigés',
      "Résistance au froid et à l'humidité",
      'Freins hydrauliques fiables par temps froid',
    ],
    buyingCriteria: [
      { title: 'Largeur pneus',         value: 'Pneus 4.8" à 5" minimum pour la neige. Sur glace et neige verglacée, des pneus cloutés (spike tires) sont indispensables. Schwalbe Ice Spiker Pro ou 45NRTH Dillinger sont des références.' },
      { title: 'Résistance froid',      value: 'Le froid réduit l\'autonomie de 20–40%. Conserve la batterie au chaud avant la sortie, utilise un couvre-batterie isolant. Vérifie que les câbles et connecteurs sont homologués pour des températures négatives.' },
      { title: 'Freins hydrauliques',   value: 'Les freins hydrauliques maintiennent leur efficacité par temps froid et humide, contrairement aux freins mécaniques qui peuvent se rigidifier. Indispensables pour rouler en sécurité sur neige et glace.' },
      { title: 'Étanchéité',            value: 'Vérifie l\'indice IP du moteur et des connecteurs (IP65 minimum). La neige fondue, la boue et l\'humidité en hiver sont particulièrement agressives pour les composants électriques.' },
    ],
    topPicks: ['B0CXLL12PQ', 'B0GFCX4SXQ', 'B0DD6MVPZD'],
    faq: [
      {
        question: 'Les fatbikes peuvent-ils rouler sur la neige fraîche ?',
        answer:   'Oui sur neige fraîche légère (moins de 20 cm) et neige damée. La neige profonde, poudreuse ou avec croûte de glace reste difficile même avec des pneus 5". Dégonfle les pneus à 0.3–0.5 bar pour maximiser la surface de contact et la flottaison.',
      },
      {
        question: 'La batterie tient-elle par grand froid ?',
        answer:   'Les batteries lithium-ion perdent 20–40% de capacité en dessous de 0°C. Pour limiter la perte : conserve la batterie dans un endroit chaud avant de partir, utilise un manchon isolant pendant la sortie, et démarre en mode Eco pour chauffer la batterie progressivement.',
      },
      {
        question: 'Faut-il des pneus spéciaux pour rouler sur glace en fatbike ?',
        answer:   'Oui, sur glace vive les pneus lisses restent dangereux même larges. Des pneus cloutés (spike tires) type Schwalbe Ice Spiker Pro ou 45NRTH Dillinger sont indispensables. Sur neige damée sans glace, un pneu large à crampons prononcés suffit amplement.',
      },
    ],
    relatedSlugs: ['fatbike-montagne', 'fatbike-puissant', 'fatbike-autonomie'],
    seoKeywords:  ['fatbike neige électrique', 'vélo électrique neige', 'fatbike hiver', 'fatbike pneus cloutés', 'meilleur fatbike neige 2026'],
  },

  // ─── 4. Urbain ──────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-urbain',
    title:       'Fatbike Urbain',
    titleSEO:    'Meilleur Fatbike Électrique Urbain 2026 — Ville & Quotidien',
    h1:          'Meilleur Fatbike Électrique Urbain 2026 — Notre Sélection',
    description: 'Fatbike électrique pour la ville et le quotidien en 2026. Confort sur pavés, autonomie suffisante et rangement facile : notre sélection pour vos trajets urbains.',
    terrain:     'Ville, pavés, pistes cyclables, quotidien',
    icon:        '🏙️',
    coverImage:  'https://m.media-amazon.com/images/I/6187vLg4PdL._AC_SL1024_.jpg',
    budgetMin:   799,
    budgetMax:   3500,
    sortOrder:   4,
    intro:       "Le fatbike électrique urbain redéfinit les déplacements en ville. Confortable sur les pavés, stable sur les pistes cyclables et suffisamment compact pour se faufiler partout.\n\nLà où un VAE classique transmet chaque vibration de la route, les pneus 4 pouces du fatbike absorbent naturellement les irrégularités du bitume — pavés, nids-de-poule, rails de tramway — sans suspension ni amortisseur. L'assistance électrique te permet d'arriver à destination sans transpirer, même avec du relief ou du vent.\n\nNotre sélection 2026 des meilleurs fatbikes électriques urbains privilégie les modèles alliant confort de roulement, autonomie suffisante pour les trajets quotidiens, un poids raisonnable et la possibilité de ranger facilement le vélo une fois arrivé.",
    benefits: [
      'Confort supérieur sur pavés et routes abîmées',
      'Assistance électrique pour arriver sans transpirer',
      'Pneus larges stables en ville',
      'Pliable pour transport et rangement facile',
    ],
    buyingCriteria: [
      { title: 'Confort',            value: 'Les pneus 4 pouces gonflés à 1.5–2 bar absorbent les pavés et irrégularités du bitume. Pas besoin de suspension en ville, les pneus larges suffisent à amortir naturellement.' },
      { title: 'Autonomie urbaine',  value: 'Pour 10–25 km/jour de trajet, une batterie 48V 10Ah suffit largement. Pour des trajets plus longs ou si tu oublies régulièrement de recharger, vise 48V 14Ah minimum.' },
      { title: 'Poids',             value: 'Un fatbike urbain idéal pèse moins de 30 kg. Au-delà, le ranger en appartement ou le porter dans les escaliers devient une contrainte quotidienne dissuasive.' },
      { title: 'Facilité rangement', value: 'Si tu n\'as pas de garage, préfère un modèle pliant ou semi-pliant (guidon et selle rabattables). Certains fatbikes passent debout dans un couloir d\'appartement une fois la roue avant tournée à 90°.' },
    ],
    topPicks: ['B0C7VDRXXP', 'B0CH9LJVC3', 'B0GX9MT2F2'],
    faq: [
      {
        question: 'Un fatbike est-il pratique en ville ?',
        answer:   'Oui, malgré son format imposant. Le confort sur pavés est nettement supérieur à un VAE classique, la stabilité est rassurante dans la circulation et l\'assistance électrique efface les côtes. Le seul point délicat est le stationnement : prévois un espace légèrement plus grand qu\'un vélo standard.',
      },
      {
        question: 'Quelle autonomie pour un usage quotidien en ville ?',
        answer:   'Pour des trajets de 10–20 km par jour, une batterie 48V 10Ah (480 Wh) offre 3 à 5 jours d\'autonomie sans recharger. En mode Eco, tu peux dépasser 60 km sur une seule charge. Recharge la batterie chaque soir pour ne jamais te retrouver à court.',
      },
      {
        question: 'Le fatbike électrique est-il plus confortable qu\'un VAE classique en ville ?',
        answer:   'Oui sur les surfaces irrégulières. Les pneus 4 pouces à basse pression absorbent les pavés, les joints de dalles et les petits obstacles. Sur asphalte lisse, la différence est moins perceptible. Si ta ville est bien bitumée, un VAE classique plus léger peut suffire.',
      },
    ],
    relatedSlugs: ['fatbike-plage', 'fatbike-pliant', 'fatbike-debutant'],
    seoKeywords:  ['fatbike électrique urbain', 'fatbike ville', 'vae fatbike quotidien', 'fatbike trajet travail', 'meilleur fatbike urbain 2026'],
  },

  // ─── 5. Pliant ──────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-pliant',
    title:       'Fatbike Pliant',
    titleSEO:    'Meilleur Fatbike Électrique Pliant 2026 — Compact & Pratique',
    h1:          'Meilleur Fatbike Électrique Pliant 2026 — Notre Sélection',
    description: 'Comparatif fatbikes électriques pliants 2026. Transport facile en voiture, stockage en appartement : les meilleurs modèles compacts sélectionnés.',
    terrain:     'Tous terrains, transport facile, stockage',
    icon:        '🔀',
    coverImage:  'https://m.media-amazon.com/images/I/717L4oAM7lL._AC_SL1500_.jpg',
    budgetMin:   899,
    budgetMax:   3000,
    sortOrder:   5,
    intro:       "Le fatbike électrique pliant combine la polyvalence du fat bike avec la praticité du vélo pliant. Idéal pour le transport en voiture, les vacances et les petits espaces de rangement.\n\nLà où un fatbike classique nécessite un garage ou une remise dédiée, le modèle pliant se glisse dans un coffre de voiture, se range dans un couloir ou s'emporte facilement en vacances. Le pliage s'effectue en moins de 30 secondes sur les meilleurs modèles, sans outils.\n\nNotre sélection 2026 des meilleurs fatbikes électriques pliants privilégie les mécanismes de pliage robustes, les batteries suffisantes pour des sorties réelles, et un poids maîtrisé pour que le transport reste vraiment pratique au quotidien.",
    benefits: [
      'Se plie en moins de 30 secondes',
      'Transport facile en voiture ou en transport en commun',
      'Rangement compact à la maison',
      'Polyvalent tous terrains',
    ],
    buyingCriteria: [
      { title: 'Poids',            value: 'Les fatbikes pliants pèsent 28–36 kg. Prévoir une aide ou un chariot pour les porter dans des escaliers. Vise moins de 30 kg si tu dois le monter souvent.' },
      { title: 'Facilité pliage',  value: 'Vérifie la robustesse de la charnière centrale. Un verrou de qualité garantit 10 000+ cycles de pliage sans jeu. Le mécanisme doit s\'actionner sans outils en moins de 30 secondes.' },
      { title: 'Autonomie',        value: 'Malgré le format compact, vise une batterie 48V 10Ah minimum pour 40–60 km d\'autonomie réelle. Certains modèles pliants intègrent des batteries amovibles pour recharger à la maison.' },
      { title: 'Solidité',         value: 'La charnière est le point sensible. Vérifie le serrage régulièrement (tous les 300–500 km) et ne dépasse pas le poids maximum recommandé. Évite les modèles avec charnière en plastique.' },
    ],
    topPicks: ['B0GT567L3J', 'B0GX9MT2F2'],
    faq: [
      {
        question: 'Un fatbike pliant est-il aussi solide qu\'un modèle classique ?',
        answer:   'Oui pour un usage normal. La charnière est le point sensible : vérifie le serrage régulièrement (tous les 300–500 km) et ne dépasse pas le poids maximum recommandé. Sur les modèles de qualité, la charnière est garantie 2 ans et supporte facilement 10 000 cycles de pliage.',
      },
      {
        question: 'Combien de temps faut-il pour plier un fatbike électrique ?',
        answer:   'Entre 15 et 45 secondes selon le modèle. Les meilleurs fatbikes pliants utilisent un système à verrou central que l\'on actionne d\'une main. Certains nécessitent aussi de rabattre le guidon et la tige de selle, ce qui ajoute quelques secondes.',
      },
      {
        question: 'Un fatbike pliant rentre-t-il dans un coffre de voiture ?',
        answer:   'Oui, dans la grande majorité des véhicules. Plié, un fatbike mesure généralement 100–120 cm de long sur 65 cm de haut. Il entre dans un coffre de berline ou de SUV. Pour un citadine compacte, abaisser les sièges arrière est souvent nécessaire.',
      },
    ],
    relatedSlugs: ['fatbike-urbain', 'fatbike-petit-budget', 'fatbike-debutant'],
    seoKeywords:  ['fatbike pliant électrique', 'vélo pliant gros pneus', 'fatbike compact', 'fatbike pliable électrique', 'meilleur fatbike pliant 2026'],
  },

  // ─── 6. Débutant ────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-debutant',
    title:       'Fatbike pour Débutants',
    titleSEO:    'Meilleur Fatbike Électrique Débutant 2026 — Facile & Accessible',
    h1:          'Meilleur Fatbike Électrique pour Débutant 2026 — Notre Sélection',
    description: 'Quel fatbike électrique choisir quand on débute ? Nos recommandations 2026 pour débutants : modèles stables, intuitifs et accessibles avec SAV France.',
    terrain:     'Chemins forestiers, pistes cyclables, tous terrains modérés',
    icon:        '🚴',
    coverImage:  'https://m.media-amazon.com/images/I/81O4secrBGL._AC_SL1500_.jpg',
    budgetMin:   799,
    budgetMax:   2500,
    sortOrder:   6,
    intro:       "Le fatbike électrique pour débutant doit être simple à prendre en main, stable et rassurant. La stabilité naturelle des gros pneus en fait le vélo idéal pour débuter en toute confiance.\n\nContrairement aux VTT classiques qui demandent technique et équilibre, le fatbike pardonne les imprécisions de pilotage grâce à ses pneus 4 pouces qui collent au sol dans toutes les situations. L'assistance électrique, quant à elle, élimine la frustration des côtes et permet de se concentrer sur la prise en main sans jamais être à bout de souffle.\n\nNotre sélection 2026 des meilleurs fatbikes pour débutants privilégie les modèles avec une interface intuitive, une stabilité maximale, un prix accessible et un SAV francophone pour être accompagné en cas de besoin.",
    benefits: [
      'Stabilité maximale grâce aux gros pneus',
      "Assistance électrique pour ne jamais être à bout de souffle",
      'Prise en main intuitive',
      'Adapté à tous les gabarits',
    ],
    buyingCriteria: [
      { title: 'Facilité utilisation', value: 'Cherche un fatbike avec 3–5 niveaux d\'assistance clairement distincts et un écran LCD simple. L\'interface doit être intuitive dès la première utilisation, sans notice technique.' },
      { title: 'Stabilité',            value: 'Les pneus larges 4 pouces offrent une stabilité naturelle rassurante. Évite les modèles aux pneus < 3.5 pouces pour débuter. Un guidon large (680 mm+) améliore aussi le contrôle.' },
      { title: 'Prix',                 value: 'Entre 800€ et 1500€ pour un bon fatbike débutant fiable. Sous 600€, les économies sur les composants (freins, batterie) se font sentir rapidement.' },
      { title: 'SAV France',           value: 'Privilégie les marques avec un SAV francophone ou un revendeur local. En cas de panne ou de question technique, un support joignable en français change vraiment tout.' },
    ],
    topPicks: ['B0CH9LJVC3', 'B0GX9MT2F2', 'B0C7VDRXXP'],
    faq: [
      {
        question: 'Faut-il un permis pour rouler en fatbike électrique ?',
        answer:   'Non, si le fatbike respecte la norme VAE européenne : moteur ≤ 250W nominal, assistance coupée à 25 km/h. Dans ce cas, pas de permis, ni assurance ni casque obligatoires (mais le casque est vivement recommandé). Au-delà de ces seuils, le vélo est considéré comme un cyclomoteur.',
      },
      {
        question: 'Combien de temps faut-il pour apprendre à maîtriser un fatbike ?',
        answer:   'La plupart des débutants se sentent à l\'aise après 1 à 3 sorties. Les gros pneus rendent le vélo naturellement stable et pardonnent les erreurs de trajectoire. La principale adaptation concerne la largeur du guidon et le poids du vélo lors des manœuvres à basse vitesse.',
      },
      {
        question: 'Quel niveau de condition physique faut-il pour débuter en fatbike électrique ?',
        answer:   'Aucun niveau particulier n\'est requis. L\'assistance électrique compense la fatigue et s\'adapte à ton effort. Même sans activité physique régulière, tu peux partir pour des sorties de 30 à 60 km en mode Boost sans difficulté. Le fatbike est même recommandé pour la reprise d\'une activité sportive douce.',
      },
    ],
    relatedSlugs: ['fatbike-petit-budget', 'fatbike-femme', 'fatbike-plage'],
    seoKeywords:  ['fatbike débutant électrique', 'premier fatbike électrique', 'fatbike facile', 'fatbike accessible', 'meilleur fatbike débutant 2026'],
  },

  // ─── 7. Petit budget ────────────────────────────────────────────────────────
  {
    slug:        'fatbike-petit-budget',
    title:       'Fatbike Électrique Pas Cher',
    titleSEO:    'Meilleur Fatbike Électrique Pas Cher 2026 — Budget 500–1500€',
    h1:          'Meilleur Fatbike Électrique Pas Cher 2026 — Notre Sélection',
    description: 'Les meilleurs fatbikes électriques pas chers en 2026. Sélection rigoureuse entre 500€ et 1500€ : fiabilité, garantie et rapport qualité/prix testés.',
    terrain:     'Tous terrains, usage polyvalent',
    icon:        '💰',
    coverImage:  'https://m.media-amazon.com/images/I/6187vLg4PdL._AC_SL1024_.jpg',
    budgetMin:   499,
    budgetMax:   1500,
    sortOrder:   7,
    intro:       "Trouver un bon fatbike électrique sans se ruiner c'est possible. Entre 500€ et 1500€, il existe des modèles fiables et performants pour débuter ou pour une utilisation occasionnelle.\n\nLe marché du fatbike électrique abordable a explosé ces dernières années. Des marques comme Engwe, Eleglide, Fafrees ou Lankeleisi proposent des modèles sérieux avec moteur 500W, batterie 48V et freins mécaniques à disque dans cette fourchette de prix. Le secret est de savoir où regarder et quels critères prioriser pour ne pas tomber sur un modèle sans SAV ni pièces de rechange.\n\nNotre sélection 2026 des meilleurs fatbikes électriques pas chers a été établie selon des critères stricts : fiabilité des composants, présence d'une garantie 2 ans, disponibilité d'un SAV en Europe et rapport qualité/prix objectivement mesuré.",
    benefits: [
      'Bon rapport qualité/prix',
      'Fonctionnalités essentielles sans superflu',
      "Idéal pour tester avant d'investir plus",
      'Garantie et SAV disponibles',
    ],
    buyingCriteria: [
      { title: 'Prix',                  value: 'Concentre ton budget entre 800€ et 1500€ pour un bon rapport qualité/prix. Sous 600€, les économies sur les composants (freins, batterie, cadre) se ressentent rapidement.' },
      { title: 'Fiabilité',             value: 'Privilégie des marques reconnues avec des avis vérifiés. Engwe, Eleglide, Fafrees et Lankeleisi proposent des modèles fiables avec pièces détachées disponibles en Europe.' },
      { title: 'Garantie',              value: 'Exige 2 ans minimum sur le cadre et la batterie (droit européen). Vérifie que le SAV répond en français ou dispose d\'un revendeur local pour les pannes.' },
      { title: 'Rapport qualité/prix',  value: 'Compare les Wh de la batterie, la puissance du moteur et la qualité des freins pour évaluer objectivement la valeur d\'un modèle. Un moteur 500W + batterie 48V 10Ah est le minimum acceptable.' },
    ],
    topPicks: ['B0CH9LJVC3', 'B0C7VDRXXP', 'B0GX9MT2F2'],
    faq: [
      {
        question: 'Peut-on trouver un bon fatbike électrique à moins de 1000€ ?',
        answer:   'Oui, des modèles avec moteur 500W et batterie 48V existent dans cette fourchette. L\'essentiel est de vérifier la garantie (2 ans minimum), la disponibilité des pièces en Europe et les avis d\'acheteurs vérifiés. Évite les modèles sous 500€ sans marque connue ni SAV identifiable.',
      },
      {
        question: 'Quelles marques de fatbike électrique sont fiables en entrée de gamme ?',
        answer:   'Engwe, Eleglide, Fafrees et Lankeleisi sont les marques les plus fiables dans la gamme 700€–1500€. Elles disposent toutes d\'un service après-vente joignable, de pièces détachées disponibles en Europe et d\'un nombre significatif d\'avis vérifiés. Himiway et Lectric XP sont également recommandables mais moins présents en France.',
      },
      {
        question: 'Comment ne pas se faire avoir sur un fatbike électrique pas cher ?',
        answer:   'Vérifie trois points clés avant d\'acheter : 1) la marque a un SAV joignable en français ou en Europe, 2) la garantie est explicitement mentionnée (2 ans cadre, 1 an batterie minimum), 3) il existe des avis d\'acheteurs vérifiés avec retours après 6 mois d\'utilisation. Méfie-toi des offres flash à -70% sur des plateformes non identifiées.',
      },
    ],
    relatedSlugs: ['fatbike-debutant', 'fatbike-pliant', 'fatbike-urbain'],
    seoKeywords:  ['fatbike électrique pas cher', 'fatbike moins de 1000 euros', 'fatbike budget', 'fatbike abordable', 'meilleur fatbike pas cher 2026'],
  },

  // ─── 8. Femme ───────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-femme',
    title:       'Fatbike Électrique Femme',
    titleSEO:    'Meilleur Fatbike Électrique pour Femme 2026 — Guide & Sélection',
    h1:          'Meilleur Fatbike Électrique pour Femme 2026 — Notre Sélection',
    description: 'Fatbike électrique adapté aux femmes en 2026. Géométrie confortable, cadre step-through, poids léger et design soigné : notre sélection personnalisée.',
    terrain:     'Tous terrains, polyvalent',
    icon:        '👩',
    coverImage:  'https://m.media-amazon.com/images/I/81L424f+kJL._AC_SL1500_.jpg',
    budgetMin:   799,
    budgetMax:   3000,
    sortOrder:   8,
    intro:       "Le fatbike électrique pour femme allie style, confort et performance. Des géométries adaptées, des tailles de cadre plus petites et des coloris premium pour rouler avec plaisir.\n\nSi techniquement tout fatbike peut convenir à une femme, certains critères ergonomiques font une vraie différence au quotidien : un cadre step-through pour monter et descendre facilement, une selle anatomique adaptée, un guidon plus étroit et une taille de cadre S ou M pour les gabarits plus petits. L'assistance électrique efface par ailleurs les différences de condition physique et rend le fatbike accessible à toutes.\n\nNotre sélection 2026 des meilleurs fatbikes électriques pour femme priorise les modèles avec une géométrie confortable, un poids maîtrisé, une selle de qualité et des finitions soignées — sans sacrifier les performances sur le terrain.",
    benefits: [
      'Géométrie adaptée pour plus de confort',
      'Assistance électrique pour tous les niveaux',
      'Design soigné et coloris premium',
      'Polyvalent ville et nature',
    ],
    buyingCriteria: [
      { title: 'Taille cadre',    value: 'Un cadre step-through ou low-step permet de poser les deux pieds à terre facilement. Pour une taille 1m55–1m70, un cadre S ou M avec hauteur de selle réglable entre 75 et 95 cm est idéal.' },
      { title: 'Confort selle',   value: 'Les selles larges génériques sont inconfortables sur de longues distances. Une selle anatomique avec canal central et rembourrage ergonomique fait une vraie différence dès 30 minutes de sortie.' },
      { title: 'Poids léger',     value: 'Un fatbike féminin idéal pèse moins de 28 kg pour rester maniable. Les modèles > 35 kg deviennent difficiles à manœuvrer à l\'arrêt, à porter dans des escaliers ou à charger dans un coffre.' },
      { title: 'Design',          value: 'Au-delà des performances, le design et les coloris jouent un rôle dans le plaisir de rouler au quotidien. Les meilleures marques proposent des finitions soignées sans surcoût significatif.' },
    ],
    topPicks: ['B0CH9LJVC3', 'B0GX9MT2F2', 'B0C7VDRXXP'],
    faq: [
      {
        question: 'Quelle taille de fatbike pour une femme de 1m60 ?',
        answer:   'Une hauteur de selle ajustable entre 75 et 90 cm convient pour 1m55–1m70. Privilégie un cadre taille S ou M et vérifie que tu peux poser les deux pieds à plat à l\'arrêt. Les cadres step-through facilitent les montées et descentes de selle quelle que soit ta taille.',
      },
      {
        question: 'Un fatbike est-il trop lourd pour une femme ?',
        answer:   'Les fatbikes pèsent entre 25 et 36 kg, ce qui peut sembler beaucoup. En pratique, l\'assistance électrique compense largement le poids pendant le roulage. La vraie contrainte est la manutention : choisir un modèle sous 28 kg facilite le rangement et les trajets en voiture.',
      },
      {
        question: 'Peut-on faire du tout-terrain avec un fatbike femme ?',
        answer:   'Absolument. Les fatbikes recommandés dans notre sélection sont tous capables de rouler sur sentiers, chemins forestiers, plages et chemins de gravel. La géométrie plus confortable ne sacrifie pas les performances off-road — elle rend simplement la conduite plus agréable sur de longues distances.',
      },
    ],
    relatedSlugs: ['fatbike-debutant', 'fatbike-urbain', 'fatbike-plage'],
    seoKeywords:  ['fatbike femme électrique', 'vélo électrique gros pneus femme', 'fatbike step through', 'fatbike cadre mixte', 'meilleur fatbike femme 2026'],
  },

  // ─── 9. Puissant ────────────────────────────────────────────────────────────
  {
    slug:        'fatbike-puissant',
    title:       'Fatbike Électrique Puissant',
    titleSEO:    'Fatbike Électrique Puissant 2026 — 500W à 200Nm, Haute Performance',
    h1:          'Meilleur Fatbike Électrique Puissant 2026 — Notre Sélection',
    description: 'Les fatbikes électriques les plus puissants en 2026. Moteurs 500W+ à 200Nm, batteries 35Ah, composants premium : notre sélection pour riders exigeants.',
    terrain:     'Montagne, terrains exigeants, tout-terrain extrême',
    icon:        '⚡',
    coverImage:  'https://m.media-amazon.com/images/I/71uCyFiX-wL._AC_SL1500_.jpg',
    budgetMin:   1500,
    budgetMax:   6000,
    sortOrder:   9,
    intro:       "Le fatbike électrique puissant s'adresse aux riders exigeants qui veulent dompter tous les terrains sans compromis. Moteurs 500W+, couples 180Nm et batteries haute capacité.\n\nLà où un fatbike standard à 250W nominal assiste le pédalage sur terrain plat, les modèles haute puissance transforment les montées raides, les terrains meubles et les dénivelés répétés en portions gérables. Un moteur à fort couple (180–200 Nm) décuple littéralement ta force dans les côtes et maintient une vitesse constante sans que tu n'aies à forcer.\n\nNotre sélection 2026 des fatbikes électriques les plus puissants cible les modèles avec la meilleure combinaison puissance/couple/batterie, des composants durables (freins hydrauliques, fourche suspendue, transmission renforcée) et une autonomie suffisante pour des sorties longues et exigeantes.",
    benefits: [
      'Moteur 500W à 200Nm pour les terrains extrêmes',
      'Batteries haute capacité 35Ah+',
      'Composants premium durables',
      'Vitesse et puissance maximales',
    ],
    buyingCriteria: [
      { title: 'Puissance moteur',       value: 'Un moteur 500W nominal (puissance de crête 750–1000W) offre le meilleur équilibre puissance/légalité. Les moteurs déclarés > 250W en usage voie publique nécessitent assurance et permis AM.' },
      { title: 'Couple Nm',              value: 'Le couple (en Nm) est plus important que la puissance brute pour l\'off-road. Un moteur 500W à 180 Nm de couple sera plus efficace en côte qu\'un 1000W hub à 80 Nm. Vise 120 Nm minimum pour du tout-terrain exigeant.' },
      { title: 'Capacité batterie',      value: 'Les sorties exigeantes consomment 2 à 3 fois plus d\'énergie qu\'à plat. Une batterie 60V 35Ah (2 100 Wh) permet 80–120 km sur terrain difficile. Vérifie que la batterie est amovible pour la recharger séparément.' },
      { title: 'Qualité composants',     value: 'Sur un fatbike puissant, les freins hydrauliques 4 pistons, la fourche suspendue avec au moins 100 mm de débattement et la transmission renforcée (dérailleur 8–11 vitesses) sont des investissements qui font la différence à long terme.' },
    ],
    topPicks: ['B0H1BRC2QN', 'B0GFCX4SXQ', 'B0DD6MVPZD'],
    faq: [
      {
        question: 'Un fatbike puissant est-il légal en France ?',
        answer:   'En usage sur voie publique, seuls les moteurs ≤ 250W nominal avec assistance coupée à 25 km/h sont légaux sans permis ni assurance (norme VAE). Les modèles avec moteur > 250W nominal sont des cyclomoteurs : plaque, assurance RC et permis AM obligatoires. Hors voie publique (propriété privée, piste), aucune restriction.',
      },
      {
        question: 'Quelle différence entre puissance (W) et couple (Nm) sur un fatbike ?',
        answer:   'La puissance (watts) mesure la capacité à maintenir une vitesse élevée. Le couple (Newton-mètres) mesure la force de démarrage et la capacité à grimper des côtes raides. Pour le tout-terrain et la montagne, un couple élevé (150–200 Nm) est plus utile qu\'une puissance brute maximale.',
      },
      {
        question: 'Quelle autonomie avec un fatbike électrique puissant ?',
        answer:   'Sur terrain exigeant en mode Sport, compte 40–70 km selon la batterie. En mode Eco sur terrain modéré, les grandes batteries 35Ah+ permettent 100–130 km réels. Alterner les modes d\'assistance selon le terrain est la meilleure stratégie pour optimiser portée et plaisir.',
      },
    ],
    relatedSlugs: ['fatbike-montagne', 'fatbike-gros-gabarit', 'fatbike-autonomie'],
    seoKeywords:  ['fatbike puissant électrique', 'fatbike 1000w', 'fatbike 750w', 'fatbike moteur puissant', 'meilleur fatbike puissant 2026'],
  },

  // ─── 10. Autonomie ──────────────────────────────────────────────────────────
  {
    slug:        'fatbike-autonomie',
    title:       'Fatbike Grande Autonomie',
    titleSEO:    'Fatbike Électrique Grande Autonomie 2026 — 100 à 180 km',
    h1:          'Meilleur Fatbike Électrique Grande Autonomie 2026 — Notre Sélection',
    description: 'Comparatif fatbikes électriques grande autonomie 2026. Batteries 35Ah+, bikepacking, longues distances : notre sélection pour dépasser les 100 km.',
    terrain:     'Longues distances, bikepacking, randonnées côtières',
    icon:        '🔋',
    coverImage:  'https://m.media-amazon.com/images/I/71uCyFiX-wL._AC_SL1500_.jpg',
    budgetMin:   1500,
    budgetMax:   5000,
    sortOrder:   10,
    intro:       "Le fatbike électrique grande autonomie est fait pour les aventuriers qui veulent aller loin. Avec des batteries 35Ah+, certains modèles dépassent les 150 km d'autonomie réelle.\n\nPour le bikepacking, les randonnées itinérantes ou simplement ne jamais se retrouver à court d'énergie loin de chez soi, les fatbikes grande autonomie embarquent des batteries haute capacité — jusqu'à 60V 35Ah sur les meilleurs modèles. En mode Eco sur terrain plat, cela représente 120 à 180 km réels selon le gabarit du rider et le terrain.\n\nNotre sélection 2026 des meilleurs fatbikes électriques grande autonomie cible les modèles avec les meilleures batteries (Ah et Wh), la possibilité d'une batterie amovible pour recharger à l'étape, une recharge rapide et une gestion intelligente de l'assistance pour maximiser la portée.",
    benefits: [
      'Autonomie 100 à 180 km selon modèle',
      'Batterie amovible pour recharge facile',
      'Idéal pour bikepacking',
      'Mode Eco pour maximiser la portée',
    ],
    buyingCriteria: [
      { title: 'Capacité Ah',        value: 'Multiplie la tension par l\'ampérage pour obtenir les Wh réels : 60V × 35Ah = 2 100 Wh. En mode Eco, espère 80–100 km par tranche de 500 Wh sur terrain plat.' },
      { title: 'Autonomie réelle',   value: 'L\'autonomie annoncée par les fabricants est mesurée en conditions idéales. En tout-terrain ou avec du dénivelé, divise par 1.5 à 2. Un modèle annoncé à 200 km fera 100–130 km en conditions réelles.' },
      { title: 'Recharge rapide',    value: 'Un chargeur rapide (5A vs 2A standard) divise le temps de charge par 2. Utile pour les étapes bikepacking ou si tu roules quotidiennement. Vérifie la compatibilité avant d\'acheter un chargeur tiers.' },
      { title: 'Batterie amovible',  value: 'Une batterie amovible est indispensable pour le bikepacking : tu peux la recharger dans un café ou un hôtel sans rentrer le vélo. Vérifie aussi que la batterie de rechange est disponible à l\'achat séparé.' },
    ],
    topPicks: ['B0H1BRC2QN', 'B0GT567L3J', 'B0GFCX4SXQ'],
    faq: [
      {
        question: 'Quelle batterie pour 100 km d\'autonomie en fatbike ?',
        answer:   'En mode Eco sur terrain plat, une batterie 48V 17Ah (816 Wh) permet d\'atteindre 100 km. Pour du tout-terrain ou des reliefs importants, vise 48V 20Ah (960 Wh) minimum. Les modèles 60V 35Ah (2 100 Wh) permettent de dépasser 150 km en conditions favorables.',
      },
      {
        question: 'Comment maximiser l\'autonomie d\'un fatbike électrique ?',
        answer:   'Quatre leviers : 1) utiliser le mode Eco sur les parties plates et réserver le mode Sport pour les côtes, 2) maintenir les pneus correctement gonflés (pression adaptée au terrain), 3) pédaler régulièrement plutôt que de laisser le moteur seul travailler, 4) éviter les démarrages en mode puissance maximale — démarrer en Eco puis monter en puissance consomme beaucoup moins.',
      },
      {
        question: 'Un fatbike grande autonomie est-il adapté au bikepacking ?',
        answer:   'C\'est l\'usage pour lequel il est le mieux taillé. Une batterie amovible te permet de recharger à l\'étape, l\'autonomie élevée couvre des étapes de 80–120 km et les pneus larges absorbent les pistes non goudronnées avec des sacoches chargées. Préfère un modèle avec porte-bagnes intégré ou des points d\'attache pour sacoche de cadre.',
      },
    ],
    relatedSlugs: ['fatbike-montagne', 'fatbike-puissant', 'fatbike-gros-gabarit'],
    seoKeywords:  ['fatbike grande autonomie', 'fatbike longue distance', 'fatbike bikepacking', 'fatbike 100km autonomie', 'meilleur fatbike autonomie 2026'],
  },

  // ─── 11. Gros gabarit ───────────────────────────────────────────────────────
  {
    slug:        'fatbike-gros-gabarit',
    title:       'Fatbike Gros Gabarit',
    titleSEO:    'Fatbike Électrique Gros Gabarit 2026 — Charge 150 à 200 kg',
    h1:          'Meilleur Fatbike Électrique Gros Gabarit 2026 — Notre Sélection',
    description: 'Fatbike électrique pour gros gabarits et personnes lourdes en 2026. Cadres renforcés, charge 150–200 kg, moteurs puissants et pneus larges stabilisateurs.',
    terrain:     'Tous terrains, usage quotidien et loisir',
    icon:        '💪',
    coverImage:  'https://m.media-amazon.com/images/I/71oH2LjMv4L._AC_SL1500_.jpg',
    budgetMin:   999,
    budgetMax:   4500,
    sortOrder:   11,
    intro:       "Le fatbike électrique pour gros gabarit est conçu pour supporter des charges importantes tout en offrant confort et performance. Des cadres renforcés qui supportent jusqu'à 200 kg.\n\nUn fatbike standard supporte en général 120–150 kg. Pour les gabarits plus lourds, il existe des modèles spécialement renforcés avec un cadre aluminium épaissi, des roues à rayons renforcés et un moteur à couple élevé pour compenser le poids supplémentaire. Les pneus larges 4–5 pouces offrent par ailleurs une stabilité et une répartition du poids particulièrement adaptées aux gabarits importants.\n\nNotre sélection 2026 des meilleurs fatbikes électriques pour gros gabarit priorise la charge maximale homologuée, la solidité du cadre et des roues, la puissance du moteur et la stabilité générale du vélo en charge.",
    benefits: [
      'Charge maximale 150 à 200 kg',
      'Cadre renforcé aluminium ou acier',
      'Moteur puissant pour compenser le poids',
      'Pneus larges pour meilleure stabilité',
    ],
    buyingCriteria: [
      { title: 'Charge maximale',    value: 'Vérifie toujours la charge maximale totale (rider + équipement + accessoires). La plupart des fatbikes standard supportent 120–150 kg. Des modèles spécialisés montent à 180–200 kg — vérifie que c\'est homologué, pas juste annoncé.' },
      { title: 'Solidité cadre',     value: 'Préfère un cadre aluminium 6061 à parois épaisses. Méfie-toi des cadres acier qui rouillent et des soudures proéminentes signalant une finition bas de gamme. Vérifie aussi les rayons des roues : ils doivent être doublés ou renforcés.' },
      { title: 'Puissance moteur',   value: 'Pour un gabarit > 120 kg, un moteur à couple élevé (150 Nm+) est indispensable pour maintenir une allure correcte dans les côtes. La puissance brute (watts) est secondaire par rapport au couple disponible.' },
      { title: 'Stabilité',          value: 'Les pneus 4–5 pouces répartissent mieux le poids et offrent une surface de contact plus large. Vise des pneus 4.8" minimum et un empattement long pour améliorer la stabilité en charge lourde.' },
    ],
    topPicks: ['B0H1BRC2QN', 'B0DD6MVPZD', 'B0GFCX4SXQ'],
    faq: [
      {
        question: 'Quel fatbike électrique pour une personne de 130 kg ou plus ?',
        answer:   'Il faut vérifier la charge maximale homologuée du modèle — pas juste annoncée en marketing. Des modèles certifiés pour 150–180 kg existent dans notre sélection. Vérifie aussi les roues (rayons renforcés) et les freins (hydrauliques obligatoires pour ce gabarit).',
      },
      {
        question: 'Les pneus larges résistent-ils mieux au poids important ?',
        answer:   'Oui. Les pneus 4–5 pouces répartissent le poids sur une plus grande surface, réduisant la pression par cm² et le risque de perforation ou de déformation. Gonfle-les à la pression recommandée pour ton poids : en général 1.5–2.5 bar pour les gabarits lourds.',
      },
      {
        question: 'Le moteur suffit-il pour une personne lourde en côte ?',
        answer:   'Oui si tu choisis un moteur avec un couple suffisant (150 Nm minimum). Le couple est la vraie mesure de la force disponible en côte. Un moteur 500W à 180 Nm de couple grimpe des pentes à 15–20% avec un rider de 130 kg, là où un moteur 750W hub à faible couple peut peiner.',
      },
    ],
    relatedSlugs: ['fatbike-puissant', 'fatbike-autonomie', 'fatbike-debutant'],
    seoKeywords:  ['fatbike gros gabarit', 'fatbike personne lourde', 'fatbike 150kg', 'fatbike grande taille', 'meilleur fatbike gros gabarit 2026'],
  },

  // ─── 12. Cani-fatbike ───────────────────────────────────────────────────────
  {
    slug:        'cani-fatbike',
    title:       'Cani-Fatbike',
    titleSEO:    'Meilleur Équipement Cani-Fatbike 2026 — Courir avec son Chien',
    description: 'Guide complet du cani-fatbike 2026. Harnais, fixations, fatbikes recommandés pour courir avec votre chien en sécurité sur tous terrains.',
    terrain:     'Forêt, chemins, nature, cross-country',
    icon:        '🐕',
    coverImage:  'https://m.media-amazon.com/images/I/61Euz4E5iML._AC_SL1001_.jpg',
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
