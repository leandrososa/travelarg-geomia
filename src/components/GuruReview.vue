<script>
export default {
  name: "GuruReview",
  props: {
    name: {
      default: "Nombre lugar"
    },
    stars: {
      type: Number,
      default: 3
    },
    img: {
      default: "museo-patagonia"
    },
    review: {
      default: "Aca la review"
    }
  }
};
</script>
<template>
  <div class="guru-review-item">
    <v-row>
      <v-col cols="4">
        <div class="review-photo">
          <img :src="require('../assets/places/' + img)" :alt="name" />
        </div>
      </v-col>
      <v-col cols="8">
        <div class="review-place">{{ name }}</div>
        <div class="review-rating">
          <span v-for="n in stars" :key="'star-' + n" class="ticon-star"></span>
          <span
            v-for="m in 5 - stars"
            :key="'emptystar-' + m"
            class="ticon-emptystar"
          ></span>
        </div>
        <p class="review-body">{{ review }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.review-photo {
  border-radius: $br-normal;
  border-top-right-radius: $br-accented;
  padding-top: 70%;
  overflow: hidden;
  position: relative;
  width: 100%;
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

.review-place {
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
}

.review-rating span {
  margin-top: 12px;
  font-size: 17px;
  margin-right: 3px;
  display: inline-block;

  &.ticon-emptystar {
    color: $gr;
  }

  &.ticon-star {
    color: $ta-green;
  }
}

.review-body {
  font-size: 14px;
  font-weight: 500;
}
</style>
