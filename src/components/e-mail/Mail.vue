<template>
  <div id = "mail" style="margin-top: 2rem">
    <el-button type="primary" class="header_button" @click="changeView(message)"><i class="el-icon-edit" style="margin-right:0.4rem;"></i>{{message}}</el-button>
    <mail1 v-bind:is="currentView" ></mail1>
  </div>
</template>

<script>
  import mail1 from "./MailDisplay.vue"
  import mail2 from "./MailModify.vue"
  export default {
    components:{
      mail1,
      mail2
    },
    data(){
      return{
        mail1: "mail1", //导航栏文本1
        mail2: "mail2", //导航栏文本2
        message:"修改",
        currentView: "mail1", //默认选中first子组件
      }
    },
    methods:{
      changeView(message){
        if(message == "修改") {
          this.currentView = "mail2";
          this.message = "保存";
        }
        else {
          this.currentView = "mail1";
          this.message = "修改";
        }
      }
    }
  }

</script>
