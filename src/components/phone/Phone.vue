<template>
  <div style="margin-top: 2rem">
    <el-button type="primary" class="header_button" @click="changeView(message)"><i class="el-icon-edit" style="margin-right:0.4rem;"></i>{{message}}</el-button>
    <phone1 v-bind:is="currentView" ></phone1>
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
        phone1: "phone1",
        phone2: "phone2",
        message:"修改",
        currentView: "phone1",
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
