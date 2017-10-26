<!-- 个人中心 -->
<template>
  <div id="Cnter" style="height: 100%;">
    <div class="person_center">
      <HeadBarLight style="z-index:1 "></HeadBarLight>
      <div class="main_content">
        <div class="main_theme">
            <el-breadcrumb separator="/" class="breadcrumb_size">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/center' }">个人中心</el-breadcrumb-item>
            </el-breadcrumb>
              <div class="user_menu">
                  <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" style="margin-left:20px">
                    <el-menu-item-group  title="账户信息">
                      <el-menu-item index="1" ><i class="el-icon-information"></i>账户信息</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="开发者信息">
                      <el-menu-item index="2"><i class="el-icon-star-on"></i>技能展示</el-menu-item>
                      <el-menu-item index="3"><i class="el-icon-circle-check"></i>参与项目</el-menu-item>
                      <el-menu-item index="4"><i class="el-icon-message"></i>我的需求</el-menu-item>
                    </el-menu-item-group>
                  </el-menu>
              </div>
              <div class="detail">
                <el-card class="header_info">
                  <div>
                    <img src="../assets/coder.png" class="header_image" style="margin-left:0px;" >
                  </div>
                  <div style="padding:0.5rem 1.5rem; font-size: 20px">
                    <span>OutisJie</span>
                    <el-button type="primary" class="header_button">升级为团队</el-button>
                  </div>
                </el-card>
                <div class="detail_info">
                  <div>
                    <span style="font-size:20px;">账户信息</span>
                    <hr>
                    <span style="font-size: 10px; opacity: 0.5;">您的个人信息不会透露给第三方</span>
                    <div class="bar_type">
                      <span style="margin-right:5rem;">工作邮箱</span>
                      <span>1552700@tongji.com</span>
                      <el-button type="primary" class="header_button"><i class="el-icon-edit" style="margin-right:0.4rem;"></i>修改</el-button>
                    </div>
                    <div class="bar_type">
                      <span style="margin-right:5rem;">工作手机</span>
                      <span>135558546815</span>
                      <el-button type="primary" class="header_button"><i class="el-icon-edit" style="margin-right:0.4rem;"></i>修改</el-button>
                    </div>
                  </div>
                  <div style="margin-top: 30px;">
                    <span style="font-size:20px;">个人资料</span>
                    <hr>
                    <div class="bar_type">
                      <span style="margin-right:5rem;">姓名</span>
                      <span>OutisJie</span>
                      <el-button type="primary" class="header_button"><i class="el-icon-edit" style="margin-right:0.4rem;"></i>修改</el-button>
                    </div>
                    <div class="bar_type">
                      <span style="margin-right:5rem;">QQ</span>
                      <span>454545545</span>
                    </div>
                    <div class="bar_type">
                      <span style="margin-right:6rem;">所在地</span>
                      <span >上海</span>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import InfoForm from "../components/InfoForm.vue"
import HeadBarDark from "../components/HeadBarDark.vue"
import HeadBarLight from "../components/HeadBarLight.vue"


export default {
  name: "Center",
  components: {
    InfoForm,
    HeadBarLight,
    HeadBarDark,
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
    },
    modify:function(){
      this.$router.push( {path:'../components/InfoForm'});
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
    min-height: 700px;
    box-shadow: 0 1px 2px rgba(183,195,192,.95);
    font-size: 14px;
    background-color:  #FFFFFF;
    overflow: hidden;
  }
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
