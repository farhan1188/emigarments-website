import { defineConfig } from 'astro/config';

// EMIGARMENTS — static brand/credibility site.
// Output is fully static (default) so it deploys to Vercel as a CDN-served site.
export default defineConfig({
  site: 'https://emigarments.com',
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  devToolbar: { enabled: false },
});
