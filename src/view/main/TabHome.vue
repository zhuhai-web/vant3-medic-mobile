<template>
  <div>
    <van-nav-bar title="标题" :placeholder="true" fixed/>
    <div class="btn-con">
      <var-space justify="space-around">
        <var-button type="primary">主要按钮</var-button>
        <var-button type="info">信息按钮</var-button>
        <var-button type="success">成功按钮</var-button>
      </var-space>

      <var-tabs v-model:active="active">
        <var-tab name="选项1">选项1</var-tab>
        <var-tab name="选项2">选项2</var-tab>
        <var-tab name="选项3">选项3</var-tab>
      </var-tabs>

      <var-skeleton :loading="loading">Loading Data</var-skeleton>

      <var-steps :active="active">
        <var-step>Step1</var-step>
        <var-step>Step2</var-step>
        <var-step>Step3</var-step>
        <var-step>Step4</var-step>
      </var-steps>

      <var-card
        title="Dangerous"
        description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
      />

      <var-divider description="Description" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabHome",
    data() {
      return {
        loading: true,
        active: '',
      };
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .btn-con {
    padding: 12px;
  }
</style>
