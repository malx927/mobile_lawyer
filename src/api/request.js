import axios from 'axios'

  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8001/api',
    timeout: 5000
  })
  //instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    // config.headers.common["openid"] = window.localStorage.getItem('openid')
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