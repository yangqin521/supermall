 <template>
  <div id="kinds">
    <navbar class="kind-nav"><div slot="center">分类</div></navbar>
    <div class="kind">
      <div class="search">
        <input type="search" v-model="mes" class="input" placeholder="大衣"
        @keyup.enter="button">
        <button @click="button">搜索</button>
      </div>
    </div>
    <goodslist :goods="list" class="list"></goodslist>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar"
import goodslist from "../../components/contect/goods/goodslist"

import { research } from "../../network/kind"

export default {
  name: 'kind', 
  components:{
    navbar,
    goodslist,
  },
  data()
  {
    return{
      mes:"",
      list:[]
    }
  },
  methods:{
    button()
    {
      this.list=[];
      research(this.mes).then(res=>{
        this.list.push(...res)
      })
    }
  },
  created()
  {
     research("大衣").then(res=>{
        this.list.push(...res)
      })
  },
}
</script>

<style>
.kind-nav{
  position: fixed;
  width:100%;
  height:44px;
  top:0px;
  z-index:99;
  text-align: center;
  }
.kind{
  background-color: #fff;
  width:100%;
  height:6%;
  position: fixed;
  top:44px;
  z-index:99999;
}
.search{
  position: fixed;
  top:48px;
  width:100%;
  z-index:80;
}
.input{
  height:30px;
  width:80%;
  border-radius: 10%;
  border-color:rgba(83, 155, 238, 0.24);
}
.list
{
  margin-top:24%;
}
button{
  height:30px;
  width:15%;
  margin-left:2.5%;
  background-color:rgba(83, 155, 238, 0.24);
  border-color:rgba(83, 155, 238, 0.24);
  color:#fff;
}
.wrapper{
  height:80%;
}
</style>