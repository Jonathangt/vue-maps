import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        language:'es',
        access_token:'pk.eyJ1Ijoiam9uYXRoYW5ndCIsImEiOiJja3hucG9wcHM2ZDF3MnZtdTdmY2JveHQxIn0.Zj-wjZIVXx5ezApPIOx8Xg',
    }
})

export default searchApi