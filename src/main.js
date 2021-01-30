import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import axios from "axios"
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
