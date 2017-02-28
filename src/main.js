// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { alert } from 'vue-strap'
import store from './store'
import App from './App'

import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PhoneEditorPage from './pages/PhoneEditorPage'
import PinPasswordPage from './pages/PinPasswordPage'
import CallForwardingPage from './pages/CallForwardingPage'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('app', App)

const routes = [
  {path: '/', component: LoginPage, name: 'home'},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { requiresAuth: true }},
  {path: '/editor', component: PhoneEditorPage, name: 'editor', meta: { requiresAuth: true }},
  {path: '/usersettings', component: PinPasswordPage, name: 'pinpassword', meta: { requiresAuth: true }},
  {path: '/callforwarding', component: CallForwardingPage, name: 'callforwarding', meta: { requiresAuth: true }}
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.auth) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})

new Vue({
  el: '#app',

  components: {
    alert
  },
  router, store
})
