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

  methods: {
    onClick(){
      this.$router.push('/adviser_add')
    }
  },
  created() {},
};
</script>

<style  scoped>

</style>