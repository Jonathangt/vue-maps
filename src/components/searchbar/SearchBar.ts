import { defineComponent, ref, computed } from "vue";

import { usePlacesStore } from '@/composables'

import SearchResults from '@/components/search-results/SearchResults.vue'
export default defineComponent({
    name:'SearchBar',

    components:{
        SearchResults,
    },
    
    setup(){

        const debounceTimeout = ref();
        const debouncedValue = ref('')

        const { searchPlacesByTerm } = usePlacesStore()
      

        return{
            debouncedValue,

            searchTerm:computed({
                get(){
                    return debouncedValue.value;
                },

                set( val:string ){
                    //Cada vez que el user escriba algo limpia el time
                    //Solo cuando deja de escribir se ejecuta la funtion
                    if ( debounceTimeout.value ) clearInterval( debounceTimeout.value )

                    debounceTimeout.value = setTimeout( ()=> {
                        debouncedValue.value = val
                        searchPlacesByTerm( val )
                    }, 500 )

                    //debouncedValue.value = val
                }
            })
        }
    }
})