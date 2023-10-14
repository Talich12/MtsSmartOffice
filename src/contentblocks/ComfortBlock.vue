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
          <p>ddd</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template> </vs-card
      ><vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Заказать кофе</h3>
        </template>
        <template #img>
          <img src="../assets/coffee.jpg" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
      <vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Заказать кофе</h3>
        </template>
        <template #img>
          <img src="../assets/volume.jpg" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
      <vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Заказать кофе</h3>
        </template>
        <template #img>
          <img src="../assets/volume.jpg" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
      <vs-card type="2" style="margin-right: 2.5vh">
        <template #title>
          <h3>Заказать кофе</h3>
        </template>
        <template #img>
          <img src="../assets/volume.jpg" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
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
