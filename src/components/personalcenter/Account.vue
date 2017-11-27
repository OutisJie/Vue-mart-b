<template>
    <div>
      <el-card class="header_info">
        <div><img src="../../assets/coder.png" class="header_image" style="margin-left:0px;" ></div>
        <div style="padding:0.5rem 1.5rem; font-size: 20px">
          <span>{{this.$store.state.user.username}}</span>
          <el-button type="primary" class="header_button">升级为团队</el-button>
        </div>
      </el-card>
      <div class="detail_info">
        <div>
          <span style="font-size:20px;">账户信息</span>
          <hr>
          <span style="font-size: 10px; opacity: 0.5;">您的个人信息不会透露给第三方</span>
          <div class="bar_type" ><Mail></Mail></div>
          <div class="bar_type"><Phone></Phone></div>
        </div>
        <div style="margin-top: 30px;">
          <span style="font-size:20px;">个人资料</span>
          <hr>
          <div><Profile></Profile></div>
        </div>
      </div>
    </div>
</template>

<script >
  import Mail from "../e-mail/Mail.vue"
  import Phone from "../phone/Phone.vue"
  import Profile from "../profile/Profile.vue"

  export default {
    name:"Account",
    components:{
      Mail,
      Phone,
      Profile
    }
  }
</script>
<style>
  .header_info{
    margin:3rem 4rem 0;
    height:10rem;
    position:relative;
  }
  .header_image{
    width:8rem;
    height:8rem;
    float:left;
    border:1px;
    border-radius:6px;
  }
  .header_button{
    float: right;
    height: 24px;
    font-size: 12px;
    padding: auto;
    padding-top: 6px;
  }
  .detail_info{
    font-size: 14px;
    margin:2rem 4rem 0;
    height:10rem;
    position:relative;
  }
  .bar_type{
    margin-top:2rem;
  }
</style>
