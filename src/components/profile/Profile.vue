<template>
  <div id = "mail" style="margin-top: 2rem">
    <el-button type="primary" class="header_button" @click="changeView(message)"><i class="el-icon-edit" style="margin-right:0.4rem;"></i>{{message}}</el-button>
    <mail1 v-bind:is="currentView" ></mail1>
  </div>
</template>

<script>
  import profile1 from "./ProfileDisplay.vue"
  import profile2 from "./ProfileModify.vue"
  export default {
    components:{
      profile1,
      profile2
    },
    data(){
      return{
        phone1: "profile1", //导航栏文本1
        phone2: "profile2", //导航栏文本2
        message:"修改",
        currentView: "profile1", //默认选中first子组件
      }
    },
    methods:{
      changeView(message){
        if(message == "修改") {
          this.currentView = "profile2";
          this.message = "保存";
        }
        else {
          this.currentView = "profile1";
          this.message = "修改";
        }
      }
    }
  }

</script>
