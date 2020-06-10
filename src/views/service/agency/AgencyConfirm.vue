<template>
  <div>
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-cell title="代理授权确认" value="出示给第三方扫描确认"></van-cell>
    <img :src="img_url" style="width:100%;height:20rem;"/>
    <h3 style="text-align:center;">代理授权确认二维码</h3>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { show_qrcode }  from '@/api/service' 

export default {
  components: {
    NavBar,
  },
  props: {
    company_id: String
  },

  data() {
    return {
      title: this.$route.meta.title,
      img_url: "",
    };
  },

  methods: {
    getQRCode(){
      console.log(this.company_id)
        const url = 'http://' + window.location.host + '/#/agency_detail/' + this.company_id
        console.log(url)

        show_qrcode(url).then(res=>{
          return 'data:image/png;base64,' + btoa( new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        }).then(data=>{
          this.img_url = data
        })
    }
  },
  created() {
    this.getQRCode()
  },

};
</script>

<style  scoped>

</style>