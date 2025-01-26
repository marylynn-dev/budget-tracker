<template>
  <v-card style="width: 100vw">
    <v-card-text>
      <p class="font-weight-bold text-h6">Monthly Expenses Breakdown</p>

      <v-list dense>
        <v-list-item v-for="(expense, index) in expenses" :key="index">
          <!-- Icon or Avatar for the item -->
          <template #prepend>
            <v-avatar :color="expense.color" size="24px">
              <v-icon>{{ expense.icon }}</v-icon>
            </v-avatar>
          </template>

          <!-- Expense title and progress bar -->
          <v-list-item-content>
            <v-list-item-title>{{ expense.title }}</v-list-item-title>
            <v-list-item-subtitle>${{ expense.amount }}</v-list-item-subtitle>

            <!-- Progress bar for each item -->
            <v-progress-linear
              :value="expense.percentage"
              :color="expense.color"
              height="8"
              rounded
            >
              <template v-slot:append>
                <span class="text-secondary font-weight-bold"
                  >{{ expense.percentage }}%</span
                >
              </template>
            </v-progress-linear>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
const expenses = [
  {
    title: "Food",
    amount: 1200,
    percentage: 40,
    color: "blue",
    icon: "mdi-silverware-fork-knife",
  },
  {
    title: "Transport",
    amount: 800,
    percentage: 25,
    color: "green",
    icon: "mdi-bus",
  },
  {
    title: "Healthcare",
    amount: 600,
    percentage: 20,
    color: "red",
    icon: "mdi-hospital",
  },
  {
    title: "Entertainment",
    amount: 300,
    percentage: 10,
    color: "orange",
    icon: "mdi-movie",
  },
  {
    title: "Utilities",
    amount: 100,
    percentage: 5,
    color: "purple",
    icon: "mdi-lightbulb",
  },
];
</script>
