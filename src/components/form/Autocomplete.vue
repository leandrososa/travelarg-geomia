<template>
  <v-autocomplete
    style="font-weight:600"
    outlined
    :label="label"
    :rounded="rounded"
    :dense="dense"
    :append-icon="appendIcon"
    :item-text="itemText"
  ></v-autocomplete>
</template>
<script>
export default {
  name: "Autocomplete",
  props: {
    label: {
      default: ""
    },
    rounded: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    appendIcon: {
      default: ""
    },
    itemText: {
      default: ""
    }
  }
};
</script>
