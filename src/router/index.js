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
        meta: 'Woche 2 - Aufgabe 3: Holy Grail - Flexbox',
        component: () => import('../views/Woche02Aufgabe3flex')
    },
    {
        path: '/woche2aufgabe3grid',
        name: 'Woche 2 - Aufgabe 3 Grid',
        meta: 'Woche 2 - Aufgabe 3: Holy Grail - Grid',
        component: () => import('../views/Woche02Aufgabe3grid')
    },
    {
        path: '/woche2aufgabe4',
        name: 'Woche 2 - Aufgabe 4',
        meta: 'Woche 2 - Aufgabe 4: Responsiv mit Grid',
        component: () => import('../views/Woche02Aufgabe4')
    },
    {
        path: '/woche3aufgabe1',
        name: 'Woche 3 - Aufgabe 1',
        meta: 'Woche 3 - Aufgabe 1: Funktionen in JavaScript',
        component: () => import('../views/Woche03Aufgabe1')
    },
    {
        path: '/woche3aufgabe2',
        name: 'Woche 3 - Aufgabe 2',
        meta: 'Woche 3 - Aufgabe 2: Advanced Functional JavaScript Programming',
        component: () => import('../views/Woche03Aufgabe2')
    },
    {
        path: '/woche4aufgabe1',
        name: 'Woche 4 - Aufgabe 1',
        meta: 'Woche 4 - Aufgabe 1: Einkaufsliste',
        component: () => import('../views/Woche04Aufgabe1')
    },
    {
        path: '/woche4aufgabe2',
        name: 'Woche 4 - Aufgabe 2',
        meta: 'Woche 4 - Aufgabe 2: Rednerliste mit Zeitmessung',
        component: () => import('../views/Woche04Aufgabe2')
    },
    {
        path: '/woche4aufgabe3',
        name: 'Woche 4 - Aufgabe 3',
        meta: 'Woche 4 - Aufgabe 3: Tabellenkalkulation mit den Bordmitteln des Webs',
        component: () => import('../views/Woche04Aufgabe3')
    },
    {
        path: '/woche4aufgabe4',
        name: 'Woche 4 - Aufgabe 4',
        meta: 'Woche 4 - Aufgabe 4: HTML-Editor',
        component: () => import('../views/Woche04Aufgabe4')
    },
    {
        path: '/woche5aufgabe1',
        name: 'Woche 5 - Aufgabe 1',
        meta: 'Woche 5 - Aufgabe 1: Promises',
        component: () => import('../views/Woche05Aufgabe1')
    },
    {
        path: '/woche5aufgabe2',
        name: 'Woche 5 - Aufgabe 2',
        meta: 'Woche 5 - Aufgabe 2: async / await',
        component: () => import('../views/Woche05Aufgabe2')
    },
    {
        path: '/woche5aufgabe3',
        name: 'Woche 5 - Aufgabe 3',
        meta: 'Woche 5 - Aufgabe 3: Web Worker',
        component: () => import('../views/Woche05Aufgabe3')
    },
    {
        path: '/woche5aufgabe4',
        name: 'Woche 5 - Aufgabe 4',
        meta: 'Woche 5 - Aufgabe 4: WWW-Navigator',
        component: () => import('../views/Woche05Aufgabe4')
    },
    {
        path: '/woche6aufgabe1',
        name: 'Woche 6 - Aufgabe 1',
        meta: 'Woche 6 - Aufgabe 1: Statistik-Balkendiagramm in SVG',
        component: () => import('../views/Woche06Aufgabe1')
    },
    {
        path: '/woche6aufgabe2',
        name: 'Woche 6 - Aufgabe 2',
        meta: 'Woche 6 - Aufgabe 2: SVG Bezier-Animation',
        component: () => import('../views/Woche06Aufgabe2')
    },
    {
        path: '/woche6aufgabe3',
        name: 'Woche 6 - Aufgabe 3',
        meta: 'Woche 6 - Aufgabe 3: Kalligraphie-Editor in SVG',
        component: () => import('../views/Woche06Aufgabe3')
    },
    {
        path: '/woche7aufgabe1',
        name: 'Woche 7 - Aufgabe 1',
        meta: 'Woche 7 - Aufgabe 1: File Generatoren',
        component: () => import('../views/Woche07Aufgabe1')
    },
    {
        path: '/woche7aufgabe2',
        name: 'Woche 7 - Aufgabe 2',
        meta: 'Woche 7 - Aufgabe 2: Performance Merge',
        component: () => import('../views/Woche07Aufgabe2')
    },
    {
        path: '/woche7aufgabe3',
        name: 'Woche 7 - Aufgabe 3',
        meta: 'Woche 7 - Aufgabe 3: Express.js Server',
        component: () => import('../views/Woche07Aufgabe3')
    },
    {
        path: '/woche8aufgabe1a',
        name: 'Woche 8 - Aufgabe 1a',
        meta: 'Woche 8 - Aufgabe 1: Web-Komponenten erstellen',
        component: () => import('../views/Woche08Aufgabe1a')
    },
    {
        path: '/woche8aufgabe1b',
        name: 'Woche 8 - Aufgabe 1b',
        meta: 'Woche 8 - Aufgabe 1: Web-Komponenten erstellen',
        component: () => import('../views/Woche08Aufgabe1b')
    },
    {
        path: '/woche8aufgabe1c',
        name: 'Woche 8 - Aufgabe 1c',
        meta: 'Woche 8 - Aufgabe 1: Web-Komponenten erstellen',
        component: () => import('../views/Woche08Aufgabe1c')
    },
    {
        path: '/woche8aufgabe1d',
        name: 'Woche 8 - Aufgabe 1d',
        meta: 'Woche 8 - Aufgabe 1: Web-Komponenten erstellen',
        component: () => import('../views/Woche08Aufgabe1d')
    },
    {
        path: '/woche8aufgabe1e',
        name: 'Woche 8 - Aufgabe 1e',
        meta: 'Woche 8 - Aufgabe 1: Web-Komponenten erstellen',
        component: () => import('../views/Woche08Aufgabe1e')
    },
    {
        path: '/woche8aufgabe1f',
        name: 'Woche 8 - Aufgabe 1f',
        meta: 'Woche 8 - Aufgabe 1: Web-Komponenten erstellen',
        component: () => import('../views/Woche08Aufgabe1f')
    },
    {
        path: '/woche8aufgabe2',
        name: 'Woche 8 - Aufgabe 2',
        meta: 'Woche 8 - Aufgabe 2: LitElement Menü-Komponente',
        component: () => import('../views/Woche08Aufgabe2')
    },
    {
        path: '/woche8aufgabe3',
        name: 'Woche 8 - Aufgabe 3',
        meta: 'Woche 8 - Aufgabe 3: LitElement WWW-Navigator',
        component: () => import('../views/Woche08Aufgabe3')
    },
    {
        path: '/woche9aufgabe1',
        name: 'Woche 9 - Aufgabe 1',
        meta: 'Woche 9 - Aufgabe 1: PWA',
        component: () => import('../views/Woche09Aufgabe1')
    },
    {
        path: '/woche10aufgabe1',
        name: 'Woche 10 - Aufgabe 1',
        meta: 'Woche 10 - Aufgabe 1: Komponente in Vue.js: Word Count',
        component: () => import('../views/Woche10Aufgabe1')
    },
    {
        path: '/woche10aufgabe2',
        name: 'Woche 10 - Aufgabe 2',
        meta: 'Woche 10 - Aufgabe 2: Menü-Komponente',
        component: () => import('../views/Woche10Aufgabe2')
    },
    {
        path: '/woche10aufgabe3',
        name: 'Woche 10 - Aufgabe 3',
        meta: 'Woche 10 - Aufgabe 3: Vue.js WWW-Navigator',
        component: () => import('../views/Woche10Aufgabe3')
    },
    {
        path: '/woche11aufgabe1',
        name: 'Woche 11 - Aufgabe 1',
        meta: 'Woche 11 - Aufgabe 1: WebAssembly-Modul von Hand erstellen',
        component: () => import('../views/Woche11Aufgabe1')
    },
    {
        path: '/woche11aufgabe2',
        name: 'Woche 11 - Aufgabe 2',
        meta: 'Woche 11 - Aufgabe 2: Performanz-Messungen und -Vergleich',
        component: () => import('../views/Woche11Aufgabe2')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
