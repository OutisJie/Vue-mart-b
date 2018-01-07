<template>
  <div id="blank">
  </div>
</template>

<script>
export default {
  name: 'Blank',
  data(){
    return{

    }
  },
  created() {
    this.logout();
  },
  methods:{
    logout(){
      this.$store.commit("reset");
      sessionStorage.removeItem("tokenid");
      this.$router.push( '/' );
    }
  }
}
</script>