<template>
  <div>
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-cell title="合同确认" value="出示给业务人员扫描确认"></van-cell>
    <img :src="img_url" style="width:100%;height:20rem;"/>
    <h3 style="text-align:center;">合同确认二维码</h3>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { show_qrcode }  from '@/api/service' 
export default {
  name: "private_contract_confirm",
  components:{
    NavBar,
  },
  props: {
    contract_id: String
  },
  data() {
    return {
      title: this.$route.meta.title,
      img_url: "",
    };
  },
  methods: {
    getQRCode(){
        const url = 'http://' + window.location.host + '/#/private_contract_detail/' + this.contract_id
        console.log(url)

        show_qrcode(url).then(res=>{
          return 'data:image/png;base64,' + btoa( new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        }).then(data=>{
          this.img_url = data
        })
    }
  },
  created() {
    
    this.getQRCode()
  },
  mounted() {}
};
</script>

<style  scoped>

</style>