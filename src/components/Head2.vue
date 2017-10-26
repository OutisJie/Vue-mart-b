<!-- 头部组件样式2 -->

<template>
<div class="header">
  <div>基于人工智能的软件外包服务平台</div>

  <div class="drop">
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

<style>
.header {
  position: fixed;
  top: 0px;
  width: 100%;
  color: #323a45;
  background-color: #FFFFFF;
  padding-top:30px;
  margin-left: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  height: 50px;

}

.header .drop{
    margin-right: 30px;

}
</style>

