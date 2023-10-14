<template>
  <div>
    <header class="header">
      <img style="height: 3rem" src="../assets/logofull.svg" alt="Logo" />
    </header>
    <div style="width: 100vw; height: 100vh"></div>
    <OpacitySidebar></OpacitySidebar>
  </div>
</template>

<script>
import OpacitySidebar from "@/components/OpacitySidebar.vue";

export default {
  components: { OpacitySidebar },
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
