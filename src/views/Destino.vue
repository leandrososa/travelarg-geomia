<script>
    import json from '@/json/destinos.json';
    export default{
        data(){
            return{
                destino: json,
                tagFullName: {
                    familia: 'Familia',
                    amigos: 'Entre amigos',
                    romantica: 'Escapada romántica',
                    ciudad: 'Ciudad',
                    campo: 'Campo',
                    playa: 'Playa',
                    montana: 'Montaña',
                    excursiones: 'Excursiones',
                    vidanocturna: 'Vida nocturna',
                    shopping: 'Shopping',
                    esqui: 'Esquí',
                    cultura: 'Cultura'
                }
            }
        }
    }
</script>
<template>
    <div id="destino">
        <section class="destination-fold">
            <v-container>
                    <h3>Destinos</h3>
                    <h1>{{ destino.destinos[$route.query.id].c }}</h1>
                    <p>Praga, la capital de la República Checa, está dividida por el río Moldava. Recibe el apodo de la “Ciudad de las Cien Torres” y es conocida por la Plaza de la Ciudad Vieja, el núcleo de su centro histórico, con coloridos edificios barrocos, iglesias góticas y el Reloj Astronómico medieval, que muestra un espectáculo animado cada hora.</p>
                    <div class="tags">
                        <v-chip class="ma-2" v-for="(tag, index) in destino.destinos[$route.query.id].tags" :key="index" :id="index">
                            {{ tagFullName[tag] }}
                        </v-chip>
                    </div>
            </v-container>
        </section>
    </div>
</template>
