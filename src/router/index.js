import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue'),
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('../views/Home/Home.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: () => import('../views/Error/Error.vue')
        }
    ]
})

export default router