<template>
  <div id="NavBar">
    <van-nav-bar :title="title" :fixed="true" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-button  type="warning" size="small" >购买服务</van-button>
      </template>
    </van-nav-bar> 
  </div>
</template>

<script>
export default {
  props: ["title"],
  computed: {},
  methods: {
     onClickLeft(){
      this.$router.go(-1)
    },
  },
  created() {},
  mounted() {}
};
</script>

<style  scoped>

</style>