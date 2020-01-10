import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './route.config';
import SideNav from './template/side-nav.vue';
import Component from "./components";
// import EdButton from "./components/button";


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Component);

// Vue.component(EdButton.name, EdButton)

Vue.component('side-nav', SideNav);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
