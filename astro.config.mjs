import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://trouvetonfatbike.com',
  base: '/',
  adapter: cloudflare({ mode: 'advanced' }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  output: 'hybrid',
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
