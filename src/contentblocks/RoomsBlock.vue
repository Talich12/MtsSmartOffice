<template>
    <MainContentBlock>
      <div class="content-container">
        <vs-card type="2" style="margin-right: 2.5vh; margin-left: 2.5vh">
          <template #title>
            <h3>Комнаты отдыха</h3>
          </template>
          <template #img>
            <img src="../assets/chill.jpg" alt="" />
          </template>
          <template #text>
            <p>ddd</p>
          </template>
        </vs-card>

        <vs-card type="2" style="margin-right: 2.5vh">
          <template #title>
            <h3>Коворкинги</h3>
          </template>
          <template #img>
            <img src="../assets/work.jpg" alt="" />
          </template>
          <template #text>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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

::v-deep .vs-card {
    min-width: 47vw;
    min-height: 240px;
}
::v-deep .vs-card__text{
    width: 100%
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
}
</style>
  