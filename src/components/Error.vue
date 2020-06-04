<template>
  <div>
    <van-empty image="error" description="权限不足，无法访问或者用户信息不全" />
    <div class="btn-mgn">
      <van-button block round type="primary" to="/">返回</van-button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$toast.fail('权限不足，无法访问用户信息不全');
  },
};
</script>
<style  scoped>

</style>>
