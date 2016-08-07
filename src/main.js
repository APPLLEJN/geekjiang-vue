import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import './assets/scss/'

Vue.use(VueResource)
Vue.use(VueRouter)
let router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: true
})
let app = Vue.extend({})
routerMap(router)
router.start(app, '#app')
