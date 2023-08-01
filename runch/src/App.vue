<template>
  <div id="app">
    <app-side/>
    <app-roulette/>
  </div>
  
</template>

<script>
import AppSide from "./components/AppSide.vue";
import AppRoulette  from "./components/AppRoulette.vue";


export default {
  components:{
    AppSide,
    AppRoulette,
  }
}
</script>

<style>
html,body{
  margin: 0;
  height: 100%;
  width: 100%;
}
#app{
  display: -webkit-box;
}
</style>

