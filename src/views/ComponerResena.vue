<script>
    import TextInput from "@/components/form/TextInput.vue";
    import Button from "@/components/Button.vue";

    export default{
        data(){
            return{

            }
        },
        components: {
            TextInput,
            Button
        }
      } 
</script>
<template>
    <div id="componerresena">
        <section class="review-compose">
            <v-container>
                <v-row>
                    <v-col>
                        <div class="review-place mt-12">
                            <v-row>
                                <v-col cols="3">
                                    <div class="place-image">
                                        <img src="../assets/places/museo-patagonia.jpg" alt="">
                                    </div>
                                </v-col>
                                <v-col>
                                    <h3 class="place-name">Museo Patagonia</h3>
                                    <span class="place-location">Bariloche</span>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="review-main">
                            <div class="review-item">
                                <p class="review-name">Puntuá tu experiencia aquí</p>
                                <div class="review-rating">
                                    <span class="ticon-star"></span>
                                    <span class="ticon-star"></span>
                                    <span class="ticon-star"></span>
                                    <span class="ticon-emptystar"></span>
                                    <span class="ticon-emptystar"></span>
                                </div>
                            </div>
                            <div class="review-item">
                                <p class="review-name">T&iacute;tulo de reseña</p>
                                <TextInput placeholder="Resumí tu reseña o apunta un detalle interesante"></TextInput>
                            </div>
                            <div class="review-item">
                                <p class="review-name">Tu reseña</p>
                                <v-textarea style="font-weight:600" outlined placeholder="Contá tu experiencia en detalle: comida, sevicio, etc"></v-textarea>
                            </div>
                            <h4 class="review-section-title">Cuidados frente a COVID-19 (opcionales)</h4>
                            <div class="review-item">
                                <v-row>
                                    <v-col>
                                        <p class="review-name">¿Los visitantes son obligados a usar <b>tapabocas / mascarilla</b>?</p>
                                    </v-col>
                                    <v-col class="right">
                                        <div class="ta-btn-radio">
                                            <input type="radio" id="mask-y" name="mask" value="mask-y">
                                            <label v-ripple for="mask-y">S&iacute;</label>
                                            <input type="radio" id="mask-n" name="mask" value="mask-n">
                                            <label v-ripple for="mask-n">No</label>
                                            <input type="radio" id="mask-dn" name="mask" value="mask-dn">
                                            <label v-ripple for="mask-dn">No s&eacute;</label>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="review-item">
                                <v-row>
                                    <v-col>
                                        <p class="review-name">¿Hay marcas en los suelos para respetar la <b>distancia social</b>?</p>
                                    </v-col>
                                    <v-col class="right">
                                        <div class="ta-btn-radio">
                                            <input type="radio" id="distance-y" name="distance" value="distance-y">
                                            <label v-ripple for="distance-y">S&iacute;</label>
                                            <input type="radio" id="distance-n" name="distance" value="distance-n">
                                            <label v-ripple for="distance-n">No</label>
                                            <input type="radio" id="distance-dn" name="distance" value="distance-dn">
                                            <label v-ripple for="distance-dn">No s&eacute;</label>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <h4 class="review-section-title">Fotograf&iacute;as
                                
                            </h4>
                            <div class="right">
                                <div class="ta-input-btn">
                                    <input id="photo" type="file">
                                    <label v-ripple for="photo">Agregar una foto</label>
                                </div>
                                
                            </div>
                            <div class="photo-container">
                                <div class="photo-item">
                                    <div class="photo-item-header">
                                        <v-row>
                                            <v-col>
                                                <span class="ticon-phone" ></span>
                                            </v-col>
                                            <v-col class="right">
                                                <span class="ticon-close"></span>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <img class="photo-item-image" src="../assets/userphotos/museopatagonia.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <Button to="/nuevaresena" class="mx-2" xlarge padding outlined color="primary">Cancelar</Button>
                            <Button to="/resenacompleta" xlarge padding color="success">Publicar reseña</Button>
                        </div>
                    </v-col>
                    <v-col cols="1">

                    </v-col>
                    <v-col cols="4">
                        <div class="right-aside">
                            <span class="ticon-newreview"></span>
                            <p>No hay reseñas sobre este destino. <i>¡Eres el primero!</i></p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    section.review-compose{


        .review-place{

            margin-bottom: 42px;
            
            .place-image{
                border-radius: $br-normal;
                border-top-left-radius: $br-accented;
                overflow: hidden;
                position: relative;
                padding-top: 80%;

                img {
                    width: 100%;
                    display: block;
                    margin: 0;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
            }

            .place-name{
                font-weight: 600;
                font-size: 28px;
                color: $ta-green;
            }

            .place-location{
                font-size: 18px;
                font-weight: 600;
            }
        }

        .review-item  p.review-name{
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;

        }

        

        .review-section-title{
            font-size: 18px;
            font-weight: 600;
            margin-top: 24px;
        }

        .ta-input-btn{
            input[type="file"]{
                visibility: hidden;
            }

            label{
                font-size: 14px;
                font-weight: 600;
                border: 1px solid $gr;
                border-radius: $br-normal;
                padding: 4px 20px;
                display: inline-block;
                cursor: pointer;
                user-select: none;
                background-color: $gr;
                color: $wh;
            }
        }

        .review-rating{
            margin-bottom: 26px;

            span{
                font-size: 26px;

                &.ticon-star{
                    color: $ta-green;
                }

                &.ticon-emptystar{
                    color: $gr1;
                }
            }
        }

        .photo-container{
            margin: 8px 0;

            .photo-item{
                width: 168px;
                height: 168px;
                overflow: hidden;
                position: relative;
                background-color: $gr2;
                border-radius: $br-normal;
                display: inline-block;
                margin-right: 24px;

                .photo-item-header{
                    background-color: $gr;
                    position: relative;
                    z-index: 2;

                    span{
                        color: $wh;
                        font-size: 18px;
                    }

                    .row .col{
                        padding: 8px 20px;
                    }

                    .ticon-phone{
                        opacity: .38;
                        font-size: 20px;
                    }
                }

                .photo-item-image{
                   
                    width: 100%;
                    display: block;
                    margin: 0;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
            }
        }

    }

    .right-aside{
        
        background-color: $gr2;
        text-align: center;
        width: 100%;
        height: 100%;
        padding: 82px;


        .ticon-newreview{
            font-size: 130px;
            color: $gr1;
            display: block;
        }

        p{
            font-weight:600;
            font-size: 14px;
            color: $gr;
            margin-top: 30px;
        }
        
    }
</style>