<template>
  <div id="articulo">
    <section class="article mt-14">
      <v-container>
        <v-row>
          <v-col cols="9">
            <h1 class="article-title">
              Lacalle Pou puso en duda que abra las fronteras para el turismo
              argentino en el verano
            </h1>
            <p class="article-extract mt-6">
              El presidente uruguayo admiti&oacute; que la decisi&oacute;n
              atenta contra uno de los pilares de la econom&iacute;a. Tampoco
              permitir&iacute;an turistas de Brasil.
            </p>
            <div class="article-main-image mb-6">
              <img
                alt="Lacalle Pou puso en duda que abra las fronteras para el turismo argentino en el verano"
                src="../assets/news/lacalle.png"
              />
            </div>
            <div class="article-main">
              <p>
                El presidente de Uruguay, Luis Lacalle Pou, puso en duda que su
                pa&iacute;s abra las fronteras este verano para el turismo de
                Argentina y Brasil por el coronavirus, lo que implicar&iacute;a
                un duro golpe para la econom&iacute;a. <br /><br />"Se nos viene
                una decisi&oacute;n bien dif&iacute;cil, que atenta directamente
                contra una base econ&oacute;mica importante del pa&iacute;s como
                es el turismo", admiti&oacute; Lacalle Pou en un foro del diario
                ABC de Espa&ntilde;a. <br /><br /><br />"Hoy no estamos con las
                condiciones de asegurar que vamos a tener las fronteras abiertas
                con la Argentina y con Brasil", agreg&oacute; el mandatario de
                Uruguay, que tiene menos de dos mil casos desde el inicio de la
                pandemia.
            </p>
            <blockquote>
                Hoy no estamos con las condiciones
                de asegurar que vamos a tener las fronteras abiertas con la
                Argentina y con Brasil.
            </blockquote>
            <br>
            <p>
                Lacalle dijo que
                trabaja en una estrategia para permitir "alg&uacute;n tipo de
                ingreso de turistas para que la temporada no sea un fracaso".
                Una posibilidad es permitir el ingreso de turistas de
                determinados pa&iacute;ses o regiones con poca
                circulaci&oacute;n del virus, todos con un test antes del
                ingreso al pa&iacute;s o una especie de cuarentena".
                <br /><br />Como explic&oacute; al medio La Pol&iacute;tica
                Online, sin turismo internacional Uruguay podr&iacute;a perder
                hasta el 3% de su PBI. El sector es clave para el aporte de
                divisas y la generaci&oacute;n de empleo, que en 2019
                represent&oacute; el 7,2% de toda la econom&iacute;a uruguaya.
                <br /><br />Para destinos internacionales como Punta del Este,
                Piri&aacute;polis y la costa de Rocha, el golpe de sostener las
                fronteras cerradas ser&aacute; m&aacute;s duro porque, al igual
                que cierto circuito de Montevideo, trabajan para un
                p&uacute;blico con un poder adquisitivo que dif&iacute;cilmente
                pueda ser compensado con turismo interno. El gobierno de Lacalle
                a impulsar el turismo europeo, que tradicionalmente representa
                menos del 5% del total. <br /><br />Hoy por hoy el principal
                problema para Uruguay es la zona de Rivera, en la frontera con
                Brasil, donde hay un flujo muy importante de personas y comercio
                con el pa&iacute;s m&aacute;s afectado de Am&eacute;rica Latina
                por el coronavirus. El fin de semana pasado entraron 1500
                personas. <br /><br />En Rivera hubo varios brotes y en los
                &uacute;ltimos d&iacute;as se registraron la mayor&iacute;a de
                los contagios de todo el pa&iacute;s. El gobierno de Lacalle
                anunci&oacute; el lunes mayores restricciones para controlar el
                flujo de personas y evitar las aglomeraciones. "En Rivera hay
                una cantidad de focos por encima de lo normal que preocupan",
                admiti&oacute; el gobierno.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="last-articles">
      <v-container>
        <h2 class="section-title mb-10">
          &Uacute;ltimos art&iacute;culos en <b>geomia</b>
        </h2>
        <v-row>
          <v-col
            ><router-link to="/articulo" class="article-item"
              ><div class="article-image mb-4" v-ripple>
                <img src="../assets/news/lacalle.png" alt="Article image" />
              </div>
              <span class="article-title"
                >Lacalle Pou puso en duda que abra las fronteras para el turismo
                argentino en el verano</span
              ></router-link
            ></v-col
          >
          <v-col
            ><router-link to="/articulo" class="article-item"
              ><div class="article-image mb-4" v-ripple>
                <img src="../assets/news/aerolineas.png" alt="Article image" />
              </div>
              <span class="article-title"
                >Aerolíneas Argentinas se suma al plan PreViaje: cu&aacute;les
                ser&aacute;n los beneficios</span
              ></router-link
            ></v-col
          >
          <v-col
            ><router-link to="/articulo" class="article-item"
              ><div class="article-image mb-4" v-ripple>
                <img src="../assets/news/oporto.png" alt="Article image" />
              </div>
              <span class="article-title"
                >Descubrir actividades asequibles por todo el mundo</span
              ></router-link
            ></v-col
          >
        </v-row>
      </v-container>
    </section>
    <div class="social-links">
        <a href="#" class="social-link fb" v-ripple><span class="ticon-facebook"></span></a>
        <a href="#" class="social-link tw" v-ripple><span class="ticon-twitter"></span></a>
        <a href="#" class="social-link wh" v-ripple><span class="ticon-whatsapp"></span></a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    section.article{
        .article-title{
            font-size: 42px;
            font-weight: 500;
            line-height: 48px;
        }
        .article-extract{
            font-weight: 400;
            font-style: italic;
            font-size: 24px;
            line-height: 28px;
        }

        .article-main-image{
            border-radius: $br-normal;
            position: relative;
            padding-top: 50%;
            overflow: hidden;
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

        .article-main{
            p{
                font-family: $opensans;
            }
            blockquote{
                font-weight: 600;
                font-size: 24px;
                &:before{
                    content: '\201C'
                }
                &:after{
                    content: '\201D'
                }
            }
        }
    }

    section.last-articles {
        .article-item {
            display: block;
            width: 100%;
            text-decoration: none;
            color: $ta-green;
            .article-image {
            overflow: hidden;
            border-radius: $br-normal;
            height: 100%;
            position: relative;
            padding-top: 65%;
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
            .article-title {
            color: $bl;
            font-weight: 600;
            font-size: 18px;
            }
        }
    }

    .social-links{

        position: fixed;
        right: 0;
        bottom: 10vh;

        .social-link{
            border-radius: 50% 0 0 50%;
            display: block;
            margin: 10px 0;
            padding: 10px 0 10px 10px;
            text-decoration: none;
            text-align: center;
            width: 42px;
            height: 45px;
            color: $wh;

            &.fb{
                background-color: #3B5998;
                span{
                    vertical-align: middle;
                }
            }

            &.tw{
                background-color: #00ACEE;
                span{
                    font-size: 15px;
                }
            }

            &.wh{
                background-color: #25D366;
                span{
                    font-size: 19px;
                }
            }

            span{
                color: $wh;
                font-size: 18px;
            }
        }
    }
</style>