<template>
  <!-- <div id="app"> -->
    <app-side/>
    <app-roulette/>
  <!-- </div> -->
  
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
  display: flex;
}

/* .wheel .content span{
    font-size: 30px;
  } */

.wheel .content span{
  display: block;
  margin: 0 auto;
  width: 50%;
  text-wrap: balance;
}

.wheel-item{
  border: none;
}
</style>

