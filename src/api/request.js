import axios from 'axios'

  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://mlx.wx.xzls.vip/api',
    withCredentials: true,
    timeout: 5000
  })
  //instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    console.log('000000000000000000000000')
    console.log(localStorage.getItem("openid"))
    config.headers.common["openid"] = localStorage.getItem('openid')
    console.log(config)
    return config
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  export default instance