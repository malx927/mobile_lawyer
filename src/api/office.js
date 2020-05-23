import request from '@/api/request'

export function office(){
  const res = request({
    url: '/office/office',
    method: 'get',
  })
  return res
}