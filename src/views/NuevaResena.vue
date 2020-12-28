<script>
export default {
  data() {
    return {
      cities: [{ name: "Bariloche" }],
      places: [{ name: "Museo Patagonia" }],
      isSelected: null
    };
  }
};
</script>
<template>
  <div id="nuevaresena">
    <section class="new-review">
      <v-container>
        <h3 class="section-title center mt-16 mb-7">
          Escribí una opinión sobre un lugar que visitaste
        </h3>
        <v-row>
          <v-col>
            <v-autocomplete
              clearable
              @input="isSelected = !isSelected"
              @clear="isSelected = !isSelected"
              style="font-weight:600"
              outlined
              label="Ciudad o destino"
              append-icon=""
              :items="cities"
              item-text="name"
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              :disabled="!isSelected"
              @input="$router.push('/componerresena')"
              clearable
              style="font-weight:600"
              outlined
              label="Hoteles, restaurantes, actividades"
              append-icon=""
              :items="places"
              item-text="name"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <div class="gray-area mt-16">
          <div class="gray-area-content">
            <span class="ticon-newreview"></span>
            <p>No ten&eacute;s reseñas. ¡Agreg&aacute; alguna!</p>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.gray-area {
  background-color: $gr2;
  border-radius: $br-normal;
  position: relative;
  min-height: 50vh;

  .gray-area-content {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .ticon-newreview {
      font-size: 130px;
      color: $gr1;
      display: block;
    }

    p {
      font-weight: 600;
      font-size: 14px;
      color: $gr;
      margin-top: 30px;
    }
  }
}
</style>
