<script>
    import json from '@/json/destinos-geomia.json';
    import TextInput from "@/components/form/TextInput.vue";
    import SelectInput from "@/components/form/SelectInput.vue";
    import Combobox from "@/components/form/Combobox.vue";
    import Button from "@/components/Button.vue";

    export default{
        data(){
            return{
                destinos: json,
                images: []
            }
        },
        components: {
            TextInput,
            SelectInput,
            Combobox,
            Button
        }
      } 
</script>
<template>
    <div id="destinos">
        <section class="fold-image">
            <v-container >
                <v-row align="center">
                    <v-col cols="6" align>
                        <h2 class="fold-title white--text">Descubr&iacute; los lugares que no conoc&iacute;as de <b>Argentina</b></h2>
                    </v-col>
                </v-row>
                
                <router-link class="bottom-reference white--text" to="/destino">Bariloche, Rio Negro</router-link>
            </v-container>
        </section>
        <section class="destinations">
            <v-container>
                <h2 class="section-title magenta left">
                Explorar destinos
                </h2>
                <div class="filters">
                    <TextInput singleline label="Filtrar"></TextInput>
                    <v-row>
                        <v-col cols="3">
                            <SelectInput label="Por provincia"></SelectInput>
                        </v-col>
                        <v-col cols="4">
                            <Combobox label="Por categorias"></Combobox>
                        </v-col>
                    </v-row>
                </div>
                <v-row class="destinations-list">
                    <v-col cols="3" v-for="(destino, index) in destinos.destinos" :key="index">
                        <router-link to="/destino" class="destination-item"  :id="index" v-ripple>
                            <img :src="require('../assets/destinations/' + destino.img + '.jpg')" :alt="destino.c"/>
                            <div class="destination-info">
                                <p class="white--text">{{destino.c}}</p>
                                <span class="white--text">{{destino.p}}</span>
                            </div>
                        </router-link>
                    </v-col>
                    <v-col class="mt-6" cols="12" align="center">
                        <Button xlarge padding>Cargar más</Button>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="get-guru">
            <v-container>
                <v-row>
                <v-col cols="8">
                    <div class="blue-misc" style="width:20%"></div>
                    <h2 class="section-title magenta left">
                    Consegu&iacute; un Geogur&uacute; acorde a tus necesidades
                    </h2>
                    <h5 class="section-subtitle left mb-10">
                    Recib&iacute; consejo profesional y aprovech&aacute; tus
                    vacaciones al 100%
                    </h5>
                    <Button to="/geogurus" xlarge padding color="success">Ver más</Button>
                </v-col>
                </v-row>
            </v-container>
        </section>
        
    </div>
</template>
<style lang="scss" scoped>
    section.fold-image{
        
        background: url("../assets/destinations/bariloche.jpg") rgba(0,0,0,.36);
        background-position: center center;
        background-size: cover;

        .container{
            height: 80%;
            .row{
                height: 100%;
            }
        }
    }

    section.destinations{
        .destinations-list{

            .destination-item{
                display: inline-block;
                width: 100%;
                padding-top: 100%;
                position: relative;
                color: $bl;
                text-decoration: none;
                overflow: hidden;
                border-radius: $br-normal;
                color: $ta-magenta;

                &:before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: $safe-gradient;
                    z-index: 2;

                }

                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                    
                }

                .destination-info{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 26px 23px;
                    z-index: 3;

                    p{
                        font-weight: 700;
                        margin: 0;
                    }

                    span{
                        font-weight: 600;
                        opacity: .7;
                        padding: 0;
                    }
                }

                
            }
        }
    }


</style>