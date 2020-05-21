<template>
  <div>
    <nav-bar></nav-bar>
  </div>
  <!-- <div id="NavBar">
    <van-nav-bar :title="title" :fixed="true" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-button  type="warning" size="small" >购买服务</van-button>
      </template>
    </van-nav-bar> 
    
  </div> -->
</template>

<script>
import NavBar  from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
  props: {
  
  },
  data() {
    return {
      title: this.$route.meta.title,
    };
  },
  computed: {},
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){
      this.$toast('提示文案1');
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>

/* .van-nav-bar{
  background-color:#1989fa;
  font-size: 18px!important; 
  background: linear-gradient(to right, #ff2e29, #fe6e49)!important;
  background: -webkit-linear-gradient(to right, #ff2e29, #fe6e49)!important;
  border:0;
} */

</style>