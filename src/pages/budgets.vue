<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" lg="4">
        <p class="text-h5 font-weight-bold">Budgets</p>
        <p class="font-weight-light text-secondary">Welcome to budgetBuddy</p>
      </v-col>
      <v-col> </v-col>
    </v-row>
    <v-row>
      <!-- Expense List -->
      <v-col cols="12" md="8" lg="4">
        <div v-for="expense in expenses" :key="expense.title">
          <ExpenseCard :expense="expense" @click="selectExpense(expense)" />
        </div>
      </v-col>
      <!-- Selected Expense Details -->
      <v-col cols="12" md="8" lg="8">
        <v-card
          v-if="selectedExpense"
          :title="selectedExpense.title"
          :subtitle="selectedExpense.budget"
        >
        </v-card>
        <v-card>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div>
                <p>Spend</p>
                <p class="text-h5 font-weight-bold" style="color: #10327a ">
                  $650.75
                </p>
              </div>
              <div>
                <p>Spend</p>
                <p>$650.75</p>
              </div>
            </div>
            <v-progress-linear
              model-value="20"
              color="primary"
            ></v-progress-linear>
            <div class="d-flex justify-space-between">
              <div>
                <p>76%</p>
              </div>
              <div>
                <p>24%</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import ExpenseCard from "@/components/budgets/expenseCard.vue";

const expenses = [
  {
    icon: "mdi-home",
    title: "Rent",
    budget: 1200,
  },
  {
    icon: "mdi-car",
    title: "Car Payment",
    budget: 400,
  },
  {
    icon: "mdi-shopping",
    title: "Groceries",
    budget: 250,
  },
  {
    icon: "mdi-lightning-bolt",
    title: "Electricity Bill",
    budget: 75,
  },
  {
    icon: "mdi-phone",
    title: "Phone Bill",
    budget: 60,
  },
  {
    icon: "mdi-gas-station",
    title: "Gas",
    budget: 50,
  },
];

// Set the first expense as the default selected expense
const selectedExpense = ref(expenses[0]);

const selectExpense = (expense) => {
  selectedExpense.value = expense;
};
</script>
