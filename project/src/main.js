import 'bootstrap/dist/css/bootstrap.css'
import 'firebaseui/dist/firebaseui.css'

import Vue from 'vue'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import './assets/css/style.css'

import App from './App'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(Vuetify)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
