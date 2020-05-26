<template>
  <div>
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="name"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="telephone"
        name="telephone"
        type="tel"
        label="电话"
        placeholder="电话"
        :rules="[{ required: true, message: '请填写电话' }]"
      />
      <van-field
        v-model="id_card"
        name="id_card"
        label="身份证"
        placeholder="身份证"
        :rules="[{ required: true, message: '请填写身份证' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import { office } from '@/api/office'
import { private_contract_add, get_person_info, private_contract_update } from '@/api/service'

export default {
  name: "PrivateContractEdit",
  components: {
    NavBar
  },
  props: {
    
  },
  data() {
    return {
      title: this.$route.meta.title,
      openid: "",
      name: "",
      telephone: "",
      id_card: "",
      office_name: "",
      office_address: "",
    };
  },
  computed: {
    
  },
  methods: {
    onSubmit(values) {
      const openid = localStorage.getItem("openid")
      console.log(openid)
      
      values["openid"] = openid
      values["office_name"] = this.office_name
      values["office_address"] = this.office_address

      this.addPrivateContractInfo(values)   //增加
      
    },
    // 获取律师信息
    getOfficeInfo(){
      office().then(res => {
        if(res && res.length > 0){
          this.office_name = res[0].name
          this.office_address = res[0].address
        }
      })
    },
    addPrivateContractInfo(contractInfo){
        private_contract_add(contractInfo).then(res=>{
          if(res.id){

            this.$router.replace(`/private_contract_confirm/${res.id}`)
          }
        }).catch(error => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
    },
    updatePrivateContractInfo(contractInfo){
      private_contract_update(contractInfo).then(res=>{
        if(res.id){
            this.$router.push(`/private_contract_detail/${res.id}`)
        }

      }).catch(error=>{
        if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
      })
    },
    getPersonInfo(){
      const openid = localStorage.getItem('openid')
      if(openid){
        get_person_info(openid).then(res => {
          this.name = res.name
          this.telephone = res.telephone
          this.id_card = res.id_card
        }).catch(error => {
            if (error.response) {
              console.log("b:", error.response.status);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
        })
      }
    },
  },
  created() {
    this.getPersonInfo()
    this.getOfficeInfo()
  },
  mounted() {}
};
</script>

<style  scoped>
</style>