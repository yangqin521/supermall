<template>
  <div id="detail">
    <navbar class="navbar">
      <div slot="left" class="left" @click="backclick"><img src="../../assets/img/detail/return.png"></div>
      <div slot="center" class="title"><div 
    class="titleitem" 
    v-for="(item,index) in titles" :key="index" 
    :class="{active:index===currentindex}"
    @click="click(index)">{{titles[index]}}</div></div>
      <div slot="right"></div>
    </navbar>
    <scroll ref="scroll" :probeType="3"  :pullUpLoad="true" class="content" @scroll="scrollcontrol">
    <detailswiper :banners="topimgs" class="dswiper"></detailswiper>
    <gooddetail class="gooddetail" :goodshop="goodshop"></gooddetail>
    <shopdetail :shop="shop" :shopimgs="shopimgs" @imgload="imgsload" ></shopdetail>
    </scroll>
    <backtop @click.native="backtop" v-show="num"></backtop>
  </div>
</template>
<script>
import navbar from '../../components/common/navbar/navbar.vue'
import detailswiper from "../../components/common/swiper/dswiper"
import gooddetail from "./child/gooddetail"
import shopdetail from "./child/shopdetail"
import backtop from "../../components/contect/backtop/backtop"

import scroll from "../../components/common/scroll/scroll"
import bs from "better-scroll"

import {getdetail,getshopdetail} from "../../network/detail"
export default {
  name:"detail",
  data()
  {
    return {
      id:null,
      titles:['商品','参数','评论', '推荐'],
      currentindex:0,
      topimgs:[],
      goodshop:{},
      shop:{},
      shopimgs:[],
      num:false,
    }
  },
  components:{
    navbar,
    detailswiper,
    gooddetail,
    shopdetail,
    scroll,
    backtop
  },
  methods:{
    click(index)
    {
      this.currentindex=index;
    },
    backclick()
    {
      this.$router.go(-1)
    },
    imgsload()
    {
      this.$refs.scroll.scroll.refresh()
    },
    backtop()
   {
    this.$refs.scroll.scroll.scrollTo(0,0,1000)
    scrollTo(0,0)
   },
   scrollcontrol(position)
   {
     if(position.y<0)
     {
       this.num=true;
       this.istabfix=(-position.y)>this.offsettop
     }
      if(position.y>=0)
     {
       this.num=false;
     }
   },
  },
created()
{
  this.id=this.$route.params.id
  getdetail(this.id).then(res=>
  {
    //轮播图数据
    var s=res.detailswiper.split(" ");
    this.topimgs.push(...s);
    this.goodshop=res;
    getshopdetail(this.goodshop.shop).then(res=>
  {
    this.shop=res;
    var str=res.detailphotos.split(" ")
    console.log(str)
    this.shopimgs.push(...str)
  })
  })
},
mounted()
{
  this.$refs.scroll.scroll.refresh()
}
}
</script>
<style scoped>
.title
{
  width:220px;
  display: flex;
  text-align: center;
  }
.titleitem
{
  flex:1;
  color:black;
}
.left{
  width:50px;
  height:44px;
}
.active
{
  color:#fff;
}
.left img{
  width:19px;
  position: relative;
  top:5px;
  left:4px;
}
.dswiper a img{
  height:90px;
}
#detail
{
  background-color: #fff;
  height:100vh;
  position: relative;
  z-index:999999;
}
.wrapper{
  height:480px;
}
</style>