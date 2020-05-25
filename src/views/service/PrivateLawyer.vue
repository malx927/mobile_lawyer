<template>
  <div>
    <nav-bar :title="title" @click-right="onClick"></nav-bar>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
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
      <p class="van-cell__label">{{contract.name}}【{{contract.id_card}}】</p>
      <p class="van-cell__label">有效期：{{contract.start_date}} 至 {{contract.end_date}}</p>
      <template #footer>
        <span style="float:left;">{{contract.office_name}}</span>
        <van-button size="small" type="primary" @click="onContractDetail(contract.id, contract.is_success)">合同详情</van-button>
      </template>
    </van-panel>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import { private_contract_list } from '@/api/service'

export default {
  name: "private",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      code: "20170808",
      name: "",
      contracts:[],
    };
  },
  computed: {},
  methods: {
    onClick() {
      this.$router.push("/private_contract_add");
    },
    onContractDetail(contract_id, is_success){
        console.log(contract_id, is_success)
        if(!is_success){
          this.$router.push('/private_contract_update/' + contract_id + '/')  //修改
        }else{
            //empty
        }
    },
    getPrivateContractList(){
      private_contract_list().then(res => {
          console.log(res)
          this.contracts = res
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
    this.getPrivateContractList()
  },
  mounted() {}
};
</script>

<style scoped>
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