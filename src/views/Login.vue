<!-- 登陆文件 -->
<template>
  <div class="login_section">
    <HeadBarLight2></HeadBarLight2>

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
import HeadBarLight2 from "../components/head/HeadBarLight2.vue";
import server from '../../config/index';
import axios from '../axios/http';

export default {
  name: "Login",
  components: { HeadBarLight2 },
  data(){
    return{
      account: '',
      pwd: '',
      error: '',
      url: server.url + '/api/session',
      button_disabled: false,
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
            alert(response.data.result.token + this.account);
            this.$store.commit('setToken', response.data.result.token);
            this.$store.commit('setUsername', this.account);

            alert(this.$store.state.user.username);

            alert(this.$store.state.user.tokenid);
            //store.state.user.tokenid = response.data.user.tokenid;
            //store.state.user.realname = response.data.user.realname;
            //store.state.user.mobile = response.data.user.mobile;
            //store.state.user.email = response.data.user.email;
            this.account='';
            this.pwd= '';
            this.$router.push( '/center' );
          }
        }).catch(function(error){
          if(error.response){
            switch (error.response.status) {
                  case 401:
                    alert('密码错误');
                    break;
                  case 404:
                    alert('用户名不存在');
                    break;
                  case 500:
                    alert('服务器错误');
                    break;
            }
          }
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

