import {request} from "./request";

export function getDishList() {
  return request({
    url: '/dishList'
  })
}