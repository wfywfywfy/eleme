
<template>
 <div class="load-more-ctn">
      <div
        class="lmc-loaded-tip"
        v-show="isLoaded"
      >
        <span>我是有底线的！</span>
      </div>
      <div
        class="lmc-loading-tip"
        v-show="isLoading"
      >
        <!-- <span class="iconfont helloloading">&#xe600;</span> -->
        <span>加载中...</span>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      //正在加载中
      isLoading: true,
      //加载完毕
      isLoaded: false
    }
  },
  components: {},
  created() {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
/*loading模块start-------------------*/
.load-more-ctn {
  .lmc-loading-tip {
    border-top: 1px solid #ccc;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;

    // .iconfont {
    //   display: inline-block;
    //   width: 40px;
    //   height: 40px;
    //   text-align: center;
    //   font-size: 16px;
    //   // .circleAnmiation();
    // }
  }

  .lmc-loaded-tip {
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin: 0px 10px;
    border-top: 1px solid #ccc;
  }
}

/*loading模块__end-------------------*/
</style>

