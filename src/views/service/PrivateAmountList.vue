<template>
  <div id="amount">
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-form @submit="onSubmit">
      <van-field name="money" :rules="[{ required: true, message: '请选择金额' }]">
        <template #input>
          <van-radio-group v-model="money" direction="vertical">
            <van-radio v-for="amount in amounts" :key="amount.id" :name="amount.money">
              {{amount.money}}
              <span style="float:right">{{amount.desc}}</span>
            </van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { private_amount_list, private_contract_update } from '@/api/service'

export default {
  name:"PrivateAmount",
  components: {
    NavBar,
  },
  props: {
    contract_id: String
  },
  data() {
    return {
      title: this.$route.meta.title,
      money: 0,
      amounts: []
    };
  },

  computed: {},
  methods: {
    onSubmit(values) {
      values["id"] = this.contract_id
      console.log(values)
      this.updatePrivateContractAmount(values)
    },
    updatePrivateContractAmount(contractInfo){
      private_contract_update(contractInfo).then(res=>{
        console.log(res);
        if(res.data.id){
          // this.$router.replace(`/adviser_confirm/${res.data.id}`)
          this.$router.replace(`/private_contract_confirm/${res.data.id}`)
        }
      }).catch(error=>{
        console.log(error);
        
      })
    },
    getPrivateAmountList(){
      private_amount_list().then(res=>{
        console.log(res);
        this.amounts = res.data
        
      }).catch(error=>{
        console.log(error);
        
      })
    }
  },
  created() {
    this.getPrivateAmountList()
  },
};
</script>

<style  scoped>

  .van-radio{
    padding:10px 0px;
  }
  .van-radio-group{
    width: 100%;
  }

</style>