import "@/assets/css/global.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { 
  Button, 
  NavBar, 
  Col, 
  Row, 
  Toast,
  Swipe, 
  SwipeItem, 
  Lazyload, 
  Icon, 
  Panel, 
  Form, 
  Field,
  Cell,
  CellGroup,
  Calendar,
  Popup,
  Divider,
  Grid, 
  GridItem
 } from 'vant';


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
Vue.use(Calendar);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Divider);
Vue.use(Grid);
Vue.use(GridItem);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
