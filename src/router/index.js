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
        path: '/woche1aufgabe1',
        name: 'Woche 1 - Aufgabe 1',
        meta: 'Woche 1 - Aufgabe 1: Fachliche Argumentation über Erfolgsprinzipien des WWW',
        component: () => import('../views/Woche01Aufgabe1')
    },
    {
        path: '/woche1aufgabe2',
        name: 'Woche 1 - Aufgabe 2',
        meta: 'Woche 1 - Aufgabe 2: HTTP',
        component: () => import('../views/Woche01Aufgabe2')
    },
    {
        path: '/woche1aufgabe3',
        name: 'Woche 1 - Aufgabe 3',
        meta: 'Woche 1 - Aufgabe 3: Wireframe with HTML and CSS: Tribute Page',
        component: () => import('../views/Woche01Aufgabe3')
    },
    {
        path: '/woche1aufgabe4',
        name: 'Woche 1 - Aufgabe 4',
        meta: 'Woche 1 - Aufgabe 4: Wireframe with HTML and CSS (Survey Form)',
        component: () => import('../views/Woche01Aufgabe4')
    },
    {
        path: '/woche1aufgabe5',
        name: 'Woche 1 - Aufgabe 5',
        meta: 'Woche 1 - Aufgabe 5: Wireframe with HTML and CSS (Product Landing Page)',
        component: () => import('../views/Woche01Aufgabe5')
    },
    {
        path: '/woche2aufgabe1',
        name: 'Woche 2 - Aufgabe 1',
        meta: 'Woche 2 - Aufgabe 1: Responsiv mit Flexbox Desktop-First',
        component: () => import('../views/Woche02Aufgabe1')
    },
    {
        path: '/woche2aufgabe2',
        name: 'Woche 2 - Aufgabe 2',
        meta: 'Woche 2 - Aufgabe 2: Responsiv mit Grid Mobile-First',
        component: () => import('../views/Woche02Aufgabe2')
    },
    {
        path: '/woche2aufgabe3flex',
        name: 'Woche 2 - Aufgabe 3 Flexbox',
        meta: 'Woche 2 - Aufgabe 3:', // todo titel hinzufügen
        component: () => import('../views/Woche02Aufgabe3flex')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
