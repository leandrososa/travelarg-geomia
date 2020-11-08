import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ec008c',
        secondary: '#61b8c0',
        success: '#1cbbb4',
      },
      dark: {
        primary: '#ec008c',
        secondary: '#61b8c0',
        success: '#1cbbb4',
      }
    },
  }
})

export default vuetify