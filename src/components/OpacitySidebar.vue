<template>
  <div>
    <button @click="toggleSidebar" class="menu-button">Меню</button>
    <div class="sidebar" :class="{ 'sidebar-active': isSidebarOpen }">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      routes: [
        { path: "/registration", name: "Регистрация", icon: "icon-class" },
        { path: "/login", name: "Вход", icon: "icon-class" },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0.3rem;
  bottom: 4rem;
  align-items: start;
  width: 200px;
  transition: transform 0.3s;
  transform: translateX(-120%);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.sidebar-active {
  transform: translateX(0);
}

.sidebar-link {
  padding: 0.5rem;
  font-family: "MTSExtended-Regular";
  color: #000;
  text-decoration: none;
}
.sidebar-link:hover {
  color: #e30611;
  transition: color 0.3s, transform 0.3s;
}

.menu-button {
  position: fixed;
  font-family: "MTSExtended-Regular";
  left: 10px;
  bottom: 10px;
  border: none;
  border-radius: 15px;
  width: 105px;
  height: 45px;
  background-color: #e30611;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
}
button:hover {
  background-color: #b90b14;
  transition: background-color 0.3s;
}
</style>
