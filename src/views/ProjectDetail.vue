<!--单个需求详情-->
<template>
  <div>
    <div class="project_detail">
      <head-bar-light style="z-index: 1" v-show="isLogin"></head-bar-light>
      <head-bar-light2 style="z-index: 1" v-show="!isLogin"></head-bar-light2>
      <div class="single_requirement">
        <RequirementInfo></RequirementInfo>
        <div style="height: 80px"></div>
      </div>
    </div>

    <div class="detail_footer">
      同济大学 XLab
    </div>
  </div>
</template>

<script>
import HeadBarLight from "../components/head/HeadBarLight";
import HeadBarLight2 from "../components/head/HeadBarLight2.vue"
import RequirementInfo from "../components/RequirementInfo";

export default {
  name: "ProjectDetail",
  components: {
    HeadBarLight,
    HeadBarLight2,
    RequirementInfo
  },
  data(){
    return{
      isLogin:false
    }
  },
  created() {
    this.checkToken();
  },
  methods:{
    checkToken:function () {
      if(this.$store.state.user.tokenid === ''){
        this.isLogin = false;
      }
      else
        this.isLogin = true;
    }
  }

};

</script>

<style>
.project_detail{
  background: #EEF1F5;
}

.single_requirement{
  margin-left: 200px;
  margin-right: 200px;
  padding-top: 120px;
  background: #EEF1F5;
}

.detail_footer {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 20px;
    color: #8a8a8a;
}
</style>
