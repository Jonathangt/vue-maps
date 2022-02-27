import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from "mapbox-gl";
import { usePlacesStore, useMapStore } from "@/composables";

export default  defineComponent({
    name:'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();

        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no exits');
            if ( !userLocation.value ) throw new Error('User location no exits');
            
            await Promise.resolve();
                
            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup()//{ offset:[0, -25]}
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Position</h4>
                    <p> ${userLocation.value} </p>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );

                //todo: save el mapa en Vuex
                setMap( map )
        }

        onMounted(()=>{
            if ( isUserLocationReady.value ) {
                return initMap();
                //console.log('No tengo localización aún!! ');
            }
        });

        watch( isUserLocationReady, ( newVal ) => {
            if ( isUserLocationReady.value)  initMap();            
        })


        return {
            //isLoading,
            //useLocation,
            isUserLocationReady,
            mapElement,
        }
    }
});