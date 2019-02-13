import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueProgress from 'vue-progress-path'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueProgress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
