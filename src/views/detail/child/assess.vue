<template>
  <div id="assess">
    <div class="namespace">评论<span>查看更多</span>
    </div>
    <div>
      <div v-for="(item,index) in assess" :key=index>
      <span class="message"><span><img src="../../../assets/img/home/commends.jpg" align="center"></span><span>{{item.message}}</span></span>
      <div class="date">
        <span>2021-2-3</span>
        <span>颜色：白</span>
        <span>尺码：M</span>
      </div>
      <div class="assets">{{item.assets}}</div>
      <div class="picture"><img :src="item.photos"></div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"assess",
  props:{
    assess:{
      type:Array
    }
  }
}
</script>
<style scoped>
#assess
{
   border-top:1px solid rgb(160, 157, 157);
   margin-top:10%;
   margin-left:2%;
   margin-right:2%;
   padding-bottom: 10%;
}
.namespace{
  margin-top:3%;
  padding-bottom:3%;
  border-bottom:1px solid rgb(160, 157, 157);
  margin-bottom:3%;
}
.namespace span{
  padding-left:70%;
}
.date{
  padding-top:3%;
  width:60%;
  display: flex;
  padding-bottom: 5%;
}
.date span{
  flex:1;
  font-size:14px;
  color:rgba(70, 69, 69, 0.336);
}
.assets{
  font-size:14px;
  width:98%;
  text-align:justify;
  margin-bottom: 5%;
}
.picture{
  width:30%;
}
.message span img{
  width:12%;
  border-radius: 100%;
  margin-right:1%;
}
</style>