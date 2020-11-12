<template>
    <header>
        <v-container>
            <router-link class="geomia" to="/">
                <span class="ticon-geomia"></span>
            </router-link>
            <div v-if="$route.path === '/perfilgeoguru'" class="side-button contract-geoguru">
                <Button elevation="6" large paddingSm color="info" ><span class="ticon-chat"></span> Chatear con Estela</Button>
            </div>
            <div v-else-if='logged' class="side-button logged-button">
                <Button elevation="6" large paddingSm color="success"><span class="ticon-pencil"></span> Escribir reseña</Button>
            </div>
            <div v-else class="side-button unlogged-button">
                <Button elevation="6" large paddingSm><span class="ticon-login"></span> Ingresar</Button>
            </div>
        </v-container>
    </header>
</template>

<script>
    import Button from "@/components/Button.vue";

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
            Button
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
</style>