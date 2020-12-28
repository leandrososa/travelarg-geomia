<template>
  <div class="counter">
    <div class="counter-text">{{ counter }} {{ label }}</div>
    <button v-ripple class="ta-custom-button" @click="this.dec">
      -
    </button>
    <button v-ripple class="ta-custom-button" @click="this.inc">
      +
    </button>
  </div>
</template>

<script>
export default {
  tag: "my-counter",
  name: "MyCounter",
  data() {
    return { count: 0 };
  },
  props: {
    counter: {
      default: 5
    },
    label: {
      default: ""
    }
  },
  methods: {
    inc: function() {
      this.counter++;
    },
    dec: function() {
      this.counter--;
    }
  }
};
</script>

<style lang="scss" scoped>
.counter {
  text-align: left;
  margin-bottom: 12px;
}

.counter-text {
  font-size: 22px;
  font-weight: 500;
}

button {
  font-size: 14px;
  font-weight: 600;
  border: 1px solid $gr;
  border-radius: $br-normal;
  padding: 4px 20px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  margin-right: 6px;
  outline: none;

  &:active {
    color: $wh;
    background-color: $ta-green;
    border-color: transparent;
  }
}
</style>
