<template>
  <v-card
    :prepend-icon="expense.icon"
    :title="expense.title"
    :subtitle="expense.budget"
    class="mb-4"
  >
  </v-card>
</template>
<script setup>
const props = defineProps({
  expense: Object,
});
</script>
