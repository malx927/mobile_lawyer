import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      title: '首页'
    },
    component: Home
  },

  {
    path: '/private',
    name: 'private',
    meta: {
      title: '私人律师'
    },
    component: () => import('@/views/service/PrivateLawyer')
  },

  {
    path: '/adviser',
    name: 'adviser',
    meta: {
      title: '法律顾问'
    },
    component: () => import('@/views/service/LegalAdviser')
  },

  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/components/auth/Auth')
  }

]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  const openid = localStorage.getItem('openid');

  if(!openid){
    if(to.path === '/auth'){
      next()
    }else{
      localStorage.setItem('to_url', to.fullPath)
      next('/auth')
    }
  }else{
    next()
  }

})

export default router
