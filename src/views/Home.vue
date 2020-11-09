<script>
import json from "@/json/destinos.json";
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      items: [
        { id: 1, mensaje: "Para la familia" },
        { id: 2, mensaje: "Entre amigos" },
        { id: 3, mensaje: "Escapada romántica" },
        { id: 4, mensaje: "Ciudad" },
        { id: 5, mensaje: "Campo" },
        { id: 6, mensaje: "Playa" },
        { id: 7, mensaje: "Montaña" },
        { id: 8, mensaje: "Excursiones" },
        { id: 9, mensaje: "Vida nocturna" },
        { id: 10, mensaje: "Shopping" },
        { id: 11, mensaje: "Esquí" },
        { id: 12, mensaje: "Cultura" }
      ],
      destinos: json,
      isActive: true
    };
  },
  methods: {
    closeSearch: function() {
      this.isActive = true;
    },
    openSearch: function() {
      this.isActive = false;
      window.scrollTo(0, 0);
    }
  },
  components: {
    Button
  }
};
</script>

<template>
  <div class="home">
    <section class="fold-image">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <div class="over-search">
              <h1>
                <span class="fold-title">geomia</span>Redescubr&iacute; el
                pa&iacute;s
              </h1>
            </div>
            <div class="search-trigger" :class="{ closed: isActive }">
              <div class="search-panel">
                <span class="ticon-magnifier"></span>
                <input
                  @focus="openSearch"
                  @keydown.esc="closeSearch"
                  class="search-field"
                  placeholder="¿Adonde vamos?"
                  type="text"
                />
              </div>
              <div class="categories-panel">
                <h4 class="category-title">Categor&iacute;as mas populares</h4>
                <router-link to="/destinos" class="tag tag-category" v-ripple>
                  <span class="ticon-friends"></span>
                  Entre amigos
                </router-link>
                <router-link to="/destinos" class="tag tag-category" v-ripple>
                  <span class="ticon-family"></span>
                  Familia
                </router-link>
                <router-link to="/destinos" class="tag tag-category" v-ripple>
                  <span class="ticon-heart"></span>
                  Escapada rom&aacute;ntica
                </router-link>
              </div>
              <div class="recent-destinations-panel">
                <h4 class="category-title">Recientes</h4>
                <router-link
                  class="destination-item"
                  to="/destino"
                  v-ripple="{ class: 'grey--text' }"
                >
                  <img
                    class="destination-image"
                    src="../assets/destinations/bariloche.jpg"
                  />
                  <span class="destination-title">Bariloche</span
                  ><span class="destination-subtitle">Rio Negro</span>
                </router-link>
                <router-link
                  class="destination-item"
                  to="/destino"
                  v-ripple="{ class: 'grey--text' }"
                >
                  <img
                    class="destination-image"
                    src="../assets/destinations/mardelplata.jpg"
                  />
                  <span class="destination-title">Mar del Plata</span
                  ><span class="destination-subtitle">Buenos Aires</span>
                </router-link>
              </div>
            </div>
            <div
              class="search-backdrop"
              :class="{ show: !isActive }"
              @click="closeSearch"
            ></div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="trend-destinations">
      <v-container>
        <div class="blue-misc" style="width:55%"></div>
        <h2 class="section-title center">Destinos m&aacute;s populares</h2>
        <h5 class="section-subtitle center">
          Descubr&iacute; todas las posibilidades del turismo local
        </h5>
        <v-row>
          <img class="dots-misc" src="../assets/dots-misc.svg" alt="" />
          <v-col
            ><router-link to="/destino"
              ><div v-ripple class="trend-destination-card">
                <img src="../assets/destinations/mendoza.jpg" alt="Mendoza" />
              </div>
              <span class="destination-title">Mendoza</span></router-link
            ></v-col
          >
          <v-col
            ><router-link to="/destino"
              ><div v-ripple class="trend-destination-card">
                <img
                  src="../assets/destinations/bariloche.jpg"
                  alt="Bariloche"
                />
              </div>
              <span class="destination-title">Bariloche</span></router-link
            ></v-col
          >
          <v-col
            ><router-link to="/destino"
              ><div v-ripple class="trend-destination-card">
                <img src="../assets/destinations/ushuaia.jpg" alt="Ushuaia" />
              </div>
              <span class="destination-title">Ushuaia</span></router-link
            ></v-col
          >
          <v-col
            ><router-link to="/destino"
              ><div v-ripple class="trend-destination-card">
                <img src="../assets/destinations/salta.jpg" alt="Salta" />
              </div>
              <span class="destination-title">Salta</span></router-link
            ></v-col
          >
        </v-row>
      </v-container>
    </section>
    <section class="get-guru">
      <v-container>
        <v-row>
          <v-col cols="8">
            <div class="blue-misc" style="width:20%"></div>
            <h2 class="section-title magenta left">
              Consegu&iacute; un Geogur&uacute; acorde a tus necesidades
            </h2>
            <h5 class="section-subtitle left mb-10">
              Recib&iacute; consejo profesional y aprovech&aacute; tus
              vacaciones al 100%
            </h5>
            <Button to="/geogurus" xlarge padding color="success">Ver más</Button>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="last-articles">
      <v-container>
        <h2 class="section-title right mb-10">
          &Uacute;ltimos art&iacute;culos en <b>geomia</b>
        </h2>
        <v-row>
          <v-col
            ><router-link to="/articulo" class="article-item"
              ><div class="article-image mb-4" v-ripple>
                <img src="../assets/news/lacalle.png" alt="Article image" />
              </div>
              <span class="article-title"
                >Lacalle Pou puso en duda que abra las fronteras para el turismo
                argentino en el verano</span
              ></router-link
            ></v-col
          >
          <v-col
            ><router-link to="/articulo" class="article-item"
              ><div class="article-image mb-4" v-ripple>
                <img src="../assets/news/aerolineas.png" alt="Article image" />
              </div>
              <span class="article-title"
                >Aerolíneas Argentinas se suma al plan PreViaje: cu&aacute;les
                ser&aacute;n los beneficios</span
              ></router-link
            ></v-col
          >
          <v-col
            ><router-link to="/articulo" class="article-item"
              ><div class="article-image mb-4" v-ripple>
                <img src="../assets/news/oporto.png" alt="Article image" />
              </div>
              <span class="article-title"
                >Descubrir actividades asequibles por todo el mundo</span
              ></router-link
            ></v-col
          >
        </v-row>
      </v-container>
    </section>
  </div>
