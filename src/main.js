import { createApp } from 'vue'
import App from './App.vue'
import './input.css'
import router from './router';
import store from "./store";


store.dispatch('fetchAccessToken');
store.dispatch('setaccessToken');
store.dispatch('cartFetch');
store.dispatch('userDataFetch');

 

 const app = createApp(App)
 app.use(router)
 app.use(store)
 app.mount('#app')
// createApp(App).mount('#app')