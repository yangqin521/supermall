import axios from "axios"
import {request} from "./req"
export function commit(username,password)
{
  return request({
    params:{
      username,
      password
    },
    url:"/shop/commit"
  })
}
export function register(username,password)
{
  return request({
    params:{
      username,
      password
    },
    url:"/shop/register"
  })
}