import axios from 'axios'

  console.log('abc:', process.env.VUE_APP_API_URL);
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://wx.xzls.vip/api',
    baseURL: process.env.VUE_APP_API_URL,
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
  instance.interceptors.response.use(response => {
    console.log(response, 'interceptors')
    return response
  }
  // , error => {
  //   // return error
  //     if (error.response) {
  //       console.log("a:", error.response.data);
  //       console.log("b:", error.response.status);
  //       console.log("c:", error.response.headers);
  //     } else if (error.request) {
  //       console.log(error.request);
  //     } else {
  //       console.log('Error', error.message);
  //     }
  //     console.log(error.config);
  //   }
  )

 export default instance