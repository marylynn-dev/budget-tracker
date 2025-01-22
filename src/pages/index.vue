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
    <v-row>
      <v-col cols="12" md="12" lg="8">
        <v-card>
          <template #text>
            <p class="text-h4 font-weight-bold">Balance Trends</p>
            <p class="text-h5 font-weight-bold">$234567</p>
            <Chart />
          </template>
        </v-card>
      </v-col>
      <v-col>
        <MonthlyExpenseCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import MonthlyExpenseCard from "@/components/dashboard/MonthlyExpenseCard.vue";

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
</script>
