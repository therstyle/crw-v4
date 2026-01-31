// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    resolve: {
      alias: {
        // This maps @styles to your SCSS folder
        '@styles': path.resolve('./src/styles'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Optional: This makes variables available in every component
          //additionalData: `@use "@styles/_variables.scss" as *;`
        },
      },
    },
  },
});
