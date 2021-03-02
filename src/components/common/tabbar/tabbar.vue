<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',   //底部导航
}
</script>

<style>
 #tab-bar{
    display:flex;
    position:fixed;
    height:50px;
    right:0;
    left:0;
    bottom:0px;
    box-shadow:0 -1px 1px regb(100,100,100,.01);
    text-align: center;
    z-index:999;
    background-color: #fff;
  }

</style>