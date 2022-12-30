// import axios from 'axios';
// const state = {
//   cartItems: []
// }
import { createStore } from 'vuex'
import product from'./products.module';
import cart from './Cart.module';

export default createStore({
  modules: {
    product,
    cart
  }
})