<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return {
      transitionName:'slide-right'
    }
  },
  // watch:{
  //   $route(to, from){
  //     console.log(to, from);
    
  //     let is_back = this.$router.isBack
  //     if(is_back){
  //       this.transitionName = "slide-right"
  //     }else{
  //       this.transitionName = "slide-left"
  //     }
  //     this.$router.isBack = false
  //   }
  // }
}

</script>

<style>
/* .slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.slide-left-enter {
 opacity: 0;
 transform: translate3d(-100%, 0, 0);
}
.slide-left-leave-active {
 opacity: 0;
 transform: translate3d(100%, 0, 0);
}
.slide-right-enter {
 opacity: 0;
 transform: translate3d(100%, 0, 0);
}
.slide-right-leave-active {
 opacity: 0;
 transform: translate3d(-100%, 0, 0);
} */

</style>
