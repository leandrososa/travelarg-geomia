<script>
    import Button from "@/components/Button.vue";

    export default{
        data(){
            return{

            }
        },
        components: {
            Button
        }
      } 
</script>
<template>
    <div id="resenacompleta">
        <section class="new-review">
            <v-container>
                <h2 class="section-title center mt-16 mb-4">
                    Julia, ¡gracias por tu reseña!
                </h2>
                <p class="center">¿Visitaste alguno de estos lugares también? Podés aportar mas reseñas.</p>
                <v-row>
                    <v-col cols="6" v-for="n in 6" :key="n">
                        <v-row>
                            <v-col>
                                <div class="place-image"><img src="../assets/destinations/bariloche.jpg" alt=""></div>
                            </v-col>
                            <v-col class="pt-8">
                                <span class="place-city">Bariloche</span>
                                <span class="place-name">Catedral Nuestra Señora de Nahuel Huapi</span>
                                <div class="place-rating mt-6">
                                    <span class="ticon-star"></span>
                                    <span class="ticon-star"></span>
                                    <span class="ticon-star"></span>
                                    <span class="ticon-emptystar"></span>
                                    <span class="ticon-emptystar"></span>
                                </div>
                        </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <div class="right">
                    <Button to="/" class="mx-2" xlarge padding outlined color="primary">Volver a la home</Button>
                    <Button to="/destino" xlarge padding color="success">Volver al destino</Button>
                </div>
            </v-container>
            
        </section>
    </div>
</template>
<style lang="scss" scoped>
    .place-image{
        border-radius: $br-normal;
        border-top-right-radius: $br-accented;
        position: relative;
        padding-top: 65%;
        overflow: hidden;
        width: 280px;
        img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width:100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }

    p{
        font-size: 18px;
        font-weight: 600;
    }

    .place-city{
        font-size: 16px;
        font-weight: 600;
        display: block;
    }

    .place-name{
        font-size: 18px;
        font-weight: 600;
        display: block;

    }

    .place-rating{

        span{
            font-size: 21px;
        }

        .ticon-star{
            color: $ta-green;
        }

        .ticon-emptystar{
            color: $gr1;
        }
    }
</style>