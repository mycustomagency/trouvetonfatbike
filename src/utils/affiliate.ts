// ─── Affiliate System — Multi-partner architecture ───────────────────────────
// Partenaire actif : Amazon (tag customdeal-21)
// Architecture prête pour Décathlon, Cyclable, Alltricks, etc.

export type PartnerKey = 'amazon' | 'decathlon' | 'cyclable' | 'alltricks' | 'ref_sport';

export interface Partner {
  name:        string;
  active:      boolean;
  baseUrl:     string;
  commission:  string;
  tag?:        string;
  buildLink:   (id: string) => string;
  buildSearch: (query: string) => string;
}

export const PARTNERS: Record<PartnerKey, Partner> = {
  amazon: {
    name:       'Amazon',
    active:     true,
    baseUrl:    'https://www.amazon.fr',
    commission: '3–8%',
    tag:        'customdeal-21',
    buildLink:   (asin)  => `https://www.amazon.fr/dp/${asin}?tag=customdeal-21&linkCode=ogi&th=1&psc=1`,
    buildSearch: (query) => `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=customdeal-21`,
  },
  decathlon: {
    name:       'Décathlon',
    active:     false,
    baseUrl:    'https://www.decathlon.fr',
    commission: '5%',
    buildLink:   (id)    => `https://www.decathlon.fr/p/_/${id}`,
    buildSearch: (query) => `https://www.decathlon.fr/search?Ntt=${encodeURIComponent(query)}`,
  },
  cyclable: {
    name:       'Cyclable',
    active:     false,
    baseUrl:    'https://www.cyclable.com',
    commission: '6%',
    buildLink:   (id)    => `https://www.cyclable.com/products/${id}`,
    buildSearch: (query) => `https://www.cyclable.com/search?q=${encodeURIComponent(query)}`,
  },
  alltricks: {
    name:       'Alltricks',
    active:     false,
    baseUrl:    'https://www.alltricks.fr',
    commission: '5%',
    buildLink:   (id)    => `https://www.alltricks.fr/F-${id}`,
    buildSearch: (query) => `https://www.alltricks.fr/Acheter/${encodeURIComponent(query)}`,
  },
  ref_sport: {
    name:       'Ref Sport',
    active:     false,
    baseUrl:    'https://www.ref.sport',
    commission: '4%',
    buildLink:   (id)    => `https://www.ref.sport/product/${id}`,
    buildSearch: (query) => `https://www.ref.sport/search?q=${encodeURIComponent(query)}`,
  },
};

/** Lien produit Amazon par ASIN */
export function amazonLink(asin: string): string {
  return PARTNERS.amazon.buildLink(asin);
}

/** Recherche Amazon affiliée */
export function amazonSearch(query: string): string {
  return PARTNERS.amazon.buildSearch(query);
}

/** Lien affilié générique avec fallback Amazon */
export function affiliateLink(asin: string, partner: PartnerKey = 'amazon'): string {
  const p = PARTNERS[partner];
  if (!p.active) return PARTNERS.amazon.buildLink(asin);
  return p.buildLink(asin);
}

/** Recherche affiliée générique avec fallback Amazon */
export function affiliateSearch(query: string, partner: PartnerKey = 'amazon'): string {
  const p = PARTNERS[partner];
  if (!p.active) return PARTNERS.amazon.buildSearch(query);
  return p.buildSearch(query);
}

/** Tracking analytics */
export function trackAffiliateClick(product: string, source: string, partner: PartnerKey = 'amazon'): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      product_name:      product,
      click_source:      source,
      affiliate_partner: partner,
    });
  }
}

export const AFFILIATE_DISCLAIMER =
  "Ce site utilise des liens d'affiliation. En tant que Partenaire Amazon, " +
  "nous percevons une commission sur les achats éligibles, sans coût supplémentaire pour vous.";

export const ACTIVE_PARTNERS = Object.entries(PARTNERS)
  .filter(([, p]) => p.active)
  .map(([key, p]) => ({ key: key as PartnerKey, ...p }));
