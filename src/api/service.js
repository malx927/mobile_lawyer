import request from '@/api/request'

export function get_person_info(openid){
  const res = request({
    url: `/service/person/${openid}`,
    method: 'GET',
  })
  return res
}

export function private_contract_add(contractInfo){
  const res = request({
    url: '/service/private/',
    method: 'POST',
    data: contractInfo
  })
  return res
}

export function private_contract_update(contractInfo){
  const res = request({
    url: `/service/private/${contractInfo.id}/`,
    method: 'PUT',
    data: contractInfo
  })
  return res
}

export function private_contract_confirm(contractInfo){
  const res = request({
    url: `/service/private/${contractInfo.id}/`,
    method: 'PATCH',
    data: contractInfo
  })
  return res
}

export function private_contract_info(contract_id){
  const res = request({
    url: `/service/private/${contract_id}/`,
    method: 'GET',
  })
  return res
}

export function private_contract_list(){
  const res = request({
    url: '/service/private/',
    method: 'GET'
  })
  return res
}

export function private_contract_delete(contract_id){
  const res = request({
    url: `/service/private/${contract_id}/`,
    method: 'DELETE'
  })
  return res
}

export function show_qrcode(url){
  const res = request({
    url: '/wechat/api/qrcode',
    method: 'GET',
    responseType: 'arraybuffer', 
    params:{url: url}
  })
  return res
}

export function get_company_info(openid){
  const res = request({
    url: `/service/company/${openid}`,
    method: 'GET',
  })
  return res
}

export function adviser_contract_add(contractInfo){
  const res = request({
    url: '/service/adviser/',
    method: 'POST',
    data: contractInfo
  })
  return res
}