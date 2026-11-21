import { AUTHOR } from '@data/site';

export const SITE = {
  name: 'TrouveTonFatbike',
  tagline: 'Le fatbike électrique légal, testé pour de vrai',
  url: 'https://trouvetonfatbike.com',
  description:
    "Fatbikes électriques 100 % légaux (250 W, 25 km/h) : comparatif 2026, simulateur de conformité, petits budgets et balades avec son chien.",
  locale: 'fr_FR',
  ogImage: '/og-default.jpg',
};

export interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogImageAlt?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  pubDate?: Date;
  updatedDate?: Date;
}

export const buildTitle = (title?: string) => (title ? `${title} | ${SITE.name}` : `${SITE.name} : ${SITE.tagline}`);
export const buildCanonical = (path: string) => `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
export const buildOGImage = (image?: string) =>
  !image ? `${SITE.url}${SITE.ogImage}` : image.startsWith('http') ? image : `${SITE.url}${image}`;

const PERSON = {
  '@type': 'Person',
  name: AUTHOR.name,
  url: `${SITE.url}${AUTHOR.url}`,
  description: AUTHOR.short,
};

export const ORG = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: `${SITE.url}/logo-header.png` },
};

export function buildWebsiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url, inLanguage: 'fr-FR', description: SITE.description, publisher: ORG };
}

export function buildArticleSchema(p: { title: string; description: string; path: string; image?: string; pubDate: Date; updatedDate?: Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.description,
    url: buildCanonical(p.path),
    image: buildOGImage(p.image),
    datePublished: p.pubDate.toISOString(),
    dateModified: (p.updatedDate ?? p.pubDate).toISOString(),
    author: PERSON,
    publisher: ORG,
    inLanguage: 'fr-FR',
    mainEntityOfPage: buildCanonical(p.path),
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a.replace(/<[^>]+>/g, '') } })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: buildCanonical(it.url) })),
  };
}

export function buildItemListSchema(name: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: it.url })),
  };
}
