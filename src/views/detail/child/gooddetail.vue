<template>
  <div class="goods">
    <div class="name">【<span>{{goodshop.shop}}</span>】{{goodshop.name}}</div>
    <div class="price">
      <span class="now">￥{{goodshop.price}}</span>
      <span class="old">{{goodshop.price+20}}</span>
    </div>
    <div class="shop">
      <span style="padding-right:16%">销量 {{goodshop.sellnumber}}</span>
      <span style="padding-right:16%">收藏 {{goodshop.collection}} 人</span>
      <span>72小时发货</span>
    </div>
    <div class="shop2">
      <span style="padding-right:8%"><img src="../../../assets/img/detail/active.png">退货补运费</span>
      <span style="padding-right:8%"><img src="../../../assets/img/detail/active.png">全国包邮</span>
      <img src="../../../assets/img/detail/active.png">七天无理由退换货
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
  cereted()
  {
    console.log(this.goodshop)
  },
}
</script>
<style scoped>
.name
{
  height:80px;
  width:97%;
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
.goods{
  font-size: 14px;
  position: relative;
  left:5px;
  right:5px;
  text-align: justify;
  border-bottom:cornsilk 2px solid;
  padding-bottom: 35px;
}
.shop{
  font-size: 12px;
  color:rgb(191, 199, 199);
}
.shop2 img{
  width:13px;
}
.shop2 {
  position: relative;
  top:15px;
  font-size:13px;
}
</style>