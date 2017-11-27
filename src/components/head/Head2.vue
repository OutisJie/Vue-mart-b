<!-- 头部组件样式2 -->
<template>
<div class="head_home">
  <router-link to='/'>基于人工智能的软件外包服务平台</router-link>
  <router-link to="/projects">项目</router-link>
  <a>估算</a>
  <a>帮助</a>

  <div class="head_center">
    <el-dropdown>
      <span class="el-dropdown-link">
        个人中心<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>

</template>

<script>
export default {
  name: "Header2"
};
</script>

