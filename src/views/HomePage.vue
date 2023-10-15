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
      <div class="animate__animated animate__fadeIn">
        <h2 style="margin-top: 2vh">Удобства</h2>
      </div>
      <ComfortBlock></ComfortBlock>
      <div class="animate__animated animate__fadeIn">
        <h2>Помещения</h2>
      </div>
      <RoomsBlock></RoomsBlock>
      <div class="animate__animated animate__fadeIn">
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
