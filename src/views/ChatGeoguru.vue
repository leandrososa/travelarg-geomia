<script>
import Button from "../components/Button.vue";
import TextInput from "../components/form/TextInput.vue";

export default {
  components: {
    Button,
    TextInput
  }
};
</script>
<template>
  <div id="chatgeoguru">
    <v-container fluid>
      <h3 class="mt-6">Mensajes</h3>
      <v-row>
        <v-col cols="3">
          <div class="chat-selector">
            <img
              src="../assets/geogurus/estela.png"
              alt="Estela M."
              class="chat-avatar"
            />
            <span class="chat-selector-name">Estela M.</span>
            <p class="selector-last-chat">Espectacular, ¡gracias!</p>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="chatbox">
            <div class="chat-item">
              <img
                src="../assets/geogurus/estela.png"
                alt="Estela M."
                class="chat-avatar"
              />
              <div class="chat-bubble">
                Yo he ido bastante a ese lugar y la verdad, conozco mejores!
                Podemos verlo cuando estemos ahi! O asesorarte desde antes por
                telefono al confirmar.
              </div>
              <div class="chat-info"><b>Estela M.</b> | 20:31</div>
            </div>
            <div class="chat-item">
              <div class="chat-bubble">
                Genial, ahi vi que modificaste los detalles del viaje. Bueno,
                ¡cuando quieras! Espero tu confirmacion.
              </div>
              <div class="chat-info"><b>Estela M.</b> | 20:34</div>
            </div>
            <div class="chat-item own">
              <div class="chat-bubble">Espectacular, ¡gracias!</div>
              <div class="chat-info">20:39</div>
            </div>
          </div>
          <div class="typebox">
            <TextInput
              placeholder="Escribe tu mensaje"
              :outlined="false"
            ></TextInput>
            <v-btn
              class="mx-2"
              align="center"
              fab
              dark
              small
              elevation="0"
              color="info"
            >
              <span class="ticon-send mx-0"></span>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="2">
          <h3>Tus detalles de viaje</h3>
          <h3 class="destination mt-4">San Carlos de Bariloche</h3>
          <p class="destination-details">Julio 2021, 14 d&iacute;as</p>
          <p class="destination-details">2 adultos</p>
          <p class="destination-details mb-8">
            Presupuesto entre $20000 y $50000
          </p>
          <Button
            class="mb-4"
            to="/contratargeoguru"
            xlarge
            block
            color="success"
            >Ir al cobro</Button
          >
          <Button to="/perfilgeoguru" xlarge outlined block color="primary"
            >Cancelar plan</Button
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
h3 {
  color: $ta-green;
  font-weight: 600;
  font-size: 28px;

  &.destination {
    font-size: 24px;
    color: $bl;
    font-weight: 700;
  }
}

.chat-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-block;
  object-fit: cover;
}

.chat-selector {
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 12px 12px 12px 74px;

  img.chat-avatar {
    position: absolute;
    left: 12px;
  }

  .chat-selector-name {
    font-size: 17px;
    font-weight: 500;
  }

  p.selector-last-chat {
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
    color: $gr;
  }
}

.chatbox {
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: $br-normal $br-normal 0 0;
  height: 600px;

  .chat-item {
    position: relative;
    padding: 12px 12px 12px 74px;

    .chat-avatar {
      position: absolute;
      left: 12px;
    }

    .chat-bubble {
      padding: 17px 27px;
      border-radius: $br-normal;
      background-color: $wh;
      max-width: 75%;
      font-weight: 500;
      display: inline-block;
    }

    .chat-info {
      color: #c4c4c4;
      font-size: 14px;
      padding: 12px 0 0 12px;

      b {
        font-weight: 500;
      }
    }

    &.own {
      text-align: right;

      .chat-bubble {
        background-color: rgba(28, 187, 180, 0.22);
      }
    }
  }
}

.typebox {
  padding: 0 12px;
  background-color: #f5f5f5;
  border-radius: 0 0 $br-normal $br-normal;
  margin-top: 7px;

  display: flex;

  .v-btn {
    margin-top: 10px;
    font-size: 20px;
  }
}

p.destination-details {
  font-size: 16px;
  font-weight: 600;
}
</style>
