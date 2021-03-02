 <template>
 <div>
   <navbar class="pro-nav"><div slot="center">我的</div></navbar>
    <div class="profile">
      <!-- <form> -->
      <input type="text" v-model="user" placeholder="请输入邮箱/手机号" class="input">
      <button @click="enter" class="enter">登录</button>
      <input type="password" v-model="pass" placeholder="密码" class="input">
      <button @click="newuser" class="newuser">注册</button>
      <!-- <input type="reset" value="清空" class="reset">
      </form> -->
    </div>
    <!-- <input type="file" value="shngchuan" id="file">
    <button @click="file">文件上传</button> -->
  </div>
</template>

<script>
import {commit,register} from "../../network/profile"

import navbar from "../../components/common/navbar/navbar"

export default {
  name: 'profile', 
  components:{
    navbar
  },
  data()
  {
    return {
      user:"",
      pass:"",
      files:""
    }
  },
  methods:{
    file()
    {
    var files = document.getElementById("file").files;
    this.files=files
    console.log(this.files)
    },
    enter(){
      if(this.user=="" || this.pass=="")
      {
        alert("请输入用户名和密码")
      }
      else
      {
        console.log(this.user)
         var phone =/^1[0-9]{10}$/
      var email =/^qq.com$/
      if(phone.test(this.user) || email.test(this.user))
      {
        commit(this.user,this.pass).then(res=>{
          this.commit=res
          if(res=="success")
        {
          this.$router.push("./myshop/"+this.user)
        }
        if(res=="failed")
        {
          alert("用户名或密码错误")
        }
        if(res=="no")
        {
          alert("该用户未被注册")
        }
        })
      }
        else
        {
          alert("请输入正确用户格式")
        }
      }
    },
    newuser()
    {
      var phone =/^1[0-9]{10}$/
      var email =/^qq.com$/
      if((phone.test(this.user) || email.test(this.user)))
      {
      register(this.user,this.pass).then(res=>{
        if(res=="success")
        {
          alert("注册成功")
        }
        if(res=="failed")
        {
          alert("该用户已被注册")
        }
      })
      }
      if(this.pass!=""){
        alert("请输入用户名和密码")
      }
      else{
        alert("请输入正确用户格式")
      }
    }
  },
  updated()
  {
    this.$bus.$emit("send-data","aaa")
  }
}
</script>

<style>
.profile
{
  margin-top:60%;
}
.pro-nav
{
  text-align: center;
}
.reset{
  height:30px;
  width:15%;
  margin-left:2.5%;
  background-color:rgba(83, 155, 238, 0.24);
  border-color:rgba(83, 155, 238, 0.24);
  color:#fff;
}
</style>