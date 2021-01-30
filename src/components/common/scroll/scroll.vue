<template>
  <div ref="wrapper" class="wrapper">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import bs from "better-scroll"
export default {
  name:"scroll",
  data()
  {
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
          if (!this.scroll) {
           this.scroll = new bs(this.$refs.wrapper, {
                        click: true,
                        probeType: this.scroll,
                        pullUpLoad:this.pullUpLoad,
        }
                    );
                  } else {
                    this.scroll.refresh();
                  }
                  this.scroll.scrollTo(0,0)
                  this.scroll.on('scroll',(position)=>{
                    this.$emit('scroll',position)})
                  this.scroll.on("pullingUp",()=>{
                     this.$emit('pullingUp')});
    },
}
</script>
<style scoped>
</style>