<template>
  <MainContentBlock>
    <div class="content-container">
      <vs-card
        class="animate__animated animate__fadeIn"
        type="2"
        style="margin-left: 2.5vh"
      >
        <template #title>
          <h3>Доска объявлений</h3>
        </template>
        <template #img>
          <img src="../assets/bulletinboard.jpg" alt="" />
        </template>
        <template #text>
          <p>
            Не отвлекайся на бытовые проблемы, пусть за тебя это сделают другие
          </p>
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

<style scoped>
::v-deep .vs-card__img {
  min-height: 450px;
}
::v-deep .vs-card {
  min-width: 95vw;
  min-height: 450px;
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
  font-size: 20px;
}
.vs-card-content.type-2 .vs-card__text h3 {
  font-family: "MTSUltraExtended-Black";
  font-size: 40px;
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
