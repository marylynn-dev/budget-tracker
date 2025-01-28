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
      <v-col cols="12" md="8" lg="8">
        <v-container>
          <v-row>
            <v-col> <v-card title="Visa Card"></v-card> </v-col>
          </v-row>
          <v-row
            ><v-col>
              <v-card>
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">Total Balance</div>
                    <div class="text-h6 mb-1">Headline</div>
                    <div class="text-caption">
                      Greyhound divisely hello coldly fonwderfully
                    </div>
                  </div>
                </v-card-item>
              </v-card></v-col
            >
          </v-row>
          <v-row>
            <v-col v-for="(card, index) in cards">
              <dashCard :card="card" />
            </v-col>
          </v-row>
          <v-row>
            <v-col> <Chart /> </v-col>
          </v-row>
          <v-row
            ><v-col>
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
              </v-card></v-col
            ></v-row
          >
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import Card from "@/components/wallets/Card.vue";
import dashCard from "@/components/dashboard/Card.vue";
import Chart from "@/components/dashboard/Chart.vue";

const cards = [
  {
    title: "Total Balance",
    amount: 435668,
    difference: 5.2,
    lastMonthAmount: 413200,
  },
  {
    title: "Monthly Expenses",
    amount: 1589,
    difference: -3.4,
    lastMonthAmount: 1645,
  },
];

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
