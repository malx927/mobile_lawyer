<template>
  <div>
     <van-cell title="用户信息完善" size="large" />
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
      
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { update_user } from '@/api/role'

  export default {
    data(){
      return {
          title: this.$route.meta.title,
          name: "",
          telephone: "",
      };
    },
    methods:{
      onSubmit(values) {
        const openid = localStorage.getItem("openid")
        console.log(openid)
        
        values["openid"] = openid
        console.log(values);

        this.UpdateUserInfo(values)   //修改
      },
      UpdateUserInfo(userInfo){
          update_user(userInfo).then(res=>{
            console.log(res);
            if(res.data.name.length > 0 && res.data.telephone.length > 0){
              this.$router.push("/")
            }
          }).catch(error=>{
            console.log(error);
            
          })
      }
    }
  }
</script>

<style scoped>

</style>
