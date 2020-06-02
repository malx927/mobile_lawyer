<template>
  <div>
    <nav-bar :title="title" :isShow="false"></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar,
  },
  props: {
    
  },
  data() {
    return {
      title: this.$route.meta.title || "",
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    
  },

};
</script>

<style  scoped>

</style>