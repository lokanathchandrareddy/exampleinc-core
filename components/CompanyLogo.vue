<!-- Logo Component for using logo's with similar style at all places and/or use it differently at different places -->
<template>
  <div :class="props.logoClass" class="logo-wrapper">
    <img
      :src="props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      class="logo-image"
      :style="props.logoStyle"
    />
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  // Define props to customize the logo
  const props = defineProps({
    src: {
      type: String,
      default: '/ex-initial-logo.svg', // Default logo file
    },
    alt: {
      type: String,
      default: 'Logo',
    },
    width: {
      type: String,
      default: '120', // Default width in pixels
    },
    height: {
      type: String,
      default: 'auto', // Default height as auto
    },
    logoClass: {
      type: String,
      default: '', // Optional custom class for styling
    },
    logoStyle: {
      type: Object,
      default: () => ({}), // Optional style object
    },
  });
</script>

<style scoped>
  /* Add any scoped styles for the logo */
  .logo-wrapper {
    display: inline-flex;
    align-items: center;
  }

  .logo-image {
    max-width: 100%;
    height: auto;
  }
</style>
