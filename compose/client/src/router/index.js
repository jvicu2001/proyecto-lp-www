// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login-pa.vue')
  },
  {
    path: '/farmacia/inventario',
    name: 'Inventario Farmacia',
    component: () => import ('@/views/InventarioFarmacia.vue')
  },
  {
    path: '/medico/receta',
    name: 'Receta Medica',
    component: () => import ('@/views/Recipes.vue')
  },
  {
    path: '/medico/inventario',
    name: 'Inventario Medico',
    component: () => import ('@/views/InventarioMedico.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
