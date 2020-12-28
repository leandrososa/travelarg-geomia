<script>
import Button from "@/components/Button.vue";
import GuruReview from "@/components/GuruReview.vue";
import Counter from "@/components/form/Counter.vue";

export default {
  data() {
    return {
      tripdetails: false,
      guruplaces: [
        "San Carlos de Bariloche",
        "Villa La Angostura",
        "San Martín de los Andes"
      ],
      months2020: ["Nov", "Dic"],
      months2021: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"],
      dayscounter: 7,
      adultscounter: 2,
      kidscounter: 0,
      budget: ["< $20000", "$20000 - $50000", "$50000 - $80000", "> $80000"]
    };
  },
  components: {
    Button,
    GuruReview,
    Counter
  }
};
</script>
<template>
  <div id="perfilgeoguru">
    <section class="geoguru-fold">
      <v-container>
        <div class="guru-name">
          <h1>Estela M.</h1>
          <h4 class="guru-location">San Carlos de Bariloche, Rio Negro</h4>
        </div>
        <v-row>
          <v-col cols="4">
            <div class="guru-avatar">
              <img src="../assets/geogurus/estela.png" alt="Estela M." />
            </div>
            <p class="guru-extract">
              ¿Como v&aacute;? Comence a hacer esqu&iacute; a los 20 años,
              practicando en el equipo de la municipalidad de Bariloche. Fui
              campeona sudamericana de biatlón siete veces, la última de ellas
              en agosto de 2017 en Chile. Hoy en dia me dedico a dar a conocer
              destinos invernales, ya que la nieve esta muy ligada a mi pasión.
            </p>
          </v-col>
          <v-col cols="8">
            <div class="destination-image">
              <img src="../assets/destinations/bariloche.jpg" alt="Bariloche" />
            </div>
            <v-tabs slider-size="4" color="#1CBBB4">
              <v-tab>San Carlos de Bariloche</v-tab>
              <v-tab>Villa La Angostura</v-tab>
              <v-tab>San Martín de los Andes</v-tab>
            </v-tabs>
            <p class="destination-extract">
              Ya sea que vayas en verano para disfrutar de sus lagos y del calor
              del sol o en invierno, para recorrer sus cerros y divertirte con
              la nieve, Bariloche siempre es una buena excusa. Respirá verde, en
              el centro o en el medio del Parque Nacional Nahuel Huapi,
              cualquier parte de la ciudad te conecta con la naturaleza.
            </p>
            <div class="guru-reviews">
              <h3 class="guru-reviews-place">Bariloche</h3>
              <GuruReview
                :stars="3"
                img="catedral-huapi.jpg"
                name="Catedral Nuestra Señora de Nahuel Huapi"
                review="Gran obra arquitectónica. Se puede observar en su interior la estructura de hormigón, combinada con las piedras típicas de las construcciones de Bariloche. Bellísimos vitrales, y originales relieves que relatan la pasión de Cristo de manera autóctona."
              ></GuruReview>
              <GuruReview
                :stars="4"
                img="museo-patagonia.jpg"
                name="Museo Patagonia"
                review="Esta frente al centro cívico. El acceso al museo tiene costo de un bono, los fondos se utilizan para el cuidado del mismo. Hay gran cantidad de objetos de la historia de Bariloche. Además de animales. Esta muy bien cuidado, es una linda experiencia para recorrer y aprender bastante, hay que ir con tiempo para poder leer todo. Esta separado por sectores bien informados."
              ></GuruReview>
              <h3 class="guru-reviews-place">Villa La Angostura</h3>
              <GuruReview
                :stars="5"
                img="messidor.jpg"
                name="Residencia El Messidor"
                review="El Messidor es un pequeño castillo de estilo francés, rodeado de jardines, construido a metros del lago Nahuel Huapí en el casco histórico de Villa La Angostura por el arquitecto Alejandro Bustillo en 1942 a pedido de la Sra. Sara Madero de Demaría."
              ></GuruReview>
              <div class="center">
                <Button large color="primary">Cargar mas</Button>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="why-hire">
      <v-container>
        <v-row align="center">
          <v-col>
            <div
              class="blue-misc from-left"
              style="width:85%; top: 10vh; height: 15vh"
            ></div>
            <h4 class="section-title magenta">
              ¿Que ofrezco con mi servicio de <b>Geogur&uacute;?</b>
            </h4>
            <ul>
              <li>Un plan de viaje a tu medida</li>
              <li>Reservas para hoteles y actividades</li>
              <li>Recomendaciones de establecimientos</li>
              <li>
                Chat ilimitado con Geogur&uacute; antes y durante tu viaje
              </li>
              <li>Informacion sobre status de restricciones por COVID-19</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="talk-with-guru">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <h2 class="section-title light-bluee center">
              Chatea con <b>Estela</b>
            </h2>
            <h5 class="section-subtitle center mb-10">
              Chatear es completamente gratis, antes de decidirte si deseas
              contratar a el/la Geogurú. Si te decidís, podes acceder a la
              experiencia por <b>$7999</b>.
            </h5>
            <div class="center">
              <Button
                v-if="this.$session.exists('isLogged')"
                @click.native.stop="tripdetails = true"
                xlarge
                padding
                color="info"
                ><span class="ticon-chat"></span> Chatear con Estela</Button
              >
              <Button v-else xlarge padding color="primary"
                ><span class="ticon-login"></span> Ingresar para chatear con
                Estela</Button
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- tripdetails -->
    <v-dialog content-class="br-b-r-100" v-model="tripdetails" width="1000">
      <div class="ta-modal center">
        <v-container>
          <h3 class="modal-title left">Antes de chatear...</h3>
          <p class="modal-subtitle left">
            Da a <b>Estela</b> algunos detalles sobre tu viaje y preferencias
          </p>

          <v-row>
            <v-col cols="3">
              <span class="details-label">Lugar</span>
            </v-col>
            <v-col>
              <v-select
                style="font-weight:600"
                outlined
                :items="guruplaces"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span class="details-label">Mes/es</span>
            </v-col>
            <v-col cols="4">
              <span class="details-year">2020</span>
              <div class="ta-btn-radio left">
                <template v-for="month in months2020">
                  <input
                    :key="month + '2020'"
                    type="checkbox"
                    :id="month + '2020'"
                    name="months2020"
                    :value="month + '2020'"
                  />
                  <label
                    :key="month + '2020lbl'"
                    v-ripple
                    :for="month + '2020'"
                    >{{ month }}</label
                  >
                </template>
              </div>
            </v-col>
            <v-col cols="4" offset="1">
              <span class="details-year">2021</span>
              <div class="ta-btn-radio left">
                <template v-for="month in months2021">
                  <input
                    :key="month + '2021'"
                    type="checkbox"
                    :id="month + '2021'"
                    name="months2021"
                    :value="month + '2021'"
                  />
                  <label
                    :key="month + '2021lbl'"
                    v-ripple
                    :for="month + '2021'"
                    >{{ month }}</label
                  >
                </template>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span class="details-label">D&iacute;as</span>
            </v-col>
            <v-col>
              <Counter label="día/s" :counter="dayscounter"></Counter>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span class="details-label">Viajeros</span>
            </v-col>
            <v-col cols="3">
              <Counter label="adulto/s" :counter="adultscounter"></Counter>
            </v-col>
            <v-col>
              <Counter label="niño/s" :counter="kidscounter"></Counter>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span class="details-label">Presupuesto</span>
              <p class="details-details">
                En pesos argentinos. Excluyendo pasajes y el costo de Geogurú.
              </p>
            </v-col>
            <v-col>
              <div class="ta-btn-radio left">
                <template v-for="(bud, index) in budget">
                  <input
                    :key="'bud' + index"
                    type="radio"
                    :id="'bud' + index"
                    name="budgets"
                    :value="'bud' + index"
                  />
                  <label :key="'budlb' + index" v-ripple :for="'bud' + index">{{
                    bud
                  }}</label>
                </template>
              </div>
            </v-col>
          </v-row>
          <div class="right">
            <Button
              to="/chatgeoguru"
              large
              color="info"
              @click.native="tripdetails = false"
              ><span class="ticon-chat"></span> Empezar a chatear</Button
            >
          </div>
        </v-container>
      </div>
    </v-dialog>
    <!--  //////// tripdetails -->
  </div>
