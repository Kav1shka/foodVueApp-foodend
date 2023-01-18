import { createApp } from 'vue'
import App from './App.vue'
import './input.css'
import router from './router';
import store from "./store";
import 'tw-elements';

 

 createApp(App).use(router).use(store).mount('#app')
// createApp(App).mount('#app')