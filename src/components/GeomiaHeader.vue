<template>
    <header>
        <v-container>
            <router-link class="geomia" to="/">
                <span class="ticon-geomia"></span>
            </router-link>
            <div v-if="$route.path === '/perfilgeoguru'" class="side-button contract-geoguru">
                <Button elevation="6" large paddingSm color="info" ><span class="ticon-chat"></span> Chatear con Estela</Button>
            </div>
            <div v-else-if="$route.path === '/nuevaresena' || $route.path === '/componerresena' || $route.path === '/resenacompleta'" class="side-button">

            </div>
            <div v-else-if="this.$session.exists('isLogged')" class="side-button logged-button">
                <Button to="/nuevaresena" elevation="6" large paddingSm color="success"><span class="ticon-pencil"></span> Escribir reseña</Button>
            </div>
            <div v-else class="side-button unlogged-button">
                <Button elevation="6" large paddingSm @click.native.stop="login = true"><span class="ticon-login"></span> Ingresar</Button>
            </div>
            <!-- LoginModal -->
            <v-dialog content-class="br-b-r-100" v-model="login" width="600"> 
                <div class="ta-modal padding-100 center">
                    <h3 class="modal-title" >Entra a tu cuenta</h3>
                    <TextInput dense singleline rounded placeholder="Correo Electrónico"></TextInput>
                    <TextInput dense singleline rounded placeholder="Contraseña" type="password"></TextInput>
                    <Button large padding color="success" block>Ingresar</Button>
                    <div class="separator">
                        <span class="separator-text">o conectate con</span>
                    </div>
                    <v-btn class="mx-2" fab dark small elevation="0" color="#397CF8">
                        <span class="ticon-google mx-0"></span>
                    </v-btn>
                    <v-btn class="mx-2" align="center" fab dark small elevation="0" color="#3B5998">
                        <span class="ticon-facebook mx-0"></span>
                    </v-btn>
                    <div class="mt-3">
                        <Button outlined large padding color="primary"  @click.native.stop="login = false; register = true" block>No estoy registrado</Button>
                    </div>
                </div>
            </v-dialog>
            <!--  //////// LoginModal -->

            <!-- RegisterModal -->
            <v-dialog content-class="br-b-r-100" v-model="register" width="900"> 
                <div class="ta-modal center">
                    <span @click="register = false" class="ticon-close"></span>
                    <div class="center">
                        <span class="ticon-geomia"></span>
                    </div>
                    <v-row>
                        <v-col cols="6">
                            <h4 class="modal-title mt-9" >Nueva cuenta</h4>
                            <TextInput dense singleline rounded placeholder="Nombre"></TextInput>
                            <TextInput dense singleline rounded placeholder="Apellido"></TextInput>
                            <TextInput dense singleline rounded placeholder="Correo Electrónico"></TextInput>
                            <TextInput dense singleline rounded placeholder="Contraseña" type="password"></TextInput>
                            <v-row class="information">
                                <v-col>
                                    <span class="ticon-info"></span>
                                </v-col>
                                <v-col>
                                    <p>Al “Registrar”  aceptas los Terminos de uso y Politicas de privacidad de Geomia y TravelArg.</p>
                                </v-col>
                            </v-row>
                            <Button large padding color="success" block @click.native.stop="register = false; confirmMail = true">Registrarse</Button>
                            
                        </v-col>
                        <v-col cols="6">
                            <div class="guru-register-box">
                                <h4 class="modal-title magenta" >Quiero ser Geogur&uacute;</h4>
                                <span class="ticon-handsworld"></span>
                                <p class="guru-description">Convierte tu tiempo libre en ganancias, compartiendo tus experiencias a otros. ¡Es gratis!</p>
                                <v-row class="information">
                                    <v-col>
                                        <span class="ticon-info"></span>
                                    </v-col>
                                    <v-col>
                                        <p>Vamos a pedirte información de contacto adicional una vez confirmada la cuenta.</p>
                                    </v-col>
                                </v-row>
                                <Button large padding color="primary" block @click.native.stop="register = false; guruRegister = true">Registrarse como Geogur&uacute;</Button>
                            </div>
                        </v-col>
                    </v-row>

                    
                </div>
            </v-dialog>
            <!--  //////// RegisterModal -->

            <!--  GuruRegisterModal -->
            <v-dialog content-class="br-b-r-100" v-model="guruRegister" width="600"> 
                <div class="ta-modal padding-100 center">
                    <h2 class="modal-title">Datos de Geogur&uacute;</h2>
                    <TextInput dense singleline rounded placeholder="Localidad de residencia"></TextInput>
                    <TextInput dense singleline rounded placeholder="Número de teléfono"></TextInput>
                    <TextInput dense singleline rounded placeholder="DNI o Célula de identidad"></TextInput>
                    <div class="date-header left">Fecha de Nacimiento</div>
                    <v-row>
                        <v-col>
                            <SelectInput label="Día" rounded dense></SelectInput>
                        </v-col>
                        <v-col>
                            <SelectInput label="Mes" rounded dense></SelectInput>
                        </v-col>
                        <v-col>
                            <SelectInput label="Año" rounded dense></SelectInput>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p class="guru-description left my-2">Soy un/a profesional en turismo</p>
                        </v-col>
                        <v-col cols="2">
                            <v-switch class="ma-0" elevation="0" color="success"></v-switch>
                        </v-col>
                    </v-row>
                    <Button large padding color="primary" block @click.native.stop="guruRegister = false; confirmMail = true">Confirmar registro</Button>
                </div>
            </v-dialog>
            <!--  //////// GuruRegisterModal -->

            <!--  ConfirmMailModal -->
            <v-dialog content-class="br-b-r-100" v-model="confirmMail" width="600"> 
                <div class="ta-modal padding-100 center pt-0" @click.stop="confirmMail = false; doLogin(); window.location.reload();" style="cursor:pointer">
                    <div class="graphic-envelope ">
                        <img class="dots-misc" src="../assets/dots-misc.svg" alt="" />
                        <span class="ticon-envelope"></span>
                    </div>
                    <h2 class="modal-title mt-3">¡Casi estamos!</h2>
                    <p class="guru-description">Enviamos un correo de confirmación de cuenta a mail@cualquiera.com, seguí las instrucciones para continuar.</p>
                </div>
            </v-dialog>
            <!--  //////// ConfirmMailModal -->
        </v-container>
    </header>
