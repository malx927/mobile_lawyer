import request from '@/api/request'

export function get_auth_code(params){

  const res = request({
          url: '/wechat/auth_code',
          method: 'get',
          params,
        })

  return res
}

export function get_auth_openid(params){

  const res = request({
          url: '/wechat/auth_openid',
          method: 'get',
          params,
        })

  return res
}