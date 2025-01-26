// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Custom Light Theme
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#f0f0f0',
    primary: '#302cd8',
    secondary: '#858ea5',
    text: '#10327a', // Text color for light theme
  },
}

// Custom Dark Theme
const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    primary: '#bb86fc',
    secondary: '#03dac6',
    text: '#ffffff', // Text color for dark theme
  },
}

// Vuetify Instance
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme', // Default theme
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
})
