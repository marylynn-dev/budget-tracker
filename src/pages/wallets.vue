<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" lg="4">
        <p class="text-h5 font-weight-bold">Wallets</p>
        <p class="font-weight-light text-secondary">Welcome to budgetBuddy</p>
      </v-col>
      <v-col> </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" lg="4"> <Card :cards="cardData" /> </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import Card from "@/components/wallets/Card.vue";

const cardData = [
  {
    icon: "mdi-account",
    title: "User Profile",
    subtitle: "Manage your profile settings",
  },
  {
    icon: "mdi-wallet",
    title: "Budget Tracker",
    subtitle: "Track your expenses and income",
  },
  {
    icon: "mdi-calendar",
    title: "Calendar",
    subtitle: "Plan your upcoming events",
  },
  {
    icon: "mdi-chart-bar",
    title: "Analytics",
    subtitle: "Analyze your data trends",
  },
  {
    icon: "mdi-help-circle",
    title: "Support",
    subtitle: "Get help and support",
  },
];
</script>
