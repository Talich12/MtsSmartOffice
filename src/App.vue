<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "MTSCompact-Bold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.button {
  font-size: 1.5rem;
  font-family: "MTSWide-Medium";
}

h1 {
  font-family: "MTSExtended-Bold";
  color: #fff;
  font-size: 3rem;
}

h2 {
  font-family: "MTSWide-Bold";
  color: #fff;
  font-size: 2rem;
}
</style>
