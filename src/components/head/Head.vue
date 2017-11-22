<!-- 头部组件 -->
<template>
  <div class="head_home">
    <router-link to='/'>基于人工智能的软件外包服务平台</router-link>
    <router-link to="/projects">项目</router-link>
    <a>估算</a>
    <a>帮助</a>
    <div class="head_center">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.head_home {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 3;
  color: #ffffff;
  padding-top: 30px;
}
</style>

