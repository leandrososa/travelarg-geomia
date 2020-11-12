<script>
    import Button from "@/components/Button.vue";

    export default {
        components: {
            Button
        }
    }
</script>
<template>
    <div id="geogurus">
       <section class="fold-image">
            <v-container>
                <v-row align="center">
                    <v-col cols="6">
                        <h1 class="fold-title white--text">
                            Despreocupate con nuestros <b>Geogur&uacute;s</b>
                        </h1>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="why-hire">
            <v-container>
                <v-row  align="center"> 
                    <v-col>
                        <div class="blue-misc from-left" style="width:85%; top: 10vh; height: 30vh"></div>
                        <h4 class="section-title magenta">¿Para que contratar un <b>Geogur&uacute;?</b></h4>
                        <ul>
                            <li>Un plan de viaje a tu medida</li>
                            <li>Reservas para hoteles y actividades</li>
                            <li>Recomendaciones de establecimientos</li>
                            <li>Chat ilimitado con Geogur&uacute; antes y durante tu viaje</li>
                            <li>Informacion sobre status de restricciones por COVID-19</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="featured-gurus">
            <v-container>
                <v-row>
                    <v-col>
                        <img class="dots-misc" src="../assets/dots-misc.svg" alt="" />
                        <h4 class="section-title">Los mas destacados</h4>

                        <v-row>
                            <v-col>
                                <router-link to="/perfilgeoguru" class="featured-item">
                                    <div class="featured-image" v-ripple><img src="../assets/destinations/bariloche.jpg" alt="Bariloche"></div>
                                    <img src="../assets/geogurus/estela.png" alt="Estela M." class="featured-avatar">
                                    <span class="featured-name">Estela M.</span>
                                    <p class="featured-specialities">Bariloche, Villa La Angostura,  San Martín de los Andes</p>
                                </router-link>
                            </v-col>
                            <v-col>
                                <router-link to="/perfilgeoguru" class="featured-item">
                                    <div class="featured-image" v-ripple><img src="../assets/destinations/tandil.jpg" alt="Tandil"></div>
                                    <img src="../assets/geogurus/esteban.jpg" alt="Esteban K." class="featured-avatar">
                                    <span class="featured-name">Esteban K.</span>
                                    <p class="featured-specialities">Tandil, La Falda, Sierra de la Ventana</p>
                                </router-link>
                            </v-col>
                            <v-col>
                                <router-link to="/perfilgeoguru" class="featured-item">
                                    <div class="featured-image" v-ripple><img src="../assets/destinations/mardelplata.jpg" alt="Mar del Plata"></div>
                                    <img src="../assets/geogurus/yanina.jpg" alt="Yanina G." class="featured-avatar">
                                    <span class="featured-name">Yanina G.</span>
                                    <p class="featured-specialities">Mar del Plata, San Bernardo, Pinamar</p>
                                </router-link>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="become-guru">
            <v-container>
                <v-row align="center">
                    <v-col cols="8">
                        <div class="blue-misc" style="width:50%"></div>
                        <h2 class="section-title magenta left">
                            Unite a nuestro equipo de <b>Geogur&uacute;s</b>
                        </h2>
                        <h5 class="section-subtitle left mb-10">
                        Convierte tu tiempo libre en ganancias, compartiendo tus experiencias a otros.
                        </h5>
                        <Button xlarge padding color="success">Aplicar</Button>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    section.fold-image {
        background-image: url("../assets/geogurus-fold.png");
        background-position: center center;
        background-size: cover;
        position: relative;
        overflow: hidden;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .container {
            height: 100%;
            z-index: 1;
            position: relative;
            .row {
            height: 100%;

            p.article-extract {
                font-size: 18px;
                font-weight: 600;
            }
            }

            .tags{
                position: absolute;
                bottom: 40px;
                left: 0;
                right: 0;
            }
        }
    }

    section.why-hire{
        height: 80vh;
        position: relative;

        .container{
            height: 100%;

            .row{
                height: 100%;

                

                h4.section-title{
                    position: relative;
                    z-index: 2;
                }

                ul{
                    position: relative;
                    z-index: 2;
                }
            }
        }
    }

    section.featured-gurus{

        min-height: 40vh;

        .container{
            height: 100%;

            .row{
                height: 100%;

                .col{
                    position: relative;
                    
                    .dots-misc {
                        position: absolute;
                        top: 0;
                        left: 0;
                        transform: translate(-50%, -50%);
                    }

                    .featured-item{
                        display: block;
                        color: $bl;
                        text-decoration: none;

                        .featured-image{
                            border-radius: $br-normal;
                            border-top-right-radius: $br-accented;
                            padding-top: 70%;
                            overflow: hidden;
                            position: relative;
                            width: 100%;
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

                        .featured-avatar{
                            width: 40px;
                            height: 40px;
                            object-fit: cover;
                            object-position: center center;
                            border-radius: 50%;
                            vertical-align:middle;
                            margin-top: 12px;
                            margin-bottom: 12px;
                        }

                        .featured-name{
                            font-size: 18px;
                            font-weight: 600;
                            vertical-align:middle;
                            margin-left: 12px;
                        }

                        .featured-specialities{

                            font-weight: 600;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    section.become-guru{
        height: 80vh;

        .container{
            height: 100%;

            .row{
                height: 100%;
            }
        }
    }
</style>