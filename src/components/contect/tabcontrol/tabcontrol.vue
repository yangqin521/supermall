 <template>
  <div class="tab-control">
    <div 
    v-for="(item,index) in titles" 
    :key="item" 
    class="itemcon"
    :class="{active : index==cuindex}"
    @click="itemclick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabcontrol',    //公用部分的流行，精选，等
  components:{
  },
  props:{
   titles:{
      type:Array,
      default(){return []}
    }
  },
  data()
  {
    return{
    cuindex:0,
    }
  },
  methods:{
    itemclick(index){
      this.cuindex=index;
      this.$emit('tabclick',index)
    }
  }
  
}
</script>

<style>
.tab-control{
  display:flex;
  text-align:center;
  font-size:16px;
  height:40px;
  line-height: 40px;
  background-color:white;
  color:rgb(167, 205, 248);
  z-index:90;
}
.itemcon{
  flex:1;

}
.active{
  color:rgb(25, 71, 223);
}
.active span
{

  border-bottom:1px solid rgb(25, 71, 223) ;
}
</style>