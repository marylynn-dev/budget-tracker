<template>
  <v-row>
    <v-col v-for="(card, index) in dashCards" :key="index" cols="12" md="6" lg="3">
      <v-card>
        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-text>
          <p class="font-weight-bold text-h4 mb-2">${{ card.amount }}</p>
          <v-divider></v-divider>
          <div class="mt-2">
            <v-icon
              :icon="
                card.difference > 0 ? 'mdi-trending-up' : 'mdi-trending-down'
              "
              :color="card.difference > 0 ? 'green' : 'red'"
            ></v-icon>
            <span :class="card.difference > 0 ? 'text-green' : 'text-red'">
              {{ card.difference }}%
            </span>
            <span class="text-secondary">Last month</span> &nbsp;
            <span class="text-secondary font-weight-bold">
              ${{ card.lastMonthAmount }}
            </span>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  dashCards: {
    type: Array,
    required: true,
  },
});
</script>
