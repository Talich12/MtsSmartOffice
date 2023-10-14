<template>
  <div>
    <vs-button :active="active == 0" @click="active = 0"> Active </vs-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0,
  }),
};
</script>
