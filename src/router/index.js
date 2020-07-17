import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: '/home'
  },

  {
    path: '/home',
    component: () => import('../views/home/home')
  },

  {
    path: '/cookbook',
    name: 'cookbook',
    component: () => import('../views/cookbook/cookbook')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
