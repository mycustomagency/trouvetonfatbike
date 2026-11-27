// ─── Liens partenaires ──────────────────────────────────────────────────────
// Un seul endroit à modifier quand un nouveau programme d'affiliation est accepté.
// Amazon : actif (identifiant de suivi trouvetonfatbike-21).
// ENGWE : programme direct actif (lien ?ref=, 5 %), voir PARTNER_REF.
// Alltricks, Upway : à activer dès validation, en remplissant PARTNER_URLS.
// Les liens du site basculent automatiquement.

export const AMAZON_TAG = 'trouvetonfatbike-21'; // identifiant de suivi dédié au site (compte principal : customdeal00-21)

export const PARTNER_URLS: Record<string, string | null> = {
  // Exemple une fois accepté : 'engwe': 'https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=YYYY&ued='
  alltricks: null,
  upway: null,
};

// Programmes qui fonctionnent avec un paramètre ajouté à l'adresse de la fiche produit
// (ex. https://engwe.com/fr/products/engwe-m1?ref=VANESSA). Si le code change, modifier ici.
export const PARTNER_REF: Record<string, { param: string; code: string }> = {
  engwe: { param: 'ref', code: 'VANESSA' },
};

export const amazonSearch = (query: string) =>
  `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

export const amazonProduct = (asin: string) =>
  `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}`;

/** Lien partenaire si le programme est actif, sinon lien Amazon de secours. */
export function buyLink(opts: { partner?: string; partnerTarget?: string; amazon: string }) {
  const ref = opts.partner ? PARTNER_REF[opts.partner] : undefined;
  if (ref && opts.partnerTarget) {
    const sep = opts.partnerTarget.includes('?') ? '&' : '?';
    return `${opts.partnerTarget}${sep}${ref.param}=${ref.code}`;
  }
  const base = opts.partner ? PARTNER_URLS[opts.partner] : null;
  if (base && opts.partnerTarget) return base + encodeURIComponent(opts.partnerTarget);
  return amazonSearch(opts.amazon);
}

/** Attributs à mettre sur tous les liens affiliés (obligatoire pour Google). */
export const AFF_REL = 'sponsored nofollow noopener';
