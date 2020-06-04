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
      <van-field
        v-model="agency"
        name="agency"
        label="授权状态"
        placeholder="授权状态"
        readonly
      />
      <div style="margin: 16px;">
        <van-button v-if="is_agency===0" round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <go-home-button v-if="is_agency===1"></go-home-button>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import GoHomeButton from '@/components/GoHomeButton'
import { get_company_info, agency_company_add, agency_company_update } from '@/api/service'

export default {
  components: {
    NavBar,
    GoHomeButton,
  },
  props: {
    
  },
  data() {
    return {
      title: this.$route.meta.title || "",
      id: 0,
      openid: "",
      name: "",
      telephone: "",
      credit_code: "",
      legal_person: "",
      address: "",
      contact_person: "",
      contact_tel: "",
      is_agency: 0,
    };
  },
  computed:{
    agency(){
      if(this.is_agency === 1){
        return '已经授权'
      }else{
        return '未授权'
      }
    }
  },
  methods: {
    onSubmit(values) {
      const openid = localStorage.getItem("openid")
           
      values["openid"] = openid

      console.log("onSubmit:", values)
      if(this.id===0){
        this.addAgencyContractInfo(values)   //增加
      }else{
        values["id"] = this.id
        this.updateAgencyContractInfo(values)
      }
    },

    addAgencyContractInfo(contractInfo){
      agency_company_add(contractInfo).then(res=>{
        console.log("addAgencyContractInfo:", res)
        if(res.data.id){
          this.$router.push(`/agency_confirm/${res.data.id}`)
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

    updateAgencyContractInfo(contractInfo){
        agency_company_update(contractInfo).then(res=>{
          console.log('updateAgencyContractInfo', res)
          if(res.data.id){
            this.$router.push(`/agency_confirm/${res.data.id}`)
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

    getAgencyCompanyInfo(){
      const openid = localStorage.getItem('openid')
      if(openid){
        get_company_info(openid).then(res => {
          console.log("getAgencyCompanyInfo:",res)
          this.id = res.data.id
          this.name = res.data.name
          this.telephone = res.data.telephone
          this.credit_code = res.data.credit_code
          this.legal_person = res.data.legal_person
          this.address = res.data.address
          this.contact_person = res.data.contact_person
          this.contact_tel = res.data.contact_tel
          this.is_agency = res.data.is_agency
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
    this.getAgencyCompanyInfo()
  },

};
</script>

<style  scoped>

</style>