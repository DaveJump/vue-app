import Vue from 'vue';
import Router from 'vue-router';
import RouterConfig from './routerConfig';
import Resource from 'vue-resource';
Vue.use(Resource);
Vue.use(Router);

import App from './App';

const router = new Router();
RouterConfig(router);

/* eslint-disable no-new */
router.start(Vue.extend(App),'#app');
