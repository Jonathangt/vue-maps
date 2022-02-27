import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW5ndCIsImEiOiJja3hucG9wcHM2ZDF3MnZtdTdmY2JveHQxIn0.Zj-wjZIVXx5ezApPIOx8Xg';

if ( !navigator.geolocation) {
    alert('Tu navegador no soporta la Geocalización')
    throw new Error ('Tu navegador no soporta la Geocalización')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
