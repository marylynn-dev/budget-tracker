<template>
  <v-card style="width: 100vw">
    <template #text>
      <p class="text-h4 font-weight-bold">Balance Trends</p>
      <p class="text-h5 font-weight-bold">$234567</p>
    </template>
    <Line :data="data" :options="chartOptions" />
  </v-card>
</template>

<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement, // Register PointElement
  LineElement, // Register LineElement
} from "chart.js";

// Register all necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const labels = getWeekLabels();
const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const chartOptions = reactive({
  responsive: true,
});

function getWeekLabels() {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
  const labels = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(startOfWeek);
    currentDay.setDate(startOfWeek.getDate() + i);

    const day = currentDay.getDate();
    const month = currentDay.toLocaleString("default", { month: "short" }); // e.g., 'Jan'
    const suffix = getDaySuffix(day);

    labels.push(`${day}${suffix} ${month}`);
  }

  return labels;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) return "th"; // Special case for 11th, 12th, 13th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
</script>
