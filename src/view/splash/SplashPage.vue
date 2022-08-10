<template>
  <div>
    <van-image src="img/guide/ad_page.jpg" class="splash-img" fit="cover"/>
  </div>
</template>

<script>
  export default {
    name: "SplashPage",
    mounted() {
      setTimeout(() => {
        if (localStorage.getItem('guideShown')) {
          this._routePush('main');
        } else {
          this._routeReplace('main');
        }
      }, 1500);
    },
  }
</script>

<style scoped lang="less">
  .splash-img {
    width: 100vw;
    height: 100vh;
  }
</style>
