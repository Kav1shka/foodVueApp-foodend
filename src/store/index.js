import { createStore } from "vuex";

const store = createStore({
  state: {
    accessToken: null,
    isLoggedIn: false,
    signInVisited: false,
    CategoryVisited: false,
    CartVisited: false,
    cartList: [],
    total: 0,
    userDataList:[],
  },

  mutations: {
    logout: (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userDataList");
      localStorage.removeItem("cartList");
    },
    clearCart(state){
      state.cartList = [];
      localStorage.removeItem("cartList");
    },
    setaccessToken(state, accessToken) {
      if (state.accessToken != null) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    fetchAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    signInVisited: (state) => {
      state.signInVisited = true;
    },
    CategoryVisited: (state) => {
      state.CategoryVisited = true;
    },
    CartVisited: (state) => {
      state.CartVisited = true;
    },
    addFood: (state, payload) => {
      state.cartList.push({
        foodID: payload.id,
        foodName: payload.name,
        foodPrice: payload.price,
        Amount: payload.amount,
        image_URL: payload.url,
      });
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
      console.log(payload);
    },
    updateList:(state,updatedList)=>{
      state.cartList = updatedList;
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
      console.log("Final",state.cartList);
    },
    cartFetch: (state,cartList) => {
      if(localStorage.cartList){
      state.cartList = JSON.parse(localStorage.cartList);
      }
      else{
        state.cartList = [];
      }
    },
    setUserData:(state,userData)=>{
      state.userDataList = userData;
      localStorage.setItem("userDataList", JSON.stringify(state.userDataList));
    },
    userDataFetch: (state,userDataList) => {
      if(localStorage.userDataList){
      state.userDataList = JSON.parse(localStorage.userDataList);
      }
      else{
        state.userDataList = [];
      }
  },
},

  actions: {
    fetchAccessToken({ commit }) {
      commit("fetchAccessToken", localStorage.getItem("accessToken"));
    },

    setaccessToken({ commit }, accessToken) {
      commit("setaccessToken", accessToken);
    },

    logout({ commit }) {
      commit("logout");
    },
    clearCart({commit}){
      commit("clearCart");
    },
    CartVisited({ commit }) {
      commit("CartVisited");
    },

    signInVisited({ commit }) {
      commit("signInVisited");
    },
    CategoryVisited({ commit }) {
      commit("CategoryVisited");
    },
    CartVisited({ commit }) {
      commit("CartVisited");
    },
    addFood({ commit }, payload) {
      commit("addFood", payload);
    },
    cartFetch({ commit }) {
      commit("cartFetch");
    },
    setUserData({commit},userData){
      commit("setUserData",userData);
    },
    userDataFetch({commit}){
      commit("userDataFetch");
    },
    updateList({commit},updatedList){
      commit("updateList",updatedList);
      console.log("Action ",updatedList);
    }
  },
});

export default store;
