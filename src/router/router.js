import { createRouter, createWebHashHistory } from 'vue-router'
import EstudianteActualizar from '../pages/EstudianteActualizar'
import EstudianteConsultar from '../pages/EstudianteConsultar'
import EstudianteEliminar from '../pages/EstudianteEliminar'
import EstudianteGuardar from '../pages/EstudianteGuardar'

const routes = [
    {
        path: '/actualizar',
        component: EstudianteActualizar
    }, {
        path: '/consultar',
        component: EstudianteConsultar
    },
    {
        path: '/eliminar',
        component: EstudianteEliminar
    },
    {
        path: '/guardar',
        component: EstudianteGuardar
    },
]

const router = createRouter({history: createWebHashHistory(),routes})

export default router