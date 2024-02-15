import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView,
      props:true
    },
    {
      path: '/:location',
      name: 'home',
      component: HomeView,
      props:true
    },
  ]
})

export default router
