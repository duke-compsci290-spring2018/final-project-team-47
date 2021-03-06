import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Table from '../components/Table'
import Schedule from '../components/Schedule'
import Favorites from '../components/Favorites'
import Authentication from '../components/Authentication'
import Team from '../components/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Latest',
        name: 'Table',
        props: true,
        component: Table
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
        props: true,
        component: Favorites
    },
    {
      path: '/login',
      name: 'Login',
      props: true,
      component: Authentication
    },
    {
      path: '/schedule/team',
      name: 'Team',
      props: true,
      component: Team
    }
  ]
})