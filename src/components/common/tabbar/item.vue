 <template>
  <div class="item" @click="itemclick">
     <slot name="item-img"></slot>
     <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'item',   //底部导航元素
  props:
  {
    path:String 
  },
  methods:
  {
    itemclick()
    {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.item img{
  margin-top:3px;
  width:30px;
  height:24px;
}
.item{
  box-sizing: border-box;
  height:100%;
  flex:1;
}
.item:not(:first-child)
{
  margin-left: 10%;
}
.item:first-child{
  margin-left: 3%;
}
</style>