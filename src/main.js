// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Axios from 'axios'
import * as filters from './filters'
import './assets/bootstrap/less/bootstrap.less'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.prototype.$http = Axios;

//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
