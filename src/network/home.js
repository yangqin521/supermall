import axios from "axios"
import {request} from "./req"
export function getHomeMultidata()
{
  return request({
    method:
    'post',
    url:"/home/multidata"
  })
}
export function gethomepop(page)
{
  return request({
   params:{
     page
   },
    url:"/home/popdata"
  })
}
export function gethomenews(page)
{
  return request({
   params:{
     page
   },
    url:"/home/newsdata"
  })
}
export function gethomesell(page)
{
  return request({
   params:{
     page
   },
    url:"/home/selldata"
  })
}
