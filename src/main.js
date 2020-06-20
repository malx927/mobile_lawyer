import "@/assets/css/global.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

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
  GridItem,
  Empty,
  RadioGroup, 
  Radio,
  Notify,
  List,
  Tab, 
  Tabs
 } from 'vant';

 import { Image as VanImage } from 'vant';


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
Vue.use(VanImage);
Vue.use(Empty);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Notify);
Vue.use(List);
Vue.use(Tabs);
Vue.use(Tab);

Vue.prototype.$moment = moment;

window.addEventListener('popstate', function(){
  router.isBack = true
}, false)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
