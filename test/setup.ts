// Mock Vuetify or other global dependencies if needed
import { config } from '@vue/test-utils';

// Mock global components like <v-app>
config.global.mocks = {
  $vuetify: { theme: {} },
};
