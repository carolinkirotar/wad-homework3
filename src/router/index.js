import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/LoginPage'
import Index from '../components/IndexPage'
import Browse from '../components/BrowsePage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', // link kus see asub
            name: 'Login',
            component: Login
        },

        {
            path: '/Index',
            name: 'Index',
            component: Index
        },

        {
            path: '/Browse',
            name: 'Browse',
            component: Browse
        }
    ]
})

