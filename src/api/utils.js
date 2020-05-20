import request from '@/api/request'

export function get_token_openid(){
  console.log("---------------")
  const res = request({
          url: '/wechat/get_token_openid',
          method: 'get',
        })
  console.log(res);
  return res
}