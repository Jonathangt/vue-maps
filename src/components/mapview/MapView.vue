
<script lang="ts" src="./MapView.ts"/>

<template>
  <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
      <div class="text-center">
        <h3 style="color:#ffff;">Please wait</h3>
        <span>Locating..</span>
      </div>
  </div>

  <div v-show="isUserLocationReady" ref="mapElement" class="map-container"/>
</template>

<style scoped>
.loading-map{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

.map-container{
    position: fixed;
    width: 100vw;
    height: 100vw;
}
</style>