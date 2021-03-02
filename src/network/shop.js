import axios from "axios"
import {request} from "./req"
export function readstore()
{
  return request({
    url:"/store"
  })
}