import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '../views/IntroductionView.vue'

const routes = [
  {
    path: '/',
    name: 'introview',
    component: IntroductionView
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/single-product',
    name: 'single-product',
    component: () => import( '../views/SingleProductView.vue')
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import( '../views/IntroductionView.vue')
  },
   {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/CartView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import( '../views/SignInView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
