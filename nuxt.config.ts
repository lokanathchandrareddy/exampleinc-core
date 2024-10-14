import { defineNuxtConfig } from 'nuxt/config';
import vuetify from 'vite-plugin-vuetify';

const title = "ExampleInc-Core";
const shortTitle = "Core App";
const description = "Foundation for Projects";

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    // Add Vuetify Vite plugin to Nuxt modules
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins?.push(vuetify());
      });
    },
  ],

  build: {
    transpile: ['vuetify'],
  },

  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  app: {
    head: {
      title: "ExampleInc-Core",
      titleTemplate: "%s | Foundation for Projects",
      meta: [
        {
          hid: "",
          name: "",
          content: description,
        },
      ],
    },
  },

  compatibilityDate: '2024-10-12',
});
