<template>
  <div>
    <header class="header">
      <img
        style="height: 3rem; z-index: 10"
        src="../assets/logofull.svg"
        alt="Logo"
      />
    </header>
    <div style="width: 100vw; height: 100vh">
      <InteractionBlock></InteractionBlock>
      <div class="center">
        <vs-select placeholder="Select" v-model="value">
          <vs-option label="Vuesax" value_select="1"> Vuesax </vs-option>
          <vs-option label="Vue" value_select="2"> Vue </vs-option>
          <vs-option label="Javascript" value_select="3">
            Javascript
          </vs-option>
          <vs-option disabled label="Sass" value_select="4"> Sass </vs-option>
          <vs-option label="Typescript" value_select="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value_select="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value_select="7"> Nodejs </vs-option>
        </vs-select>
      </div>
      <h2 style="margin-top: 2vh">Удобства</h2>
      <ComfortBlock class="animate__animated animate__bounce"></ComfortBlock>
      <h2>Помещения</h2>
      <RoomsBlock></RoomsBlock>
      <div data-aos="fade-right">
        <h2>Доска объявлений</h2>
      </div>
      <OrderBLock></OrderBLock>
    </div>
    <OpacitySidebar></OpacitySidebar>
  </div>
</template>

<script>
import OpacitySidebar from "@/components/OpacitySidebar.vue";
import ComfortBlock from "../contentblocks/ComfortBlock.vue";
import RoomsBlock from "../contentblocks/RoomsBlock.vue";
import OrderBLock from "../contentblocks/OrderBoardBlock.vue";
import InteractionBlock from "@/contentblocks/InteractionBlock.vue";
export default {
  components: {
    OpacitySidebar,
    ComfortBlock,
    RoomsBlock,
    OrderBLock,
    InteractionBlock,
  },
  data: () => ({
    value_select: "",
  }),
};
</script>

<style>
.header {
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
}
</style>
