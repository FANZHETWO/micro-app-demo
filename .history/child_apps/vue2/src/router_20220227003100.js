import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.vue';
import RootApp from './pages/root-app.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: window.__MICRO_APP_BASE_ROUTE__ || '/root-app',
    name: 'rootApp',
    component: RootApp,
    children: [
      // 其他的路由都写到这里
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import(/* webpackChunkName: "page2" */ './pages/page2.vue'),
      },
    ],
  },
 
];

export default routes;
