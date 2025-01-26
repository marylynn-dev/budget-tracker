<template>
  <v-card class="fill-height fill-width" title="Purchases and Sales">
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
      label: "Purchases",
      data: [20, 38, 35, 31, 25, 38, 35, 30],
      backgroundColor: "#302cd8",
      barThickness: 20,
    },
    {
      label: "Sales",
      data: [50, 45, 60, 70, 50, 45, 60, 70],
      backgroundColor: "rgb(166,86,244)",
      barThickness: 20,
    },
    {
      label: "Sales",
      data: [50, 45, 60, 70, 50, 45, 60, 70],
      backgroundColor: "rgb(140,92,248)",
      barThickness: 20,
    },
    {
      label: "Sales",
      data: [50, 45, 60, 70, 50, 45, 60, 70],
      backgroundColor: "rgb(99,108,241)",
      barThickness: 20,
    },
    {
      label: "Sales",
      data: [50, 45, 60, 70, 50, 45, 60, 70],
      backgroundColor: "rgb(58,130,246)",
      barThickness: 20,
    },
  ],
});

const chartOptions = reactive({
  plugins: {
    title: {
      display: true,
      align: "start",
    },
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: true,
      },
    },

    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
});
</script>
