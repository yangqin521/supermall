<template>
  <div id="recommend">
    <div class="rec"><img src="../../../assets/img/home/collect.png" align="center"><span>猜你喜欢</span>
    <img src="../../../assets/img/home/collect.png" align="center"></div>
    <goodslist :goods="recommend"></goodslist>
  </div>
</template>
<script>
import goodslist from "../../../components/contect/goods/goodslist"
export default {
  name:"recommend",
  data()
  {
    return {
      recommend:[{address: "../img/goods/1.jpg",
collection: 23,
id: "67hcws",
name: "2021冬季羽绒大衣学生显瘦白色2021冬季羽绒学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒学生显瘦白色",
price: 190,
type: "pop"},
{
address: "../img/goods/2.jpg",
collection: 45,
id: "abc2378",
name: "2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色",
price: 55,
type: "pop"
},
{
address: "../img/goods/3.jpg",
collection: 67,
id: "cach67dwv",
name: "2021冬季羽绒大衣学生显瘦白色2021冬季羽绒学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒学生显瘦白色",
price: 206,
type: "pop"
},
{
address: "../img/goods/2.jpg",
collection: 32,
id: "cejakwc78ejc",
name: "2021冬季羽绒大衣学生显瘦白色2021冬季羽绒学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒大衣学生显瘦白色2021冬季羽绒学生显瘦白色",
price: 1190,
type: "pop"
}
]
    }
  },
  components:
  {
    goodslist,
  }
}
</script>
<style scoped>
.rec{
  margin-top:3%;
  margin-bottom: 3%;
  border-top:1px solid rgb(160, 157, 157);
  padding-top:2%;
  padding-bottom:2%;
  border-bottom:1px solid rgb(160, 157, 157);
  text-align: center;
}
.rec img{
  width:7%;
}
.rec span{
  padding-top:-5%;
}
</style>





