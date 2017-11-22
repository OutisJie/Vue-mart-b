// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import $ from 'jquery'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './router'
import store from './vuex/store'
import axios from 'http'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

// const router =new VueRouter({
//   index
// })
//全局导航钩子
// router.beforeEach((to,from,next) => {
//   if(to.meta.requireAuth){
//     if(!isEmptyObject(store.state.user)){
//       next();
//     }
//     else {
//       next({
//         path:'/login',
//         query:{redirect:to.fullPath}//将跳转的路由path作为参数，登陆成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// })
//判断object是否为空
// function isEmptyObject(obj) {
//   for(var key in obj){
//     return false;
//   }
//   return true;
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
