<template>
  <div class="sideArea">
    <img class="img" src="../assets/logo.png" @click="goMain">
    <div class="categoryBtn" 
    v-for="category in this.getCategorys" :key="category" @click="selectedCategory(category)">
      <a>{{category.name}}</a>
    </div>
    
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex';

export default { 
  computed:{
    ...mapGetters(['getCategorys','getMenus']),
  },
  methods:{
    goMain(){
      this.$store.state.selectedMenus=[]
    },
    selectedCategory(category){
      console.log(category);
      category.clicked = !category.clicked;
      this.$store.commit('selecteCategory',category)
    }
  }
};
</script>

<style scoped>
.sideArea{
  background-color: rgb(16, 86, 218);
  width: 15rem;
  height: 100vh;
  text-align: center;
}

.img{
  margin: 3rem;
}

.categoryBtn{
  width: 10rem;
  margin: 0 auto 1rem auto;
  padding: 10px 10px;
  border: none;
  font-size: 18px;
  font-weight: bolder;
  color:  rgb(16, 86, 218);
  background-color: #fff;
  border-radius: 10px; /* 버튼의 경계를 둥글게 설정 */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.2); /* 더 볼록한 느낌의 그림자 효과 */
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s; /* 애니메이션 효과를 위한 transition 설정 */
}

.categoryBtn:hover {
  transform: translateY(-3px); /* 호버 시 버튼을 약간 위로 이동하여 볼록한 느낌 표현 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 16px 32px rgba(0, 0, 0, 0.3); /* 더 볼록한 느낌의 그림자 효과 */
}

.categoryBtn>a{
  vertical-align: middle;
}
</style>

