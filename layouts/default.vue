<template>
  <VApp>
    <NavBar />
    <VMain>
      <NuxtPage />
      <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
        {{ snackbar.message }}
      </v-snackbar>
    </VMain>

    <CompanyFooter
      footer-text="© 2024 Example Inc. All rights reserved."
      color="primary"
      :social-links="[{ name: 'GitHub', url: 'https://github.com', icon: 'mdi-github' }]"
    />
  </VApp>
</template>

<script setup lang="ts">
  import { VApp } from 'vuetify/components';
  import { ref, provide } from 'vue';
  import NavBar from '~/components/NavBar.vue';
  import CompanyFooter from '~/components/CompanyFooter.vue';

  const snackbar = ref({
    show: false,
    message: '',
    color: 'success',
    timeout: 3000,
  });

  // Method to show snackbar
  const showSnackbar = (message: string, color = 'success', timeout = 3000) => {
    snackbar.value = {
      show: true,
      message,
      color,
      timeout,
    };
  };

  // Provide the showSnackbar method globally so any component can use it
  provide('showSnackbar', showSnackbar);
</script>
