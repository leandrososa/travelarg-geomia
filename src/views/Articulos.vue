<script>
import json from "@/json/articulos.json";

export default {
    data() {
        return{
            catnoticias: [{name: 'Últimas noticias'}, {name: 'Historia y cultura'}, {name: 'Entrevistas'}, {name: 'Aventuras extremas'}, {name: 'Tips'}, {name: 'Actualidad'}],
            noticias: json
        }
    }
    
}
</script>
<template>
    <div id="articulos">
        <section class="fold-image">
            <v-container>
                <v-row align="center">
                    <v-col cols="9" align>
                        <h1 class="fold-title"><router-link class="white--text" to="/articulo">3 hoteles boutique que desaf&iacute;an la pandemia</router-link></h1>
                        <p class="article-extract mt-10 white--text">El presidente uruguayo admiti&oacute; que la decisi&oacute;n atenta contra uno de los pilares de la econom&iacute;a. Tampoco permitir&iacute;an turistas de Brasil.</p>
                    </v-col>
                </v-row>
                
            </v-container>
        </section>
        <section class="articles mt-3">
            <v-container>
                <v-tabs slider-size="4" color="#1CBBB4">
                    <v-tab v-for="(categoria, index) in catnoticias" :key="index">{{ categoria.name }}</v-tab>
                </v-tabs>
                <v-row class="articles-list mt-8">
                    <v-col cols="4" v-for="(noticia, index) in noticias" :key="index">
                        <router-link class="article-item" to="/articulo" >
                            <div class="article-image" v-ripple>
                                <img :src="require('../assets/news/' + noticia.img + '.png')" :alt="noticia.name"/>
                            </div>
                            <span class="article-title mt-4">{{noticia.name}}</span>
                        </router-link>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    section.fold-image{
        background-image: url('../assets/news/hotel-boutique.png');
        background-position: center center;
        background-size: cover;
        position: relative;

        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5)
        }

        .container{
            height: 100%;
            z-index: 1;
            position: relative;
            .row{
                height: 100%;

                p.article-extract{
                    
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
    }

    section.articles{
        .article-item{
            color: $ta-magenta;
            text-decoration: none;

            .article-image{
                position: relative;
                padding-top: 66%;
                border-radius: $br-normal;
                overflow: hidden;

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
            }

            .article-title{
                font-size: 18px;
                font-weight: 600;
                color: $bl;
                display: block;
            }
        }
    }
</style>