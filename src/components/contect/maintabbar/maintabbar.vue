 <template>
  <tab-bar>
      <item path="/home"> 
        <img slot="item-img" src="../../../assets/img/tabbar/首页.png">
        <div slot="item-text">首页</div>
      </item> 
      <item path="/kind">>
        <img slot="item-img" src="../../../assets/img/tabbar/分类.png">
        <div slot="item-text">分类</div>
      </item>
      <item path="/shop"> 
        <img slot="item-img" src="../../../assets/img/tabbar/购物车.png">
        <div slot="item-text">购物车</div>
      </item> 
      <item path="/profile"> 
        <img slot="item-img" src="../../../assets/img/tabbar/people.png">
        <div slot="item-text">我的</div>
      </item> 
      
    </tab-bar>
</template>

<script>
import tabBar from '../../common/tabbar/tabbar'
import item from '../../common/tabbar/item'
import navbar from "../../common/navbar/navbar"
export default {
  name: 'maintabbar',  //公用部分的首页，分类，购物车，我的 
  components:{
    tabBar,
    item,
    navbar,
  }
  
}
</script>

<style>

</style>