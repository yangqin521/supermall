<template>
  <div class="goods">
    <goodsitem v-for="(item,index) in goods" 
    :key="index" 
    :gooditem="item"
    ></goodsitem>
  </div>
</template>

<script>
import goodsitem from './goodsitem'
export default {
  name: 'goodslist',
  props:{
   goods:{
     type:Array,
     default(){
       return []
     }
   }
  },
  components:
  {
      goodsitem,
  },
}
</script>
<style scoped>
.goods{
display:flex;
flex-wrap:wrap;
justify-content: space-around;
margin-bottom:45px;
padding-bottom: 30px;
}
</style>