<template>
  <v-container>
    <v-card>
      <v-card-text>
        <p class="font-weight-bold text-h6">Monthly Expenses Breakdown</p>
        <!-- Progress bar with 3 datasets represented -->
        <v-progress-linear
          :value="100"
          :height="24"
          rounded
          style="
            background: linear-gradient(
              to right,
              blue 0%,
              blue 40%,
              /* Dataset 1 */ green 40%,
              green 70%,
              /* Dataset 2 */ red 70%,
              red 100% /* Dataset 3 */
            );
          "
        ></v-progress-linear>

        <!-- Data labels -->
        <div class="d-flex justify-space-between mt-3">
          <div style="color: blue">
            Dataset 1: {{ dataSet1 }}% ({{ dataSet1Amount }} units)
          </div>
          <div style="color: green">
            Dataset 2: {{ dataSet2 }}% ({{ dataSet2Amount }} units)
          </div>
          <div style="color: red">
            Dataset 3: {{ dataSet3 }}% ({{ dataSet3Amount }} units)
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Data for three categories
      dataSet1: 40, // Dataset 1 percentage
      dataSet2: 30, // Dataset 2 percentage
      dataSet3: 30, // Dataset 3 percentage

      // Unit values for context
      dataSet1Amount: 400, // Amount for Dataset 1
      dataSet2Amount: 300, // Amount for Dataset 2
      dataSet3Amount: 300, // Amount for Dataset 3
    };
  },
};
</script>

<style scoped>
/* Optional: Add padding or custom styles */
</style>
