<template>
  <MainContentBlock>
    <div class="content-container">
      <vs-card type="2" style="margin-right: 2.5vh; margin-left: 2.5vh">
        <template #title>
          <h3>Помощь с техникой</h3>
        </template>
        <template #img>
          <img src="../assets/laptop.jpg" alt="" />
        </template>
        <template #text>
          <p>Если у вас возникли эксплутационные проблемы</p>
        </template>
        <template #interactions> </template> </vs-card
      ><vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Заказать кофе</h3>
        </template>
        <template #img>
          <img src="../assets/coffee.jpg" alt="" />
        </template>
        <template #text>
          <p>Закажите кофе удаленно и не ждите пока оно будет готово</p>
        </template>
        <template #interactions> </template>
      </vs-card>
      <vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Музыка в комнате отдыха</h3>
        </template>
        <template #img>
          <img src="../assets/volume.jpg" alt="" />
        </template>
        <template #text>
          <p>Не стесняйтесь делиться с коллегами своим вкусом</p>
        </template>
        <template #interactions> </template>
      </vs-card>
      <vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Закажите продукты</h3>
        </template>
        <template #img>
          <img src="../assets/fridge.jpg" alt="" />
        </template>
        <template #text>
          <p>Если вам жизненно необходим йогурт по утрам</p>
        </template>
      </vs-card>
      <vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Настроить климат</h3>
        </template>
        <template #img>
          <img src="../assets/thermomether.jpg" alt="" />
        </template>
        <template #text>
          <p>Все, что бы вам было удобно</p>
        </template>
      </vs-card>
    </div>
  </MainContentBlock>
</template>

<script>
import MainContentBlock from "@/components/MainContentBlock.vue";

export default {
  components: { MainContentBlock },
};
</script>

<style>
h3 {
  font-family: "MTSExtended-Bold";
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
