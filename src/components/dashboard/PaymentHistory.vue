<template>
  <v-card title="Payment History" class="fill-height">
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        density="comfortable"
      >
        <template #title>{{ item.title }}</template>
        <template #subtitle>{{ item.date }}</template>
        <template #append>
          <div>
            <p>{{ item.amount }}</p>
            <!-- Display amount here -->
            <p>
              <v-chip
                :color="
                  item.status === 'Paid'
                    ? 'green'
                    : item.status === 'OverDue'
                    ? 'blue'
                    : 'orange'
                "
              >
                {{ item.status }}
              </v-chip>
            </p>
          </div>
        </template>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const items = [
  {
    title: "Electricity",
    date: "5 January 2025",
    status: "Paid",
    amount: "+450", // Add amount for each item
  },
  {
    title: "Water",
    date: "10 January 2025",
    status: "Due",
    amount: "+200", // Amount for Water
  },
  {
    title: "Internet",
    date: "15 January 2025",
    status: "Overdue",
    amount: "+120", // Amount for Internet
  },
];

// Method to determine the chip color based on status
function getChipColor(status) {
  if (status === "Paid") {
    return "green";
  } else if (status === "Due") {
    return "orange";
  } else {
    return "red"; // For 'Overdue' or any other status
  }
}
</script>
