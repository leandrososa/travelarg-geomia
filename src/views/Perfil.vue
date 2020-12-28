<script>
import GuruReview from "@/components/GuruReview.vue";

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
    GuruReview
  }
};
</script>
<template>
  <div id="perfil">
    <section class="geoguru-fold">
      <v-container>
        <div class="guru-name">
          <h1>Julia R.</h1>
          <h4 class="guru-location"></h4>
        </div>
        <v-row>
          <v-col cols="4">
            <div class="guru-avatar">
              <img src="../assets/self-profile.png" alt="Estela M." />
            </div>
            <p class="guru-extract">
              <i>Sin biograf&iacute;a</i>
              <span class="ticon-pencil success--text"></span>
            </p>
          </v-col>
          <v-col cols="8">
            <div class="guru-reviews">
              <h3 class="guru-reviews-place">Bariloche</h3>
              <GuruReview
                :stars="3"
                img="catedral-huapi.jpg"
                name="Catedral Nuestra Señora de Nahuel Huapi"
                review="Gran obra arquitectónica. Se puede observar en su interior la estructura de hormigón, combinada con las piedras típicas de las construcciones de Bariloche. Bellísimos vitrales, y originales relieves que relatan la pasión de Cristo de manera autóctona."
              ></GuruReview>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
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
    margin-top: -48px;
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
