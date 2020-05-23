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
    config.headers.common["openid"] = localStorage.getItem('openid')
    return config
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    return error
    // if (error.response) {
    //   console.log("a:", error.response.data);
    //   console.log("b:", error.response.status);
    //   console.log("c:", error.response.headers);
    // } else if (error.request) {
    //   console.log(error.request);
    // } else {
    //   console.log('Error', error.message);
    // }
    // console.log(error.config);
  })

 export default instance