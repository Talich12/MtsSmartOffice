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
      cards:[
        { title: 'Помощь с техникой', img: "laptop.jpg", text: 'Если у вас возникли эксплутационные проблемы' },
        { title: 'Заказать кофе', img: 'coffee.jpg', text: 'Закажите кофе удаленно и не ждите пока оно будет готово' },
        { title: 'Музыка в комнате отдыха', img: 'volume.jpg', text: 'Не стесняйтесь делиться с коллегами своим вкусом' },
        { title: 'Закажите продукты', img: 'fridge.jpg', text: 'Если вам жизненно необходим йогурт по утрам' },
        { title: 'Настроить климат', img: 'thermomether.jpg', text: 'Все, что бы вам было удобно' },
      ]
    }
  }
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
  overflow-x: auto; /* Allow horizontal scrolling when content overflows */
  white-space: nowrap; /* Prevent wrapping of content to the next line */
  scrollbar-width: none; /* Hide the scrollbar on Firefox */
  -ms-overflow-style: none;
}

.content-container::-webkit-scrollbar {
  display: none; /* Hide the scrollbar on Webkit-based browsers (Chrome, Safari) */
}
</style>
