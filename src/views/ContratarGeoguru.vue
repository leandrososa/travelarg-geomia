<script>
import TextInput from "../components/form/TextInput.vue";
import Button from "../components/Button.vue";

export default {
    components: {
        TextInput,
        Button
    }
}
</script>
<template>
    <div id="contratargeoguru">
        <div style="height:80px">

        </div>
        <v-container>
            <v-row>
                <v-col cols="7">
                    <h1>Completar forma de pago</h1>
                    <div class="ta-btn-radio rounded left">
                        <input checked type="radio" id="creditcard" name="payment" value="creditcard">
                        <label v-ripple for="creditcard">Tarjeta de Crédito</label>                  
                        <input type="radio" id="debitcard" name="payment" value="debitcard">
                        <label v-ripple for="debitcard">Tarjeta de Débito / Recargable</label>    
                    </div>
                    <p class="review-name mt-6">Número de tarjeta</p>
                    <TextInput singleline></TextInput>
                    <p class="review-name">Nombre en la tarjeta</p>
                    <TextInput singleline></TextInput>
                    <v-row>
                        <v-col>
                            <p class="review-name">Mes de vencimiento</p>
                            <TextInput singleline></TextInput>
                        </v-col>
                        <v-col>
                            <p class="review-name">Código CVV</p>
                            <TextInput singleline></TextInput>
                        </v-col>
                    </v-row>
                    <v-checkbox style="font-weight:500" color="info" label="Guardar datos de tarjeta en cuenta"></v-checkbox>
                    <div class="right">
                        <Button padding to="/chatgeoguru" xlarge outlined color="primary">Volver al chat</Button>
                        <Button padding class="ml-4" to="/geogurucontratado" xlarge color="success">Confirmar transacción</Button>
                    </div>
                </v-col>
                <v-col cols="4" offset="1">
                    <div class="order-details">
                        <h3 class="order-title">Detalle de orden</h3>
                        <div class="order-guru">
                            Asesorado por <img src="../assets/geogurus/estela.png" alt="Estela M."> <b>Estela M.</b>
                        </div>
                        <p class="order-place">San Carlos de Bariloche</p>
                        <p class="order-item">Julio 2021, 14 días</p>
                        <p class="order-item">2 adultos</p>
                        <p class="order-item">Presupuesto entre $20000 y $50000</p>
                        <p class="order-total">Total <b>$7999</b></p>
                    </div>
                </v-col>
            </v-row>
            
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
        font-size: 36px;
        color: $ta-green;
        font-weight: 600;
    }

    p.review-name{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;

    }

    .order-details{
        background-color: #f5f5f5;
        border-radius: $br-normal;
        padding: 36px 20px;

        .order-title{
            color: $ta-green;
            font-weight: 600;
            font-size: 24px;
        }

        .order-guru{
            font-weight: 600;
            font-size: 18px;

            img{
                width: 26px;
                height: 26px;
                border-radius: 50%;
                display: inline-block;
                object-fit: cover;
                vertical-align: sub;
            }
        }

        .order-place{
            font-size: 18px;
            font-weight: 500;
        }

        .order-item{
            font-weight: 500;
        }

        .order-total{
            font-weight: 600;
            font-size: 18px;
            text-align: right;
            border-top: 1px solid #c4c4c4;
            padding-top: 6px;
        }
    }
</style>