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
      description: dataMeta.forside.beskrivelse
    }
  },
  {
    path: '/holdplan',
    name: 'Holdplan',
    component: () => import('../views/ViewHoldplan.vue'),
    meta: {
      title: dataMeta.forside.title,
      description: dataMeta.forside.beskrivelse
    }
  },
  {
    path: '/login/:create',
    name: 'LoginCreate',
    component: () => import('../views/ViewLoginCreate.vue'),
    props:true,
    meta: {
      title: dataMeta.login.title,
      description: dataMeta.login.beskrivelse
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/ViewLogin.vue'),
    meta: {
      title: dataMeta.login.title,
      description: dataMeta.login.beskrivelse
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/ViewEvents.vue'),
    meta: {
      title: dataMeta.events.title,
      description: dataMeta.events.beskrivelse,
    }
  },
  {
    path: '/nyheder',
    name: 'Nyheder',
    component: () => import('../views/ViewNyheder.vue'),
    meta: {
      title: dataMeta.nyheder.title,
      description: dataMeta.nyheder.beskrivelse
    }
  },
  {
    path: '/discipliner/:disciplin',
    name: 'DisciplinTemplate',
    component: () => import('../views/ViewDisciplinTemplate.vue'),
    props: true,
    meta: {
      title: dataMeta.discipliner.title,
      description: dataMeta.discipliner.beskrivelse,
      // addOnTitle: null
    }
  },
  {
    path: '/discipliner',
    name: 'Discipliner',
    component: () => import('../views/ViewDiscipliner.vue'),
    meta: {
      title: dataMeta.discipliner.title,
      description: dataMeta.discipliner.beskrivelse
    }
  },
  {
    path: '/error',
    name: 'NotFound',
    component: () => import('../views/ViewError.vue'),
    meta: {
      title: "Error!",
      description: "Something went wrong..."
    }
  },
  {
    // It seems that is just the way to type the last path that picks up everything that comes this far.
    path: "/:pathMatch(.*)*",
    name: "LastStop",
    redirect: '/error'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from, next) => {
  // Here we change the meta description and the title before entering the route.
  console.log("%c Router: TO ","background-color: #66ff66; color: black;",to)
  console.log("%c Router: FROM ","background-color: #66ff66; color: black;",from)
  if(to.meta.title) {
    document.title = "Aalborg Martial Arts - " + to.meta.title;
    if(to.meta.addOnTitle) {
      // Not used in this version (OUT OF SCOPE)
      document.title += " - " + to.meta.addOnTitle;
    }

    // Help from https://stackoverflow.com/questions/2568760/is-it-possible-to-use-javascript-to-change-the-meta-tags-of-the-page/2568915
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.beskrivelse);
  } else {
    document.title = "Aalborg Martial Arts";
  }
  next();
}) 

export default router
