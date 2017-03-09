/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
    path: '/detail/:id',
    name:'detail',
    component: require('../views/detail')
  },
  {
    path: '/index',
    component: require('../views/index')
  },
  {
    path: '/blogs',
    component: require('../views/blogs')
  },
    {
    path: '/news/:type',
    name: 'news',
    component: require('../views/news')
  },
  {
    path: '/newDetail/:id',
    name:'newDetail',
    component: require('../views/newDetail')
  },
  {
    path: '*',
    component: require('../views/blogs')
  }]
})

export default router
