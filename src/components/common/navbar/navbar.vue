 <template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navbar', //顶部粉色导航
  props:{
    titles:{type:Array,default() {return []}},
  }
}
</script>

<style>
.navbar{
  line-height:44px;
  height:44px;
  width:100%;
  background-color:rgb(165, 194, 228);
  color:white;
  z-index:9999;
   opacity:10;
   position: relative;
  }
</style>