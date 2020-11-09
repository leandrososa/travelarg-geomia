<template>
    <v-select style="font-weight:600" outlined :label="label"></v-select>
</template>
<script>
    export default {
        name: 'SelectInput',
        props: {
            'label': {
                default: ''
            }
        }
    }
</script>