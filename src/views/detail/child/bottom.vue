<template>
  <div id="bottom">
    <span class="shop7">
      <span class="store"><div><img src="../../../assets/img/detail/bot/shop.png"></div><span>店铺</span></span>
      <span class="service"><div><img src="../../../assets/img/detail/bot/service.png"></div><span>客服</span></span>
      <span class="col"><div><img src="../../../assets/img/detail/bot/like.png"></div><span>收藏</span></span>
    </span>
    <span class="shopt">
      <span @click="addto">加入购物车</span>
      <span>立即购买</span>
    </span> 
  </div>
</template>
<script>
export default {
  name:"bottom",
  methods:{
    addto()
    {
      this.$emit("addto")
    }
  }
}
</script>
<style scoped>
.shop7{
  font-size: 14px;
  position: relative;
  bottom:0px;
  display: flex;
  width:50%;
  margin-left: 3%;
}
#bottom{
  padding-top:3px;
  display: flex;
  padding-bottom:1%;
}
#bottom span{
  flex: 1;
}
.shop7 span img{
  width:37%;
}
.shop7 span{
  flex:1;
}
.shopt{
  display: flex;
  margin-right: 3%;
}
.shopt span{
  width:50%;
  background-color:rgb(167, 205, 248);
  padding-top:5%;
  flex:1;
  text-align: center;
}
.shopt span:first-child{
  border-right:2px solid#fff;
}
</style>