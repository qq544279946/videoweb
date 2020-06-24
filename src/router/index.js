import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
