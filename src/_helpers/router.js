import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../login/LoginPage.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LoginPage },
    { path: '/helloworld', name: 'helloworld', component: HelloWorld, props: true },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
