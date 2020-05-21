<template>
  <div></div>
</template>
<script>
import { get_auth_code, get_auth_openid } from '@/api/utils'
// import { get_auth_code } from '@/api/utils'
export default {
  methods: {
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) 
        return unescape(r[2]); 
      return null;
    } 
  },
  created() {
    const code = this.getQueryString("code")
    if(!code){
      get_auth_code({url: location.href}).then(res=>{
        if(res.status_code === 200){
          console.log(res.authorize_url)
          window.location.href = res.authorize_url
        }
      })
    }else{
      get_auth_openid({code: code}).then(res=>{
        if(res.status_code === 200){
          if(res.openid)
            localStorage.setItem("openid", res.openid)

          const to_url = localStorage.getItem("to_url")
          this.$router.push(to_url)
        }else{
          this.$router.push('/')
        }
      })
    }
  },
};
</script>
