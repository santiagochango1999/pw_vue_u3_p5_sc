import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/actualizar',
        component: ()=>import( '../pages/EstudianteActualizar')
    }, {
        path: '/consultar/:id',
        component: ()=>import('../pages/EstudianteConsultar')
    },
    {
        path: '/eliminar',
        component: ()=>import( '../pages/EstudianteEliminar')
    },
    {
        path: '/guardar',
        component: ()=>import('../pages/EstudianteGuardar')
    },
    {
        path:'/:patMatch(.*)*',
        component: ()=>import('../pages/NoFoundPage')
    }

]

const router = createRouter({history: createWebHashHistory(),routes})

export default router