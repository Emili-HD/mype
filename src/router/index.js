import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WPService from '../services/WPService.js'

let menu = null
WPService.getMenu()
  .then((response) => {
    menu = response.data
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Mype',
      component: HomeView,
    },
    {
      path: '/sobre-mype',
      name: 'Sobre Mype',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
