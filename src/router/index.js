import Vuerouter from 'vue-router'
import Vue from 'vue'
import home from "../views/home/home"
import kind from "../views/kinds/kind"
import profile from "../views/profile/profile"
import shop from "../views/shopping/shop"
import detail from "../views/detail/detail"
import axios from "axios"
Vue.use(Vuerouter,axios);
const routes=[
  {
    path:"/",
    component:home
  },
  {
    path:"/home",
    component:home
  },
  {
    path:"/kind",
    component:kind
  },
  {
    path:"/shop",
    component:shop
  },
  {
    path:"/profile",
    component:profile
  },
  {
    path:"/detail/:id",
    component:detail
  }
]
const router= new Vuerouter({
  mode:"history",
  routes:routes,
 
  // linkAcyiveClass:"active"
});
// src/router/index.js
const originalPush = Vuerouter.prototype.push
   Vuerouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
 

export default router
