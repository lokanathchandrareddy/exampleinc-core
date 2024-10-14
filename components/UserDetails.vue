<template>
  <!-- Bind the dialog's visibility using v-model -->
  <VDialog :model-value="props.modelValue" width="50%" @update:model-value="closeDialog">
    <VCard>
      <v-toolbar
        class="d-flex justify-space-between align-center font-weight-medium text-h4"
        color="primary"
        dark
        flat
      >
        <v-toolbar-title>User Details</v-toolbar-title>
      </v-toolbar>

      <VDivider />

      <!-- User Information -->
      <VCardText v-if="props.user" class="pa-4">
        <VList>
          <VListItem>
            <VListItemTitle class="mb-3 item-title">
              <VIcon left class="mr-2">mdi-account</VIcon>
              Name: {{ user.name }}
            </VListItemTitle>
            <VDivider />

            <VListItemSubtitle class="mt-3">
              <VIcon left class="mr-2">mdi-account-circle</VIcon>
              Username: <strong>{{ user.username }}</strong>
            </VListItemSubtitle>
            <VDivider />

            <VListItemSubtitle class="mt-3">
              <VIcon left class="mr-2">mdi-email</VIcon>
              Email: <strong>{{ user.email }}</strong>
            </VListItemSubtitle>
            <VDivider />

            <VListItemSubtitle class="mt-3">
              <VIcon left class="mr-2">mdi-phone</VIcon>
              Phone: <strong>{{ user.phone }}</strong>
            </VListItemSubtitle>
            <VDivider />

            <VListItemSubtitle class="mt-3">
              <VIcon left class="mr-2">mdi-web</VIcon>
              Website: <strong>{{ user.website }}</strong>
            </VListItemSubtitle>
          </VListItem>
        </VList>
      </VCardText>
      <v-card-text v-else>
        <p>No user data available</p>
      </v-card-text>
      <VDivider />

      <!-- Action Buttons -->
      <VCardActions class="d-flex justify-end">
        <VBtn text @click="closeDialog">Close</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      default: null,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  // Emit the update:modelValue event to close the dialog
  const closeDialog = () => {
    emit('update:modelValue', false);
  };
</script>

<style scoped>
  .v-list-item-title {
    font-size: 18px;
    font-weight: 500;
  }

  .v-list-item-subtitle {
    font-size: 16px;
  }

  .v-icon {
    color: #1976d2;
  }
</style>
