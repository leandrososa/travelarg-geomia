<template>
    <div class="place-content">
        <span class="marker-number">{{number}}</span>
        <div class="place-card elevation-9" v-ripple>
            <img :src="require('../../assets/places/' + img + '.jpg')" :alt="name">
            <span class="place-name">
                {{name}}
            </span>
            <div class="place-stars">
                    <span v-for="n in stars" :key="n" class="ticon-star"></span>
                    <span v-for="m in (5 - stars)" :key="m" class="ticon-emptystar"></span>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'PlaceCard',
        props: {
            'name': {
                default: 'Nombre lugar'
            },
            'stars': {
                type: Number,
                default: 3
            },
            'img': {
                default: 'museo-patagonia'
            },
            'number': {
                default: 1
            }
        }
    }
</script>
<style lang="scss" scoped>

    .place-content{
        width: 300px;
        min-height: 130px;
        position: relative;

        .marker-number{
            background-color: $ta-magenta;
            font-weight: 700;
            font-size: 14px;
            color: $wh;
            padding: 6px 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: inline-block;
            text-align: center;
            user-select: none;
            position: absolute;
            top: 12px;
            left: 12px;
            z-index: 2;
        }

        .place-card{
            width: 100%;
            display: inline-block;
            border-radius: $br-normal;
            border-top-left-radius: $br-accented;
            background-color: $wh;
            position: relative;
            padding: 22px 22px 22px 122px;
            overflow: hidden;

            img{
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 100px;
                height: 100%;
                object-fit: cover;
                object-position: center center;
            
            }

            .place-name{
                font-weight: 600;
                font-size: 14px;
                user-select: none;
            }

            .place-stars{
                span[class^="ticon-"]{
                    font-size: 24px;
                    color: $ta-green;
                    margin-right: 3px;
                    user-select: none;
                }

                span[class="ticon-emptystar"]{
                    color: $gr1;
                }
            }
        }
    }
    
</style>