<template>
  <VApp>
    <NavBar />
    <VMain>
      <NuxtPage />
    </VMain>
    <VFooter>
      <!--footer content -->
    </VFooter>
  </VApp>
</template>

<script setup lang="ts">
  import { VApp } from 'vuetify/components'
  import NavBar from '~/components/NavBar.vue'
</script>
