import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './components/Formulario.vue'
import Usuarios from './components/Usuarios.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/'           ,redirect: '/formulario' },
        {path: '/formulario' ,component: Formulario },
        {path: '/usuarios'    ,component: Usuarios },
    ]
})
// Vue.use(VueRouter)

// const router = [
//   {path: '/'           ,redirect: '/formulario' },
//   {path: '/formulario' ,component: Formulario },
//   {path: '/usuarios'    ,component: Usuarios },
// ]

// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

// export default router
