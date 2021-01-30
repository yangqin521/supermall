<template>
  <div class="gooditem">
    <img :src="gooditem.address" @load="imgload" @click='itemclick'>
    <div class="item">
      <p >{{gooditem.name}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="collection"><img src="../../../assets/img/home/collect.png">{{gooditem.collection}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsitem',
  props:{
    gooditem:{
      typr:Object,
      default()
      {
        return {}
      }
    }
  },
  methods:{
    imgload()
    {
      this.$bus.$emit("imgsload")   //事件总线  管理事件  和vuex有点相似
    },
    itemclick()
    {
      this.$router.push("./detail/"+this.gooditem.id)
    }
  }
}
</script>
<style scoped>
.gooditem img
{
  width:99%;
  border-radius: 8%;
  padding-bottom: 3px;
}
.gooditem
{
  width:45%;
 padding-bottom:10px;
 position: relative;
}
.item
{
  font-size:12px;
  position:relative;
  bottom:5px;
  left:0;
  right:0;
  overflow: hidden;
  text-align: center;
}
.item p
{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.item .price{
  color:black;
  margin-right: 20px;
}
.item .collection{
  position:relative; 
}
.item .collection::before{
  content:"";
  position: absolute;
  left:-15px;
  top:-1px;
  width:14px;
  height:14px;
  background:url() 0 0/14px 14px;
}
.collection img{
width:15px;
height:15px;
position: relative;
top:4px;
left:-5px;
}
</style>