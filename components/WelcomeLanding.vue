<template>
    <VContainer class="mt-5">
        <VRow align="center" justify="center">
            <VCol cols="12" md="8" class="text-center">
                <h1>Welcome to ExampleInc application starter – Built on a Solid Foundation</h1>
                <p class="mb-5">
                    Explore our modern tech stack and robust architecture that powers our application.
                </p>
            </VCol>
        </VRow>

        <!-- Core Technologies Section -->
        <VRow class="mt-8">
            <VCol cols="12">
                <h3 class="text-center">Core Technologies</h3>
                <VRow>
                    <VCol cols="12" md="4" class="d-flex">
                        <VCard rounded variant= "outlined" class="flex-fill">
                            <VCardTitle class="text-center">Vue 3 + Nuxt 3</VCardTitle>
                            <VCardText class="text-center">
                                Modern frontend framework with powerful server-side rendering and Composition API for
                                building scalable apps.
                            </VCardText>
                        </VCard>
                    </VCol>
                    <VCol cols="12" md="4" class="d-flex">
                        <VCard rounded variant= "outlined" class="flex-fill">
                            <VCardTitle class="text-center">Pinia State Management</VCardTitle>
                            <VCardText class="text-center">
                                Pinia provides a robust, modular state management system that handles complex data
                                efficiently.
                            </VCardText>
                        </VCard>
                    </VCol>
                    <VCol cols="12" md="4" class="d-flex">
                        <VCard rounded variant= "outlined" class="flex-fill">
                            <VCardTitle class="text-center">Vuetify UI Framework</VCardTitle>
                            <VCardText class="text-center">
                                Vuetify powers the responsive, material design-compliant UI, ensuring a great user
                                experience.
                            </VCardText>
                        </VCard>
                    </VCol>
                </VRow>
            </VCol>
        </VRow>

        <!-- Application Architecture Section -->
        <VRow class="mt-8">
            <VCol cols="12">
                <h3 class="text-center">Application Architecture</h3>
                <p class="text-center">
                    Our application is built with modular components, making it easy to extend and maintain.
                    Here's an overview of the architecture:
                </p>
                <!-- Architecture Diagram or Image -->
                <!-- Uncomment and provide a valid image path when available -->
                <!-- <img src="/architecture-diagram.png" alt="Application Architecture" class="img-fluid mx-auto d-block mt-4" style="max-width: 600px;" /> -->
            </VCol>
        </VRow>

        <!-- Modularity and Scalability Section -->
        <VRow class="mt-8">
            <VCol cols="12">
                <h3 class="text-center">Modular and Scalable Design</h3>
                <p class="text-center">
                    Our components and state management system are designed with scalability in mind. Whether handling a
                    few users or thousands, our app grows with your needs.
                </p>
            </VCol>
        </VRow>

        <!-- Data Handling Section -->
        <VRow class="mt-8">
            <VCol cols="12">
                <h3 class="text-center">Data Handling and APIs</h3>
                <p class="text-center">
                    We utilize efficient data fetching, caching, and error handling strategies to ensure fast and
                    reliable performance. All data is securely managed via APIs.
                </p>
            </VCol>
        </VRow>

        <!-- Testing and Development Practices Section -->
        <VRow class="mt-8 mb-8">
            <VCol cols="12">
                <h3 class="text-center">Robust Development Practices</h3>
                <p class="text-center">
                    We ensure that our application is stable and maintainable by following best development practices,
                    including automated testing with Vitest.
                </p>
            </VCol>
        </VRow>
        <VRow align="center" justify="center">
            <VCol cols="12" md="8" class="text-center">
                <h3 class="text-center">Interested to explore with the base example</h3>
                <VBtn class="mt-5" size="large" color="primary" large @click="navigateToUsers">
                    Dive into Users
                    <VIcon right>mdi-arrow-right</VIcon>
                </VBtn>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { VRow } from 'vuetify/components';

const router = useRouter()

const navigateToUsers = () => {
    router.push('/users')
}
</script>

<style scoped></style>