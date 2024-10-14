import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [vue(), vuetify()],
  test: {
    globals: true,
    environment: 'jsdom', // Required for DOM manipulation
    setupFiles: './test/setup.ts', // Optional: For global setup like mocking
  },
});
