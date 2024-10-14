<template>
  <VCard class="pa-4">
    <VCardTitle>{{ title }}</VCardTitle>

    <!-- Conditionally Render the Search Field -->
    <template v-if="useSearch">
      <v-text-field
        v-model="internalSearch"
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
      class="elevation-1"
      :item-key="itemKey"
      :loading="loading"
      @update:sort-by="updateSortBy"
      @update:sort-desc="updateSortDesc"
    />
  </VCard>
</template>
<script setup lang="ts">
  import { ref, computed, defineEmits, defineProps, watch } from 'vue'

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
  })

  const emits = defineEmits(['update:sortBy', 'update:sortDesc', 'update:search', 'edit', 'delete'])

  // Internal Search State
  const internalSearch = ref(props.search)

  // Watch the search prop to keep internalSearch in sync
  watch(
    () => props.search,
    newVal => {
      internalSearch.value = newVal
    }
  )

  // Emit search event to parent when search input changes
  const updateSearch = searchValue => {
    emits('update:search', searchValue)
  }

  // Handle sorting updates
  const updateSortBy = value => {
    emits('update:sortBy', value)
  }

  const updateSortDesc = value => {
    emits('update:sortDesc', value)
  }


  // Headers with Actions column
  const headersWithActions = computed(() => {
    return [...props.headers, { title: 'Actions', value: 'actions', sortable: false }]
  })
</script>
