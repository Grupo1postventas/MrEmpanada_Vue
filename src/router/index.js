import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import(/* webpackChunkName: "about" */ '../views/Noticias.vue')
  },
  {
    path: '/equipo',
    name: 'Equipo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipo.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // ______________________________Apartado de servicios____________________________
  {
    path: '/servicios/combos',
    name: 'combos',
    component: () => import(/* webpackChunkName: "about" */ '../views/servicios/Combos.vue')
  },
  {
    path: '/servicios/empanadas',
    name: 'empanadas',
    component: () => import(/* webpackChunkName: "about" */ '../views/servicios/Empanadas.vue')
  },
  {
    path: '/servicios/bebidas',
    name: 'bebidas',
    component: () => import(/* webpackChunkName: "about" */ '../views/servicios/Bebidas.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
