<template>
  <div>
    <van-nav-bar title="标题" :placeholder="true" fixed/>
    <div>
      <var-button @click="onBtnClick">默认按钮</var-button>
      <var-row>
        <var-col :span="8">span: 8</var-col>
        <var-col :span="8">span: 8</var-col>
        <var-col :span="8">span: 8</var-col>
      </var-row>
    </div>
  </div>
</template>

<script>
  import {Snackbar} from '@varlet/ui'

  export default {
    name: "TabHome",
    mounted() {
    },
    methods: {
      onBtnClick() {
        Snackbar("这是一个消息条")
      },
    },
  }
</script>

<style scoped>
</style>
