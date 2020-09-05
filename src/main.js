import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import { routes } from './routes'

Vue.use(VueRouter)

const base = axios.create({
  baseURL: 'https://reqres.in/api/'
})

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.prototype.$http = base

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
