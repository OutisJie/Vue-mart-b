<!-- 注册 -->
<template>
  <div class="register_section">
  <HeadBarLight></HeadBarLight>

  <div class="register_content">
    <p>
      注册
    </p>
    <el-input  placeholder="请输入用户名" v-model="account"></el-input>
    <el-input  placeholder="请输入密码" type="password" v-model="pwd"></el-input>
    <el-input  placeholder="请再次输入密码" type="password" v-model="pwd_rep"></el-input>
    <el-input  placeholder="请输入邮箱" type="email" v-model="email"></el-input>
    <el-checkbox style="margin-left: 5px; padding-top: 5px; float: left" @click="changeChecked">我已同意相关协议</el-checkbox>
  <el-button type="primary" @click="regist">提交</el-button>
  </div>
</div>

</template>

<script>
import HeadBarLight from "../components/head/HeadBarLight.vue";
import server from '../../config/index';
import axios from 'axios';

export default {
  name: "Register",
  components: { HeadBarLight },
  data(){
    return{
      account:'',
      pwd:'',
      pwd_rep:'',
      email:'',
      error:'',
      checked: false,
      url: server.url + '/api/register',
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  },
  methods:{
    changeChecked:function () {
      this.checked = !this.checked;
    },
    regist:function () {
      if(this.pwd != this.pwd_rep){
        alert('请确认两次输入的密码相同');
        this.pwd_rep= '';
        this.pwd= '';
      }
      else if(this.account == ""){
        alert('请输入用户名');
      }
      else if(this.pwd == ""){
        alert('请输入密码');
      }
      else if(this.pwd_rep == ""){
        alert('请再次输入密码');
      }
      else if(this.checked == false){
        alert('请阅读相关协议并勾选同意以继续');
      }
      else{
        axios.post(this.url, {"username": this.account, "email": this.email, "password": this.pwd}).then(response => {

          if(response.data.status == 201){
            alert('注册成功');
            //this.$store.commit('isLogin', this.account, response.data.token);
            this.account='';
            this.pwd= '';
            this.pwd_rep= '';
            this.$router.push('/center');
          }
          else if(response.data.status == 400){
            alert('注册失败');
            this.account='';
            this.pwd= '';
            this.pwd_rep= '';
          }
        },function(){
          alert('服务器错误');
        });
      }
    }
  }
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

