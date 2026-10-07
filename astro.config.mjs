// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { BASE } from './src/lib/sitio.ts';

export default defineConfig({
	site: 'https://crsolver.github.io',
	base: BASE,
	integrations: [sitemap()],
});
