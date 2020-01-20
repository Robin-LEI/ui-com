import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import icon from './icon.json';
import './demo-styles/index.scss';
import VueRouter from 'vue-router';
import routes from './route.config';
import SideNav from './template/side-nav.vue';
// import Component from "./components";
import EdButton from "./components/button";
import EdDialog from "./components/dialog";
import EdInput from "./components/input";
import EdSwitch from "./components/switch";
import EdIcon from "./components/icon";
import EdRadio from "./components/radio";
import EdRadioGroup from "./components/radio-group";
import EdCheckbox from "./components/checkbox";
import EdCheckboxGroup from "./components/checkbox-group";
import EdForm from './components/form'
import EdFormItem from './components/form-item'


Vue.config.productionTip = false
Vue.prototype.$icon = icon

Vue.use(VueRouter);
// Vue.use(Component);

Vue.component(EdButton.name, EdButton)
Vue.component(EdDialog.name, EdDialog)
Vue.component(EdInput.name, EdInput)
Vue.component(EdSwitch.name, EdSwitch)
Vue.component(EdIcon.name, EdIcon)
Vue.component(EdRadio.name, EdRadio)
Vue.component(EdRadioGroup.name, EdRadioGroup)
Vue.component(EdCheckbox.name, EdCheckbox)
Vue.component(EdCheckboxGroup.name, EdCheckboxGroup)
Vue.component(EdForm.name, EdForm)
Vue.component(EdFormItem.name, EdFormItem)


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
