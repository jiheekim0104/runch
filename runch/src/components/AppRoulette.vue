<template>
  <div class="rouletteArea">
    <Roulette class="roulette" ref="wheel" :items="items" @click="launchWheel" />
  </div>
  
</template>

<script>
import { Roulette } from "vue3-roulette";

export default {
  components: {
    Roulette,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Banana",
          htmlContent: "Banana",
          textColor: "",
          background: "red",
        },
        {
          id: 2,
          name: "Apple",
          htmlContent: "Apple",
          textColor: "",
          background: "Orange",
        },
        {
          id: 3,
          name: "Orange and Purple",
          htmlContent: "Orange<br>and Purple",
          textColor: "",
          background: "gray",
        },
        {
          id: 4,
          name: "Cherry",
          htmlContent: "Cherry",
          textColor: "",
          background: "",
        },
        {
          id: 5,
          name: "Cherry",
          htmlContent: "Cherry",
          textColor: "",
          background: "",
        },
        {
          id: 6,
          name: "Cherry",
          htmlContent: "Cherry",
          textColor: "",
          background: "",
        },
      ],
    };
  },
  methods: {
    launchWheel() {
      this.$refs.wheel.launchWheel();
    },
  },
};
</script>

<style scoped>
.rouletteArea {
  width: 100%;
  border: 1px solid;
  margin: 10rem;
  margin-left: 50%;
}

.wheel-container{
/* 여기서 룰렛 크기를 키울수있는방법을 찾아야할듯? */
}

</style>