</template>

<script>
    import Button from "@/components/Button.vue";
    import TextInput from "@/components/form/TextInput.vue";
    import SelectInput from "@/components/form/SelectInput.vue";

    export default {
        name: 'GeomiaHeader',
        props: {
            'logged': {
                type: Boolean,
                default: false
            },
            'geoguru': {
                type: Boolean,
                default: false
            }
        },
        components: {
            Button,
            TextInput,
            SelectInput
        },
        data () {
            return {
                login: false,
                register: false,
                confirmMail: false,
                guruRegister: false
            }
        },
        methods: {
            doLogin() {
                this.$session.set('isLogged', true);
                this.$windowReload();
            }
        }
    }
</script> 

<style lang="scss">


    header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
        background: $white-gradient;

        .container{
            position: relative;

            a.geomia{
                text-decoration: none;
                font-size: 42px;
                color: $ta-green;
                padding: 28px 0;
            }

            .side-button{
                position: absolute;
                top: 0;
                right: 12px;
                bottom: 0;
                padding: 22px 0;
            }
        }

        
    }

    .ta-modal{
        
        .ticon-geomia{
            display: block;
            color: $ta-green;
            font-size: 50px;
            margin-bottom: 40px;
        }

        .modal-title{
            margin-bottom: 30px;
        }


        .guru-register-box{
            border: 1px solid $ta-magenta;
            border-radius: $br-normal;
            padding: 36px;
        }

        .ticon-handsworld{
            font-size: 61px;
            color: $ta-magenta;
        }

        .guru-description{
            font-size: 16px;
            font-weight: 600
        }

        .graphic-envelope{
            margin: -13px auto 0 auto;
            text-align: center;
            position: relative;

            
            .ticon-envelope{
                color: $ta-green;
                font-size: 100px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%)
            }
        }

        .date-header{
            font-size: 18px;
            font-weight: 600;
            color: $ta-green;
        }
    }
</style>