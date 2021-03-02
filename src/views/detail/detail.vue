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
    <div class="size" ref="size">
      <img src="../../assets/img/detail/goods/size.jpg">
    </div>
    <assess class="assess" :assess="assess" ref="assess"></assess>
    <recommend  ref="recommend" class></recommend>
    </scroll>
    <backtop @click.native="backtop" v-show="num"></backtop>
    <bottom class="bottom" @addto="addtoCart"></bottom>
  </div>
</template>
<script>
import navbar from '../../components/common/navbar/navbar.vue'
import detailswiper from "../../components/common/swiper/dswiper"
import gooddetail from "./child/gooddetail"
import shopdetail from "./child/shopdetail"
import backtop from "../../components/contect/backtop/backtop"
import assess from "./child/assess"
import recommend from "./child/recommend"
import bottom from "./child/bottom"

import scroll from "../../components/common/scroll/scroll"
import bs from "better-scroll"

import {getdetail,getshopdetail,getassess,getrecommend,addto} from "../../network/detail"
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
      assess:[],
      topy:[0],
    }
  },
  components:{
    navbar,
    detailswiper,
    gooddetail,
    shopdetail,
    scroll,
    backtop,
    assess,
    recommend,
    bottom
  },
  methods:{
    click(index)
    {
      this.currentindex=index;
      this.$refs.scroll.scroll.scrollTo(0,-this.topy[index],0)
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
     var y=-position.y
    for (let i=0;i<4;i++)
    {
    if( this.currentindex!==i)
    {
      if( (i<3 &&  y> this.topy[i] && y< this.topy[i+1]) || (i==3 && y>this.topy[3]))
      {
          this.currentindex=i;
      }
    }
    }
      },
    addtoCart()
    {
      const produce ={id:"",image:"",title:"",price:"",shop:""}
      produce.id=this.id
      produce.image=this.topimgs[0]
       produce.title=this.goodshop.name
        produce.price=this.goodshop.price
        produce.shop=this.shop.shop
        produce.num=1
        addto(produce).then(res=>{

        })
    }
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
    this.shopimgs.push(...str)
  })
  })
  getassess().then(res=>{
    this.assess.push(...res)
  })
  // getrecommend("pop").then(res=>{
  //   this.recommend.push(...res)
  //   console.log(this.recommend)
  // })
},
updated()
{
  this.topy=[0]
  this.topy.push(this.$refs.size.offsetTop)
  this.topy.push(this.$refs.assess.$el.offsetTop)
  this.topy.push(this.$refs.recommend.$el.offsetTop)
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
  text-align: center;
  width:75%;
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
  overflow: hidden;
}
.wrapper{
  height:86%;
}
.bottom{
  position: fixed;
  bottom:0%;
  z-index:9999999;
  background-color: #fff;
}
</style>