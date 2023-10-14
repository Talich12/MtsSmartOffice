<template>
  <div class="sidebar">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="sidebar-link"
    >
      <i :class="route.icon"></i>
      {{ route.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: "/registration", name: "Route 1", icon: "icon-class" },
        { path: "/login", name: "Route 2", icon: "icon-class" },
        // Add more routes as needed
      ],
    };
  },
};
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0.3rem;
  bottom: 0.3rem;
  align-items: start;
}
.sidebar-link {
  padding: 0.5rem;
  font-family: "MTSExtended-Regular";
  color: var(--text-color);
  text-decoration: none;
}
</style>
