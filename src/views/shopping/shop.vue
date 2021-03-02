 <template>
  <div id="store">
    <navbar class="shop-nav"><div slot="center">购物车({{storenum}})</div></navbar>
     <scroll ref="scroll" 
    :probeType="3" 
    :pullUpLoad="true"
    @scroll="scrollcontrol">
    <div class="list-all" v-for="(item,index) in store" :key=index>
      <div class="things">
      <div class="shop"><img src="../../assets/img/detail/bot/shop.png">{{item.shop}}</div>
      <div>
        <input type="radio"  v-model="item.checked" class="check" @click="checkitem(index)">
        <div class="img"><img :src="item.image"></div>
        <div class="name">{{item.shopname}}</div>
        <div class="items"><span class="pri">￥{{item.price}}</span>
        <span class="num">{{item.num}}</span></div>
      </div>
    </div>
    </div>
    </scroll>
    <div class="sho-bar">
      <span><input type="radio" value="" @click="checkall"
      v-model="allcheck">全选</span>
      <span class="total">总计：<span>{{totalmoney}}</span></span>
      <span class="money">结算</span>
    </div>
  </div>
</template>

<script>
import {readstore} from "../../network/shop"

import navbar from "../../components/common/navbar/navbar"
import scroll from "../../components/common/scroll/scroll"

export default {
  name: 'shop', 
  components:{
    navbar,
    scroll
  },
  data()
  {
    return {
      store:[],
      allcheck:false,
      money:0
    }
  },
  created()
  {
    readstore().then(res=>{
      this.store.push(...res)
    })
  },
  computed:{  // 当store发生变化时才重新返回值
  //set(val)监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
    storenum()
    {
      return this.store.length
    },
    totalmoney() {
          let result = 0;
          for (let i = 0; i < this.store.length; i++) {
            if(this.store[i].checked==null)
            result += this.store[i].price*this.store[i].num;
          }
          return result
        }
  },
  methods:{
    checkall()
    {  
        if(this.allcheck==true)
        {
          this.store.forEach(item => {item.checked=null});
          this.allcheck=null

        }
        else
        {
           this.store.forEach(item => {item.checked=true});
          this.allcheck=true;
        }
    },
    checkitem(index)
    {
      this.store[index].checked=!this.store[index].checked
    },
    scrollcontrol(position)
   {
     if(position.y<0)
     {
       if(position.y<-430)
       {this.num=true;}
       this.istabfix=(-position.y)>this.offsettop
     }
      if(position.y>=0)
     {
       this.num=false;
     }
   },
    },
}
</script>

<style>
.shop-nav{
  position: fixed;
  width:100%;
  height:44px;
  top:0px;
  z-index:99;
  text-align: center;
  }
.sho-bar
{ 
  margin-top:80px;
  display: flex;
  line-height: 44px;
  background-color:#fff;
  position: fixed;
  bottom:50px;
  height:44px;
  width:100%;
}
.sho-bar span{
  flex: 1;
  text-align: center;
}

.che{
  background-color:rgb(230, 128, 13);;
}
.things{
  position:relative;
  top:44px;
  width:92%;
  height:200px;
  border:1px solid rgb(224, 219, 219);
  margin-top:2%;
  margin-left:4%;
  margin-bottom:2%;
  margin-right:4%;
}
.shop img{
  width:6%;
  margin-left:5%;
  margin-right:3%;
}

.shop{
  height: 10%;
  font-size: 17px;
  line-height:50%;
  padding-top:3%;
  margin-bottom: 5%;;
}
.img img{
  height:100px;
  width:120px;
  padding-left:10%;
}
.check{
  position: relative;
  top:60px;
}
.name{
  width:60%;
  height:50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  top:-100px;
  left:36%;
}
.items{
  position: relative;
  top:-40px;
}
.pri{
  color:rgb(230, 128, 13);
}
.num
{
  position: absolute;
  right:10%;
  height:120%;
  width:10%;
  border:1px solid rgb(204, 199, 199);
  text-align:center;
}
.act{
  background-color:rgb(230, 128, 13);
}
.total span{
  color:rgb(34, 115, 238);
  line-height: 44px;
}
#store{
  height:100vh;
}
.wrapper
{
  height:85%;
}
</style>