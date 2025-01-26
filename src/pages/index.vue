<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" lg="4">
        <p class="text-h5 font-weight-bold">Dashboard</p>
        <p class="font-weight-light text-secondary">Welcome to budgetBuddy</p>
      </v-col>
      <v-col> </v-col>
    </v-row>
    <v-row>
      <Card :dashCards="cards" />
    </v-row>
    <v-row class="mt-10" justify="space-between">
      <v-col cols="12" md="12" lg="8" class="d-flex align-stretch">
        <Chart />
      </v-col>
      <v-col cols="12" md="12" lg="4" class="d-flex align-stretch">
        <MonthlyExpenseCard />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" lg="4" class="d-flex align-stretch">
        <MonthlyBudgets />
      </v-col>
      <v-col cols="12" md="12" lg="8">
        <IncomeVsExpenses />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" lg="8">
        <WeeklyExpenses />
      </v-col>
      <v-col cols="12" md="12" lg="4">
        <PaymentHistory />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" lg="4">
        <SavingGoals />
      </v-col>
      <v-col cols="12" md="12" lg="8">
        <v-card title="Transaction History" class="fill-height">
          <v-data-table
            :headers="headers"
            :items="items"
            item-value="id"
            hide-default-footer
          >
            <!-- Custom Slot for 'Category' -->
            <template v-slot:item.category="{ item }">
              <v-icon>mdi-beauty</v-icon>
              {{ item.category }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import IncomeVsExpenses from "@/components/dashboard/IncomeVsExpenses.vue";
import MonthlyBudgets from "@/components/dashboard/MonthlyBudgets.vue";
import MonthlyExpenseCard from "@/components/dashboard/MonthlyExpenseCard.vue";
import SavingGoals from "@/components/dashboard/SavingGoals.vue";

const cards = [
  {
    title: "Total Revenue",
    amount: 435668,
    difference: 5.2,
    lastMonthAmount: 413200,
  },
  {
    title: "Active Users",
    amount: 1589,
    difference: -3.4,
    lastMonthAmount: 1645,
  },
  {
    title: "New Sign-ups",
    amount: 320,
    difference: 12.1,
    lastMonthAmount: 285,
  },
  {
    title: "Customer Retention",
    amount: 86,
    difference: 2.5,
    lastMonthAmount: 84,
  },
];

const headers = [
  { key: "category", title: "Category" },
  { key: "date", title: "Date" },
  { key: "description", title: "Description" },
  { key: "amount", title: "Amount" },
];
const items = [
  {
    category: "Beauty",
    date: "12.03.2024",
    description: "Grocery items and beverage soft drinks",
    amount: -32.5,
  },
  {
    category: "Health",
    date: "13.03.2024",
    description: "Medical supplies",
    amount: -50.0,
  },
  {
    category: "Health",
    date: "13.03.2024",
    description: "Medical supplies",
    amount: -50.0,
  },
  {
    category: "Health",
    date: "13.03.2024",
    description: "Medical supplies",
    amount: -50.0,
  },
  {
    category: "Health",
    date: "13.03.2024",
    description: "Medical supplies",
    amount: -50.0,
  },
];
</script>
