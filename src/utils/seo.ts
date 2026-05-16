// ─── SEO Utilities ──────────────────────────────────────────────────────────

export const SITE = {
  name:        'TrouveTonFatBike',
  tagline:     'Explore sans limites.',
  url:         'https://trouveton-fatbike.com',
  description: 'Comparateur et guide d\'achat fatbike électrique. Trouve le fatbike parfait pour ton terrain, ton budget et ton aventure.',
  locale:      'fr_FR',
  lang:        'fr',
  twitterHandle: '@TrouveTonFatbike',
  author:      'Équipe TrouveTonFatBike',
  ogImage:     '/og-default.jpg',
};

export interface SEOProps {
  title?:       string;
  description?: string;
  ogImage?:     string;
  ogImageAlt?:  string;
  canonicalUrl?: string;
  noIndex?:     boolean;
  type?:        'website' | 'article';
  pubDate?:     Date;
  updatedDate?: Date;
  author?:      string;
  tags?:        string[];
}

/**
 * Build the full page title with site name
 */
export function buildTitle(title?: string): string {
  if (!title) return `${SITE.name} — ${SITE.tagline}`;
  return `${title} | ${SITE.name}`;
}

/**
 * Build canonical URL
 */
export function buildCanonical(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${clean}`;
}

/**
 * Build absolute image URL for OG
 */
export function buildOGImage(image?: string): string {
  if (!image) return `${SITE.url}${SITE.ogImage}`;
  if (image.startsWith('http')) return image;
  return `${SITE.url}${image}`;
}

/**
 * Format date for schema markup
 */
export function formatISODate(date: Date): string {
  return date.toISOString();
}

/**
 * Build JSON-LD schema for website
 */
export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/recherche?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Build JSON-LD schema for an article
 */
export function buildArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  image?: string;
  pubDate: Date;
  updatedDate?: Date;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    url: props.url,
    image: buildOGImage(props.image),
    datePublished: formatISODate(props.pubDate),
    dateModified: formatISODate(props.updatedDate ?? props.pubDate),
    author: {
      '@type': 'Organization',
      name: props.author ?? SITE.author,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.svg`,
      },
    },
    inLanguage: 'fr-FR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
  };
}

/**
 * Build JSON-LD schema for a product
 */
export function buildProductSchema(props: {
  name: string;
  description: string;
  image?: string;
  url: string;
  priceMin?: number;
  priceMax?: number;
  brand?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    image: props.image ? buildOGImage(props.image) : undefined,
    url: props.url,
    brand: {
      '@type': 'Brand',
      name: props.brand ?? 'Fatbike',
    },
    offers: props.priceMin ? {
      '@type': 'AggregateOffer',
      lowPrice: props.priceMin,
      highPrice: props.priceMax ?? props.priceMin,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    } : undefined,
    aggregateRating: props.rating ? {
      '@type': 'AggregateRating',
      ratingValue: props.rating,
      reviewCount: props.reviewCount ?? 1,
      bestRating: 5,
    } : undefined,
  };
}

/**
 * Build JSON-LD schema for breadcrumb
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.url),
    })),
  };
}

/**
 * Calculate reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 220;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Format price range for display
 */
export function formatPriceRange(min: number, max: number): string {
  const fmt = (n: number) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  if (min === max) return fmt(min);
  return `${fmt(min)} – ${fmt(max)}`;
}

/**
 * Slugify a string for URLs
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
