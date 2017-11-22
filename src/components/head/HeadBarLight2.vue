<!-- 头部组件样式2 -->

<template>
<div class="headerLight2" >
  <div class="sitetitle" style="padding-top:18px; margin-left: 10px; float:left;">
    <router-link to="/" style="color: black">基于人工智能的软件外包服务平台</router-link>
  </div>

  <el-menu class="el-menu" theme="light" mode="horizontal" style="padding-top:0px; margin-left:300px">
    <el-menu-item index="1"><router-link to="/projects">项目</router-link></el-menu-item>
    <el-menu-item index="2">估价</el-menu-item>
    <el-menu-item index="3">帮助</el-menu-item>
    <router-link class="button2" to="/register">注册</router-link>
    <router-link class="button2" to="/login">登录</router-link>
  </el-menu>
</div>



</template>

<script>
export default {
  name: "HeadBarLight2"
};
</script>

<style>
.headerLight2 {
  position: fixed;
  top: 0px;
  width: 100%;
  color: #323a45;
  border-bottom: 1px solid #ddd;
  height: 60px;
  background: #EEF1F5;
}
.el-menu{
  margin-left: 50px;
}

.button2{
  float:right;
  margin-right: 30px;
  padding-top: 20px;
  color: #474b48;
  font-size: 14px;
}
</style>

