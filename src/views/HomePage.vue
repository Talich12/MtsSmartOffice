<template>
  <div>
    <header
      class="header"
      style="display: flex; justify-content: space-between"
    >
      <img
        style="height: 3rem; z-index: 10"
        src="../assets/logofull.svg"
        alt="Logo"
      />
      <div class="clock" style="font-size: 1.3rem">{{ currentTime }}</div>
      <div class="home-profile">
        <div
          class="info"
          style="
            display: flex;
            flex-direction: column;
            text-align: right;
            margin-right: 1vw;
            justify-content: center;
          "
        >
          <p>Талалуев</p>
          <p>Денис</p>
          <p>Сергеевич</p>
        </div>
        <div class="avatar">
          <vs-avatar size="50" style="height: 100%">
            <img src="../assets/coffee.jpg" alt="" />
          </vs-avatar>
        </div>
      </div>
    </header>
    <div style="width: 100vw; height: 100vh">
      <div class="animate__animated animate__fadeIn">
        <h2 style="margin-top: 2vh">Удобства</h2>
      </div>
      <ComfortBlock></ComfortBlock>
      <div class="animate__animated animate__fadeIn">
        <h2>Помещения</h2>
      </div>
      <RoomsBlock></RoomsBlock>
      <h2>Новости компании</h2>
      <div class="animate__animated animate__fadeIn">
        <InteractionBlock></InteractionBlock>
        <h2>Доска объявлений</h2>
      </div>
      <OrderBLock></OrderBLock>
      <h2>Такси</h2>
      <TaxiBlock></TaxiBlock>
    </div>
    <OpacitySidebar></OpacitySidebar>
  </div>
</template>

<script>
import OpacitySidebar from "@/components/OpacitySidebar.vue";
import ComfortBlock from "../contentblocks/ComfortBlock.vue";
import RoomsBlock from "../contentblocks/RoomsBlock.vue";
import OrderBLock from "../contentblocks/OrderBoardBlock.vue";
import TaxiBlock from "../contentblocks/TaxiBlock.vue";

export default {
  components: {
    OpacitySidebar,
    ComfortBlock,
    RoomsBlock,
    OrderBLock,
    TaxiBlock,
  },
  data: () => ({
    currentTime: "",
  }),
  methods: {
    updateClock() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      this.currentTime = `${hours}:${minutes}`;
    },
  },
  created() {
    this.updateClock(); // Initial call to set the time
    setInterval(this.updateClock, 1000); // Update the time every second
  },
};
</script>

<style>
.home-profile {
  display: flex;
  font-size: 1rem;
}

.header {
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
}
</style>
