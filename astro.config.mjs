import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

const cat = (slug, to) => [`/categorie/${slug}/`, to];
const C = '/guide/meilleur-fatbike-electrique-2026/';

export default defineConfig({
  site: 'https://trouvetonfatbike.com',
  trailingSlash: 'always',
  adapter: cloudflare({ mode: 'advanced' }),
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'hybrid',
  build: { assets: '_assets' },
  // Anciennes pages fusionnées : redirections permanentes (301) pour garder le référencement
  redirects: Object.fromEntries([
    ['/categorie/', '/guide/'],
    cat('fatbike-montagne', C + '#chemins'),
    cat('fatbike-plage', C + '#chemins'),
    cat('fatbike-neige', C + '#chemins'),
    cat('fatbike-urbain', C),
    cat('fatbike-pliant', C + '#pliant'),
    cat('fatbike-debutant', '/guide/guide-achat-fatbike/'),
    cat('fatbike-petit-budget', '/guide/fatbike-electrique-pas-cher/'),
    cat('fatbike-femme', C),
    cat('fatbike-puissant', '/guide/reglementation-vae-france/'),
    cat('fatbike-autonomie', '/guide/guide-achat-fatbike/#batterie'),
    cat('fatbike-gros-gabarit', '/guide/guide-achat-fatbike/'),
    cat('cani-fatbike', '/cani-fatbike/'),
    ['/guide/top-10-fatbikes-2026/', C],
    ['/guide/autonomie-batterie-fatbike/', '/guide/guide-achat-fatbike/#batterie'],
    ['/guide/entretien-fatbike/', '/guide/guide-achat-fatbike/'],
  ].map(([from, to]) => [from, { status: 301, destination: to }])),
});
