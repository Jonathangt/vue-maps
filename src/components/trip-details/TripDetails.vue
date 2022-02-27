<template>
    <div v-if="distance" class="trip-container column">
        <div class="col"> <b>Distance</b>: <strong> {{ distance }} kms</strong></div>
        <div class="col"> <b>Minutes</b>: <strong> {{ duration }} minutes</strong></div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useMapStore } from '@/composables'

export default {
    name:'TripDetails',
    setup(){

        const { distance, duration } = useMapStore()

        return {
            distance,
            duration
        }

    }
}
</script>

<style scoped>
.trip-container{
    background-color: white;
    border-radius: 10px;
    bottom: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    left: 20px;
    padding: 10px;
    position: fixed;
    width: 270px;
}

strong{
    color: #42b983;
}
</style>