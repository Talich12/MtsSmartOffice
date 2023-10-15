<template>
  <MainContentBlock>
    <div class="content-container">
      <vs-card
        v-for="(card, index) in cards"
        :key="index"
        class="animate__animated animate__fadeInRight"
        :style="{ 'animation-delay': `${index * 0.2}s` }"
        type="2"
        style="margin-right: 2.5vh; margin-left: 2.5vh"
        @click="openDialog(card)"
      >
        <template #title>
          <h3>{{ card.title }}</h3>
        </template>
        <template #img>
          <img :src="require(`@/assets/${card.img}`)" alt="" />
        </template>
        <template #text>
          <p>{{ card.text }}</p>
        </template>
      </vs-card>
    </div>

    <vs-dialog
      blur
      not-close
      v-model="dialogActive"
      style="font-family: MTSExtended-Black"
    >
      <template #header>
        <h4>{{ selectedCard ? selectedCard.title : "" }}</h4>
      </template>

      <template #default>
        <div v-if="selectedCard">
          <div v-if="selectedCard.title === 'Помощь с техникой'">
            <div class="DialogComfort">
              <vs-input
                class="inputCard1"
                danger
                v-model="value1"
                placeholder="Что произошло?"
              >
                <template #icon>
                  <i class="bx bx-mail-send"></i>
                </template>
              </vs-input>
              <vs-button class="btnSend" danger @click="submitInput"
                >Отправить</vs-button
              >
            </div>
          </div>

          <div
            class="Dialog2"
            v-else-if="selectedCard.title === 'Заказать кофе'"
          >
            <p>Вы можете заказать кофе.</p>
            <div class="center" style="display: flex; justify-content: center">
              <vs-button class="coffe" flat danger animation-type="vertical">
                Кофе
                <template #animate>
                  <i class="bx bx-coffee-togo"></i> Заказать
                </template>
              </vs-button>
            </div>
          </div>
          <div v-else-if="selectedCard.title === 'Музыка в комнате отдыха'">
            <p>Сейчас играет:</p>
            <vs-card type="2">
              <template #title>
                <h3>Queen</h3>
              </template>
              <template #img>
                <img src="../../src/assets/queen.jpg" alt="" />
              </template>
              <template #text>
                <p>BOHEMIAN RHAPSODY</p>
              </template>
            </vs-card>
          </div>
          <div v-else-if="selectedCard.title === 'Закажите продукты'">
            <div class="DialogComfort">
              <vs-input
                class="inputCard1"
                danger
                v-model="value1"
                placeholder="Что заказать?"
              >
                <template #icon>
                  <i class="bx bx-mail-send"></i>
                </template>
              </vs-input>
              <vs-button class="btnSend" danger @click="submitInput"
                >Заказать</vs-button
              >
            </div>
          </div>
          <div v-else-if="selectedCard.title === 'Настроить климат'">
            <vs-switch danger v-model="active1">
              <template #off>
                <i class="bx bxs-volume-mute"></i>
              </template>
              <template #on>
                <i class="bx bxs-volume-full"></i>
              </template>
            </vs-switch>
          </div>
        </div>
      </template>
    </vs-dialog>
  </MainContentBlock>
</template>

<script>
import MainContentBlock from "@/components/MainContentBlock.vue";

export default {
  components: { MainContentBlock },
  data() {
    return {
      cards: [
        {
          title: "Помощь с техникой",
          img: "laptop.jpg",
          text: "Если у вас возникли эксплутационные проблемы",
        },
        {
          title: "Заказать кофе",
          img: "coffee.jpg",
          text: "Закажите кофе удаленно и не ждите пока оно будет готово",
        },
        {
          title: "Музыка в комнате отдыха",
          img: "volume.jpg",
          text: "Не стесняйтесь делиться с коллегами своим вкусом",
        },
        {
          title: "Закажите продукты",
          img: "fridge.jpg",
          text: "Если вам жизненно необходим йогурт по утрам",
        },
        {
          title: "Настроить климат",
          img: "thermomether.jpg",
          text: "Все, что бы вам было удобно",
        },
      ],
      dialogActive: false,
      selectedCard: null,
      inputValue: "",
      currentlyPlaying: "",
      productInput: "",
    };
  },
  methods: {
    openDialog(card) {
      this.selectedCard = card;
      this.dialogActive = true;
    },
    submitInput() {},
    submitProduct() {},
  },
};
</script>

<style>
h3 {
  font-family: "MTSUltraExtended-Black";
  color: var(--main-color);
  font-size: 3rem;
}

.vs-card-content.type-2 .vs-card__text p {
  font-family: "MTSExtended-Bold";
  font-size: 0.6rem;
}

.vs-card {
  min-width: 400px;
  min-height: 240px;
}

.vs-card__text {
  min-width: 400px;
  font-size: 0.01rem;
}
.content-container {
  display: flex;
  width: fit-content;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-container::-webkit-scrollbar {
  display: none;
}
</style>
