import { createApp } from 'vue'
import App from './App.vue'
import './input.css'
import router from './router';

// main.js
 
import store from "./store";
 

 createApp(App).use(router).use(store).mount('#app')
// createApp(App).mount('#app')