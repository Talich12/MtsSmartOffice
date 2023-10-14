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
      isSidebarOpen: false, // Флаг для открытия и закрытия боковой панели
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
  bottom: 4rem;
  align-items: start;
  width: 200px; /* Задайте ширину боковой панели по своему усмотрению */
  transition: transform 0.3s; /* Добавьте плавную анимацию для показа/скрытия */
  transform: translateX(-100%); /* Начните боковую панель смещенной влево */
  background-color: #fff; /* Цвет фона боковой панели */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Добавьте тень по вашему усмотрению */
  z-index: 1;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.sidebar-active {
  transform: translateX(0); /* Показать боковую панель при активном классе */
}

.sidebar-link {
  padding: 0.5rem;
  font-family: "MTSExtended-Regular";
  color: #000; /* Замените на желаемый цвет текста */
  text-decoration: none;
}

button {
  position: fixed;
  font-family: "MTSExtended-Regular";
  left: 10px; /* Позиция кнопки в левом нижнем углу */
  bottom: 10px;
  border: none;
  border-radius: 20%;
  width: 90px;
  height: 40px;
  background-color: #E30611;
  color: #fff;
}
</style>
