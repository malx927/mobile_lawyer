<template>
  <div v-if="isShow" id="contract">
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-cell-group :border="false" >
      <van-cell :value="contract.office_name" style="margin-top:10px;">
        <template #icon >
          <img :src="logo" class="img">
        </template>
      </van-cell>
      <!-- <van-divider /> -->
      <van-cell :title="'合同编号:'+ contract.show_code" :border="false" style="text-align:right;padding-right:1.0rem;font-weight:BOLD;"/>
      <van-cell title="私人律师合同书" :border="false" style="text-align:center;font-size:42px;font-weight:BOLD;margin-top:6rem;line-height:30px;"/>
      <van-cell :title="contract.office_name" :border="false" style="text-align:center;font-size:24px;font-weight:BOLD;margin-top:14rem;"/>
      <van-cell :title="'地址:' + contract.office_address" :border="false" style="text-align:center;font-size:16px;font-weight:BOLD;"/>
      <van-cell :title="`联系人: ${contract.office_man}   电话: ${contract.office_man_tel}`" :border="false" style="text-align:center;font-size:16px;font-weight:BOLD;"/>

      <van-divider style="margin-bottom:30px;margin-top:30px;"/>
      <van-cell :border="false" style="font-size:14px;margin-top:50px;">
        <template #title>
          <span>甲方: {{contract.name}}</span>
          <span style="padding-left:1.8rem;">身份证: {{contract.id_card}}</span>
        </template>
      </van-cell>
       <van-cell :title="`乙方：${contract.office_name}`"  style="font-size:14px;"/>
       <van-cell  style="font-size:14px;text-indent:2em;line-height:30px;" title="根据《中华人民共和国律师法》、《合同法》的相关规定，就甲方聘请乙方律师事务所为常年私人律师事宜，经双方协商达成一致意见，订立本合同。" :border="false"/>
        <van-cell title="一、乙方接受甲方聘请，担任甲方常年私人律师。"  style="font-size:14px;"/>
        
        <van-cell title="二、私人律师工作职责范围"  style="font-size:14px;"/>
        <van-cell title="1、解答法律咨询，为甲方决策提供法律意见。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="2、协助甲方解决个人法律问题，调解和谈判（限在本所内）。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="3、代书法律文书（合同书、起诉状、答辩状、申请书）。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>

        <van-cell title="三、工作方式"  style="font-size:14px;"/>
        <van-cell title="乙方律师事务所安排律师与甲方保持经常性联系，乙方有事可随时与私人律师联系。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>

        <van-cell title="四、费用及支付办法" style="font-size:14px;"/>
        <van-cell title="1、私人律师从事本协议第二条服务内容费用为365元/年。" style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="2、代理甲方诉讼、仲裁、执行案件等相关法律事务根据诉讼标的额另行收费（收费参照辽宁省律师协会法律服务收费标准）。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="3、乙方律师以甲方代理人身份在外市、县参与工作和诉讼、仲裁、调解等相关服务所发生的交通费、住宿费、餐费由甲方实报实销。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="五、本合同经双方签字（盖章）后生效，合同生效后双方应严格遵守，履行过程中发生纠纷由双方协商解决，协商不成向葫芦岛仲裁委员会提起仲裁。"  style="font-size:14px;line-height:30px;"/>
        <van-cell :title="`六、本合同有效期自${contract.fmt_start_date}起至${contract.fmt_end_date}止。`"  style="font-size:14px;"/>
        <van-cell title="七、本合同正本一式二份，双方各执一份，具有同等法律效力。"  style="font-size:14px;"/>
        <van-cell title=""  style="font-size:14px;height:50px;"/>
        <van-cell  style="font-size:14px;margin-top:0px;">
          <template #title>
            <span>甲方: {{contract.name}}</span>
            <span style="padding-left:1.8rem;">乙方：{{contract.office_name}}</span>
          </template>
        </van-cell>
        <van-cell  style="font-size:14px;">
          <template #title>
            <span>电话号码：{{contract.telephone}}</span>
            <span style="padding-left:1.0rem;">电话号码：{{contract.office_tel}}</span>
          </template>
        </van-cell>
        <van-cell :title="`签订日期：${contract.fmt_start_date}`"  style="font-size:14px;margin-top:20px;text-align:right;padding-right:20px;margin-bottom:30px;"/>
    </van-cell-group>
    <div style="margin:16px;">
      <van-button round block type="info" :loading="isLoading" loading-text="处理中..." @click="onConfirm" v-if="!contract.is_success">合同确认</van-button>
    </div>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import logo from '@/assets/images/logo.png'
