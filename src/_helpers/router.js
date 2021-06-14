import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../login/LoginPage.vue'
import cadRec from '../components/cadRec.vue'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LoginPage },
    { path: '/cadrec', name: 'cadrec', component: cadRec, props: true },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
