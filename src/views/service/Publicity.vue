<template>
  <div>
    <nav-bar :title="title"></nav-bar>
    <van-tabs type="card" color="#07c160">
      <van-tab title="私人律师" >
        <div class="pub-tab">
          <img :src="img_private_url" style="width:100%;height:22rem;"/>
          <h3 style="text-align:center;">扫描完成私人律师合同</h3>
        </div>
      </van-tab>
      <van-tab title="法律顾问">
        <div class="pub-tab">
          <img :src="img_adviser_url" style="width:100%;height:22rem;"/>
          <h3 style="text-align:center;">扫描完成法律顾问合同</h3>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import { show_qrcode }  from '@/api/service' 
export default {
  name:"publicity",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      img_private_url: "",
      img_adviser_url: "",
      openid: localStorage.getItem("openid"),
    };
  },
  computed: {},
  methods: {
    getPrivateQRCode(){
        const url = 'http://' + window.location.host + '/#/private_contract_add/?openid=' + this.openid
        console.log(url)

        show_qrcode(url).then(res=>{
          return 'data:image/png;base64,' + btoa( new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        }).then(data=>{
          this.img_private_url = data
        })
    },
    getAdviserQRCode(){
        const url = 'http://' + window.location.host + '/#/adviser_add/?openid=' + this.openid
        console.log(url)

        show_qrcode(url).then(res=>{
          return 'data:image/png;base64,' + btoa( new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        }).then(data=>{
          this.img_adviser_url = data
        })
    },
  },
  created() {
    this.getPrivateQRCode()
    this.getAdviserQRCode()

  },

};
</script>

<style  scoped>
.van-tabs{
  margin-top:15px;
}
.pub-tab{
  padding: 10px 10px;
}
</style>