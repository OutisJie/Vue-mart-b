<template>
  <div style="display: flex">
    <span style="margin-right:5rem;">工作邮箱</span>
    <div class="input">
      <el-input v-model="input" placeholder="请输入邮箱"></el-input>
      <div style="position: relative;margin-top: 0.5rem" tabindex="-1">
        <el-input style="width: 100%"  v-model="input" placeholder="输入验证码"></el-input>
        <button plain disabled  class="button" tabindex="-1">发送验证码</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    props:[]
    }
</script>
<style>
  .input {
    width: 18em;
  }
  .button{
    color: #4289dc;
    border: none;
    border-left: 1px solid #cad3de;
    text-align: center;
    cursor: pointer;
    outline: none;
    background: transparent;
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
