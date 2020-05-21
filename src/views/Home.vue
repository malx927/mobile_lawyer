<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="400">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-around">
      <van-col span="12">
        <van-button to="/private" icon="vip-card-o" type="primary" >私人律师</van-button>
        </van-col>
      <van-col span="12">
        <van-button to="/adviser" icon="friends-o" type="primary" >法律顾问</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.my-swipe{
  /* margin-bottom: 0.5rem; */
}
.my-swipe img {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1.0rem 1.0rem;
  background-color: #fff;
  pointer-events: none;
}
</style>>


