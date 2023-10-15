<template>
  <div>
    <MainContentBlock
      style="display: flex; justify-content: center; align-items: center"
    >
      <img
        style="height: 10rem; z-index: 10; margin-left: 2.5vh"
        src="../assets/qr.png"
        alt="Logo"
      />
      <h2 style="margin-left: 1vw">Ожидайте виджет Яндекс такси, а пока QR</h2>
    </MainContentBlock>
  </div>
</template>

<script>
import MainContentBlock from "@/components/MainContentBlock.vue";

export default {
  components: { MainContentBlock },
};
</script>
