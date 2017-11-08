<!-- 项目市场 -->
<template>
  <div class="projects">
    <!-- 头部 -->

    <div class="head_projects">
      <a>基于人工智能的软件外包服务平台</a>
      <a>项目</a>
      <a>估算</a>
      <a>帮助</a>
      <div class="head_center">
        <router-link to="/login">登陆</router-link>
        <a>注册</a>
      </div>
    </div>

    <!-- 轮播 -->
    <div>
      <img  src="../assets/projectbackground.jpg" style="height: 400px; width: 100%">
    </div>
      <!--<el-carousel :interval="5000" arrow="no" :autoplay="false">-->
        <!--<el-carousel-item :key="1">-->
          <!--<div class="button_group">-->
            <!--<el-button>发布需求</el-button>-->
            <!--<el-button>查看需求</el-button>-->
          <!--</div>-->
        <!--</el-carousel-item>-->
        <!--<el-carousel-item :key="2">-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->


    <div class="projects_select" >
      <el-row :gutter="24" type="flex" justify="center" style="margin-top: 15px;">
        <el-col :span="3" itemscope>
          <el-dropdown style="padding-top: 0px">
            <span class="el-dropdown-link">
              <i class="el-icon-menu"></i>
              所有类型 <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有类型</el-dropdown-item>
              <el-dropdown-item>Web 网站</el-dropdown-item>
              <el-dropdown-item>APP 开发</el-dropdown-item>
              <el-dropdown-item>微信公众号</el-dropdown-item>
              <el-dropdown-item>H5程序</el-dropdown-item>
              <el-dropdown-item>小程序</el-dropdown-item>
              <el-dropdown-item>其他</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

        <el-col :span="1">|</el-col>

        <el-col :span="2">
          <el-dropdown style="padding-top: 0px">
            <span class="el-dropdown-link">
              所有进度 <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有进度</el-dropdown-item>
              <el-dropdown-item>招募中</el-dropdown-item>
              <el-dropdown-item>开发中</el-dropdown-item>
              <el-dropdown-item>已结束</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

        <el-col :span="2">
          <el-dropdown style="padding-top: 0px">
            <span class="el-dropdown-link">
              所有角色 <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有角色</el-dropdown-item>
              <el-dropdown-item>前端开发</el-dropdown-item>
              <el-dropdown-item>后端开发</el-dropdown-item>
              <el-dropdown-item>全栈开发</el-dropdown-item>
              <el-dropdown-item>iOS 开发</el-dropdown-item>
              <el-dropdown-item>Android 开发</el-dropdown-item>
              <el-dropdown-item>测试</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>

    <div class="projects_view">
      <ProjectsView></ProjectsView>
      <div style="height: 50px"></div>
    </div>

    <div class="projects_footer">
      同济大学 XLab
    </div>
  </div>
</template>

<script>
import HeadBarDark from "../components/head/HeadBarDark";
import Head from "../components/head/Head";
import ProjectsView from "../components/ProjectsView";

export default {
  name: "Projects",
  components: {
    HeadBarDark,
    ProjectsView
   },
};
</script>

<style>
  .projects{
    overflow: hidden;
  }
.header {
  position: fixed;
  top: 0px;
  width: 100%;
  color: #323a45;
}

.projects_view{
    background: #EEF1F5;
}

.projects_footer {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 20px;
    color: #8a8a8a;
}

.main_content {
    margin: auto;
}

img_background {
    width: 720px;
    height: 400px;
}

.head_projects {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 3;
    color: #ffffff;
    padding-top: 30px;
}

.content {
    padding-top: 20px;
    font-size: 1.5em;
    font-weight: bold;
    color: #8a8a8a;
    padding-left: 30px;
    margin-left: 200px;
}

.home_flow {
    /* text-align: center; */
    border-bottom: 1px solid #DDD;
    display: flex;
    height: 250px;
    padding-top: 30px;
    width: 55%;
    margin:auto;

}

.content_child {
    font-size: 15px;
    color: #667182;
    margin-top: 30px;
    width: 250px;
}

.head_projects>a {
    margin-left: 30px;
    cursor: pointer;
    color: inherit;
}

.head_projects :last-child {
    /* display: inline; */
    float: right;
    margin-right: 10px;
}

.head_center>a {
    margin-right: 10px;
    cursor: pointer;
}

.projects_select {
    border-bottom: 1px solid #DDD;
    height: 50px;
    color: #657182;
}

.el-carousel__item {
    background-image: url('../assets/head_pic.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: -1;
}
.picshow .el-carousel__container {
    height: 400px;
}

.el-carousel__item .button_group {
    text-align: center;
    margin-top: 300px;
}

.button_group>.el-button {
    background-color: transparent;
    border-color: #ffffff;
    color: #ffffff;
    display: inline-block;
    width: 10%;
}

</style>
