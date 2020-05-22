<template>
  <div>
    <nav-bar :title="title" @click-right="onClick"></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name:"adviser",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title
    };
  },

  computed: {},
  methods: {
    onClick(){
      this.$toast('提示文案9999');
    }
  },
  created() {},
  mounted() {}
};
</script>

<style  scoped>

</style>