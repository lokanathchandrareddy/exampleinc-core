<template>
  <VCard class="pa-6 table-card">
    <VCardTitle class="mb-4 table-title">{{ title }}</VCardTitle>

    <!-- Conditionally Render the Search Field -->
    <template v-if="useSearch">
      <v-text-field
        v-model="internalSearch"
        class="mb-4"
        :label="searchLabel"
        :placeholder="searchPlaceholder"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
        clearable
      ></v-text-field>
    </template>

    <!-- Data Table -->
    <VDataTable
      :items="items"
      :headers="headersWithActions"
      :search="internalSearch"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      class="ex-table elevation-1"
      :item-key="itemKey"
      :loading="loading"
      @update:sort-by="updateSortBy"
      @update:sort-desc="updateSortDesc"
    >
      <!-- we can add slots here to additional customization -->
      <!-- Actions Slot with Tooltips -->
      <template #item.actions="{ item }">
        <v-tooltip location="bottom">
          <template #activator="{ propss }">
            <v-icon
              small
              class="mr-2"
              aria-label="View"
              v-bind="propss"
              @click="showUserDetails(item)"
            >
              mdi-eye
            </v-icon>
          </template>
          <span>View Details</span>
        </v-tooltip>
        <v-tooltip location="bottom">
          <template #activator="{ propss }">
            <v-icon small class="mr-2" aria-label="Edit" v-bind="propss" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Edit</span>
        </v-tooltip>

        <v-tooltip location="bottom">
          <template #activator="{ propss }">
            <v-icon small aria-label="Delete" v-bind="propss" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <span>Delete</span>
        </v-tooltip>
      </template>
    </VDataTable>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="dialogDelete" max-width="500">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>{{ deleteDialogTitle }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>{{
          `Are you sure you want to delete ${itemToDelete?.name || ''}?`
        }}</v-card-text>
        <v-card-actions>
          <v-btn text @click="cancelDelete">Cancel</v-btn>
          <v-btn color="error" @click="confirmDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <UserDetails v-model="dialogUserDetails" :user="selectedUser" />
  </VCard>
</template>
<script setup lang="ts">
  import { ref, computed, defineEmits, defineProps, watch } from 'vue';
  import UserDetails from '~/components/UserDetails.vue';

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    itemKey: {
      type: String,
      default: 'id',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    searchLabel: {
      type: String,
      default: 'Search',
    },
    searchPlaceholder: {
      type: String,
      default: '',
    },
    sortBy: {
      type: Array,
      default: () => [],
    },
    sortDesc: {
      type: Array,
      default: () => [],
    },
    deleteDialogTitle: {
      type: String,
      default: 'Confirm Deletion',
    },
    deleteDialogText: {
      type: String,
      default: 'Are you sure you want to delete this item?',
    },
    title: {
      type: String,
      default: '',
    },
    useSearch: {
      type: Boolean,
      default: true,
    },
    search: {
      type: String,
      default: '', // Accept the search term from the parent
    },
  });

  const emits = defineEmits([
    'update:sortBy',
    'update:sortDesc',
    'update:search',
    'edit',
    'delete',
  ]);

  // Internal Search State
  const internalSearch = ref(props.search);

  // Watch the search prop to keep internalSearch in sync
  watch(
    () => props.search,
    newVal => {
      internalSearch.value = newVal;
    }
  );

  // Emit search event to parent when search input changes
  // const updateSearch = (searchValue: any) => {
  //   emits('update:search', searchValue);
  // };

  // Handle sorting updates
  const updateSortBy = (value: any) => {
    emits('update:sortBy', value);
  };

  const updateSortDesc = (value: any) => {
    emits('update:sortDesc', value);
  };

  // Actions for edit and delete
  const dialogDelete = ref(false);
  const itemToDelete = ref(null);

  const editItem = (item: any) => {
    emits('edit', item);
  };

  const deleteItem = (item: any) => {
    itemToDelete.value = item;
    dialogDelete.value = true;
  };

  const confirmDelete = () => {
    emits('delete', itemToDelete.value);
    dialogDelete.value = false;
    itemToDelete.value = null;
  };

  const cancelDelete = () => {
    dialogDelete.value = false;
    itemToDelete.value = null;
  };

  // Headers with Actions column
  const headersWithActions = computed(() => {
    return [...props.headers, { title: 'Actions', value: 'actions', sortable: false }];
  });

  const dialogUserDetails = ref(false);
  const selectedUser = ref(null);
  const showUserDetails = (user: any) => {
    console.log('User', user);
    selectedUser.value = user;
    dialogUserDetails.value = true;
  };
</script>
<style scoped>
  /* Simple Example Inc(ex) branding and styling for the data table */

  /* Card Styling */
  .table-card {
    border-radius: 12px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    /* Light background for the card */
  }

  .table-title {
    font-weight: 600;
    font-size: 20px;
    color: #333;
    /* Dark text color for emphasis */
  }

  :deep(.v-table__wrapper > table > tbody > tr:hover) {
    background-color: #e1f2f4 !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
  }

  /* Data Table Branding */
  :deep(.ex-table thead th) {
    background-color: #f5f5f5;
    /* Light grey background for headers */
    color: #1976d2;
    /* Brand color for table headers text */
    font-weight: 800;
    padding: 12px 16px;
  }

  /* Alternate row color for even rows */
  :deep(.ex-table tbody tr:nth-child(even)) {
    background-color: #f9f9f9;
    /* Light grey alternating row color */
    /* TODO: need to change for darkMode */
  }

  /* Subtle hover effect */
  :deep(.ex-table tbody tr:hover) {
    background-color: #f0f0f0;
    /* Subtle hover effect */
  }

  /* Apply padding and text color to table cells */
  :deep(.ex-table tbody td) {
    padding: 12px 16px;
    font-size: 16px;
    color: #555;
    /* Text color for table rows */
  }

  /* Align header content (for sortable headers) */
  :deep(.ex-table .header-cell) {
    display: flex;
    align-items: center;
  }
</style>
