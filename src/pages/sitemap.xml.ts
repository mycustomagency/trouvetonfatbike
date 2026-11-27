import type { APIRoute } from 'astro';

const SITE = 'https://trouvetonfatbike.com';
const PAGES: [string, string][] = [
  ['/', '2026-11-27'],
  ['/guide/meilleur-fatbike-electrique-2026/', '2026-11-27'],
  ['/guide/fatbike-style-moto/', '2026-11-27'],
  ['/guide/fatbike-1000w-terrain-prive/', '2026-11-27'],
  ['/simulateur-fatbike-legal/', '2026-11-22'],
  ['/guide/reglementation-vae-france/', '2026-11-22'],
  ['/guide/fatbike-electrique-pas-cher/', '2026-11-22'],
  ['/guide/guide-achat-fatbike/', '2026-11-22'],
  ['/guide/avis-colorway-bk29/', '2026-11-22'],
  ['/cani-fatbike/', '2026-11-22'],
  ['/cani-fatbike/remorque-chien-velo-electrique/', '2026-11-22'],
  ['/accessoires/', '2026-11-22'],
  ['/quiz/', '2026-11-22'],
  ['/guide/', '2026-11-22'],
  ['/a-propos/', '2026-11-27'],
  ['/contact/', '2026-11-22'],
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(([p, d]) => `  <url><loc>${SITE}${p}</loc><lastmod>${d}</lastmod></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
