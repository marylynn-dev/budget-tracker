<template>
  <v-card title="Saving Goals">
    <v-card-text>
      <v-row>
        <v-col
          v-for="(chartData, index) in chartDataList"
          :key="index"
          cols="12"
          sm="6"
        >
          <Doughnut :options="chartOptions(index)" :data="chartData" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const chartDataList = [
  {
    datasets: [
      {
        label: "Vaccation",
        data: [300],
        backgroundColor: ["green"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
    title: "Vaccation",
  },
  {
    datasets: [
      {
        label: "Gift",
        data: [150],
        backgroundColor: ["green"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
    title: "Gift",
  },
  {
    datasets: [
      {
        label: "New Car",
        data: [200],
        backgroundColor: ["green"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
    title: "New Car",
  },
  {
    datasets: [
      {
        label: "Laptop",
        data: [250],
        backgroundColor: ["green"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
    title: "Laptop",
  },
];

const chartOptions = (index) => ({
  responsive: true,
  cutout: 45,
  circumference: 300,
  plugins: {
    title: {
      display: true,
      text: chartDataList[index].title,
      position: "bottom",
    },
  },
});
</script>
