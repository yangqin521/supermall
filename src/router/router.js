import Vuerouter from 'vue-router'
import Vue from 'vue'
import home from "../views/home/home"
import kind from "../views/kinds/kind"
import profile from "../views/profile/profile"
import shop from "../views/shopping/shop"
import detail from "../views/detail/detail"
Vue.use(Vuerouter);
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
export default router
