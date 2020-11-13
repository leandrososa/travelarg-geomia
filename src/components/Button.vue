<template>
    <v-btn :color='color' :class="{ 'con-padding' : padding, 'con-padding-sm' : paddingSm }" :elevation='elevation' :x-large='xlarge' :large='large' :to="to" :block="block" rounded :outlined="outlined"><slot></slot></v-btn>
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
        'to': {
            type: String,
            default: ''
        },
        'padding': {
            type: Boolean,
            default: false
        },
        'paddingSm': {
            type: Boolean,
            default: false
        },
        'block': {
            type: Boolean,
            default: false
        },
        'outlined': {
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

    .v-btn.con-padding-sm{
        padding: 0 32px !important
    }

    .v-btn span[class^="ticon-"]{
        margin-right: 16px;
    }
</style>