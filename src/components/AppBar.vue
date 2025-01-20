<template>
  <v-navigation-drawer color="primary" rail="rail">
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        to="/dashboard"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-account-box"></v-list-item>
      <v-list-item prepend-icon="mdi-wallet-bifold"></v-list-item>
      <v-list-item prepend-icon="mdi-cash"></v-list-item>
      <v-list-item prepend-icon="mdi-bullseye-arrow"></v-list-item>
      <v-list-item prepend-icon="mdi-account"></v-list-item>
      <v-list-item prepend-icon="mdi-finance"></v-list-item>
      <v-list-item prepend-icon="mdi-face-agent"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat>
    <v-row>
      <v-col cols="12" md="8" lg="4">
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          variant="solo"
          placeholder="Search Here"
        >
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col> </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
//
</script>

<template>
  <v-card class="fill-height" title="Purchases and Sales">
    <template #text>
      <Bar :options="chartOptions" :data="chartData" />
    </template>
  </v-card>
</template>