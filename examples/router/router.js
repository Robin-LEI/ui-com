import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
      path: '/hello',
      name: 'hello',
      component: r => require.ensure([], () => r(require('../components/HelloWorld.md')))
  }
]

export default new Router({
  routes
})