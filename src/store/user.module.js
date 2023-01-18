const state = {
    accessToken: null,
    isLoggedIn: false,
    signInVisited: false,
    CategoryVisited: false,
    CartVisited: false,

}

const mutations = {
    logout:(state) => {
        state.accessToken = null;
        state.isLoggedIn = false;
    },
    setaccessToken(state, accessToken){
        if(state.accessToken != null){
            state.isLoggedIn = true
        }
        else{
            state.isLoggedIn = false
        }
    },
    fetchAccessToken(state, accessToken){
        state.accessToken = accessToken
    },
    signInVisited: (state) =>{
        state.signInVisited = true;
    },
    CategoryVisited: (state) =>{
        state.CategoryVisited = true;
    },
    CartVisited: (state) =>{
        state.CartVisited = true;
    }

}

const action = {
    fetchAccessToken({ commit }){
        commit('fetchAccessToken', localStorage.getItem('accessToken'));
    },

    setaccessToken({commit}, accessToken){
        commit('setaccessToken',accessToken)
    },

    logout({ commit }){
        commit('logout');
    },

    CartVisited({commit}){
        commit('CartVisited');
    },
    
    signInVisited({commit}){
        commit('signInVisited');
    },
    CategoryVisited({commit}){
        commit('CategoryVisited');
    }

}

const userModule = {
    state,
    mutations,
    action,
    namespaced: true
}

export default userModule;