</template>
<style lang="scss" scoped>
section.geoguru-fold {
  margin-top: 100px;

  .guru-name {
    color: $ta-green;
    h1 {
      font-size: 48px;
      font-weight: 700;
      display: inline-block;
      margin-right: 12px;
    }

    .guru-location {
      font-size: 24px;
      font-weight: 500;
      display: inline-block;
    }
  }

  .guru-avatar {
    position: relative;
    border-radius: $br-normal;
    overflow: hidden;
    padding-top: 75%;
    margin-bottom: 12px;

    img {
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

  .guru-extract {
    font-size: 14px;
    font-weight: 500;
  }

  .destination-image {
    position: relative;
    border-radius: $br-normal;
    border-top-right-radius: $br-accented;
    overflow: hidden;
    padding-top: 55%;
    margin-bottom: 12px;

    img {
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

  .destination-extract {
    margin-top: 12px;
    font-weight: 500;
    font-size: 18px;
  }

  .guru-reviews {
    padding-top: 24px;
    .guru-reviews-place {
      font-size: 24px;
      font-weight: 600;
    }
  }
}

section.why-hire,
section.talk-with-guru {
  height: 80vh;
  position: relative;

  .container {
    height: 100%;

    .row {
      height: 100%;

      h4.section-title {
        position: relative;
        z-index: 2;
      }

      ul {
        position: relative;
        z-index: 2;
      }
    }
  }
}

.details-label {
  display: block;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
}

.details-year {
  display: block;
  font-size: 28px;
  font-weight: 500;
  color: $gr2;
  text-align: left;
}

.ta-btn-radio label {
  padding: 4px 6px;
  text-align: center;
  min-width: 55px;
  margin-bottom: 6px;
  margin-right: 6px;
}

.details-details {
  text-align: left;
  font-size: 14px;
  font-weight: 600;
}
</style>
