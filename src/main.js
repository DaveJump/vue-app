import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import RouterConfig from './routerConfig';
Vue.use(Router);

const router = new Router();
RouterConfig(router);

/* eslint-disable no-new */
router.start(Vue.extend(App),'#app');
