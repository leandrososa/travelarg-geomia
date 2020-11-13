<template>
    <v-select style="font-weight:600" outlined :label="label" :rounded="rounded" :dense="dense"></v-select>
</template>
<script>
    export default {
        name: 'SelectInput',
        props: {
            'label': {
                default: ''
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