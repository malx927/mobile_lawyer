<template>
  <div>
    <nav-bar :title="title" @click-right="onClick"></nav-bar>
    <van-panel :title="'合同编号: '+ code" :desc="name" status="状态">
      <p class="van-cell__label">马李欣 210824444444444</p>
      <p class="van-cell__label">有效时间：2010-01-01 至 2010-12-01</p>
      <template #footer>
        <span style="float:left;">祥子律师事务所</span>
        <van-button size="small" type="primary">合同详情</van-button>
      </template>
    </van-panel>
    <van-panel :title="'合同编号: '+ code" :desc="name" status="状态">
      <p class="van-cell__label">马李欣 210824444444444</p>
      <p class="van-cell__label">有效时间：2010-01-01 至 2010-12-01</p>
      <template #footer>
        <span style="float:left;">祥子律师事务所</span>
        <van-button size="small" type="primary">合同详情</van-button>
      </template>
    </van-panel>
    <van-panel :title="'合同编号: '+ code" :desc="name" status="状态">
      <p class="van-cell__label">马李欣 210824444444444</p>
      <p class="van-cell__label">有效时间：2010-01-01 至 2010-12-01</p>
      <template #footer>
        <span style="float:left;">祥子律师事务所</span>
        <van-button size="small" type="primary">合同详情</van-button>
      </template>
    </van-panel>
    <van-panel :title="'合同编号: '+ code" :desc="name" status="状态">
      <p class="van-cell__label">马李欣 210824444444444</p>
      <p class="van-cell__label">有效时间：2010-01-01 至 2010-12-01</p>
      <template #footer>
        <span style="float:left;">祥子律师事务所</span>
        <van-button size="small" type="primary">合同详情</van-button>
      </template>
    </van-panel>
    <van-panel :title="'合同编号: '+ code" :desc="name" status="状态">
      <p class="van-cell__label">马李欣 210824444444444</p>
      <p class="van-cell__label">有效时间：2010-01-01 至 2010-12-01</p>
      <template #footer>
        <span style="float:left;">祥子律师事务所</span>
        <van-button size="small" type="primary">合同详情</van-button>
      </template>
    </van-panel>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "private",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      code: "20170808",
      name: ""
    };
  },
  computed: {},
  methods: {
    onClick() {
      this.$router.push("/private_contract_edit");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>

.van-panel__content {
  padding: 10px 20px 0px 20px;
  font-size: 14px;
}
.van-panel__footer {
  text-align: right;
  padding-left: 20px;
  color: #5f6063;
  font-size: 14px;
}
.van-cell__label {
  font-size: 14px;
}
</style>