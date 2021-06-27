import Vue from 'vue'
import App from './App.vue'
import { router } from './_helpers';
import { BootstrapVue } from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
