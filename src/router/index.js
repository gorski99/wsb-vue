import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearcherView from '../views/SearcherView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wyszukiwarka-wykladowcow',
      name: 'searcher',
      component: SearcherView
    },
    {
      path: '/o-nas',
      name: 'about',
      component: AboutView
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router

