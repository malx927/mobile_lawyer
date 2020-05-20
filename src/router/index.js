import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { get_token_openid } from '@/api/utils'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  const openid = localStorage.getItem('openid');
  console.log(openid)
  if(!openid){
    //获取openid
		get_token_openid()
	//window.location.href='/api/wechat/get_token_openid'
    // get_token_openid().then(response=>{
    //   console.log(response)
    // })
    
    //保存到本地
  }
  // if (to.path === '/login') return next()
  // // 获取token
  // const tokenStr = window.sessionStorage.getItem('token')
  // if (!tokenStr) return next('/login')
  next()
})

export default router
