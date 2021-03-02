<template>
  <div id="shopdetail">
    <div class="shopname">
      <span><img src="../../../assets/img/home/commends.jpg"></span>
      <span class="shopn">{{shop.shop}}</span>
    </div>
    <span class="sell">
      <span class="sell1">
        <div>{{shop.totalsell}}万</div>
        <div>总销量</div>
      </span>
      <span class="sell1">
        <div>{{shop.totalnum}}</div>
        <div>全部宝贝</div>
      </span>
      <span class='des'>
        <div>描述相符<span :class="{good:shop.description>4.80,notgood:shop.description<4.80 || shop.description==4.80}">{{shop.description | numFilter}}</span></div>
        <div>价格合理<span :class="{good:shop.commend>4.80 || shop.commend==4.80,notgood:shop.commend<4.80}">{{shop.commend | numFilter}}</span></div>
        <div>质量满意<span :class="{good:shop.quality>4.80 || shop.quality==4.80,notgood:shop.quality<4.80}">{{shop.quality | numFilter}}</span></div>
      </span>
    </span>
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
  filters: {
    numFilter(value) {
  // 截取当前数据到小数点后两位
    let transformVal = Number(value).toFixed(3)
    let realVal = transformVal.substring(0, transformVal.length - 1)
    // num.toFixed(2)获取的是字符串
    return Number(realVal)
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
#shopdetail{
  border-top:1px solid rgb(160, 157, 157);
  height:inherit;
  position: relative;
  overflow: hidden;
  zoom:1;
}
.shopn{
  padding-top:16%;
}
.shopname img{
  width:90%;
  border-radius: 100%;
}
.shopname span{
  color:rgb(101, 112, 112);
  flex:1;
}
.shopname{
  margin-top:5%;
  display: flex;
  width:35%;
}
.sell
{
  margin-top:5%;
  display: flex;
  margin-bottom: 10%;
}
.sell span{
  flex:1;
  font-size:14px;
}
.sell1{
  text-align: center;
}
.good{
  color:rgb(207, 53, 14);
}
.des div span{
  margin-left:8%;
}
.notgood{
  color:rgb(180, 238, 180);
}
.imgs{
  height:500px;
  padding-left:3%;
  padding-right: 3%;
  margin-bottom: 5%;
}
</style>