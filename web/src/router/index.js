import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '../App.vue'
import tableIdx from '../views/tables/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: app
  },
  {
    path: '/index',
    component: tableIdx
  }
]

const router = new VueRouter({
  routes
})

export default router
