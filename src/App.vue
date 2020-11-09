<template>
  <v-app>
    <!-- <v-app-bar app color="white" height="115px" dark>
      <v-container>
        <v-row align="center">
          <div class="d-flex align-center">
            <router-link to="/">
              <v-img
                alt="TravelArg"
                contain
                src="@/assets/logo-travelarg.svg"
                width="200"
                height="50"
              />  
            </router-link>
          </div>
          <v-spacer></v-spacer>
          <v-btn to="/destinos" text color="secondary">
            <span>Destinos</span>
          </v-btn>

          <v-btn to="/articulos" text color="secondary">
            <span>Artículos</span>
          </v-btn>

          <v-btn to="/travelers" text color="secondary">
            <span>Travelers</span>
          </v-btn>

          <v-btn to="/livestreams" text color="secondary">
            <span>Livestreams</span>
          </v-btn>

          <v-btn to="/reservas" text color="secondary">
            <span>Reservas</span>
          </v-btn>

          <v-avatar class="ml-4 mr-4" color="primary"><span class="white--text headline">LS</span></v-avatar>

          <v-btn
            target="_blank"
            color="primary"
            elevation="0"
            rounded
          >
            <v-icon>mdi-pencil</v-icon>
            <span class="ml-2">Escribir reseña</span>
            
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar> -->
    <Navigation></Navigation>
    <v-main>
      <GeomiaHeader></GeomiaHeader>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from './components/Navigation.vue';
  import GeomiaHeader from './components/GeomiaHeader.vue';

  export default {
    name: 'app',
    components: {
      Navigation,
      GeomiaHeader
    }
  }
  

</script>

<style lang="scss">
  @import 'scss/styles.scss';

  nav.nav + main{
    margin-left: 100px;
  }

  nav.nav + main  header{
    left: 100px;
  }
</style>