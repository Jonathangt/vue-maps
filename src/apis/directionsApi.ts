import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
        geometries:'geojson',
        overview:'simplified',
        steps:false,
        access_token:'pk.eyJ1Ijoiam9uYXRoYW5ndCIsImEiOiJja3hucG9wcHM2ZDF3MnZtdTdmY2JveHQxIn0.Zj-wjZIVXx5ezApPIOx8Xg',
    }
})

export default directionsApi