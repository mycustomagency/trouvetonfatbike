// ─── Liens partenaires ──────────────────────────────────────────────────────
// Un seul endroit à modifier quand un nouveau programme d'affiliation est accepté.
// Amazon : actif (identifiant de suivi trouvetonfatbike-21).
// ENGWE (Awin, jusqu'à 6 %), Alltricks, Upway : à activer dès validation,
// en remplissant les champs ci-dessous. Les liens du site basculent automatiquement.

export const AMAZON_TAG = 'trouvetonfatbike-21'; // identifiant de suivi dédié au site (compte principal : customdeal00-21)

export const PARTNER_URLS: Record<string, string | null> = {
  // Exemple une fois accepté : 'engwe': 'https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=YYYY&ued='
  engwe: null,
  alltricks: null,
  upway: null,
};

export const amazonSearch = (query: string) =>
  `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

export const amazonProduct = (asin: string) =>
  `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}`;

/** Lien partenaire si le programme est actif, sinon lien Amazon de secours. */
export function buyLink(opts: { partner?: string; partnerTarget?: string; amazon: string }) {
  const base = opts.partner ? PARTNER_URLS[opts.partner] : null;
  if (base && opts.partnerTarget) return base + encodeURIComponent(opts.partnerTarget);
  return amazonSearch(opts.amazon);
}

/** Attributs à mettre sur tous les liens affiliés (obligatoire pour Google). */
export const AFF_REL = 'sponsored nofollow noopener';
