import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://trouvetonfatbike.com',
  base: '/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    
    mdx(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
  image: {
    // Optimisation images WebP auto
    domains: ['images.unsplash.com', 'cdn.trouvetonfatbike.com'],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
