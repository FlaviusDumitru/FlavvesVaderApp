<template>
    <p>Staden som visas nu är: </p>
    {{ props.location ?? 'Ingen' }}
    <div v-if="props.location" id="weatherCardContainer">
      <WeatherCard v-for="day in weatherInfo" :key="day.date" :weather-data="day" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import WeatherCard from '../components/WeatherCard.vue';
  
  const props = defineProps(['location']);
  const weatherInfo = ref([]);

  // Hämta väder-och platsinformation
  function hamtaData () {
    if (props.location) {
      const locations = JSON.parse(localStorage.getItem('locations')) || [];
      const location = locations.find((loc) => {
        return loc.name === props.location
      }) || null;

      if (location) {
        let weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.long}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&windspeed_unit=ms&timezone=auto`;
        fetch(weatherAPI)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((data) => {
          if (data.length === 0) {
            throw 'Ingen data returnerades';
          }
          // For-loop som innehåller väderinfo
          weatherInfo.value = [];
          let items = data.daily.time.length;
          for (let index = 0; index < items; index++) {
            let wd = {};
            wd.date = data.daily.time[index];
            wd.weatherCondition = data.daily.weathercode[index];
            wd.maxTemp = data.daily.temperature_2m_max[index];
            wd.minTemp = data.daily.temperature_2m_min[index];
            wd.precipitation = data.daily.precipitation_sum[index];
            wd.windDirection = data.daily.winddirection_10m_dominant[index];
            wd.windSpeed = data.daily.windspeed_10m_max[index];
            weatherInfo.value.push(wd);
          }
        });
      }
    }
  }

// Kollar efter ändringar i props och sedan kör hämtaData
  watch(props, () => {
    hamtaData()
  });
// Kör hämtaData funktionen.
  onMounted(() => {
    hamtaData()
  })
  </script>
  
  <style scoped>
#weatherCardContainer {
  overflow-y: scroll;
  max-height: 30em;
  max-width: 40em;
}
  </style>