<template>
  <v-navigation-drawer color="primary" rail="rail">
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        to="/dashboard"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-account-box" to="/wallets"></v-list-item>
      <v-list-item prepend-icon="mdi-wallet-bifold"></v-list-item>
      <v-list-item prepend-icon="mdi-cash"></v-list-item>
      <v-list-item prepend-icon="mdi-bullseye-arrow"></v-list-item>
      <v-list-item prepend-icon="mdi-account"></v-list-item>
      <v-list-item prepend-icon="mdi-finance"></v-list-item>
      <v-list-item prepend-icon="mdi-face-agent"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar flat>
    <v-container>
      <v-row>
        <!-- Search Bar -->
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            append-inner-icon="mdi-magnify"
            density="compact"
            variant="outlined"
            placeholder="Search Here"
            rounded="0"
            class="d-flex"
            min-width="200px"
          ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>
        <!-- Account Icon -->
        <v-col class="d-flex align-center justify-end ga-5">
          <v-icon>mdi-bell-badge-outline</v-icon>
          <v-btn icon @click="toggleTheme" variant="text">
            <v-icon>{{
              isDarkTheme ? "mdi-brightness-4" : "mdi-brightness-7"
            }}</v-icon>
          </v-btn>
          <v-icon>mdi-account</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "myCustomLightTheme"
      ? "myCustomDarkTheme"
      : "myCustomLightTheme";
};

const isDarkTheme = computed(() => theme.global.current.value.dark);
</script>
