<template>
  <v-card
    v-for="card in cards"
    :prepend-icon="card.icon"
    :title="card.title"
    :subtitle="card.subtitle"
    class="mb-5"
  >
  </v-card>
</template>

<script setup>
const props = defineProps({
  cards: Array,
});
</script>
