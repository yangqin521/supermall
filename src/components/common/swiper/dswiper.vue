 <template>
  <div class="slide">
    <div v-for="(item,index) in banners" :key=index v-show="index===currentindex" @touchend="go" @touchstart="stop">
      <img :src="item" class="imgs">
      <div class="index">
        <span v-for="(item,index) in banners" :key=index class="index1" :class="{'isactive':index===currentindex}"></span>
      </div>
    </div>
    <div>
    <span v-for="(item,index) in banners.length" :key="index" :class="{'active':index===currentindex}" @mousever="change(index)"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dswiper', 
  data()
  {
    return {
      currentindex:0,
      timer:'',
      touch:0,
　　  endPos:0, 
      isload:false,
    }
  },
  props:{
    banners:{
      type:Array,
      default(){return []}
    }
  },
  created(){
    this.$nextTick(()=>{  
//在vue中有一种情况，获取了数据后，需要对新视图进行下一步操作或者其他操作时，发现获取不到dom。
//因为赋值操作只完成了数据模型的改变并没有完成视图更新。在这个时候我们需要$nextTick函数（或者setTimeout）。
      this.timer=setInterval(()=>{
        this.autoplay()
      },4000)
    })
  },
  methods:{
  go(){
    this.timer=setInterval(()=>{
      this.autoplay()
    },4000)
  },
  stop(){
    clearInterval(this.timer)
    this.timer=null
  },
  change(index)
  {
    this.scrollcontent=index
  },
  autoplay(){
    this.currentindex++
    if(this.currentindex>this.banners.length-1){
      this.currentindex=0
    }
  },
  // swiperload()
  // {
  //   if(!this.isload)
  //   {this.$emit("swiperload")
  //   this.isload=true}       //防止多次调用
  // },
  }
  }
</script>

<style>
.slide{
  width:100%;
}
.imgs{
  height:110px;
  width:100%;
}
.index{
  position: absolute;
  left:240px;
  top:100px;
  z-index:99;
  display:flex;
}

.index1{
  width:8px;
  height:8px;
  border-radius: 100%;
  background-color:#fff;
  margin-right: 10px;
  flex:1;
}
.isactive{
  background-color: rgb(173, 61, 27);
}
</style>