</template>



<style lang="scss" scoped>
section {
  height: 70vh;
  margin: 0 auto;
}

section.fold-image {
  background-image: $blue-gradient, url("../assets/home-fold.png");
  background-position: top center;
  color: $wh;

  .over-search {
    margin-top: 15vh;

    h1 {
      font-size: 64px;
      font-weight: 500;
      text-align: center;

      .fold-title {
        display: inline-block;
        font-size: 68px;
        font-weight: 700;
        padding-right: 45px;
        border-right: 7px solid $wh;
        margin-right: 45px;
        height: 80px;
      }
    }
  }

  .category-title {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: $gr;
  }

  .search-trigger {
    box-shadow: $search-shadow;
    background-color: $wh;
    border-radius: $br-normal;
    padding: $card-padding;
    padding-left: 40px;
    overflow: hidden;
    transition: all 0.4s;
    max-height: 300px;
    z-index: 40;
    position: relative;

    .search-panel {
      position: relative;
      border-bottom: 1px solid $gr2;
      transition: border-bottom-color 0.4s;

      span[class="ticon-magnifier"] {
        position: absolute;
        top: 50%;
        left: -24px;
        transform: translateY(-50%);
        color: $gr2;
      }

      .search-field {
        font-size: 24px;
        font-weight: 600;
        color: $bl;
        display: block;
        width: 100%;
        outline: none;

        &::placeholder {
          color: $gr2;
        }
      }
    }

    .categories-panel {
      padding-top: 16px;
    }

    .recent-destinations-panel {
      padding-top: 16px;

      .destination-item {
        display: block;
        user-select: none;
        position: relative;
        cursor: hand;
        cursor: pointer;
        padding: 10px 0;
        padding-left: 50px;
        border-top: 1px solid $gr2;
        text-decoration: none;

        &:first-of-type {
          border-top: none;
        }

        .destination-image {
          display: inline-block;
          width: 42px;
          height: 42px;
          border-radius: $br-normal;
          object-fit: cover;
          object-position: center center;
          position: absolute;
          left: 0;
        }
        .destination-title {
          font-size: 14px;
          color: $bl;
          font-weight: 600;
          display: block;
        }
        .destination-subtitle {
          font-size: 14px;
          color: $gr1;
          font-weight: 600;
          display: block;
        }
      }
    }

    &.closed {
      background-color: transparentize($wh, 0.68);
      max-height: 60px;
      z-index: 1;

      .search-panel {
        border-bottom-color: transparent;

        span[class="ticon-magnifier"],
        .search-field::placeholder {
          color: $wh;
        }
      }
    }
  }

  .search-backdrop {
    z-index: 30;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    &.show {
      visibility: visible;
      opacity: 1;
    }
  }
}

section.trend-destinations {
  margin-top: 5vw;
  height: 100vh;

  .row {
    margin-top: 80px;
    position: relative;

    .dots-misc {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
    }

    .col {
      a {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        color: $ta-green;
        position: relative;

        .trend-destination-card {
          height: 40vh;
          border-radius: $br-normal;
          border-top-right-radius: $br-accented;
          overflow: hidden;
          color: $ta-green;
          margin-bottom: 12px;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center center;
          }
        }

        span.destination-title {
          color: $gr;
          font-weight: 700;
        }
      }
    }
  }
}
section.last-articles {
  .article-item {
    display: block;
    width: 100%;
    text-decoration: none;
    color: $ta-green;
    .article-image {
      overflow: hidden;
      border-radius: $br-normal;
      height: 100%;
      position: relative;
      padding-top: 65%;
      img {
        width: 100%;
        display: block;
        margin: 0;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .article-title {
      color: $bl;
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
