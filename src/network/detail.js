import axios from "axios"
import {request} from "./req"
export function getdetaioool(id)
{
  return request({
    method:
    'post',
    url:"/detail/multidata"
  })
}
export function getdetail(id)
{
  return request({
   params:{
     id
   },
    url:"/detail"
  })
}

export function getshopdetail(shop)
{
  return request({
   params:{
     shop
   },
    url:"/shopdetail"
  })
}