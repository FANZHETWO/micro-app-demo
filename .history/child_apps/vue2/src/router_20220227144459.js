import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.vue';
import RootApp from "./pages/root-app.vue"
Vue.use(VueRouter);

const routes = [
  // {path:'*',redirect:'/'},
  {
    path: '/app-vue2',
    component: RootApp,
    children: [
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
      {
        path: '/page3',
        name: 'page3',
        component: () => import(/* webpackChunkName: "page3" */ './pages/page3.vue'),
      },
      {
        path: '/page4',
        name: 'page4',
        component: () => import(/* webpackChunkName: "page4" */ './pages/page4.vue'),
      },
    ],
  },
];

export default routes;
