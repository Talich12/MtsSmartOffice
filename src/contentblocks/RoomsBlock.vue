<template>
  <MainContentBlock>
    <div class="content-container">
      <vs-card
        v-for="(card, index) in cards"
        :key="index"
        class="animate__animated animate__fadeInLeft"
        :style="{ 'animation-delay': `${index * 0.2}s` }"
        type="2"
        style="margin-right: 2.5vh; margin-left: 2.5vh"
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
  </MainContentBlock>
</template>

<script>
import MainContentBlock from "@/components/MainContentBlock.vue";

export default {
  components: { MainContentBlock },
  data(){
    return{
      cards: [
        {
          title: 'Комнаты отдыха',
          img: 'chill.jpg',
          text: 'Сегодня прекрасный день для отдыха'
        },
        {
          title: 'Коворкинги',
          img: 'work.jpg',
          text: 'Рабочая атмосфера для твоей продуктивности'
        }
      ]
    }
  }
};
</script>

<style scoped>
::v-deep .vs-card__img {
  min-height: 350px;
}
::v-deep .vs-card {
  min-width: 47vw;
  min-height: 350px;
}
::v-deep .vs-card__text {
  width: 100%;
}
.vs-card__text {
  min-width: 400px;
  font-size: 0.01rem;
}

.vs-card-content.type-2 .vs-card__text p {
  font-family: "MTSExtended-Bold";
  font-size: 10px;
}
.vs-card-content.type-2 .vs-card__text h3 {
  font-family: "MTSUltraExtended-Black";
  font-size: 30px;
}
.content-container {
  display: flex;
  width: fit-content;
  overflow-x: auto; /* Allow horizontal scrolling when content overflows */
  white-space: nowrap; /* Prevent wrapping of content to the next line */
  scrollbar-width: none; /* Hide the scrollbar on Firefox */
  -ms-overflow-style: none;
}

.content-container::-webkit-scrollbar {
  display: none; /* Hide the scrollbar on Webkit-based browsers (Chrome, Safari) */
}
</style>
