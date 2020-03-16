import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/test/msearch',
    name: 'msearch',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/msearch.vue'),
    meta:{
      flag:false
    }
  },
  {
    path: '/test/mlist',
    name: 'mlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/mlist.vue'),
    meta:{
      flag:false
    }
  },
  {
    path: '/test/minfo',
    name: 'minfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/minfo.vue'),
    meta:{
      flag:false
    }
  },
  {
    path: '/test/mview',
    name: 'mview',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/mview.vue'),
    meta:{
      flag:false
    }
  },
  {
    path:'/',
    redirect:'/test/msearch'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
