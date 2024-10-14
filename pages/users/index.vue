<template>
  <div>
    <VContainer>
      <VRow>
        <VCol cols="12">
          <VProgressLinear
            v-if="loading"
            indeterminate
            color="primary"
            size="64"
            class="d-flex justify-center"
          />
          <template v-else>
            <CompanyDataTable
              :items="filteredUsers"
              :headers="headers"
              :search="search"
              :sort-by="sortBy"
              :sort-desc="sortDesc"
              :loading="loading"
              search-placeholder="Search By Name"
              :delete-dialog-title="'Confirm User Deletion'"
              :delete-dialog-text="`Are you sure you want to delete ${userToDelete?.name}?`"
              title="Users List"
              :use-search="true"
              @update:sort-by="(val: any) => (sortBy = val)"
              @update:sort-desc="(val: any) => (sortDesc = val)"
              @update:search="(val: any) => (search = val)"
              @edit="editUser"
              @delete="deleteUser"
            >
              <template #item.name="{ item }">
                <v-chip color="primary" dark>{{ item.name }}</v-chip>
              </template>
            </CompanyDataTable>
          </template>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, computed, ref, inject } from 'vue'; // Import inject from vue
  import type { User } from '~/types/User';
  import { useUserStore } from '~/stores/userStore';
  import CompanyDataTable from '~/components/CompanyDataTable.vue';
  import { VProgressLinear } from 'vuetify/components';

  const userStore = useUserStore();
  const router = useRouter();

  // Inject the global showSnackbar function
  const showSnackbar = inject('showSnackbar') as (
    message: string,
    color?: string,
    timeout?: number
  ) => void;

  const search = ref(''); // Reactive search term
  const loading = ref(false); // Loading state
  const userToDelete = ref(null); // For tracking user to be deleted
  const sortBy = ref(['name']); // Default sorting by name
  const sortDesc = ref([false]); // Default ascending sort

  // Table headers definition, passed individually by each page/ per table
  const headers = [
    { title: 'ID', value: 'id' },
    { title: 'Name', value: 'name' },
    { title: 'Username', value: 'username' },
    { title: 'Email', value: 'email' },
  ];

  // Fetch users on component mount
  onMounted(() => {
    fetchUsers();
  });

  // Reactive users list
  const users = computed(() => userStore.users);

  // Function to fetch users
  const fetchUsers = async () => {
    loading.value = true;
    try {
      await new Promise(resolve => setTimeout(resolve, 3000)); // just to show loading
      await userStore.fetchUsers();
    } finally {
      loading.value = false;
    }
  };

  // Computed property to filter users based on search term
  const filteredUsers = computed(() => {
    if (!search.value) return users.value;
    return users.value.filter(user => user.name.toLowerCase().includes(search.value.toLowerCase()));
  });

  // Navigate to user detail page for editing
  const editUser = (user: User) => {
    console.log('Navigating to edit user:', user);
    router.push(`/users/${user.id}`); // Navigate to /users/[id].vue for editing
  };

  // Handle delete action from CompanyDataTable
  const deleteUser = async (user: User) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the user.');
      }
      // Remove the user from the store for now as we cant do it with API
      userStore.removeUser(user.id);

      // Use the global showSnackbar function to display success message
      if (showSnackbar) {
        showSnackbar('User deleted successfully.', 'success');
      }
    } catch (err) {
      console.error('Error deleting user:', err);

      // Use the global showSnackbar function to display error message
      if (showSnackbar) {
        showSnackbar('Error deleting user.', 'error');
      }
    }
  };
</script>
