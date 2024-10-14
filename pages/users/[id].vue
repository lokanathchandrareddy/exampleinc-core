<template>
  <VContainer>
    <VProgressCircular
      v-if="loading"
      indeterminate
      color="primary"
      size="64"
      class="d-flex justify-center"
    />
    <template v-else>
      <!-- Example for BreadCrumbs -->
      <VBreadcrumbs :items="breadCrumbItems">
        <template #title="{ item }">
          {{ item.title === 'user' ? user.name : item.title }}
        </template>
      </VBreadcrumbs>
      <VCard v-if="user">
        <v-toolbar
          class="d-flex justify-space-between align-center font-weight-medium text-h4"
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Edit User Details</v-toolbar-title>
        </v-toolbar>

        <VCardText>
          <VForm ref="form" v-model="valid" @submit.prevent="submit">
            <VTextField v-model="user.name" label="Name" :rules="[rules.required]" required />
            <VTextField v-model="user.email" label="Email" :rules="[rules.email]" required />
            <!-- Add other fields as needed -->
          </VForm>
        </VCardText>
        <VCardActions class="d-flex justify-end">
          <VBtn type="submit" :disabled="!valid" color="primary">Save</VBtn>
          <VBtn text @click="goBack">Cancel</VBtn>
        </VCardActions>
      </VCard>
    </template>
  </VContainer>
</template>

<script setup lang="ts">
  import { ref, onMounted, inject } from 'vue';
  import { useUserStore } from '~/stores/userStore';
  import type { User } from '~/types/User';

  const route = useRoute(); // Get the user ID from the URL
  const router = useRouter(); // To navigate back to the users list after editing
  const userStore = useUserStore(); // Reference to the user store
  const valid = ref(false);
  const loading = ref(false);
  const form = ref<InstanceType<typeof form> | null>(null);
  const user = ref<User>({
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const breadCrumbItems = [
    {
      title: 'Home',
      disabled: false,
      href: '/',
    },
    {
      title: 'Users',
      disabled: false,
      href: '/users',
    },
    {
      title: 'user',
      disabled: true,
      href: '',
    },
  ];

  // Inject the global showSnackbar function
  const showSnackbar = inject('showSnackbar') as (
    message: string,
    color?: string,
    timeout?: number
  ) => void;

  // Form validation rules
  const rules = {
    required: (value: string) => !!value || 'Required.',
    email: (value: string) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
  };

  // Fetch the user when the component is mounted
  onMounted(async () => {
    loading.value = true;
    const userId = route.params.id as string;
    try {
      await userStore.fetchUser(userId); // Fetch the user from the store or API
      if (userStore.user) {
        user.value = { ...userStore.user }; // Set the user data for the form
      }
    } catch (err) {
      // Show an error snackbar if fetching the user fails
      if (showSnackbar) {
        showSnackbar('Failed to load user data.', 'error');
        console.error('Failed to load user data', err);
      }
    } finally {
      loading.value = false; // Stop loading after fetch is done
    }
  });

  // Function to handle form submission
  const submit = async () => {
    if (form.value?.validate()) {
      try {
        // Update user data via native fetch API
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.value.id}`,
          {
            method: 'PUT',
            body: JSON.stringify(user.value), // Send the updated user data
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to update user.');
        }

        // Optionally update the user in the store
        userStore.updateUser(user.value);
        // Show success snackbar
        if (showSnackbar) {
          showSnackbar('User updated successfully!', 'success');
        }
        // Navigate back to the users list
        router.push('/users');
      } catch (error) {
        console.error('Error updating user:', error);
        // Show error snackbar
        if (showSnackbar) {
          showSnackbar('Failed to update user.', 'error');
        }
      }
    }
  };

  // Function to navigate back to the users list without saving
  const goBack = () => {
    router.push('/users');
  };
</script>

<style scoped>
  /* Add any component-specific styles here */
</style>
