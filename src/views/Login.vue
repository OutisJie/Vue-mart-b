<!-- 登陆文件 -->
<template>
  <div class="login_section">
    <HeadBarLight></HeadBarLight>

    <div class="login_content">
      <p>
        登录
      </p>
      <el-input  placeholder="请输入用户名" v-model="account"></el-input>
      <el-input  placeholder="请输入密码" v-model="pwd" type="password"></el-input>
      <div style="padding-top: 5px">
        <el-checkbox style="margin-left: 5px; float: left">记住我</el-checkbox>
        <div class="no_account">
          <router-link to='/register'> 找回密码</router-link>
        </div>
      </div>
      <el-button type="primary" :loading=this.button_disabled @click="doLogin">提交</el-button>
      <div class="no_account">
        <router-link to='/register'> 没有账号</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBarLight from "../components/head/HeadBarLight.vue";
import server from '../../config/index';
import axios from 'axios';

export default {
  name: "Login",
  components: { HeadBarLight },
  data(){
    return{
      account: '',
      pwd: '',
      error: '',
      url: server.url + '/api/session',
      button_disabled: false
    }
  },
  methods:{
    doLogin:function () {
      this.button_disabled = true;
      if(this.account == ""){
        alert('请输入用户名');
      }
      else if(this.pwd == ""){
        alert('请输入密码');
      }
      else{
        axios.post(this.url, {"username": this.account, "password": this.pwd}).then(response => {

          if(response.data.status == 200){
            alert('登录成功');
            this.$store.commit('doLogin',this.account,this.data.token);
            this.account='';
            this.pwd= '';
            this.$router.push( '/center' );
          }
          else if(response.data.status == 401){
            alert('密码错误');
            this.pwd= '';
          }
          else if(response.data.status == 404){
            alert('用户名不存在');
            this.account='';
            this.pwd= '';
          }
        },function(){
          alert('服务器错误');
        });
      }
      this.button_disabled = false;
    }
  }
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
  margin-top: 200px;
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

