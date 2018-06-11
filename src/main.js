// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'
//引入
import Axios from 'axios';

import NavBar from './components/common/navBar.vue'
//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.use(MintUi)
Vue.use(VueResource)
Vue.component('navBar',NavBar); //使用最好以nav-bar
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
