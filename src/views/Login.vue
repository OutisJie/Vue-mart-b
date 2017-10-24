<!-- 登陆文件 -->
<template>
  <div class="login_section">
  <Header></Header>
  
  <div class="login_content">
  <p>
    登录
  </p>
  <el-input  placeholder="请输入用户名"></el-input>
  <el-input  placeholder="请输入密码" type="password"></el-input>
  <el-button type="primary">提交</el-button>
  <div class="no_account"> 
    <router-link to='/register'> 没有账号</router-link>
  </div>
  </div>

  </div>
  
</template>

<script>
import Header from "../components/Head";
export default {
  name: "Login",
  components: { Header }
};
</script>

<style>
.header {
  position: fixed;
  top: 0px;
  width: 100%;
  color: #323a45;
}

.login_content {
  text-align: center;
  margin-top: 300px;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
}

.login_content > .el-input {
  margin: 5px;
}

.login_content > .el-button {
  width: 100%;
  margin: 8px 5px;
}

.no_account {
  float: right;
  cursor: pointer;
  font-size: 12px;
 
}

 .no_account > a {
    color: #323a45;
  }
</style>

