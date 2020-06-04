import request from '@/api/request'

export function get_person_info(openid){
  const res = request({
    url: `/service/person/${openid}`,
    method: 'GET',
  })
  return res
}
// 私人律师增加
export function private_contract_add(contractInfo){
  const res = request({
    url: '/service/private/',
    method: 'POST',
    data: contractInfo
  })
  return res
}
// 私人律师更新
export function private_contract_update(contractInfo){
  const res = request({
    url: `/service/private/${contractInfo.id}/`,
    method: 'PUT',
    data: contractInfo
  })
  return res
}
// 私人律师确认
export function private_contract_confirm(contractInfo){
  const res = request({
    url: `/service/private/${contractInfo.id}/`,
    method: 'PATCH',
    data: contractInfo
  })
  return res
}
// 私人律师详情
export function private_contract_info(contract_id){
  const res = request({
    url: `/service/private/${contract_id}/`,
    method: 'GET',
  })
  return res
}
// 私人律师列表
export function private_contract_list(){
  const res = request({
    url: '/service/private/',
    method: 'GET'
  })
  return res
}
// 私人律师删除
export function private_contract_delete(contract_id){
  const res = request({
    url: `/service/private/${contract_id}/`,
    method: 'DELETE'
  })
  return res
}
// 显示二维码
export function show_qrcode(url){
  const res = request({
    url: '/wechat/api/qrcode',
    method: 'GET',
    responseType: 'arraybuffer', 
    params:{url: url}
  })
  return res
}
// 公司信息
export function get_company_info(openid){
  const res = request({
    url: `/service/company/${openid}`,
    method: 'GET',
  })
  return res
}
// 法律顾问增加
export function adviser_contract_add(contractInfo){
  const res = request({
    url: '/service/adviser/',
    method: 'POST',
    data: contractInfo
  })
  return res
}
// 法律顾问列表
export function adviser_contract_list(){
  const res = request({
    url: '/service/adviser/',
    method: 'GET'
  })
  return res
}
// 法律顾问删除
export function adviser_contract_delete(contract_id){
  const res = request({
    url: `/service/adviser/${contract_id}/`,
    method: 'DELETE'
  })
  return res
}

// 法律顾问详情
export function adviser_info(contract_id){
  const res = request({
    url: `/service/adviser/${contract_id}/`,
    method: 'GET',
  })
  return res
}

// 合同金额列表
export function adviser_amount_list(){
  const res = request({
    url: '/service/amount/',
    method: 'GET',
  })
  return res
}

// 法律顾问金额更新
export function adviser_amount_update(contractInfo){
  const res = request({
    url: `/service/adviser/${contractInfo.id}/`,
    method: 'PATCH',
    data: contractInfo
  })
  return res
}

// 法律顾问确认
export function adviser_confirm(contractInfo){
  const res = request({
    url: `/service/adviser/${contractInfo.id}/`,
    method: 'PATCH',
    data: contractInfo
  })
  return res
}

// 代理授权
export function agency_company_info(openid){
  const res = request({
    url: `/service/agency/${openid}/`,
    method: 'GET'
  })
  return res
}

// 代理授权增加
export function agency_company_add(companyInfo){
  const res = request({
    url: `/service/agency/`,
    method: 'POST',
    data: companyInfo
  })
  return res
}

// 代理授权修改
export function agency_company_update(companyInfo){
  const res = request({
    url: `/service/agency/${companyInfo.id}/`,
    method: 'PATCH',
    data: companyInfo
  })
  return res
}

// 代理授权修改
export function agency_company_confirm(company_id){
  const res = request({
    url: `/service/agency/${company_id}/`,
    method: 'GET',
  })
  return res
}
