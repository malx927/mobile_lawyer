import request from '@/api/request'

export function get_role(openid){
  const res = request({
    url: `/wechat/api/role/${openid}`,
    method: 'GET',
  })
  return res
}

export function update_user(userInfo){
  const res = request({
    url: `/wechat/api/role/${userInfo.openid}`,
    method: 'PATCH',
  })
  return res
}