import { createStore } from "vuex";

const store = createStore({
  state: {
    accessToken: null,
    isLoggedIn: false,
    signInVisited: false,
    CategoryVisited: false,
    CartVisited: false,
    
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
  },
});

export default store;
