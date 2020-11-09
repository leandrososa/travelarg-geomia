<template>
    <v-text-field style="font-weight:600" :label="label" :outlined="outlined" :single-line="singleline"></v-text-field>
</template>
<script>
    export default {
        name: 'TextInput',
        props: {
            'label': {
                default: ''
            },
            'singleline': {
                type: Boolean,
                default: false
            },
            'outlined': {
                type: Boolean,
                default: true
            }
        }
    }
</script>