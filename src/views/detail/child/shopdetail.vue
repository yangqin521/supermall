<template>
  <div class="shop">
    <div>
    <div class="shopname">
      <img src="../../../assets/img/home/commends.jpg">
      <span>{{shop.shop}}</span>
    </div>
    <span class="sell">
      <span class="sell1"><span style="padding-right:13%"><span class="sell2"></span>{{shop.totalsell}}万</span>  {{shop.totalnum}}</span>
      <div><span style="padding-right:8%">总销量</span>全部宝贝</div>
    </span>
    <div class='des'>
      <div>描述相符<span :class="{good:shop.description>4.80,notgood:shop.description<=4.80}">{{shop.description}}</span></div>
      <div>价格合理<span :class="{good:shop.commend>4.90,notgood:shop.commend<=4.80}">{{shop.commend}}</span></div>
      <div>质量满意<span :class="{good:shop.quality>4.80,notgood:shop.quality<=4.80}">{{shop.quality}}</span></div>
    </div>
    </div>
    <div v-for="(item,index) in shopimgs" :key="index" class="imgs">
      <img :src="item" @load="imgload">
    </div>
  </div>
</template>
<script>

export default {
  name:"shopdetail",
  data()
  {
    return {
      counter:0,
      imglen:0,
    }
  },
  props:
  {
    shop:{
      type:Object,
       default(){return {}}
    },
     shopimgs:{
       type:Array,
       default(){return []}
     }
  },
  methods:{
    imgload()
    {
      if(++ this.counter===this.imglen)
      {
        this.$emit('imgload')
      }
    }
  },
  watch:{
    shopimgs()
    {
      this.imglen=this.shopimgs.length;
    }
  }
}
</script>
<style scoped>
.shop{
  height:inherit;
  position: relative;
  overflow: hidden;
  zoom:1;
}
.shopname img{
  width:40px;
  border-radius: 100%;
  margin-bottom: 20px;
}
.shopname span{
  color:rgb(101, 112, 112);
  font-size: 14px;
  position: relative;
  top:-25px;
  left:5%;
}
.shopname{
  margin-top:8%;
}
.sell
{
  font-size:12px;
  margin-top:10%;
}
.sell1{
  font-size:14px;
}
.sell2{
  margin-left:2%;
}
.des{
  position: relative;
  left:200px;
  top:-35px;
  font-size:13px;
}
.good{
  color:rgb(207, 53, 14);
}
.des div span{
  margin-left:4%;
}
.notgood{
  color:rgb(180, 238, 180);
}
.imgs{
  position: relative;
  height:350px;
  width:320px;
}
</style>