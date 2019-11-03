import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/parentInvokeChild',
    name: '父调子',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/basic/parentInvokeChild/ParentInvokeChild.vue')
  }, {
    path: '/router/param/UrlProp1/:id', // url : http://localhost:8080/#/router/param/UrlProp1/13
    name: '路由参数 - restful形式', // 路由的基础 使用$route.params.id获取:id的值
    component: () => import('@/views/basic/router/UrlProp01.vue')
  },
  {
    path: '/router/param/UrlProp2/:id', // url : http://localhost:8080/#/router/param/UrlProp2/13
    name: '路由参数2',
    props: true, // 如果 props 被设置为 true，route.params 将会被设置为组件属性。
    component: () => import('@/views/basic/router/UrlProp02.vue')
  },
  {
    path: '/router/param/UrlProp3', // url : http://localhost:8080/#/router/param/UrlProp3?q=hello&name=thd
    name: '路由参数-函数模式',
    props: (route) => ({ q: route.query.q, name: route.query.name }), // 路由参数的函数模式
    component: () => import('@/views/basic/router/UrlProp03.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
