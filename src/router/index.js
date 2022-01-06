import { createRouter, createWebHashHistory } from 'vue-router'
import Forside from '../views/ViewForside.vue'

// For meta tags Vue-Meta could be used, but I seem that it doesn't work with Vue3 at the moment, so meta will be used with the routes.

const routes = [
  {
    path: '/',
    name: 'Forside',
    component: Forside
  },
  {
    path: '/holdplan',
    name: 'Holdplan',
    component: () => import('../views/ViewHoldplan.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/ViewBlog.vue')
  },
  {
    path: '/nyheder:nyhed',
    name: 'NyhedTemplate',
    component: () => import('../views/ViewNyhedTemplate.vue'),
    props: true
  },
  {
    path: '/nyheder',
    name: 'Nyheder',
    component: () => import('../views/ViewNyheder.vue')
  },
  {
    path: '/discipliner:disciplin',
    name: 'DisciplinTemplate',
    component: () => import('../views/ViewDisciplinTemplate.vue'),
    props: true
  },
  {
    path: '/discipliner',
    name: 'Discipliner',
    component: () => import('../views/ViewDiscipliner.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from, next) => {
  console.log(to,from)
  next();
}) 

export default router
