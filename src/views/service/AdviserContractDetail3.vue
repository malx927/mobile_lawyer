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
      <van-cell title="法律顾问合同书" :border="false" style="text-align:center;font-size:42px;font-weight:BOLD;margin-top:3rem;line-height:30px;"/>
      <van-cell title="（三方企业版）" :border="false" style="text-align:center;font-size:24px;font-weight:BOLD;margin-top:0rem;line-height:30px;"/>
      <van-cell :title="contract.office_name" :border="false" style="text-align:center;font-size:24px;font-weight:BOLD;margin-top:14rem;"/>
      <van-cell :title="'地址:' + contract.office_address" :border="false" style="text-align:center;font-size:16px;font-weight:BOLD;"/>
      <van-cell :title="`联系电话: ${contract.office_tel}`" :border="false" style="text-align:center;font-size:16px;font-weight:BOLD;"/>

      <van-divider style="margin-bottom:30px;margin-top:30px;"/>
      <van-cell title="法律顾问合同书" :border="false" style="text-align:center;font-size:24px;font-weight:BOLD;line-height:30px;"/>

      <van-cell :title="`甲方：${contract.name}`"  style="font-size:14px;"/>
       <van-cell :title="`乙方：${contract.agency_name}`"  style="font-size:14px;"/>
       <van-cell :title="`丙方：${contract.office_name}`"  style="font-size:14px;"/>
       <van-cell  style="font-size:14px;text-indent:2em;line-height:30px;" title="根据《中华人民共和国律师法》、《合同法》的相关规定，甲、乙、丙三方就聘请丙方辽宁靳世祥律师事务所为常年法律顾问事宜，经三方协商一致签署本合同，以兹共同遵守。" :border="false"/>
        <van-cell title="一、甲方与乙方为战略合作伙伴关系，乙方为甲方提供优质的产品、服务同时愿意出资为甲方聘请丙方作为甲方的常年法律顾问。"  style="font-size:14px;"/>
        
        <van-cell title="二、甲方愿意聘请丙方为其企业的常年法律顾问，丙方接受甲方聘请，担任甲方企业常年法律顾问。"  style="font-size:14px;"/>
        <van-cell title="三、法律顾问工作职责范围"  style="font-size:14px;"/>
        <van-cell title="1、解答法律咨询，为甲方决策提供法律意见和法律帮助。"  style="font-size:14px;text-indent:2em;line-height:25px;"/>
        <van-cell title="2、甲方企业重要规章制度的法律审议。"  style="font-size:14px;text-indent:2em;line-height:25px;"/>
        <van-cell title="3、协助甲方建立健全管理制度。"  style="font-size:14px;text-indent:2em;line-height:25px;"/>
        <van-cell title="4、草拟、审查及修改企业法律文书（合同、协议、章程、声明、决定等）。"  style="font-size:14px;text-indent:2em;line-height:25px;"/>

        <van-cell title="四、法律顾问工作方式"  style="font-size:14px;"/>
        <van-cell title="丙方律师事务所安排律师与甲方保持经常性联系。甲方企业有事可随时与顾问律师联系，如遇重大事项，顾问律师可以现场办公处理。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>

        <van-cell title="五、法律顾问费用及支付办法" style="font-size:14px;"/>
        <van-cell :title="`1、顾问律师从事本合同第三条约定服务内容费用为 ${contract.money} 元/年，该费用由乙方支付，不需甲方承担。`" style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="2、丙方律师代理甲方诉讼、仲裁、执行等案件相关法律事务根据诉讼标的额另行收费（收费参照辽宁省律师协会法律服务收费标准）。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="3、丙方律师以甲方代理人身份在外省、市、区、县参与工作和诉讼、仲裁、调解等相关服务所发生的交通费、住宿费、餐费由甲方实报实销。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="六、其他约定" style="font-size:14px;"/>
        <van-cell title="1、甲方应为丙方律师执行职务创造条件，提供交通工具及必要的办公用品，甲方应负责提供帮助以保证法律顾问工作的顺利开展，因甲方及工作人员的原因未能及时完成相关工作由甲方自行承担责任，与丙方无关。"  style="font-size:14px;text-indent:2em;line-height:30px;"/>
        <van-cell title="2、丙方律师应谨慎为甲方提供法律服务，并积极维护甲方企业声誉，保守企业商业秘密。"  style="font-size:14px;line-height:30px;"/>
        <van-cell title="3、丙方律师应坚持忠于事实，忠于法律，忠于聘请方的诚信原则，积极、勤奋、认真、细致地开展法律顾问工作。"  style="font-size:14px;line-height:30px;"/>
        <van-cell title="4、本合同经三方签字（盖章）后生效，合同生效后三方应严格遵守，履行过程中发生纠纷由三方协商解决，协商不成向葫芦岛仲裁委员会提起仲裁。"  style="font-size:14px;line-height:30px;"/>
        <van-cell :title="`5、本合同有效期自${contract.fmt_start_date}起至${contract.fmt_end_date}止。`"  style="font-size:14px;"/>
        <van-cell title="七、本合同正本一式三份，三方各执一份，具有同等法律效力。"  style="font-size:14px;"/>
        <van-cell title=""  style="font-size:14px;height:30px;"/>

        <van-cell :title="`甲方(盖章)：${contract.name}`"  style="font-size:14px;"/>
        <van-cell :title="`乙方(盖章)：${contract.agency_name}`"  style="font-size:14px;"/>
        <van-cell :title="`丙方(盖章)：${contract.office_name}`"  style="font-size:14px;"/>
               
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
import { adviser_info, adviser_confirm } from '@/api/service'

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
        agency_name: "",
        telephone: "",
        credit_code: "",
        address:"",
        legal_person: "",
        contact_person: "",
        contact_tel: "",
        office_name: "",
        office_tel: "",
        office_man: "",
        office_man_tel: "",
        office_address: "",
        office_code: "",
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
      this.ConfirmAdviserContractInfo(info)

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
    getAdviserContractInfo(){
      const c_id = this.contract_id   // 合同ID
      adviser_info(c_id).then(res=>{
        console.log(res)
        const data = res.data
        if(data.office_openid == null || data.office_man == null)
        {
          this.$router.push('/error')
        }else{
          this.contract.id = data.id
          this.contract.name = data.name
          this.contract.telephone = data.telephone
          this.contract.credit_code = data.credit_code
          this.contract.legal_person = data.legal_person
          this.contract.contact_person = data.contact_person
          this.contract.contact_tel = data.contact_tel
          this.contract.address = data.address

          this.contract.agency_name = data.agency_name

          this.contract.office_name = data.office_name
          this.contract.office_tel = data.office_tel
          this.contract.office_man = data.office_man
          this.contract.office_man_tel = data.office_man_tel
          this.contract.office_address = data.office_address
          this.contract.office_code = data.office_code

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
        console.log(error)
      })
    },
    ConfirmAdviserContractInfo(c_info){
      adviser_confirm(c_info).then(res=>{
        console.log(res)
        const data = res.data
        this.is_success = data.is_success
        if(this.is_success){
          this.$toast.success('合同确认成功')
          this.$router.push('/adviser')
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  created() {
    this.getAdviserContractInfo()
  },
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