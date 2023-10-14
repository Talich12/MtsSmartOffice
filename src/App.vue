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
@import "./assets/reset.css";

#app {
  background-color: #fff;
  font-family: "MTSCompact-Bold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.vs-button {
  font-family: "MTSWide-Medium";
}

h1 {
  font-family: "MTSExtended-Bold";
  color: #000;
  font-size: 3rem;
}

h2 {
  font-family: "MTSWide-Bold";
  color: #000;
  font-size: 2rem;
}
</style>
