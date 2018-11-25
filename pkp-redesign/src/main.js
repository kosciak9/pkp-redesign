import Vue from 'vue'
import VueRouter from 'vue-router'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/vuetify'

import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import Tickets from './components/Tickets.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
  { path: '/tickets', component: Tickets }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
