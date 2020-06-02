import request from '@/api/request'

export function get_swipe_list(){
  const res = request({
    url: '/wechat/api/swipe',
    method: 'GET',
  })
  return res
}