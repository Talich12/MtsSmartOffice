<template>
  <MainContentBlock>
    <div class="interaction-container">
      <h1 style="margin: 5vh">Здравствуйте, ИМЯ</h1>
      <div class="clock">Сейчас {{ currentTime }}</div>
      <div class="weather">Loading weather data...</div>
    </div>
  </MainContentBlock>
</template>

<script>
import MainContentBlock from "@/components/MainContentBlock.vue";

export default {
  data: () => ({
    active: 0,
    currentTime: "",
  }),
  components: { MainContentBlock },
  mounted() {
    // Update the clock every second
    this.updateClock();
    setInterval(this.updateClock, 1000);

    // Fetch weather data and display it
    this.fetchWeatherData();
  },
  methods: {
    updateClock() {
      const now = new Date();
      // Format the time without seconds
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      this.currentTime = `${hours}:${minutes}`;
    },
    fetchWeatherData() {
      // You should implement code to fetch weather data from a weather API here
      // For example, you can use Axios or Fetch API to make a request to a weather API
      // Update the "this.weather" property with the fetched data
      // For this example, I'll just set a placeholder value
      this.weather = "Weather: Sunny, 25°C";
    },
  },
};
</script>

<style>
.interaction-container {
  height: 82vh;
}

.clock {
  font-size: 24px;
  margin: 10px;
}

.weather {
  font-size: 16px;
  margin: 10px;
}
</style>
