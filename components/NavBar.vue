<template>
  <VAppBar color="primary" dark>
    <CompanyLogo src="/ex-initial-logo.svg" alt="My App Logo" width="100" height="auto" />
    <VToolbarTitle>Starter Template with State Management</VToolbarTitle>
    <VSpacer />
    <!-- Light/Dark Mode Toggle Button -->
    <VBtn icon class="theme-toggle" @click="toggleTheme">
      <VIcon>{{ isDarkMode ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</VIcon>
    </VBtn>
    <VBtn variant="text" to="/"> Home </VBtn>
    <VBtn variant="text" to="/users">Users</VBtn>
  </VAppBar>
</template>
<script setup lang="ts">
  import { useTheme } from 'vuetify';
  import CompanyLogo from '~/components/CompanyLogo.vue';

  // Access the Vuetify theme system
  const theme = useTheme();

  // Reactive state for checking if dark mode is enabled
  const isDarkMode = ref(theme.global.name.value === 'dark');

  // Toggle between light and dark modes
  const toggleTheme = () => {
    theme.global.name.value = isDarkMode.value ? 'light' : 'dark';
    isDarkMode.value = !isDarkMode.value;
  };
</script>
