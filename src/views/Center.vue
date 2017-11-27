<!-- 个人中心 -->
<template>
    <div id="" class="person_center">
      <HeadBarLight style="z-index:1"></HeadBarLight>
      <div class="main_content">
        <div class="main_theme">
            <el-breadcrumb separator="/" class="breadcrumb_size">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/center' }">个人中心</el-breadcrumb-item>
            </el-breadcrumb>
              <div class="user_menu">
                  <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" style="margin-left:20px">
                    <el-menu-item-group  title="账户信息">
                      <el-menu-item index="1" @click="changeView1" ><i class="el-icon-information"></i>账户信息</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="开发者信息">
                      <el-menu-item index="2" @click="changeView2"><i class="el-icon-star-on"></i>项目经历</el-menu-item>
                      <el-menu-item index="3" @click="changeView3"><i class="el-icon-circle-check"></i>参与项目</el-menu-item>
                      <el-menu-item index="4" @click="changeView4"><i class="el-icon-message"></i>我的需求</el-menu-item>
                    </el-menu-item-group>
                  </el-menu>
              </div>
              <div class="detail"><Account v-bind:is="currentView"></Account></div>
        </div>
      </div>
    </div>
</template>

<script>
import HeadBarLight from "../components/head/HeadBarLight.vue"
import HeadBarLight2 from "../components/head/HeadBarLight2.vue"
import Account from "../components/personalcenter/Account.vue"
import Experience from "../components/personalcenter/Experience.vue"
import Participate from "../components/personalcenter/ParticipateProject.vue"
import MyNeeds from "../components/personalcenter/MyNeeds.vue"

export default {
  name: "Center",
  components: {
    HeadBarLight,
    HeadBarLight2,
    Account,
    Experience,
    Participate,
    MyNeeds
  },
  data() {
    return {
      isCollapse: true,
      Account:"Account",
      Experience:"Experience",
      currentView:"Account"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    modify:function(){
      this.$router.push( {path:'../components/InfoForm'});
    },
    changeView1:function() {
      this.currentView = Account;
    },
    changeView2:function () {
      this.currentView = Experience;
    },
    changeView3:function () {
      this.currentView = Participate;
    },
    changeView4:function () {
      this.currentView = MyNeeds;
    }

  }
};

</script>


<style>
  .person_center{
    min-height:100%;
    position:relative;
    overflow: hidden;
  }
  .main_content {
     padding-top:80px;
     min-height: 900px;
     margin-left: auto;
     margin-right: auto;
     background:#EFF2F7;
  }
  .main_theme{
    max-width: 980px;
    margin: 0 auto;
  }
  .breadcrumb_size{
    padding:35px 0px 20px 0px;
  }

  .user_menu{
    width:220px;
    float:left;
  }
  .el-menu-vertical-demo{
    border-color:#000000;
    border:2px;
    background:#D3DCE6;
  }
  .detail {
    margin-left:230px;
    min-height: 800px;
    box-shadow: 0 1px 2px rgba(183,195,192,.95);
    font-size: 14px;
    background-color:  #FFFFFF;
    overflow: hidden;
  }

</style>
