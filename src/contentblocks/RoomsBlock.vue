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
        @click = "OpenDialog(card.id)"
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

      <vs-dialog blur not-close v-model="dialogActive">
        <template #header>
          <h4 >Подсчет людей в комнате отдыха</h4>
        </template>
          <Upload @people_count="handlePeopleCount" mode="people-count"></Upload>
          <h2 v-if="show_people">Кол-во людей: {{ people_count }}</h2>
      </vs-dialog>

    </div>
  </MainContentBlock>
</template>

<script>
import MainContentBlock from "@/components/MainContentBlock.vue";
import Upload from "@/components/UploadImage.vue"
export default {
  components: { MainContentBlock, Upload },
  data(){
    return{
      cards: [
        {
          id: 1,
          title: 'Комнаты отдыха',
          img: 'chill.jpg',
          text: 'Сегодня прекрасный день для отдыха'
        },
        {
          id: 2,
          title: 'Коворкинги',
          img: 'work.jpg',
          text: 'Рабочая атмосфера для твоей продуктивности'
        }
      ],
      dialogActive: false,
      people_count: '',
      show_people: false
    }
  },
  methods:{
    OpenDialog(id){
      if (id == 1){
        this.dialogActive = true
      }
    },
    handlePeopleCount(data){
      console.log(data)
      this.people_count=data
      this.show_people = true
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
