import { createRouter, createWebHashHistory } from 'vue-router'
import Forside from '../views/ViewForside.vue'

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

export default router
