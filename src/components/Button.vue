<template>
    <v-btn :color='color' :class="{ 'con-padding' : padding }" :elevation='elevation' :x-large='xlarge' :large='large' rounded><slot></slot></v-btn>
</template>
<script>
export default {
    name: 'Button',
    props: {
        'color': {
            default: 'primary'
        },
        'elevation': {
            default: 0
        },
        'large': {
            type: Boolean,
            default: false
        },
        'xlarge': {
            type: Boolean,
            default: false
        },
        'padding': {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style>
    .v-btn.con-padding{
        padding: 0 50px !important
    }
</style>