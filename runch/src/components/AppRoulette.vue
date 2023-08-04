<template>
  <div>
    <div class="infoBox" v-if="this.getSelectedMenus.length == 0">
      <div class="useInfo">
        1. <span class="highlight">전체</span>를 누르면 저장되어있는 모든 음식점을 대상으로 룰렛이 생성됩니다. <br>
        2. 원하는 특정카테고리가 있는 경우에는 <span class="highlight">해당 카테고리를 누르면</span> 룰렛이 생성됩니다. <br>
        3. <span class="highlight">여러 카테고리를 선택</span>하여 룰렛을 생성할수있습니다. <br>
        4. 선택한 카테고리를 제거하고싶을때에는 한번더 눌러주면 룰렛에서 제거됩니다. <br>
        5. <span class="highlight">다시선택하기</span>를 누르면 룰렛이 초기화됩니다. <br>
        6. 사용자 생성 룰렛을 만들고싶은 경우에는 아래를 참고해주세요. <br>
      </div>

      <span class="highlight"></span>

      <div class="make">
        <input type="text" v-model="newCase" v-on:keyup.enter="addCase" placeholder="내용을 입력하세요.">
        <div class="addBnt" @click="addCase">추가</div>
        <div class="completeBnt" @click="completedAddCase">룰렛생성</div>

      </div>
      <div class="makeInfo" v-if="this.getAddCase == 0">
        1. 사용자 생성 룰렛을 만들기위해서 <span class="highlight">최소 4가지 조건</span>을 입력해야합니다. (룰렛 최소 생성조건) <br>
        2. 조건을 하나씩 입력하고 엔터 또는 추가버튼을 눌러주세요. <br>
        3. 조건을 모두 입력하셨으면 룰렛생성 버튼을 눌러주세요.
      </div>
      <div v-else>
        <div class="makeInfo" v-for="newcase in this.getAddCase" :key="newcase">
          {{ newcase.htmlContent }}
        </div>
        <div class="remove" @click="remove">전체지우기</div>
      </div>
    </div>
    <div class="rouletteArea" v-else-if="this.getSelectedMenus.length != 0">
      <img src="../assets/point.png">
      <Roulette class="roulette" ref="wheel" :size="700" :items="this.getSelectedMenus" @click="launchWheel" />
    </div>
  </div>
</template>

<script>
import { Roulette } from "vue3-roulette";
import { mapGetters } from 'vuex';

export default {
  components: {
    Roulette,
  },

  methods: {
    launchWheel() {
      this.$refs.wheel.launchWheel();
    },
    addCase() {
      if (this.newCase !== '') {
        this.$store.commit('addCase', this.newCase);
        console.log(this.newCase);
        this.clearInput();
      }
    },
    clearInput() {
      this.newCase = '';
    },
    completedAddCase() {
      this.$store.commit('completedAddCase')
    },
    remove() {
      this.$store.commit('remove')
    }
  },

  computed: {
    ...mapGetters(['getSelectedMenus', 'getAddCase']),
  }

};
</script>

<style scoped>
div {
  flex: 1;
}


.useInfo {
  margin: 100px 0px 50px 30px;
}

.make {
  margin: 30px;
  display: inline-flex;
}

.make>input {
  width: 500px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

input:focus {
  border-color: rgb(16, 86, 218);
  /* 클릭 시 테두리 색상 변경 */
  outline: none;
  /* 클릭 시 내장된 브라우저 스타일 제거 */
}

.addBnt {
  width: 100px;
  height: 20px;
  border: 2px solid rgb(16, 86, 218);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin-left: 5px;
  text-align: center;
  padding: 0.6rem;
  font-weight: bolder;
  color: rgb(16, 86, 218);
}

.completeBnt {
  width: 100px;
  height: 20px;
  border: 2px solid rgb(16, 86, 218);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin-left: 5px;
  text-align: center;
  padding: 0.6rem;
  font-weight: bolder;
  color: white;
  background-color: rgb(16, 86, 218);
}

.remove {
  width: 200px;
  height: 20px;
  border: 2px solid rgb(16, 86, 218);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin-left: 200px;
  text-align: center;
  padding: 0.6rem;
  font-weight: bolder;
  color: white;
  background-color: rgb(16, 86, 218);
}

.makeInfo {
  margin-left: 30px;
}

.rouletteArea {
  margin: 100px 0px !important;
  width: 100%;
  margin: 10rem;
}

.rouletteArea>img {
  position: absolute;
  width: 50px;
  height: 60px;
  z-index: 99;
  left: 1053px;
  top: 55px;
}

.roulette {
  position: relative;
  width: 100%;
}

.highlight {
  font-weight: bolder;
  color: rgb(16, 86, 218);
}</style>
