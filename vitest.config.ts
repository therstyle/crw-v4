import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    // 1. Ensure Svelte packages are processed correctly
    server: {
      deps: {
        inline: [/svelte/],
      },
    },
  },
  resolve: {
    // 2. Crucial: Svelte 5 requires the 'browser' condition for JSDOM
    conditions: ['browser', 'development'],
    // 3. Remove any manual aliases to 'svelte/internal/client' you might have added
    // as it can interfere with how the library handles its own imports.
  },
})
