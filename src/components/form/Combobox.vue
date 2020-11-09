<template>
    <v-combobox style="font-weight:600" outlined :label="label"></v-combobox>
</template>
<script>
    export default {
        name: 'Combobox',
        props: {
            'label': {
                default: ''
            }
        }
    }
</script>