<template>
  <div>
    <van-nav-bar title="标题" :placeholder="true" fixed/>
    <div class="btn-con">
      <var-space justify="space-around">
        <var-button type="primary">主要按钮</var-button>
        <var-button type="info">信息按钮</var-button>
        <var-button type="success">成功按钮</var-button>
      </var-space>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabHome",
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .btn-con {
    padding: 12px;
  }
</style>
