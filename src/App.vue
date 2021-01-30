<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/contect/maintabbar/maintabbar'
export default {
  name: 'App',
  components:
  {
      maintabbar,
  }
}
</script>
<style scoped>
  @import './assets/css/base.css';
</style>