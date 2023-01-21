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
  },

  mutations: {
    logout: (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
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
    cartFetch: (state) => {
      state.cartList = JSON.parse(localStorage.cartList);
    },
    getTotal: (state) =>{ 
      //state.total = 
    }
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
  },
});

export default store;
