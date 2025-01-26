<template>
  <v-card title="Monthly Income Vs Expenses">
    <template #text>
      <Bar :options="chartOptions" :data="chartData" />
    </template>
  </v-card>
</template>

<script setup>
import { reactive } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = reactive({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ],
  datasets: [
    {
      label: "Incomes",
      data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3],
      backgroundColor: "#302cd8",
    },
    {
      label: "Expenses",
      data: [4, 5, 3.5, 4.5, 2, 5, 3.5, 7, 2],
      backgroundColor: "#858ea5",
    },
  ],
});

const chartOptions = {};
</script>
