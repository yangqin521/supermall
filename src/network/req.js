import axios from "axios"
export function request(config){
  const instance=axios.create({
    baseURL:"http://yangqin.cn.utools.club",
    // baseURL:"http://127.0.0.1:8000",
    // timeout:5000
  })
  instance.interceptors.request.use(
    config =>{
      return config;
    },err =>{
      console.log(err)
    }
  )
  instance.interceptors.response.use(
    res => {
      return res.data;
      console.log(res.data)
    },err =>{
      console.log(err)
    }
  )
  return instance(config);
}








// const express=require("express");
// const app=express();
// app.get("/home/multidata",(req,res)=>{
//   res.header("Access-Control-Allow-Origin","*");
//   //允许的header类型
//   res.header("Access-Control-Allow-Headers","content-type");
//   //跨域允许的请求方式 
//   res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
//   //res.send(data1);
// res.end();
// });
// app.listen(8081,()=>{
//   console.log("success");
// }
// );
// const mysql=require("mysql");
// const { send } = require("process");
// var data1;
// var db=mysql.createConnection({host:"localhost",port:3306,user:"root",password:"628628",database:"supermall"});
// db.query("SELECT address FROM `home-commends`;",(err,data)=>
// //(干啥，回调)
// {
//   data1=data;
//   if(err)
//   {
//     console.log("error",err);
//   }
//   else{
//  console.log(JSON.stringify(data1));
//   }
//   module.exports=data1;
// });