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
      title: '靳世祥律师事务所'
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
    path: '/adviser_add',
    name: 'adviser_add',
    meta: {
      title: '法律顾问增加'
    },
    component: () => import('@/views/service/AdviserContractEdit')
  },

  {
    path: '/adviser_amount/:contract_id',
    name: 'adviser_amount',
    props: true,
    meta: {
      title: '法律顾问金额确认'
    },
    component: () => import('@/views/service/AdviserAmountList')
  },

  {
    path: '/adviser_confirm/:contract_id',
    name: 'adviser_confirm',
    props: true,
    meta: {
      title: '法律顾问确认'
    },
    component: () => import('@/views/service/AdviserContractConfirm')
  },

  {
    path: '/adviser_detail/:contract_id',
    name: 'adviser_detail',
    props: true,
    meta: {
      title: '顾问合同详情'
    },
    component: () => import('@/views/service/AdviserContractDetail')
  },

  {
    path: '/agency/',
    name: 'agency',
    props: true,
    meta: {
      title: '代理授权'
    },
    component: () => import('@/views/service/agency')
  },

  {
    path: '/agency_confirm/:company_id',
    name: 'agency_confirm',
    props: true,
    meta: {
      title: '代理授权确认'
    },
    component: () => import('@/views/service/agency/AgencyConfirm')
  },

  {
    path: '/agency_detail/:company_id',
    name: 'agency_detail',
    props: true,
    meta: {
      title: '代理授权详情'
    },
    component: () => import('@/views/service/agency/AgencyDetail')
  },

  {
    path: '/auth',
    name: 'auth',
    meta: {
      title: '用户授权'
    },
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
