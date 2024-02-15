<script setup>
import { RouterView } from 'vue-router';

import {ref, onMounted} from 'vue';
import router from './router';

const locations = ref([])
const currentLocation = ref(null) // För att hålla koll på vald stad

// 
onMounted(() => {
    // Omvandla locations från sträng till objekt
    locations.value = JSON.parse(localStorage.getItem('locations'))
    locations.value = [
    {name:'Mariehamn', lat:60.0973, long:19.9348},
    {name:'Canberra', lat:-35.2835, long:149.1281},
    {name:'Stockholm', lat:59.3294, long:18.0687},
    {name:'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', lat:53.2214, long:-4.2033}
    ];
    localStorage.setItem('locations', JSON.stringify(locations.value));
    // Ta locations objektet och gör den till sträng
})

// Metod att byta den valda staden
const switchLocation = (location) => {
  router.push('/'+ location.name)  
};

</script>

<template>
  <h1>Flavves väderapp</h1>
  <p>Välj en stad (på jorden){{ currentLocation }}</p>
  <!-- For loop med städerna -->
  <div id="containerButtons">
    <button class="containerButton" v-for="location in locations" :key="location" @click ="switchLocation(location)">{{ location.name }}</button>
  </div>
  <RouterView />
</template>

<style scoped>
h1,
p {
  text-align: center;
}

#containerButtons {
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}

.containerButton {
  text-align: center;
}

button {
  background-color: #8888885a; 
  color: #fff;
  border: 2px solid #888;
  padding: 0.7em; 
  border-radius: 0.2em;
  text-align: center; 
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; 
  margin: 0.1em;
}
</style>
