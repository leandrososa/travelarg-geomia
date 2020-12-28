import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#E969B5",
        secondary: "#61b8c0",
        success: "#1cbbb4",
        info: "#00AEEF"
      },
      dark: {
        primary: "#E969B5",
        secondary: "#61b8c0",
        success: "#1cbbb4",
        info: "#00AEEF"
      }
    }
  }
});

export default vuetify;
