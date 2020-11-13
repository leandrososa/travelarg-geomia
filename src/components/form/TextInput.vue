<template>
    <v-text-field style="font-weight:600" :label="label" :outlined="outlined" :single-line="singleline" :placeholder="placeholder" :rounded="rounded" :type="type" :dense="dense"></v-text-field>
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
            },
            'placeholder': {
                default: ''
            },
            'type': {
                default: 'text'
            },
            'rounded': {
                type: Boolean,
                default: false
            },
            'dense': {
                type: Boolean,
                default: false
            }
        }
    }
</script>