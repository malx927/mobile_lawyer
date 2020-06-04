<template>
  <div>
    <nav-bar :title="title" :isShow="false"></nav-bar>
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
      <go-home-button></go-home-button>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import GoHomeButton from '@/components/GoHomeButton'
import logo from '@/assets/images/logo.png'
import { agency_company_confirm }  from '@/api/service' 

export default {
  components: {
    NavBar,
    GoHomeButton
  },
  props: {
    company_id: String
  },
  data() {
    return {
      title: this.$route.meta.title,
      logo: logo,
      isShow: false,
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
    onClick(){
      this.$router.go(-1)
    },
    AgencyConfirm(company_id){
      agency_company_confirm(company_id).then(res=>{
        console.log(res);
        this.name = res.data.name
        this.telephone = res.data.telephone
        this.credit_code = res.data.credit_code
        this.legal_person = res.data.legal_person
        this.address = res.data.address
        this.contact_person = res.data.contact_person
        this.contact_tel = res.data.contact_tel
        this.is_agency = res.data.is_agency
        this.$notify({ type: 'success', message: '授权成功' })
      }).catch(error=>{
        console.log(error);
        this.$notify({ type: 'warning', message: '授权失败' })
      })
    }

  },
  created() {
    this.AgencyConfirm(this.company_id)
  },

};
</script>

<style  scoped>

</style>