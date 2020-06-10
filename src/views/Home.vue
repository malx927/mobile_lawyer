<template>
  <div class="home" id="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="gray" :height="240">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3"  icon-size="35px">
      <van-grid-item text="私人律师" to="/private" >
        <template #icon>
          <van-image  round   width="50" height="50"  :src="private_img" />
        </template>
      </van-grid-item>
      <van-grid-item text="法律顾问" to="/adviser">
        <template #icon>
          <van-image  round   width="50" height="50"  :src="adviser_img" />
        </template>
      </van-grid-item>
      <van-grid-item v-if="member_role" icon="setting-o" text="代理授权" to="/agency">
        <template #icon>
          <van-image  round   width="50" height="50"  :src="agency_img" />
        </template>
      </van-grid-item>

      <!-- <van-grid-item text="私人律师" to="/private">
      <template #icon>
        <div class="grid_img">
            <van-icon name="chat-o" color="#fff" size="40" />
        </div>
        </template>
      </van-grid-item> -->
    </van-grid>

  </div>
</template>

<script>
import agency from '@/assets/images/agency_red.png'
import adviser from '@/assets/images/adviser_green.png'
import privates from '@/assets/images/private_blue.png'

import { get_swipe_list } from '@/api/wechat'
import { get_role } from '@/api/role'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      title:this.$route.meta.title||"",
      member_role: false,
      images: [],
      agency_img: agency,
      adviser_img: adviser,
      private_img: privates,
    };
  },
  methods:{
    getSwipeList(){
      get_swipe_list().then(res=>{
        console.log(res)
        this.images = res.data
      }).catch(error=>{
        console.log(error);
        
      })
    },
    getUserRole(){
      let openid = localStorage.getItem("openid")
      get_role(openid).then(res=>{
          console.log(res);
          this.member_role = res.data.member_role === 1 || res.data.member_role == 3
          if(res.data.member_role == null) 
            sessionStorage.setItem("member_role", 0)
          else
            sessionStorage.setItem("member_role", res.data.member_role)

          console.log(this.member_role)
      }).catch(error=>{
          console.log(error);
      })
    }
  },
  created(){
    this.getUserRole()
    this.getSwipeList()
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
  padding: 0rem 0rem;
  background-color: #fff;
  pointer-events: none;
}
.van-col{
  text-align: center;
}
.grid_img{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width:3.5rem;
    height: 3.5rem;
    border-radius:50%;
    padding: 8px 8px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    background-color: red;
    margin-bottom: 8px;
}

</style>>


