import Vue from 'vue'
import App from './App.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { router } from './routes'
import './form'
import './httpClient'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 
