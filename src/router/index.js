import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Center from '@/views/Center'
import Projects from '@/views/Projects'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/center',
        name: 'Center',
        component: Center
    }, {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }]
})