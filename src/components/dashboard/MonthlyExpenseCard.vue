<template>
  <v-card style="width: 100vw">
    <v-card-text>
      <p class="font-weight-bold text-h6">Monthly Expenses Breakdown</p>

      <!-- Progress bar with 7 datasets -->
      <v-progress-linear
        :value="100"
        :height="8"
        rounded
        style="
          background: linear-gradient(
            to right,
            blue 0%,
            blue 15%,
            /* Dataset 1 */ green 15%,
            green 30%,
            /* Dataset 2 */ red 30%,
            red 45%,
            /* Dataset 3 */ orange 45%,
            orange 60%,
            /* Dataset 4 */ purple 60%,
            purple 75%,
            /* Dataset 5 */ teal 75%,
            teal 85%,
            /* Dataset 6 */ yellow 85%,
            yellow 100% /* Dataset 7 */
          );
          margin-top: 10px;
        "
      ></v-progress-linear>

      <!-- Dynamic List of Expenses -->
      <v-list dense>
        <v-list-item v-for="(expense, index) in expenses" :key="index">
          <template #prepend>
            <v-avatar :color="expense.color" size="16px"></v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title>{{ expense.title }}</v-list-item-title>
          </v-list-item-content>
          <template #append>
            <span class="text-secondary">${{ expense.amount }}</span
            >&nbsp;&nbsp;
            <span class="font-weight-bold">{{ expense.percent }}</span>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
const expenses = [
  { title: "Food", amount: 1200, percent: "15%", color: "blue" },
  { title: "Transport", amount: 1000, percent: "15%", color: "green" },
  { title: "Healthcare", amount: 800, percent: "15%", color: "red" },
  { title: "Entertainment", amount: 700, percent: "15%", color: "orange" },
  { title: "Utilities", amount: 600, percent: "15%", color: "purple" },
  { title: "Clothing", amount: 500, percent: "10%", color: "teal" },
  { title: "Miscellaneous", amount: 400, percent: "15%", color: "yellow" },
];
</script>

<style scoped>
/* Optional: Add custom styling for spacing or typography */
</style>
