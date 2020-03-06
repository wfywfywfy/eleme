
<template>
 <div ref="warpper">
  
    <slot></slot>
    </div>
   
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  wctch: {
    data() {
      setTimeout(this.refresh, 20)
    }
  },
  components: {},
  created() {},
  computed: {},
  mounted() {},
  methods: {
    _initscroll() {
      // console.log(this.scroll, 11)
      if (this.scroll) {
        return
      }
      // let that = this
      let warpper = this.$refs.warpper
      this.scroll = new BScroll(warpper, {
        scrollY: this.scrollY,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      // console.log(this.scroll, 666)
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多')
        this.$emit('pullingUp')
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    }

    // scroll() {
    //   this.$emit('scroll')
    // }
  }
}
</script>
<style scoped lang="less">
.warpper {
  height: 100%;
  width: 100%;
  border: 1px solid red;
}
</style>

