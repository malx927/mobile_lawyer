import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {

  const openid = localStorage.getItem('openid');

  if(!openid){
    if(to.path === '/auth'){
      next()
    }else{
      localStorage.setItem('to_url', to.fullPath)
      next('/auth')
    }

export default router
