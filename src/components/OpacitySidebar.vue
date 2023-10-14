<template>
  <div>
    <vs-button color="#E30611"  size="large"  @click="toggleSidebar" class="menu-button">
      Меню
      <template #animate>
        <i class='bx bx-menu'></i>
      </template>
    </vs-button>
    <div class="sidebar" :class="{ 'sidebar-active': isSidebarOpen }">
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="sidebar-link"
      >
        <i :class="route.icon"></i>
        <span class="menu-item-text">{{ route.name }}</span>
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
        { path: "/registration", name: "Route 1", icon: "icon-class" },
        { path: "/login", name: "Route 2", icon: "icon-class" },
        // Add more routes as needed
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
  bottom: 3.5rem;
  align-items: start;
  width: 130px; 
  transition: transform 0.3s; 
  transform: translateX(-200%); 
  background-color: #fff; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
  z-index: 1;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.sidebar-active {
  transform: translateY(0); 
}

.sidebar-link {
  padding: 0.5rem;
  font-family: "MTSExtended-Regular";
  color: #000; 
  text-decoration: none;
}
.menu-button {
  
  position: fixed;
  left: 0.5vh; 
  bottom: -93vh;
  z-index: 2;
}

.sidebar-link:hover .menu-item-text {
  color: #E30611; 
  transition: color 0.3s, transform 0.3s; 
  
}

</style>
