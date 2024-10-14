<template>
  <VFooter class="pa-3" :height="height" :color="color">
    <VContainer>
      <VRow>
        <VCol cols="12" md="6" class="text-center text-md-left">
          <p>{{ footerText }}</p>
        </VCol>
        <VCol cols="12" md="6" class="text-center text-md-right">
          <!-- Social Media Links or Custom Content -->
          <VBtn v-for="link in socialLinks" :key="link.name" icon :href="link.url" target="_blank">
            <VIcon>{{ link.icon }}</VIcon>
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VFooter>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { VContainer, VRow } from 'vuetify/components';

  const props = defineProps({
    footerText: {
      type: String,
      default: '© 2024 Example Inc. All rights reserved.',
    },
    color: {
      type: String,
      default: 'primary',
    },
    height: {
      type: String,
      default: 'auto',
    },
    socialLinks: {
      type: Array,
      default: () => [{ name: 'GitHub', url: 'https://github.com', icon: 'mdi-github' }],
    },
  });
</script>

<style scoped>
  /* Basic styles for the footer */
  .text-center {
    text-align: center;
  }

  .text-md-left {
    text-align: left;
  }

  .text-md-right {
    text-align: right;
  }
</style>
