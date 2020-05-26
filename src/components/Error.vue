<template>
  <div>
    <van-empty image="error" description="权限不足，无法访问" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$toast.fail('权限不足，无法访问');
  },
};
</script>
