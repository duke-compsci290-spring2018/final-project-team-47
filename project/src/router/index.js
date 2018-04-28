import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Schedule from '../components/Schedule'
import Authentication from '../components/Authentication'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
    },
    {
      path: '/login',
      name: 'Login',
      props: true,
      component: Authentication
    }
  ]
})