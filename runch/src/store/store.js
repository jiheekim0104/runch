import { createStore } from "vuex";
// import axios from 'axios'

export default createStore({
  state: {
    new: 10,
    categories: [
      {
        name: "전체",
        clicked: false,
      },
      {
        name: "분류1",
        clicked: false,
      },
      {
        name: "분류2",
        clicked: false,
      },
      {
        name: "분류3",
        clicked: false,
      },
      {
        name: "분류4",
        clicked: false,
      },
      {
        name: "다시선택하기",
        clicked: false,
      },
    ],
    allMenus: [
      //한 분류당 최소 4개를 선택해야함 (룰렛 생성 조건임 ㅇㅅㅇ )
      //분류1
      {
        id: 1,
        name: "가게1",
        htmlContent: "가게1이름이<br>길어집니다", //실제보이는 화면
        textColor: "white",
        background: "#96A5FF",
        category: "분류1",
      },
      {
        id: 2,
        name: "가게2",
        htmlContent: "가게2", //실제보이는 화면
        textColor: "white",
        background: "#6E9FED",
        category: "분류1",
      },
      {
        id: 3,
        name: "가게3",
        htmlContent: "가게3", //실제보이는 화면
        textColor: "white",
        background: "#5050FF",
        category: "분류1",
      },
      {
        id: 4,
        name: "가게4",
        htmlContent: "가게4", //실제보이는 화면
        textColor: "white",
        background: "#2828CD",
        category: "분류1",
      },

      // 분류2
      {
        id: 5,
        name: "가게5",
        htmlContent: "가게5", //실제보이는 화면
        textColor: "white",
        background: "#94EB3E",
        category: "분류2",
      },
      {
        id: 6,
        name: "가게6",
        htmlContent: "가게6", //실제보이는 화면
        textColor: "white",
        background: "#13C7A3",
        category: "분류2",
      },
      {
        id: 7,
        name: "가게7",
        htmlContent: "가게7", //실제보이는 화면
        textColor: "white",
        background: "#5AD18F",
        category: "분류2",
      },
      {
        id: 8,
        name: "가게8",
        htmlContent: "가게8", //실제보이는 화면
        textColor: "white",
        background: "#329632",
        category: "분류2",
      },

      // 분류3
      {
        id: 9,
        name: "가게9",
        htmlContent: "가게9", //실제보이는 화면
        textColor: "white",
        background: "#FF9E9B",
        category: "분류3",
      },
      {
        id: 10,
        name: "가게10",
        htmlContent: "가게10", //실제보이는 화면
        textColor: "white",
        background: "#FF607F",
        category: "분류3",
      },
      {
        id: 11,
        name: "가게11",
        htmlContent: "가게11", //실제보이는 화면
        textColor: "white",
        background: "#FFDAD7",
        category: "분류3",
      },
      {
        id: 12,
        name: "가게12",
        htmlContent: "가게12", //실제보이는 화면
        textColor: "white",
        background: "#FFCAD5",
        category: "분류3",
      },

      // 분류4
      {
        id: 13,
        name: "가게13",
        htmlContent: "가게13", //실제보이는 화면
        textColor: "white",
        background: "#FFB400",
        category: "분류4",
      },
      {
        id: 14,
        name: "가게14",
        htmlContent: "가게14", //실제보이는 화면
        textColor: "white",
        background: "#FFD732	",
        category: "분류4",
      },
      {
        id: 15,
        name: "가게15",
        htmlContent: "가게15", //실제보이는 화면
        textColor: "white",
        background: "#FFC31E",
        category: "분류4",
      },
      {
        id: 16,
        name: "가게16",
        htmlContent: "가게16", //실제보이는 화면
        textColor: "white",
        background: "#FFC192	",
        category: "분류4",
      },
    ],
    selectedMenus: [],
    newCases: [],
  },

  mutations: {
    selecteCategory: function (state, category) {
      console.log("insertMenu들어옴");
      console.log("store에서 선택된 category:", category.name);
      if (category.name == "전체") {
        if (category.clicked == true) {
          state.selectedMenus = state.allMenus.map((menu) => menu);
        } else {
          state.selectedMenus = [];
        }
      } else if (category.name == "다시선택하기") {
        for (let index = 0; index < state.categories.length; index++) {
          console.log(state.categories[index].clicked);
          state.categories[index].clicked = false;
        }
        state.selectedMenus = [];
      } else {
        //전체가 클릭되어있다면 초기회하고
        if (state.categories[0].clicked) {
          console.log("000000");
          state.selectedMenus = [];
          state.categories[0].clicked = false;
        }

        //그 카테고리가 클릭되었다면
        if (category.clicked) {
          console.log("들어갑니다.");
          //전체에서 선택한 카테고리랑 같은 메뉴를 selectedMenus에 넣습니다.
          for (let index = 0; index < state.allMenus.length; index++) {
            if (state.allMenus[index].category == category.name) {
              state.selectedMenus.push(state.allMenus[index]);
              console.log(state.selectedMenus.category);
            }
          }
        } else {
          // 한번더 클릭한경우에는
          console.log("지워야합니다.");

          for (let index = 0; index < state.selectedMenus.length; index++) {
            if (state.selectedMenus[index].category == category.name) {
              console.log("같습니다.");
              // selectedMenus에 들어가있는 인덱스번호를 찾고, 그 인덱스 번호를 splice에 넘겨줘서 삭제하도록 수정해야됨
              state.selectedMenus.splice(index,1);
              index--;
            }
          }
        }
      }
      console.log("selectedMenus:", state.selectedMenus);
    },
    addCase: function (state, value) {
      console.log("addCase 들어옴");
      console.log(value);
      state.newCases.push({ htmlContent: value });
      console.log(state.newCases);
    },
    completedAddCase: function (state) {
      console.log("completedAddCase 들어옴");
      state.selectedMenus = [];
      // state.selectedMenus = state.allMenus.map((menu)=>menu);
      state.selectedMenus = state.newCases.map((menu) => menu);
    },
    remove: function (state){
      console.log("remove 들어옴");
      state.newCases = [];
    }
  },

  actions: {},

  getters: {
    getCategorys(state) {
      console.log("getcategories");
      return state.categories;
    },

    getSelectedMenus(state) {
      console.log("getSelectedMenus");
      console.log(state.selectedMenus);
      return state.selectedMenus;
    },

    getAddCase(state) {
      console.log("getAddCase");
      console.log(state.newCases);
      return state.newCases;
    },
  },
});
