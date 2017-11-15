<!-- 头部组件样式2 -->

<template>
<div class="headerLight" >
  <div class="sitetitle" style="padding-top:18px; margin-left: 10px; float:left;">
    <router-link to="/" style="color: black">基于人工智能的软件外包服务平台</router-link>
  </div>

  <el-menu class="el-menu" theme="light" mode="horizontal" style="padding-top:0px; margin-left:300px">
    <el-menu-item index="1"><router-link to="/projects">项目</router-link></el-menu-item>
    <el-menu-item index="2">估价</el-menu-item>
    <el-menu-item index="3">帮助</el-menu-item>
    <el-dropdown class="el-dropdown">
      <span class="el-dropdown-link">
        <div>
          <img src="../../assets/coder.png" class="header_image" style="margin-left:0px;height: 30px;width: 30px">
          <i class="el-icon-caret-bottom el-icon--right" style="padding-top:8px"></i>
        </div>
      </span>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><router-link to="/center" style="color: black">个人中心</router-link></el-dropdown-item>
        <el-dropdown-item><router-link to="/center" style="color: black">我的项目</router-link></el-dropdown-item>
        <el-dropdown-item><router-link to="/center" style="color: black">我的报价单</router-link></el-dropdown-item>
        <el-dropdown-item>代码托管</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>

    </el-dropdown>
  </el-menu>
</div>



</template>

<script>
export default {
  name: "HeadBarLight"
};
</script>

<style>
.headerLight {
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

.el-dropdown{
  float:right;
  margin-right: 30px;
  padding-top: 15px;
}
</style>

