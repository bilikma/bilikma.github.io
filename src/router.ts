import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/home/home.vue'
import About from './components/about/about.vue'
import Contact from './components/contact/contact.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHashHistory(), // hash mode funguje i na GitHub Pages
  routes
})

export default router
