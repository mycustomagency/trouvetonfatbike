const SITE_URL = 'https://trouvetonfatbike.com';
const now = new Date().toISOString().split('T')[0];

const PAGES = [
  { url: '/',                                        priority: '1.0', changefreq: 'weekly'  },
  { url: '/categorie/',                              priority: '0.9', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-montagne/',             priority: '0.9', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-plage/',                priority: '0.9', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-neige/',                priority: '0.8', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-urbain/',               priority: '0.8', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-pliant/',               priority: '0.8', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-debutant/',             priority: '0.8', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-petit-budget/',         priority: '0.8', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-femme/',                priority: '0.7', changefreq: 'monthly' },
  { url: '/categorie/fatbike-puissant/',             priority: '0.8', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-autonomie/',            priority: '0.8', changefreq: 'weekly'  },
  { url: '/categorie/fatbike-gros-gabarit/',         priority: '0.7', changefreq: 'monthly' },
  { url: '/categorie/cani-fatbike/',                 priority: '0.7', changefreq: 'monthly' },
  { url: '/guide/',                                  priority: '0.9', changefreq: 'weekly'  },
  { url: '/guide/meilleur-fatbike-electrique-2026/', priority: '0.8', changefreq: 'monthly' },
  { url: '/guide/top-10-fatbikes-2026/',            priority: '0.9', changefreq: 'weekly'  },
  { url: '/accessoires/',                            priority: '0.8', changefreq: 'weekly'  },
  { url: '/cani-fatbike/',                           priority: '0.8', changefreq: 'weekly'  },
  { url: '/quiz/',                                   priority: '0.8', changefreq: 'monthly' },
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
