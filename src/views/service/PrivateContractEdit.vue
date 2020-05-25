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
      <van-field
        v-model="client"
        name="client"
        label="委托人"
        placeholder="委托人"
        :rules="[{ required: true, message: '请填写委托人' }]"
      />
      <van-field
        readonly
        clickable
        name="contract_date"
        :value="contract_date"
        label="合同时间"
        placeholder="点击选择合同时间"
        @click="showCalendar = true"
        :rules="[{ required: true, message: '请选择合同时间' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <van-calendar v-model="showCalendar"  @confirm="onConfirm" :min-date="minDate" :max-date="maxDate" type="range" />

  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import { office } from '@/api/office'
import { private_contract_add, get_person_info, private_contract_info, private_contract_update } from '@/api/service'

export default {
  name: "PrivateContractEdit",
  components: {
    NavBar
  },
  props: {
    contract_id: String
  },
  data() {
    return {
      title: this.$route.meta.title,
      showCalendar: false,
      minDate: new Date(),
      maxDate: this.nextYear(),
      // defDate: [],
      openid: "",
      name: "",
      telephone: "",
      id_card: "",
      client: "",
      contract_date: "",
      start_date: "",
      end_date: "",
      office_name: "",
      office_man: "",
      office_man_tel: "",
      office_address: "",
    };
  },
  computed: {
    
  },
  methods: {
    nextYear(){
      let date = new Date()
      date.setFullYear(date.getFullYear() + 1)
      return date
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
    onConfirm(date){
      const [start, end] = date
      this.start_date = start
      this.end_date = end
      this.showCalendar = false
      this.contract_date = `${this.formatDate(start)} - ${this.formatDate(end)}`
    },
    onSubmit(values) {
      const openid = localStorage.getItem("openid")
      console.log(openid)
      
      values["openid"] = openid
      values["start_date"] = this.formatDate(this.start_date)
      values["end_date"] = this.formatDate(this.end_date)
      values["office_name"] = this.office_name
      values["office_man"] = this.office_man
      values["office_man_tel"] = this.office_man_tel
      values["office_address"] = this.office_address
      delete values["contract_date"]

      if(!this.contract_id){
        this.addPrivateContractInfo(values)   //增加
      }else{
        values["id"] = this.contract_id
        console.log("000000000000", values) //修改
        this.updatePrivateContractInfo(values)
      }
      
    },
    // 获取律师信息
    getOfficeInfo(){
      office().then(res => {
        console.log(res)
        if(res && res.length > 0){
          this.office_name = res[0].name
          this.office_man = res[0].legal_person
          this.office_man_tel = res[0].telephone
          this.office_address = res[0].address
        }
      })
    },
    addPrivateContractInfo(contractInfo){
      console.log(contractInfo)
        private_contract_add(contractInfo).then(res=>{
          if(res.id){
            this.$router.push(`/private_contract_detail/${res.id}`)
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
          this.client = res.client
        }).catch(error => {
          console.log(error)
        })
      }
    },
    getPrivateContractInfo(contract_id){
        private_contract_info(contract_id).then(res=>{
          console.log(res, "getPrivateContractInfo")
          this.openid = res.openid
          this.name = res.name
          this.telephone = res.telephone
          this.id_card = res.id_card
          this.client = res.client
          this.start_date =  res.start_date,
          this.end_date= res.end_date
          this.office_name = res.office_name
          this.office_man = res.office_man
          this.office_address = res.office_address
          this.office_man_tel = res.office_man_tel
          // this.defDate = [new Date(Date.parse(res.start_date.replace(/-/g, "/"))), new Date(Date.parse(res.end_date.replace(/-/g, "/")))]
          // this.contract_date = `${this.start_date} - ${this.end_date}`
        }).catch(error=>{
          console.log(error)
        })
    }
  },
  created() {
    if(this.contract_id > 0){
      this.getPrivateContractInfo(this.contract_id)
    }else{
      this.getPersonInfo()
      this.getOfficeInfo()
    }
 
    

  },
  mounted() {}
};
</script>

<style  scoped>
</style>