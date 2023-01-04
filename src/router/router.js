import Vue from 'vue';
import VueRouter from 'vue-router';
//import App from '../App.vue';
import checkingpage from '../components/checkingpage';
import Main from '../Main/Main';
import airplane from '../pages/airplane';
import KeepAlive from '../pages/KeepAlive';

Vue.use(VueRouter);

const route = [
   { path: '/', component: Main },
   //{ path: '/Main', component: Main },
   { path: '/checkingpage', component: checkingpage },
   { path: '/airplane', component: airplane },
   { path: '/KeepAlive', component: KeepAlive },
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: route,
});
export default router;
