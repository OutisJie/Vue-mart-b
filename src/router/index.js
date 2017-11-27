import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Center from '@/views/Center'
import Projects from '@/views/Projects'
import ProjectDetail from '@/views/ProjectDetail'
import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
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
        meta: { 
            requireAuth: true
        },
        component: Center
    }, {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }, {
        path: '/projectDetail',
        name: 'ProjectDetail',
        component: ProjectDetail
    }]
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
        if(store.state.user.tokenid){// 判断是否登录
        next()
      } else {// 没登录则跳转到登录界面
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  })

export default router
