import { createRouter, createWebHashHistory } from 'vue-router'
import Forside from '../views/ViewForside.vue'

import dataMeta from "../assets/data/data_meta.json"

// For meta tags Vue-Meta could be used, but I seem that it doesn't work with Vue3 at the moment, so meta will be used with the routes.

/* 
  The meta data is static at the moment, but could be fetched from an API. The meta data shouldn't change that often on the main routes, 
  and the dynamic paths, will be fetched with "meta-description".
*/

const routes = [
  {
    path: '/',
    name: 'Forside',
    component: Forside,
    meta: {
      title: dataMeta.forside.title,
      description: dataMeta.forside.desc
    }
  },
  {
    path: '/holdplan',
    name: 'Holdplan',
    component: () => import('../views/ViewHoldplan.vue'),
    meta: {
      title: dataMeta.forside.title,
      description: dataMeta.forside.desc
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/ViewBlog.vue'),
    meta: {
      title: dataMeta.blog.title,
      description: dataMeta.blog.desc
    }
  },
  {
    path: '/nyheder:nyhed',
    name: 'NyhedTemplate',
    component: () => import('../views/ViewNyhedTemplate.vue'),
    props: true,
    meta: {
      title: dataMeta.nyheder.title,
      description: dataMeta.nyheder.desc,
      addOnTitle: null
    }
  },
  {
    path: '/nyheder',
    name: 'Nyheder',
    component: () => import('../views/ViewNyheder.vue'),
    meta: {
      title: dataMeta.nyheder.title,
      description: dataMeta.nyheder.desc
    }
  },
  {
    path: '/discipliner:disciplin',
    name: 'DisciplinTemplate',
    component: () => import('../views/ViewDisciplinTemplate.vue'),
    props: true,
    meta: {
      title: dataMeta.discipliner.title,
      description: dataMeta.discipliner.desc,
      addOnTitle: null
    }
  },
  {
    path: '/discipliner',
    name: 'Discipliner',
    component: () => import('../views/ViewDiscipliner.vue'),
    meta: {
      title: dataMeta.discipliner.title,
      description: dataMeta.discipliner.desc
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from, next) => {
  // Here we change the meta description and the title before entering the route.
  console.log("%c TO ","background-color: yellow; color: black;",to)
  console.log(from)
  if(to.meta.title) {
    document.title = "Aalborg Martial Arts - " + to.meta.title;

    // Help from https://stackoverflow.com/questions/2568760/is-it-possible-to-use-javascript-to-change-the-meta-tags-of-the-page/2568915
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description);
  } else {
    document.title = "Aalborg Martial Arts";
  }
  next();
}) 

export default router
