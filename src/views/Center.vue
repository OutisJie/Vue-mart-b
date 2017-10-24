<!-- 个人中心 -->
<template>
  <div id="Cnter" style="height: 100%;">
    <div class="person_center">
      <Head2></Head2>
      <div class="main_content">
        <div class="main_theme">
            <el-breadcrumb separator="/" class="breadcrumb_size">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/center' }">个人中心</el-breadcrumb-item>
            </el-breadcrumb>
              <dev class="user_menu">
                  <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item-group title="账户信息" >
                      <el-menu-item index="1" ><i class="el-icon-information"></i>账户信息</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="开发者信息" style="width: 220px">
                      <el-menu-item index="2"><i class="el-icon-star-on"></i>技能展示</el-menu-item>
                      <el-menu-item index="3"><i class="el-icon-circle-check"></i>参与项目</el-menu-item>
                      <el-menu-item index="4"><i class="el-icon-message"></i>我的需求</el-menu-item>
                    </el-menu-item-group>
                  </el-menu>
              </dev>
              <div class="detail">
                <el-card class="info_header">
                  <div>
                    <img src="../assets/coder.png" class="header_image" style="margin-left:0px;" >
                  </div>
                  <div style="padding:0.5rem 1.5rem; font-size: 20px">
                    <span>OutisJie</span>
                    <el-button type="primary" class="header_button">升级为团队</el-button>
                  </div>
                </el-card>
                <
              </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import Head2 from "../components/Head2";

export default {
  name: "Center",
  components: {
    Head2
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style>
  .person_center{
    min-height:100%;
    position:relative;
  }
  .main_content {
     padding-top:80px;
     min-height: 600px;
     margin-left: auto;
     margin-right: auto;
  }
  .main_theme{
    max-width: 980px;
    margin: 0 auto;
  }
  .breadcrumb_size{
    padding:35px 0px 20px 0px;
  }

  .user_menu {
    width:220px;
    float:left;
  }
  .detail {
    margin-left:230px;
    min-height: 40rem;
    box-shadow: 0 1px 2px rgba(183,195,192,.95);
    font-size: 14px;
    background-color:  #FFFFFF;
    overflow: hidden;
  }
  .info_header{
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

</style>
