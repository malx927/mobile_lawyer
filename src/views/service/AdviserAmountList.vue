<template>
  <div id="amount">
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-form @submit="onSubmit">
      <van-field name="money" :rules="[{ required: true, message: '请选择金额' }]">
        <template #input>
          <van-radio-group v-model="money" direction="vertical">
            <van-radio v-for="amount in amounts" :key="amount.id" :name="amount.money" :disabled="is_disabled(amount.category)">
              {{amount.money}}元/年
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
import { adviser_amount_list, adviser_amount_update } from '@/api/service'

export default {
  name:"AdviserAmount",
  components: {
    NavBar,
  },
  props: {
    contract_id: String
  },
  data() {
    return {
      title: this.$route.meta.title,
      category: this.$route.query.category,
      money: 0,
      amounts: []
    };
  },

  computed: {

  },
  methods: {
    is_disabled(cate){
      if(this.category != "1" ){
        return false
      }else if( this.category == "1"){
        if(cate === 1)
          return false
        else{
          return true
        }
      }
      return false
    },
    onSubmit(values) {
      // const openid = localStorage.getItem("openid")
      values["id"] = this.contract_id
      console.log(values)
      this.updateAdviserAmount(values)
    },
    updateAdviserAmount(contractInfo){
      adviser_amount_update(contractInfo).then(res=>{
        console.log(res);
        if(res.data.id){
          this.$router.replace(`/adviser_detail/${res.data.id}`)
        }
      }).catch(error=>{
        console.log(error);
        
      })
    },
    getAdviserAmountList(){
      adviser_amount_list().then(res=>{
        console.log(res);
        this.amounts = res.data
        
      }).catch(error=>{
        console.log(error);
        
      })
    }
  },
  created() {
    this.getAdviserAmountList()
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