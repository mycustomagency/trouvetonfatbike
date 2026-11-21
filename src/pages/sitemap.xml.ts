import type { APIRoute } from 'astro';

const SITE = 'https://trouvetonfatbike.com';
const PAGES: [string, string][] = [
  ['/', '2026-11-22'],
  ['/guide/meilleur-fatbike-electrique-2026/', '2026-11-22'],
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
  ['/a-propos/', '2026-11-22'],
  ['/contact/', '2026-11-22'],
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(([p, d]) => `  <url><loc>${SITE}${p}</loc><lastmod>${d}</lastmod></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
