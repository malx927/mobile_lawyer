import "@/assets/css/global.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, NavBar, Col, Row, Toast } from 'vant';
import { Swipe, SwipeItem, Lazyload, Icon, Panel, Form, Field  } from 'vant';
import { Popup } from 'vant';
import { Calendar } from 'vant';


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
Vue.use(Panel);
Vue.use(Form);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Calendar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
