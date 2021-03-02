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

export function getassess()
{
  return request({
    url:"/detail/assess"
  })
}

export function getrecommend(type)
{
  return request({
   params:{
     type
   },
    url:"/detail/recommend"
  })
}

export function addto(produce)
{
  return request({
   params:{
     produce
     },
    url:"/detail/addto"
  })
}











