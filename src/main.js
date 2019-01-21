import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import Qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
