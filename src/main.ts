import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);

createApp(App).use(store).use(router).mount('#app')

