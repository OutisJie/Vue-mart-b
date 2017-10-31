<template>
  <div id = "mail" style="margin-top: 2rem">
    <el-button type="primary" class="header_button" @click="changeView(message)"><i class="el-icon-edit" style="margin-right:0.4rem;"></i>{{message}}</el-button>
    <mail1 v-bind:is="currentView" ></mail1>
  </div>
</template>

<script>
  import phone1 from "./PhoneDisplay.vue"
  import phone2 from "./PhoneModify.vue"
  export default {
    components:{
      phone1,
      phone2
    },
    data(){
      return{
        phone1: "phone1", //导航栏文本1
        phone2: "phone2", //导航栏文本2
        message:"修改",
        currentView: "phone1", //默认选中first子组件
      }
    },
    methods:{
      changeView(message){
        if(message == "修改") {
          this.currentView = "phone2";
          this.message = "保存";
        }
        else {
          this.currentView = "phone1";
          this.message = "修改";
        }
      }
    }
  }

</script>