import { private_contract_info, private_contract_confirm } from '@/api/service'

export default {
  components: {
    NavBar
  },
  props: {
    contract_id: String
  },
  data() {
    return {
      title:this.$route.meta.title,
      logo: logo,
      isShow: false,
      isLoading: false,
      contract:{
        id: 0,
        name: "",
        telephone: "",
        id_card: "",
        office_name: "",
        office_tel: "",
        office_man: "",
        office_man_tel: "",
        office_address: "",
        start_date: "",
        fmt_start_date: "",
        end_date: "",
        fmt_end_date: "",
        is_success: false,
        show_code: "",
      }
    };
  },

  methods: {
    onConfirm(){
      this.isLoading = true
      const info = {
          id: this.contract.id,
          is_success: true,
          start_date: this.contract.start_date,
          end_date: this.contract.end_date,
        }
      console.log(info)
      this.ConfirmPrivateContractInfo(info)

    },
    nextYear(){
      let date = new Date()
      date.setFullYear(date.getFullYear() + 1)
      date.setDate(date.getDate()-1)
      return date
    },
    formatDate(date) {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    },
    getPrivateContractInfo(){
      const c_id = this.contract_id   // 合同ID
      private_contract_info(c_id).then(res=>{
        console.log(res)
        const data = res.data
        if(data.office_openid == null || data.office_man == null)
        {
          this.$router.push('/error')
        }else{
          this.contract.id = data.id
          this.contract.name = data.name
          this.contract.telephone = data.telephone
          this.contract.id_card = data.id_card
          this.contract.office_name = data.office_name
          this.contract.office_tel = data.office_tel
          this.contract.office_man = data.office_man
          this.contract.office_man_tel = data.office_man_tel
          this.contract.office_address = data.office_address
          if(data.start_date != null){
            this.contract.fmt_start_date = this.$moment(new Date(data.start_date)).format("YYYY年MM月DD日")
            this.contract.start_date = data.start_date
          }
          else{
            this.contract.fmt_start_date = this.$moment(new Date()).format("YYYY年MM月DD日")
            this.contract.start_date = this.$moment(new Date()).format("YYYY-MM-DD")
          }
          if(data.end_date != null){
            this.contract.fmt_end_date = this.$moment(new Date(data.end_date)).format("YYYY年MM月DD日")
            this.contract.end_date = data.end_date
          }
          else{
            this.contract.fmt_end_date = this.$moment(this.nextYear()).format("YYYY年MM月DD日")
            this.contract.end_date = this.$moment(this.nextYear()).format("YYYY-MM-DD")
          }
          console.log(this.contract.end_date)
          this.contract.is_success = data.is_success
          this.contract.show_code = data.show_code
          this.isShow = true  //显示
        }
      }).catch(error=>{
          if (error.response) {
            console.log("a:", error.response.data);
            console.log("b:", error.response.status);
            console.log("c:", error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
      })
    },
    ConfirmPrivateContractInfo(c_info){
      private_contract_confirm(c_info).then(res=>{
        console.log(res)
        const data = res.data
        this.is_success = data.is_success
        if(this.is_success){
          this.$toast.success('合同确认成功')
          this.$router.push('/private')
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  created() {
    this.getPrivateContractInfo()
  },
  mounted() {}
};
</script>

<style  scoped>
  #contract{
    font-family: SimSun!important;
  }
  .van-cell{
    padding: 8px 16px;
  }
  
  .img{
    width:1.5rem;
    height:1.5rem;
    vertical-align: middle;
    line-height: inherit;
  }
</style>