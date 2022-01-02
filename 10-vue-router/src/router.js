import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Dashboard from './views/Dashboard'
import Mail from './views/Mail'
import NotFound from './views/NotFound'
import AppEmailBody from './components/AppEmailBody'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login' , component: Login, alias: '/'},
    { path: '/forget', component: Forget},
    { path: '/dashboard', component: Dashboard},
    { path: '/mail', component: Mail, children: [
        { path: ':mailId?', component: AppEmailBody, props: true }
    ]},
    { path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})