import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://otica-pantanal-premium.pages.dev',
  output: 'static',
  trailingSlash: 'never',
});
