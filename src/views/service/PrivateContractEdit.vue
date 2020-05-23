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

    <van-calendar v-model="showCalendar" @confirm="onConfirm" :min-date="minDate" :max-date="maxDate" type="range" />

  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import { office } from '@/api/office'
import { private_contract_add } from '@/api/service'

export default {
  name: "PrivateContractEdit",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      showCalendar: false,
      minDate: new Date(),
      maxDate: this.nextYear(),
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
      this.addPrivateContractInfo(values)
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
          console.log(res)
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
    }
  },
  created() {
    this.getOfficeInfo()
  },
  mounted() {}
};
</script>

<style  scoped>
</style>