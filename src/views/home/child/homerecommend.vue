 <template>
  <div class="recommend">
    <div 
    v-for="(item,index) in recommends" 
    :key="index"
    class="re">
      <a href="">
        <img :src="item.address" alt="">
        <div>{{item.图片序号}}</div>
      </a>
    </div>
</div>
</template>

<script>
export default {
  name: 'homerecommend',                   //home页面热门
  components:{

  },
  props:{
    recommends:{
      type:Array,
      default(){return []}
    }
  }
}
</script>

<style>
.recommend{
  display:flex;
  text-align:center;
  font-size:12px;
right:2px;
}
.recommend div a img{
  height:80px;
  border-radius: 100%;
  padding-top:10px;
  padding-right: 2px;
}
.re{
  flex:1;
  padding-right: 4px;
}
</style>