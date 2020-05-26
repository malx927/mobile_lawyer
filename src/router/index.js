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
    path: '/private_contract_add',
    name: 'private_contract_add',
    meta: {
      title: '律师合同增加'
    },
    component: () => import('@/views/service/PrivateContractEdit')
  },

  {
    path: '/private_contract_update/:contract_id',
    name: 'private_contract_update',
    props: true,
    meta: {
      title: '律师合同修改'
    },
    component: () => import('@/views/service/PrivateContractEdit')
  },

  {
    path: '/private_contract_detail/:contract_id',
    name: 'private_contract_detail',
    props: true,
    meta: {
      title: '律师合同详情'
    },
    component: () => import('@/views/service/PrivateContractDetail')
  },

  {
    path: '/private_contract_confirm/:contract_id',
    name: 'private_contract_confirm',
    props: true,
    meta: {
      title: '律师合同确认'
    },
    component: () => import('@/views/service/PrivateContractConfirm')
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
  },

  {
    path: '/error',
    name: 'error',
    meta: {
      title: '错误提示'
    },
    component: () => import('@/components/Error')
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
