import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import store from './store'


import routes from './routes'
import './quasar'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

const router = new Router({routes})

const app = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
