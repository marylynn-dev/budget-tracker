<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style>
/* Global style to apply the theme's text color */
body {
  color: var(--v-theme-text); /* Use the Vuetify theme's text color */
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
div {
  color: var(
    --v-theme-text
  ); /* Ensure all common text elements use the theme text color */
}

/* Apply text color to all Vuetify components */
.v-card,
.v-card-title,
.v-card-subtitle,
.v-card-text,
.v-btn {
  color: var(--v-theme-text) !important; /* Force the theme's text color */
}
</style>
