import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path:'/',
        name: '/grid-systemm',
        component: GridSystem
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router