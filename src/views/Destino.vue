<script>
import Button from "@/components/Button.vue";
import PlaceCard from "@/components/map/PlaceCard.vue";
import json from "@/json/resenas.json";

export default {
  data() {
    return {
      isOpen: false,
      resenas: json
    };
  },
  methods: {
    openDetails: function() {
      this.isOpen = true;
    },
    closeDetails: function() {
      this.isOpen = false;
    }
  },
  components: {
    Button,
    PlaceCard
  }
};
</script>
<template>
  <div id="destino">
    <section class="fold-image">
      <v-container>
        <v-row align="center">
          <v-col>
            <h1 class="fold-title white--text">
              Descubr&iacute; <b>Bariloche</b>
            </h1>
          </v-col>
        </v-row>
        <div class="tags">
          <router-link class="tag" to="/destinos" v-ripple
            ><span class="ticon-friends"></span>Entre amigos</router-link
          >
          <router-link class="tag" to="/destinos" v-ripple
            ><span class="ticon-heart"></span>Escapada
            rom&aacute;ntica</router-link
          >
          <router-link class="tag" to="/destinos" v-ripple
            ><span class="ticon-night"></span>Vida nocturna</router-link
          >
          <router-link class="tag" to="/destinos" v-ripple
            ><span class="ticon-compass"></span>Excursiones</router-link
          >
          <router-link class="tag" to="/destinos" v-ripple
            ><span class="ticon-skigoggles"></span>Esqu&iacute;</router-link
          >
        </div>
      </v-container>
    </section>
    <section class="description">
      <v-container>
        <v-row>
          <v-col cols="7">
            <div class="user-image mb-6">
              <img src="../assets/userphotos/bariloche1.png" alt="" />
              <span class="tag user-tag white--text">
                <img
                  src="../assets/users/pesann.png"
                  alt=""
                  class="user-avatar"
                />
                pesann134
              </span>
            </div>
            <p class="destination-extract">
              Ya sea que vayas en verano para disfrutar de sus lagos y del calor
              del sol o en invierno, para recorrer sus cerros y divertirte con
              la nieve, Bariloche siempre es una buena excusa. Respir&aacute;
              verde, en el centro o en el medio del Parque Nacional Nahuel
              Huapi, cualquier parte de la ciudad te conecta con la naturaleza.
            </p>
          </v-col>
          <v-col cols="5">
            <div class="user-image mb-6">
              <img src="../assets/userphotos/bariloche2.png" alt="" />
              <span class="tag user-tag white--text">
                <img
                  src="../assets/users/pesann.png"
                  alt=""
                  class="user-avatar"
                />
                pesann134
              </span>
            </div>
            <div class="user-image">
              <img src="../assets/userphotos/bariloche3.png" alt="" />
              <span class="tag user-tag white--text">
                <img
                  src="../assets/users/pesann.png"
                  alt=""
                  class="user-avatar"
                />
                pesann134
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="faq">
      <v-container>
        <v-row align="center">
          <v-col>
            <h2 class="section-title bl">
              Preguntas frecuentes sobre el destino
            </h2>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  ¿En qué época es recomendable visitar Bariloche?
                  <template v-slot:actions>
                    <v-icon>
                      $expand
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Bariloche es un destino para disfrutar en familia y con amigos
                  todo el año. Cada estación tiene su magia y una gran variedad
                  de actividades para elegir.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header disable-icon-rotate>
                  ¿Qué se aconseja llevar en la valija?
                  <template v-slot:actions>
                    <v-icon>
                      $expand
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>En verano:</p>
                  <ul>
                    <li>Protector solar</li>
                    <li>Anteojos de Sol</li>
                    <li>Crema hidratante</li>
                    <li>Zapatillas c&oacute;modas</li>
                    <li>Calzado abierto tipo sandalia</li>
                    <li>Traje de ba&ntilde;o&nbsp;</li>
                    <li>Pantalones cortos y largos (o desmontables)</li>
                    <li>Una campera de abrigo</li>
                    <li>Abrigo de polar o frisado</li>
                    <li>Una mochila mediana</li>
                  </ul>
                  <p>En invierno:</p>
                  <ul>
                    <li>Guantes, bufanda y gorro de lana</li>
                    <li>Camiseta t&eacute;rmica</li>
                    <li>Muchos pares de medias</li>
                    <li>Calzado c&oacute;modo</li>
                    <li>
                      Botas impermeables&nbsp; y de abrigo para usar fuera, en
                      la nieve
                    </li>
                    <li>
                      Una buena campera de abrigo bien herm&eacute;tica e
                      impermeable
                    </li>
                    <li>Pantalones impermeables y abrigo de polar o frisado</li>
                    <li>
                      Ropa c&oacute;moda para interiores (&iexcl;ya que en todas
                      partes hay mucha calefacci&oacute;n!)
                    </li>
                    <li>Calzoncillos/calzas largas</li>
                    <li>Anteojos/antiparras para la nieve</li>
                    <li>Una mochila/bolso mediano</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header disable-icon-rotate>
                  ¿Cuáles son los horarios de los comercios en Bariloche?
                  <template v-slot:actions>
                    <v-icon>
                      $expand
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  La mayoría de los comercios abren de lunes a sábados de 9 a 13
                  y de 16 a 21. Y los domingos de 18 a 21. En caso que necesites
                  realizar algún trámite bancario te informamos que los horarios
                  de los bancos son de lunes a viernes de 8 a 13.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="destination-map">
      <v-container>
        <div class="places-container" :class="{ show: !isOpen }">
          <PlaceCard
            @click.native="openDetails"
            name="Catedral Nuestra Señora del Nahuel Huapi"
            img="catedral-huapi"
            number="1"
            :stars="4"
          ></PlaceCard>
          <PlaceCard
            @click.native="openDetails"
            name="Museo de la Patagonia"
            number="2"
            :stars="3"
          ></PlaceCard>
          <PlaceCard
            @click.native="openDetails"
            name="Casino de Bariloche"
            img="casino-bariloche"
            number="3"
            :stars="4"
          ></PlaceCard>
          <PlaceCard
            @click.native="openDetails"
            name="Patagonia Vinos"
            img="patagonia-vinos"
            number="4"
            :stars="5"
          ></PlaceCard>
          <PlaceCard
            @click.native="openDetails"
            name="Parroquia San Eduardo"
            img="san-eduardo"
            number="5"
            :stars="2"
          ></PlaceCard>
          <PlaceCard
            @click.native="openDetails"
            name="Chocolates Rapa Nui"
            img="rapa-nui"
            number="6"
            :stars="4"
          ></PlaceCard>
          <PlaceCard
            @click.native="openDetails"
            name="Refugio Berghof"
            img="refugio-berghof"
            number="7"
            :stars="2"
          ></PlaceCard>
          <PlaceCard
            @click.native="openDetails"
            name="Museo del Chocolate Havanna"
            img="museo-havanna"
            number="8"
            :stars="4"
          ></PlaceCard>
        </div>
        <div class="place-detail elevation-9" :class="{ show: isOpen }">
          <div class="detail-header">
            <span v-ripple class="ticon-close" @click="closeDetails"></span>
            <img
              src="../assets/places/catedral-huapi.jpg"
              alt="Catedral Nuestra Señora del Nahuel Huapi"
              class="detail-img"
            />
            <h5 class="detail-title">
              Catedral Nuestra Señora del Nahuel Huapi
            </h5>
          </div>
          <div class="detail-content">
            <div
              class="detail-item"
              v-for="(resena, index) in resenas.resenas"
              :key="'detail-item' + index"
            >
              <div class="detail-item-header">
                <router-link to="/perfil">
                  <img
                    :src="require('../assets/users/' + resena.img)"
                    :alt="resena.name"
                    class="detail-item-avatar"
                  />
                  <span class="detail-item-author">{{ resena.name }}</span>
                </router-link>
                <div class="detail-item-stars">
                  <span
                    v-for="n in resena.rating"
                    :key="'star-' + n"
                    class="ticon-star"
                  ></span>
                  <span
                    v-for="n in 5 - resena.rating"
                    :key="'emptystar-' + n"
                    class="ticon-emptystar"
                  ></span>
                </div>
              </div>
              <div class="detail-item-content">
                {{ resena.body }}
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>
    <section class="specialized-gurus">
      <v-container>
        <v-row align="center">
          <v-col>
            <div
              class="blue-misc from-left"
              style="width:45%; top: 10vh;"
            ></div>
            <h2
              class="section-title magenta center"
              style="z-index: 2; position: relative"
            >
              Tenemos <b>Geogurús</b> especializados en <b>Bariloche</b>
            </h2>
            <v-row style="z-index: 2; position: relative">
              <v-col class="center">
                <img
                  src="../assets/geogurus/estela.png"
                  alt=""
                  class="circle-avatar"
                />
                <span class="guru-name mt-2 mb-6">Estela M.</span>
                <Button xlarge padding color="success" to="/perfilgeoguru"
                  >Ver perfil</Button
                >
              </v-col>
              <v-col class="center">
                <img
                  src="../assets/geogurus/julian.png"
                  alt=""
                  class="circle-avatar"
                />
                <span class="guru-name mt-2 mb-6">Juli&aacute;n E.</span>
                <Button xlarge padding color="success" to="/perfilgeoguru"
                  >Ver perfil</Button
                >
              </v-col>
              <v-col class="center">
                <img
                  src="../assets/geogurus/marialuz.png"
                  alt=""
                  class="circle-avatar"
                />
                <span class="guru-name mt-2 mb-6">Mar&iacute;a Luz S.</span>
                <Button xlarge padding color="success" to="/perfilgeoguru"
                  >Ver perfil</Button
                >
              </v-col>
              <v-col class="center">
                <img
                  src="../assets/geogurus/esteban.jpg"
                  alt=""
                  class="circle-avatar"
                />
                <span class="guru-name mt-2 mb-6">Esteban K.</span>
                <Button xlarge padding color="success" to="/perfilgeoguru"
                  >Ver perfil</Button
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<style lang="scss" scoped>
section.fold-image {
  background-image: url("../assets/destinations/bariloche.jpg");
  background-position: center center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    height: 100%;
    z-index: 1;
    position: relative;
    .row {
      height: 100%;

      p.article-extract {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .tags {
      position: absolute;
      bottom: 40px;
      left: 0;
      right: 0;
    }
  }
}

section.description {
  height: 80vh;
  padding-top: 10vh;

  .container {
    height: 100%;
  }
  .row {
    height: 100%;
  }

  .user-image {
    overflow: hidden;
    border-radius: $br-normal;
    position: relative;
    padding-top: 50%;

    & > img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  .tag.user-tag {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.25);
    margin: 0;
    cursor: default;

    .user-avatar {
      border-radius: 50%;
      display: inline-block;
      width: 18px;
      height: 18px;
    }
  }

  p.destination-extract {
    font-weight: 500;
  }
}

section.faq {
  min-height: 60vh;

  .container {
    height: 100%;

    .row {
      height: 100%;
    }
  }

  .v-expansion-panel-header {
    font-size: 18px;
    font-weight: 600;
  }

  .v-expansion-panel-content {
    font-weight: 500;
  }
}

section.destination-map {
  background-image: url("../assets/fake-map.png");
  height: 100vh;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  position: relative;

  .container {
    position: relative;
    height: 100%;

    .places-container {
      padding-right: 20px;
      overflow-y: scroll;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      padding-top: 75px;
      transition: opacity 0.4s;
      transition-delay: 0.2s;
      opacity: 0;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none; /*Chrome, Safari and Opera */
      }

      &.show {
        opacity: 1;
        z-index: 2;
      }
    }

    .place-detail {
      transition: opacity 0.4s;
      transition-delay: 0.2s;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 100px;
      bottom: 25px;
      width: 400px;
      background-color: $wh;
      border-radius: $br-normal;
      border-top-right-radius: $br-accented;
      overflow: hidden;

      &.show {
        opacity: 1;
        z-index: 2;
      }

      .detail-header {
        height: 200px;
        position: relative;
        width: 100%;
        padding: 0 60px;

        &:after {
          content: "";
          background: $white-gradient-2;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }

        span.ticon-close {
          color: $wh;
          position: absolute;
          z-index: 3;
          left: 20px;
          top: 20px;
          cursor: pointer;
        }

        img.detail-img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        h5.detail-title {
          font-weight: 600;
          font-size: 18px;
          position: absolute;
          z-index: 3;
          left: 60px;
          right: 60px;
          top: 140px;
        }
      }

      .detail-content {
        padding: 0 60px;
        overflow-y: scroll;
        position: absolute;
        top: 200px;
        left: 0;
        right: 0;
        bottom: 0;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        &::-webkit-scrollbar {
          display: none; /*Chrome, Safari and Opera */
        }

        .detail-item {
          border-radius: $br-normal;
          border: 2px solid $ta-green;
          padding: 18px;
          margin: 20px 0;

          .detail-item-header {
            a {
              color: $bl;
              text-decoration: none;

              .detail-item-avatar {
                width: 26px;
                height: 26px;
                border-radius: 50%;
                object-fit: cover;
                vertical-align: middle;
                margin-right: 6px;
              }

              .detail-item-author {
                font-size: 14px;
                font-weight: 600;
                vertical-align: middle;
              }
            }

            .detail-item-stars {
              margin-top: 6px;

              span.ticon-star {
                color: $ta-green;
              }

              span.ticon-emptystar {
                color: $gr1;
              }
            }
          }

          .detail-item-content {
            font-size: 14px;
            font-weight: 500;
            color: $bl;
          }
        }
      }
    }
  }
}

section.specialized-gurus {
  position: relative;
  height: 100vh;

  .container {
    height: 100%;
    .row {
      height: 100%;
    }
  }

  .circle-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
  }

  .guru-name {
    display: block;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
