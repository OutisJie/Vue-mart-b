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
      <el-button type="primary" @click="isLogin">提交</el-button>
      <div class="no_account">
        <router-link to='/register'> 没有账号</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBarLight from "../components/head/HeadBarLight.vue";
export default {
  name: "Login",
  components: { HeadBarLight },
  data(){
    return{
      account:'',
      pwd:'',
      error:''
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  },
  methods:{
    isLogin:function () {
      this.$http.get('http://localhost:3000/users?username='+this.account+'&password='+this.pwd).then((response)=>{
        //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
        //注意这里是个难点，Vuex与Vue-Resource结合使用。
        if(response.body != null && response.body.length > 0){
          this.$store.commit('isLogin',response.body[0]);
          this.account='';
          this.pwd= '';
          this.$router.push({ path: 'main' });
        }else{
          alert('请输入正确的用户名和密码！！！');
          this.account='';
          this.pwd= ''
        }
      }).then((error)=>this.error=error)
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

