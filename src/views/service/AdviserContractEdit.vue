<template>
  <div>
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="name"
        label="公司名称"
        placeholder="公司名称"
        :rules="[{ required: true, message: '请填写公司名称' }]"
      />
      <van-field
        v-model="legal_person"
        name="legal_person"
        label="法定代表人"
        placeholder="法定代表人"
        :rules="[{ required: true, message: '请填写法人' }]"
      />
      <van-field
        v-model="telephone"
        name="telephone"
        type="tel"
        label="联系电话"
        placeholder="联系电话"
        :rules="[{ required: true, message: '请填写联系电话' }]"
      />
      <van-field
        v-model="credit_code"
        name="credit_code"
        label="信用代码"
        placeholder="信用代码"
        :rules="[{ required: true, message: '请填写信用代码' }]"
      />
      <van-field
        v-model="address"
        name="address"
        label="公司地址"
        placeholder="公司地址"
        :rules="[{ required: true, message: '请填写公司地址' }]"
      />
      <van-field
        v-model="contact_person"
        name="contact_person"
        label="联系人"
        placeholder="联系人"
        :rules="[{ required: true, message: '请填写联系人' }]"
      />
      <van-field
        v-model="contact_tel"
        name="contact_tel"
        label="联系电话"
        placeholder="联系电话"
        :rules="[{ required: true, message: '请填写联系电话' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import { 
  adviser_contract_add,
  get_company_info 
  }
from '@/api/service'

export default {
  name: "AdviserContractEdit",
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
      credit_code: "",
      legal_person: "",
      address: "",
      contact_person: "",
      contact_tel: "",
    };
  },
  computed: {
    
  },
  methods: {
    onSubmit(values) {
      const openid = localStorage.getItem("openid")
           
      values["openid"] = openid

      console.log(values)

      this.addAdviserContractInfo(values)   //增加
      
    },
    addAdviserContractInfo(contractInfo){
        adviser_contract_add(contractInfo).then(res=>{
          console.log(res)
          if(res.data.id){
            this.$router.replace(`/adviser_confirm/${res.data.id}`)
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
    getCompanyInfo(){
      const openid = localStorage.getItem('openid')
      if(openid){
        get_company_info(openid).then(res => {
          console.log(res)
          this.name = res.data.name
          this.telephone = res.data.telephone
          this.credit_code = res.data.credit_code
          this.legal_person = res.data.legal_person
          this.address = res.data.address
          this.contact_person = res.data.contact_person
          this.contact_tel = res.data.contact_tel
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
    this.getCompanyInfo()
  },
  mounted() {}
};
</script>

<style  scoped>
</style>