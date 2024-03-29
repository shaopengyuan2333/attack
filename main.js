import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, { size: 'small', zIndex: 3000 });


new Vue({
  el: '#app',
  render: h => h(App)
});s