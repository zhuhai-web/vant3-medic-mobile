<template>
  <div>
    <div>HOME</div>
    <var-button @click="onBtnClick">默认按钮</var-button>
  </div>
</template>

<script>
  import { Snackbar } from '@varlet/ui'

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
