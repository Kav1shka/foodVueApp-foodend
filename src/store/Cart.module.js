
import axios from 'axios';

const state = {
  cartItems: []
}


const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  }
}
const actions = {
  getCartItems ({ commit }) {
    axios.get('http://localhost:8000/cart/get_cart_items').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
  addCartItem ({ commit }, cartItem) {
    axios.post('http://localhost:8000/cart/add_cart_item', cartItem).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
  removeCartItem ({ commit }, cartItem) {
    axios.delete('http://localhost:8000/cart/delete_item', cartItem).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
 
}

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.quantity * cartItem.price) + acc;
    }, 0).toFixed(2);
  },
  
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}

export default cartModule;