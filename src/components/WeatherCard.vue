<script setup>
import weatherCodes from '../assets/weatherCodes';
const props = defineProps(['weatherData'])


</script>
 

<template>
    <!-- Format för väderkorten-->
    <div v-if="props.weatherData" id='card'>
        <p>Datum: <span class="data"> {{ props.weatherData.date }}</span></p>
        <p>Vädret väntas bli <span class="data">{{
        weatherCodes.find((itm) => {
            return itm.code == props.weatherData.weatherCondition
        }).text
        }}</span></p>
        <p>Temp: <span class="data"> {{ props.weatherData.minTemp }} </span> - <span class="data"> {{ props.weatherData.maxTemp }}</span>°C</p>
        <p>Nederbörd: <span class="data"> {{ props.weatherData.precipitation }}</span> mm</p>
        <p>Vind: <span class="data"> {{ props.weatherData.windSpeed }} </span> m/s från <span class="data"> {{ props.weatherData.windDirection }}</span></p>
    </div>
</template>


<style scoped>
#card {
    background-color: rgb(195, 201, 217);
    border: 1px solid navy;
    min-height: 100px;
    margin: 2em 1em;
    padding: 0.3em;
    border-radius: 1em;
}

.data {
    font-weight: 200;
    font-style: italic;
}
</style>