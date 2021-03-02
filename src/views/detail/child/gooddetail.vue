<template>
  <div id="gooddetail">
    <div class="namex">【<span>{{goodshop.shop}}</span>】{{goodshop.name}}</div>
    <div class="pricex">
      <span class="now">￥{{goodshop.price}}</span>
      <span class="old">{{goodshop.price+20}}</span>
    </div>
    <div class="shopx">
      <span style="padding-right:16%">销量 {{goodshop.sellnumber}}</span>
      <span style="padding-right:16%">收藏 {{goodshop.collection}} 人</span>
      <span>72小时发货</span>
    </div>
    <div class="shop2">
      <span><img src="../../../assets/img/detail/active.png">退货补运费</span>
      <span><img src="../../../assets/img/detail/active.png">全国包邮</span>
      <span><img src="../../../assets/img/detail/active.png">七天无理由退换货</span>
    </div>
  </div>
</template>
<script>

export default {
  name:"gooddetail",
  props:
  {
    goodshop:{
      type:Object,
       default(){return {}}
    }
  },
}
</script>
<style scoped>
.namex
{
  height:80px;
  width:97%;
  overflow: hidden;
  margin-bottom:3%;
}
.pricex{
  margin-bottom:3%;
} 
.shopx{
  margin-bottom:3%;
}
.now
{
  color:#ff8189;
}
.old{
  color:rgb(191, 199, 199);
  font-size: 12px;
  text-decoration: line-through ;
  position: relative;
  left:12px;
}
#gooddetail{
  font-size: 14px;
  position: relative;
  left:5px;
  right:5px;
  text-align: justify;
  margin-bottom: 6%;
}
.shopx{
  font-size: 12px;
  display: flex;
  color:rgb(175, 179, 179);
}
.shop2 img{
  width:13px;
}
.shop2{
  display: flex;
  padding-right:3%;
}
.shopx span{
  flex:1;
}
.shop2 span {
 flex:1;
}
</style>