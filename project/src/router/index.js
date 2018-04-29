import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Schedule from '../components/Schedule'
import Favorites from '../components/Favorites'
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
        props: true,
        component: Schedule
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites
    },
    {
      path: '/login',
      name: 'Login',
      props: true,
      component: Authentication
    }
  ]
})