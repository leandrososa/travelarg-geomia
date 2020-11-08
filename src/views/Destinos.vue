<script>
    import json from '@/json/destinos.json';
    export default{
        data(){
            return{
                destinos: json
            }
        }
      }
</script>
<template>
    <div id="destinos">
        <v-container>
            <h1>Destinos</h1>
            <div>
                <router-link :to="'/destino?id='+index" class="destination-item" v-for="(destino, index) in destinos.destinos" :key="index" :id="index">
                    <p>{{destino.c}}</p>
                </router-link>
            </div>
        </v-container>
        
    </div>
</template>
<style lang="scss" scoped>
    .destination-item{

        width: 300px;
        height: 300px;
        display: inline-block;
        padding: 8px;
        background-color: sandybrown;
        margin-right: 16px;
        margin-bottom: 16px;
        position: relative;
        p{
            font-size: 1.5rem;
            font-family: 'Galatea', sans-serif;
            position: absolute;
            left: 8px;
            right: 8px;
            bottom: 8px;
            margin: 0;
            color: $wh;
        }
    }
</style>