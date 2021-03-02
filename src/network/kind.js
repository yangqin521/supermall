import axios from "axios"
import {request} from "./req"
export function research(key)
{
  return request({
    params:{
      key
    },
    url:"/datakind"
  })
}