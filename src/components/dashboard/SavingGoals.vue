<template>
  <Doughnut :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend } from "chart.js";

// Register required components for Chart.js
ChartJS.register(Title, Tooltip, Legend);

const chartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Saving Goals",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const chartOptions = {
  responsive: true, // Make the chart responsive
  plugins: {
    title: {
      display: true,
      text: "Saving Goals Distribution",
    },
    legend: {
      position: "top", // Position the legend at the top
    },
  },
};
</script>
