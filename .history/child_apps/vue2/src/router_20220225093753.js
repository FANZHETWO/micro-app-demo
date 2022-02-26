import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.vue';
import RootApp from './pages/root-app.vue'
Vue.use(VueRouter);

const routes = [
  {path:'*',redirect:'/'},
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "page2" */ './pages/page2.vue'),
  },
];

export default routes;
