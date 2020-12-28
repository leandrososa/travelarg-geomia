<template>
  <v-app>
    <Navigation
      v-if="
        $route.path != '/contratargeoguru' &&
          $route.path != '/geogurucontratado'
      "
    ></Navigation>
    <v-main>
      <GeomiaHeader></GeomiaHeader>
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import GeomiaHeader from "./components/GeomiaHeader.vue";

export default {
  name: "app",
  components: {
    Navigation,
    GeomiaHeader
  }
};
</script>

<style lang="scss">
@import "scss/styles.scss";

nav.nav + main {
  margin-left: 100px;
}

nav.nav + main header {
  left: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
