import { defineCollection, z } from 'astro:content';

// ─── Collection: Guides SEO ─────────────────────────────────────────────────
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    description:  z.string().max(160, 'Description too long for SEO (max 160 chars)'),
    pubDate:      z.date(),
    updatedDate:  z.date().optional(),
    category:     z.string(),
    tags:         z.array(z.string()).default([]),
    featured:     z.boolean().default(false),
    ogImage:      z.string().optional(),
    ogImageAlt:   z.string().optional(),
    readingTime:  z.number().optional(),
    affiliate:    z.boolean().default(true),
    // SEO extras
    canonicalUrl: z.string().url().optional(),
    noIndex:      z.boolean().default(false),
    // Rich content
    excerpt:      z.string().optional(),
    author:       z.string().default('Équipe TrouveTonFatBike'),
    difficulty:   z.enum(['débutant', 'intermédiaire', 'expert']).optional(),
    // CTA
    ctaText:      z.string().optional(),
    ctaUrl:       z.string().optional(),
  }),
});

// ─── Collection: Catégories ─────────────────────────────────────────────────
const categories = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().max(160),
    slug:        z.string(),
    // Usage
    terrain:     z.string(),
    icon:        z.string(),          // emoji ou nom d'icône SVG
    coverImage:  z.string(),
    // Budget
    budgetMin:   z.number(),
    budgetMax:   z.number(),
    // SEO
    seoKeywords: z.array(z.string()).default([]),
    featured:    z.boolean().default(false),
    sortOrder:   z.number().default(99),
    // Content
    intro:       z.string().optional(),
    benefits:    z.array(z.string()).default([]),
    buyingGuide: z.string().optional(),
  }),
});

// ─── Collection: Accessoires ────────────────────────────────────────────────
const accessoires = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().max(160),
    category:    z.enum(['casques', 'gants', 'eclairage', 'antivols', 'supports', 'batteries', 'remorques', 'outdoor', 'vetements']),
    coverImage:  z.string().optional(),
    featured:    z.boolean().default(false),
    tags:        z.array(z.string()).default([]),
    pubDate:     z.date(),
    affiliate:   z.boolean().default(true),
  }),
});

// ─── Collection: Cani-fatbike ───────────────────────────────────────────────
const caniFatbike = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().max(160),
    coverImage:  z.string().optional(),
    dogSize:     z.enum(['petit', 'moyen', 'grand', 'géant']).optional(),
    tags:        z.array(z.string()).default([]),
    pubDate:     z.date(),
    featured:    z.boolean().default(false),
    affiliate:   z.boolean().default(true),
  }),
});

export const collections = {
  guides,
  categories,
  accessoires,
  'cani-fatbike': caniFatbike,
};
