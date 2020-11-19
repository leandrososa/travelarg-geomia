<script>
    import Button from "../components/Button.vue";

    export default {
        components: {
            Button
        }
    }
</script>
<template>
    <div id="geogurucontratado">
        <div style="height:80px">

        </div>
        <v-container>
            <h1>¡Qué disfrutes tu experiencia!</h1>
            <h3>¿Que hago a continuación?</h3>
            <img class="dots-misc" src="../assets/dots-misc.svg" alt="" />
            <v-row>
                <v-col>
                    <span class="number-bullet elevation-6">1</span>
                    <span class="ticon-mails"></span>
                    <p>Revisa tu mail <b>correo@tucorreo.com</b> si queres  ver el resumen de tu operacion</p>
                </v-col>
                <v-col>
                    <span class="number-bullet elevation-6">2</span>
                    <span class="ticon-contact"></span>
                    <p>Aguardá el contacto de tu <b>gurú</b> por las vias de comunicacion aportadas dentro de las proximas <b>24 horas</b></p>
                </v-col>
                <v-col>
                    <span class="number-bullet elevation-6">3</span>
                    <span class="ticon-handsworld"></span>
                    <p>Coordinen en conjunto el mejor plan para aprovechar todos los beneficios.</p>
                </v-col>
            </v-row>
            <div class="right mt-12">
                <Button padding to="/" xlarge outlined color="primary">Volver a la home</Button>
                <Button padding class="ml-4" to="/destino" xlarge color="success">Ir al destino</Button>
            </div>
        </v-container>
    </div>
</template>
<style lang="scss">
    nav{
        display: none;

        &.nav + main{
            margin-left: 0;
        }

        &.nav + main  header{
            left: 0px;
        }
    }

    h1{
        text-align: center;
        font-size: 42px;
        font-weight: 600;
        color: $ta-green;
    }

    h3{
        font-size: 32px;
        font-weight: 600;
        margin: 32px 0;
    }

    .dots-misc{
        position: absolute;
        transform: translateX(-50%);
        top: 0;
    }

     span.ticon-mails, span.ticon-contact, span.ticon-handsworld{
         font-size: 120px;
         color: $ta-light-blue;
     }

     .row .col{
         text-align: center;
         position: relative;

         .number-bullet{
             background-color: $ta-magenta;
             font-weight: 700;
             width: 36px;
             height: 36px;
             text-align: center;
             border-radius: 50%;
             display: inline-block;
             color: $wh;
             line-height: 36px;
             position: absolute;
             left: 0;
             top: 0;
         }

         p{
             margin: 24px 20px 0 20px;
             font-weight: 500;

         }
     }
</style>