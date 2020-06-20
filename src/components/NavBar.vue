<template>
  <div id="NavBar">
    <van-nav-bar :title="title" :fixed="true" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right v-if="isShow">
        <van-button  type="warning" size="small" >{{btntitle}}</van-button>
      </template>
    </van-nav-bar>
    <div style="height:46px;"></div> 
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type:String,
      default:""
    },
    btntitle:{
      type: String,
      default:"购买服务"
    },
    isShow:{
      type:Boolean,
      default: false,
    }
  },
  computed: {},
  methods: {
     onClickLeft(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    onClickRight(){
      this.$emit("click-right");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style  scoped>

</style>