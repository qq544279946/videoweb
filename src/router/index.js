import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Catagory from '../views/catagory/Catagory.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/',
      redirect:'/home'
    },
   
    {
      path:'/login',
      component:Login,
      meta:{
        notShowHeader:true
      }
    },
    {
      path:'/catagory',
      component:Catagory
    }
  ]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
