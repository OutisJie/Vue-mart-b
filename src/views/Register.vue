<!-- 注册 -->
<template>
  <div class="register_section">
  <Header></Header>
  
  <div class="register_content">
    <p>
      注册
    </p>
    <el-input  placeholder="请输入用户名"></el-input>
    <el-input  placeholder="请输入密码" type="password"></el-input>
    <el-input  placeholder="请再次输入密码" type="password"></el-input>
    <el-checkbox style="margin-left: 5px; padding-top: 5px; float: left">我已同意相关协议</el-checkbox>
  <el-button type="primary">提交</el-button>
  </div>
</div>
  
</template>

<script>
import Header from "../components/Head";
export default {
  name: "Register",
  components: { Header }
};
</script>

<style>
.register_content {
  text-align: center;
  margin-top: 200px;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
}

.register_content > .el-input {
  margin: 5px;
}

.register_content > .el-button {
  width: 100%;
  margin: 8px 5px;
}

.header {
  position: fixed;
  top: 0px;
  width: 100%;
  color: #323a45;
}



.el-input {
  margin:5px;
}

.el-button{
  width:100%;
  margin: 8px 5px;
}

.no_account{
  float: right;
  cursor: pointer;
  font-size: 12px;
}
</style>

