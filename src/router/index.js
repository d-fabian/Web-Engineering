import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: 'Web Engineering Masterkurs WS21/22',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/woche1aufgabe3',
    name: 'Woche 1 - Aufgabe 3',
    meta: 'Woche 1 - Aufgabe 3: Wireframe with HTML and CSS: Tribute Page',
    component: () => import('../views/Woche03Aufgabe3')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
