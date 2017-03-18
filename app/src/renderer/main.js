import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

import VueFormGenerator from 'vue-form-generator'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './components/xa.css'

global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.use(VueFormGenerator)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
