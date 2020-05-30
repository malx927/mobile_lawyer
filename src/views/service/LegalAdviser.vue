<template>
  <div>
    <nav-bar :title="title" @click-right="onClick"></nav-bar>
    <van-panel v-for="(contract, index) in contracts" :key="index" :title="'合同编号: '+ contract.show_code" status="状态">
      <template #header>
        <div class="van-cell van-panel__header">
          <div class="van-cell__title"><span>合同编号: {{contract.show_code}}</span></div>
          <div class="van-cell__value van-panel__header-value " :class="{'status': contract.is_success}">
            <span v-if="contract.is_success"><van-icon name="checked" /></span>
            <span v-else><van-icon name="question" /></span>
            </div>
        </div>
      </template>
      <p class="van-cell__label">{{contract.name}}【{{contract.credit_code}}】</p>
      <p class="van-cell__label" v-if="contract.is_success" >有效期：{{contract.start_date}} 至 {{contract.end_date}}</p>
      <p class="van-cell__label" v-if="contract.is_success" >联系人：{{contract.office_man}}  <span style="padding-left:10px;">电话：{{contract.office_man_tel}}</span></p>
      <template #footer>
        <span style="float:left;">{{contract.office_name}}</span>
        <van-button size="mini" type="danger" v-if="!contract.is_success" @click="onContractDelete(contract)">删除</van-button>
        <van-button size="mini" type="primary" v-if="contract.is_success" @click="onContractDetail(contract.id)">详情</van-button>
      </template>
    </van-panel>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { adviser_contract_list, adviser_contract_delete } from '@/api/service'

export default {
  name:"adviser",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      contracts:[],
    };
  },

  methods: {
    onClick(){
      this.$router.push('/adviser_add')
    },
    removeContract(contract){
      for(let index in this.contracts){
        if(this.contracts[index] == contract){
          if(index == 0){
            this.contracts.shift(); 
            return;
          }
          else if(index == this.contracts.length){
            this.contracts.pop(); 
            return;
          }
          else{
            this.contracts.splice(index, 1); 
            return;
          }
        }
      }
    },
    getAdviserContractList(){
      adviser_contract_list().then(res => {
        this.contracts = res.data
        if(this.contracts.length === 0){
          this.$router.replace('/adviser_contract_add')  
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
    onContractDelete(contract){
      console.log(contract)
      adviser_contract_delete(contract.id).then(res=>{
        if(res.status == 204){
          this.removeContract(contract)
        }

      }).catch(error=>{
        console.log(error)
      })
    },
  },
  created() {
    this.getAdviserContractList()
  },
};
</script>

<style  scoped>
.van-cell__title{
  min-width: 70%;
}
.van-panel__content {
  padding: 10px 20px 0px 20px;
  font-size: 14px;
}
.van-panel__footer {
  text-align: right;
  padding-left: 20px;
  color: #5f6063;
  font-size: 14px;
}
.van-cell__label {
  font-size: 14px;
}
.van-panel__header-value{
  font-size:1.4rem;
}
.status{
  color: #07c160;
}
</style>