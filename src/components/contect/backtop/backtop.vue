<template>
  <div class="backtop">
    <img src="../../../assets/img/common/top.png" >
  </div>
</template>
<script>
export default {
  name:"backtop",

}
</script>
<style scoped>
.backtop{
  position: fixed;
  right:8px;
  bottom:50px;
}
.backtop img{
  width:25px;
  height:25px;
  background-color: rgb(226, 220, 220);
  border-radius: 100%;
}
</style>