<template>
  <div>
    <div class="user">
      <img src="../../assets/img/home/commends.jpg">
      <div>你好!{{username}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"myshop",
  data()
  {
    return {
      username:"",
    }
  },
  // mounted()
  // {
  //   this.$bus.on("send-data",(user)=>{
  //     this.username=user;
  //     console.log(this.username)
  //   })
  // }
}
</script>
<style scoped>

</style>
