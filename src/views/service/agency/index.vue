<template>
  <div>
    <nav-bar :title="title" btntitle="添加代理" @click-right="onClick"></nav-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <van-cell v-for="item in list" :key="item.id" is-link :title="item.name" :to="{name:'agency_update', params:{company_id:item.id}}" />
    </van-list>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import { agency_company_list } from '@/api/service'

export default {
  name: "AgencyList",
  components: {
    NavBar,
  },

  data() {
    return {
      title: this.$route.meta.title,
      list: [],
      loading: false,
      finished: false,
    };
  },
  computed: {

  },
  methods: {
    onClick() {
      this.$router.push("/agency_add");
    },
    onLoad() {
      agency_company_list().then(res=>{
        console.log(res);
        this.list = res.data
        this.loading = false;
        this.finished = true;
      }).catch(error=>{
        console.log(error);
      })
    },
  },

  created() {

  },

}
</script>

<style  scoped>

</style>