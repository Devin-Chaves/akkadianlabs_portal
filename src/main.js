// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'script-loader!jquery/dist/jquery.min';
import 'script-loader!what-input/dist/what-input.min';
import 'script-loader!foundation-sites/dist/js/foundation.min';
import 'script-loader!motion-ui/dist/motion-ui.min';

window.jQuery = jQuery;
window.$ = jQuery;

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import 'vue-awesome/icons'
import NProgress from 'vue-nprogress'

import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)


import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PhoneEditorPage from './pages/PhoneEditorPage'
import PinPasswordPage from './pages/PinPasswordPage'
import CallForwardingPage from './pages/CallForwardingPage'
import Dropdown from './components/Dropdown';

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(NProgress)

const nprogress = new NProgress()

Vue.component('app', App)

const routes = [
  {path: '/', name: 'root', redirect: { name: 'login' }},
  {path: '/login', component: LoginPage, name: 'login', beforeEnter: loggedIn, meta: {showProgressBar: false}},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { requiresAuth: true }},
  {path: '/editor', component: PhoneEditorPage, name: 'editor', meta: { requiresAuth: true }},
  {path: '/usersettings', component: PinPasswordPage, name: 'pinpassword', meta: { requiresAuth: true }},
  {path: '/callforwarding', component: CallForwardingPage, name: 'callforwarding', meta: { requiresAuth: true }},
  { name: 'dropdown', path: '/dropdown', component: Dropdown, meta: { requiresAuth: true  }}
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'hash',
  routes
})

function loggedIn (to, from, next) {
  const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  if (authUser && authUser.auth) {
    next({name: 'dashboard'})
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.auth) {
      next()
    } else {
      next({name: 'login'})
    }
  }
  next()
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router, store,
  nprogress,
  ...App
})
