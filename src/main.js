import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, NavBar, Col, Row, Toast } from 'vant';
import { Swipe, SwipeItem, Lazyload, Icon } from 'vant';
import "@/assets/css/global.css"

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
