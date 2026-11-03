// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Your final URL. With a custom domain, use that (e.g. 'https://yourname.com').
  // Without one, use 'https://<github-username>.github.io'.
  site: 'https://example.com',

  // Only needed if the repo is NOT named <username>.github.io and you have no
  // custom domain, e.g. base: '/my-site'. Leave unset otherwise.
  // base: '/my-site',

  integrations: [sitemap()],
});
