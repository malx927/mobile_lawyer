<template>
  <div>

    <van-cell-group :border="false">
      <van-cell value="辽宁靳世祥律师事务所">
        <template #icon >
          <img :src="logo" class="img">
        </template>
      </van-cell>
      <!-- <van-divider /> -->
      <van-cell title="合同编号: 祥私[2020]第0001号" :border="false" style="text-align:right;padding-right:1.0rem;font-weight:BOLD;"/>
      <van-cell title="单元格" value="内容" :border="false" label="描述信息" />
    </van-cell-group>
    <van-cell value="根据《中华人民共和国律师法》、《合同法》的相关规定，就甲方聘请乙方律师事务所为常年私人律师事宜，经双方协商达成一致意见，订立本合同。" />
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png'
export default {
  components: {},
  props: {},
  data() {
    return {
      logo: logo,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style  scoped>
  .img{
    width:1.5rem;
    height:1.5rem;
    line-height: inherit;
  }
</style>