 <template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物车</div></navbar>
    <tabcontrol
      v-show="istabfix"
      ref="tab"
      @tabclick="tabclick" 
      :titles="['流行','新款','精选']" 
      class="tab"></tabcontrol> 
    <scroll ref="scroll" 
    :probeType="3" 
    :pullUpLoad="true"
    @scroll="scrollcontrol"
    @pullingUp="loadmore">
      <homeswiper 
      :banners="banners" 
      class="homeswiper"
      @swiperload="swiper"></homeswiper>
      <homerecommend class="itemcommend" :recommends="recommends"></homerecommend> 
      <feature class="feature"></feature>
      <tabcontrol
      ref="tab"
      @tabclick="tabclick" 
      :titles="['流行','新款','精选']" 
      class="tab"></tabcontrol>
      <goodslist :goods="clothes[currentindex].list"></goodslist>
    </scroll>
    <backtop @click.native="backtop" v-show="num"></backtop>
 </div>
</template>

<script>
import scroll from "../../components/common/scroll/scroll"
import backtop from "../../components/contect/backtop/backtop"
import homeswiper from "../../components/common/swiper/swiper"
import { getHomeMultidata,gethomepop,gethomenews,gethomesell} from "../../network/home.js"
import tabcontrol from "../../components/contect/tabcontrol/tabcontrol"
import navbar from '../../components/common/navbar/navbar'
import goodslist from "../../components/contect/goods/goodslist"

import homerecommend from './child/homerecommend'
import feature from "./child/feature"
import axios from "axios"
import bs from "better-scroll"
export default {
  name: 'home', 
  components:{
    navbar,
    tabcontrol,
    homeswiper,
    homerecommend,
    feature,
    goodslist,
    backtop,
    scroll,
  },
  data(){
    return {
      banners:[{image:"./img/1.jpg",link:"http://www.baidu.com"
    },{image:"./img/2.png",link:"http://www.baidu1.com"
    },{image:"./img/3.jpg",link:"http://www.baidu2.com"
    }],
      recommends:[],
      titles:[],
      clothes:[{page:0,list:[]},
        {page:0,list:[]},
        {page:0,list:[]},
      ],
      currentindex:0,
      num:false,
      offsettop:0,
       istabfix:false,    //动态绑定属性 动画效果  当滚动到一定程度时 第一个tabcontrol fixed 并显示出来
      savey:0 
    }
  },
   mounted()
    {
      const refr=this.debounce(this.$refs.scroll.scroll.refresh(),500)
       this.$bus.$on("imgsload",()=>{
      refr()
       })
    },
  methods:{
   gethomegoodspop()
   {
     const page1=this.clothes[0].page+1;
     gethomepop(page1).then(res=>{
       this.clothes[0].list.push(...res);
       this.clothes[0].page+=1;
         this.$refs.scroll.scroll.finishPullUp()
   })
   },
    gethomegoodsnews()
   {
     
     const page2=this.clothes[1].page+1;
     gethomenews(page2).then(res=>{
       this.clothes[1].list.push(...res);
       this.clothes[1].page+=1;
         this.$refs.scroll.scroll.finishPullUp()
     })
   },
    gethomegoodssell()
   {
     const page3=this.clothes[2].page+1;
     gethomesell(page3).then(res=>{
       this.clothes[2].list.push(...res);
       this.clothes[2].page+=1;
         this.$refs.scroll.scroll.finishPullUp()
     })
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
   loadmore()
   {
     setTimeout(()=>{
     if(this.currentindex==0)
     {this.gethomegoodspop()
     this.$refs.scroll.scroll.refresh()
     }
     if(this.currentindex==1)
     {this.gethomegoodsnews()
     this.$refs.scroll.scroll.refresh()}
     if(this.currentindex==2)
     {this.gethomegoodssell()
     this.$refs.scroll.scroll.refresh()}
     },500)
  },
debounce(func,delay)//防抖函数  用于解决refresh重复执行问题
{
  let timer=null
  return function(...args)
  {
    if(timer) {clearTimeout(timer)}
    else
    {
    timer=setTimeout(()=>{
      func.apply(this,...args)
    },delay)
  }
  }
},
   //事件监听 改变tabcontrol索引
   tabclick(index)
   {
     this.currentindex=index;
   },
   backtop()
   {
    this.$refs.scroll.scroll.scrollTo(0,0,1000)
    scrollTo(0,0)
   },
   swiper()
   {
    this.offsettop=this.$refs.tab.$el.offsetTop//$el用于获取组件的元素)
   }
  },
   created(){
    getHomeMultidata().then(res=>
    {
      this.recommends=res;//推荐数据
    }
   )
    this.gethomegoodspop()
    this.gethomegoodsnews()
    this.gethomegoodssell()
    },
    computed:{   //计算属性  只调用一次 发生改变时重新对比调用
    showgoods()
    {
      return this.clothes[this.currentindex].list
    },
    activated()
    {
      this.$refs.scroll.scroll.scrollTo(0,this.savey,0)
      this.$refs.scroll.scroll.refresh()
    },
    deactivated()
    {
      this.savey=-this.$refs.scroll.scroll.y
    }
    }
}
</script>

<style>
.homeswiper img
{
  width:100%;
  height:150px;
}
.itemcommend{
  height:80px;
  width:100%;
}
.my-swiper{
width:100%;
  height:60%;
}
.tab{
  position:relative;
}
.home-nav{
  position: fixed;
  width:100%;
  top:0px;
  z-index:99;
  text-align: center;
  }
#home{
padding-top: 44px;
height:100vh;
}

.wrapper
{
  height:480px;
  overflow: hidden;
}
</style>