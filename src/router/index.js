import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/destinos",
    name: "Destinos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Destinos.vue")
  },
  {
    path: "/destino",
    name: "Destino",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Destino.vue")
  },
  {
    path: "/articulos",
    name: "Articulos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Articulos.vue")
  },
  {
    path: "/articulo",
    name: "Articulo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Articulo.vue")
  },
  {
    path: "/geogurus",
    name: "Geogurus",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Geogurus.vue")
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Perfil.vue")
  },
  {
    path: "/perfilgeoguru",
    name: "PerfilGeoguru",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PerfilGeoguru.vue")
  },
  {
    path: "/chatgeoguru",
    name: "ChatGeogurus",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChatGeoguru.vue")
  },
  {
    path: "/contratargeoguru",
    name: "ContratarGeoguru",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContratarGeoguru.vue")
  },
  {
    path: "/geogurucontratado",
    name: "GeoguruContratado",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GeoguruContratado.vue")
  },

  {
    path: "/nuevaresena",
    name: "NuevaResena",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NuevaResena.vue")
  },
  {
    path: "/componerresena",
    name: "ComponerResena",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComponerResena.vue")
  },
  {
    path: "/resenacompleta",
    name: "ResenaCompleta",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResenaCompleta.vue")
  },
  {
    path: "/componentsheet",
    name: "ComponentSheet",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComponentSheet.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
