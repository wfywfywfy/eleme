<template>
  <div id="app">
    <!-- <div><img src="./assets/logo.png"></div> -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './common/less/index.less';
#app {
  position: relative;
  height: 100%;
}
</style>