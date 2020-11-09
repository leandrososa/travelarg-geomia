<template>
    <nav class="nav">
        <div class="avatar-wrapper">
            <router-link to="/perfil" v-ripple="{ class: 'white--text' }" class="avatar">
            </router-link>
        </div>
        <ul>
            <router-link tag="li" to="/destinos" v-ripple>
                <span class="ticon-marker"></span>
                <p>Destinos</p>
            </router-link>
            <router-link tag="li" to="/articulos" v-ripple>
                <span class="ticon-article"></span>
                <p>Art&iacute;culos</p>
            </router-link>
            <router-link tag="li" to="/geogurus" v-ripple>
                <span class="ticon-person"></span>
                <p>Geogur&uacute;s</p>
            </router-link>
            <router-link tag="li" to="" class="bottom" v-ripple>
                <span class="ticon-inbox"></span>
                <p>Inbox</p>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation',
        props: ['logged']
    }
</script> 

<style lang="scss">

    nav.nav{
        background-color: $wh;
        width:100px;
        position: fixed;
        left:0;
        top:0;
        height: 100vh;
        box-shadow: $nav-shadow;
        z-index: 60;

        .avatar-wrapper{

            height: 25%;
            text-align: center;
            padding-top: 20px;

            .avatar{
                display: inline-block;
                width: 68px;
                height: 68px;
                border-radius: 50%;
                border: 4px solid $ta-green;
                background-image: url('../assets/self-profile.png');
                background-position: center center;
                background-size: cover;
                cursor: pointer;
                
            }
        }

        ul{
            padding: 0;
            height: 75%;

            li{
                list-style-type: none;
                text-align: center;
                padding: 4px 0;
                width: 100%;
                padding: 8px 0;
                margin: 8px 0;
                display: inline-block;
                user-select: none;
                cursor: pointer;

                &.bottom{

                    position: absolute;
                    bottom: 20px;
                    left:0;
                }

                span{

                    color: $ta-green;
                    font-size: 35px;
                }

                p{
                    color: $ta-green;
                    font-weight: 700;
                    font-size: 14px;
                    margin: 0;
                }
            }
        }
    }

</style>