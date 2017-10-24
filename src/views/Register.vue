<!-- 注册 -->
<template>
  <div class="login_section">
  <Header></Header>
  
  <div class="content">
  <p>
    注册
  </p>
  
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

