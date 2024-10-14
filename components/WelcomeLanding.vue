<template>
    <VContainer class="mt-5">
      <VRow>
        <VCol cols="12">
          <h1>Welcome to My App – Built on a Solid Foundation</h1>
          <p>Explore our modern tech stack and robust architecture that powers our application.</p>
        </VCol>
  
        <!-- Core Technologies Section -->
        <VCol cols="12">
          <h3>Core Technologies</h3>
          <VRow>
            <VCol cols="4">
              <VCard>
                <VCardTitle>Vue 3 + Nuxt 3</VCardTitle>
                <VCardText
                  >Modern frontend framework with powerful server-side rendering and Composition API
                  for building scalable apps.</VCardText
                >
              </VCard>
            </VCol>
            <VCol cols="4">
              <VCard>
                <VCardTitle>Pinia State Management</VCardTitle>
                <VCardText
                  >Pinia provides a robust, modular state management system that handles complex data
                  efficiently.</VCardText
                >
              </VCard>
            </VCol>
            <VCol cols="4">
              <VCard>
                <VCardTitle>Vuetify UI Framework</VCardTitle>
                <VCardText
                  >Vuetify powers the responsive, material design-compliant UI, ensuring a great user
                  experience.</VCardText
                >
              </VCard>
            </VCol>
          </VRow>
        </VCol>
  
        <!-- Application Architecture Section -->
        <VCol cols="12" class="mt-4">
          <h3>Application Architecture</h3>
          <p>
            Our application is built with modular components, making it easy to extend and maintain.
            Here's an overview of the architecture:
          </p>
          <!-- Architecture Diagram or Image -->
          <!-- <img src="/architecture-diagram.png" alt="Application Architecture" class="img-fluid"/> -->
        </VCol>
  
        <!-- Modularity and Scalability Section -->
        <VCol cols="12" class="mt-4">
          <h3>Modular and Scalable Design</h3>
          <p>
            Our components and state management system are designed with scalability in mind. Whether
            handling a few users or thousands, our app grows with your needs.
          </p>
        </VCol>
  
        <!-- Data Handling Section -->
        <VCol cols="12" class="mt-4">
          <h3>Data Handling and APIs</h3>
          <p>
            We utilize efficient data fetching, caching, and error handling strategies to ensure fast
            and reliable performance. All data is securely managed via APIs.
          </p>
        </VCol>
  
        <!-- Testing and Development Practices Section -->
        <VCol cols="12" class="mt-4">
          <h3>Robust Development Practices</h3>
          <p>
            We ensure that our application is stable and maintainable by following best development
            practices, including automated testing with Vitest.
          </p>
        </VCol>
      </VRow>
    </VContainer>
  </template>
  
  <script setup>
  </script>
  