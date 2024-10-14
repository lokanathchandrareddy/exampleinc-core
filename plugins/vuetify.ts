import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Use mdi-svg for SVG icons
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles' // Vuetify styles
import '@mdi/font/css/materialdesignicons.css' // Ensure you import the CSS

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // Default icon set
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light', // Set default theme
      themes: {
        light: {
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
        dark: {
          colors: {
            primary: '#90CAF9',
            secondary: '#424242',
            accent: '#FF4081',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
