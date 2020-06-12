<template>
  <div>
  <div style="margin: 16px;">
      <van-button round block type="info" @click="goBack()">返回</van-button>
   </div>
  </div>
</template>

<script>
export default {
  name: "GoHome",
  methods:{
    goBack(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
