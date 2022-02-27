import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name:'SearchResults',

    setup(){

        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()
        const activePlace = ref('')

        watch( places, (newPLaces) => {
            activePlace.value = '';
            setPlaceMarkers(newPLaces)
        });


        return{
            isLoadingPlaces, 
            places,
            activePlace,

            onPlaceClicked:( place: Feature ) => {
                const [ lng, lat ] = place.center;
                activePlace.value = place.id

                map.value?.flyTo({
                    center: [ lng, lat ],
                    zoom: 14,
                })
            },

            getRouteDirections:( place: Feature) => {
                if ( !userLocation.value ) return

                const [ lng, lat ] = place.center;
                const [ startLng, startLat ] = userLocation.value

                const start:[number, number] = [ startLng, startLat]
                const end:[number, number] = [ lng, lat ]

                getRouteBetweenPoints( start, end )
            },
        }
    }
})