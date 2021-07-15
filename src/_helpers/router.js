import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../login/LoginPage.vue'
import cadRec from '../components/cadRec.vue'
import createJob from '../components/createJob.vue'
import updateJob from '../components/updateJob.vue'
import removeJob from '../components/candidate/removeJob.vue'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LoginPage },
    { path: '/cadrec', name: 'cadRec', component: cadRec, props: true },
    { path:  '/createjob', component: createJob},
    { path:  '/updatejob', component: updateJob},
    { path:  '/removejob', component: removeJob},
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
