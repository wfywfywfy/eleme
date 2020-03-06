<template>
  <div ref="baseAlloyTouch" class="base-alloytouch">
    <div :id="containerId" class="base-scroll-ctn" ref="baseScrollCtn">
      <div :id="targetDomId" class="base-scroll-target" ref="baseScrollTarget">
        <slot ref="scrollY"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// alloyToucy------------
import '@/assets/AlloyTouch/alloy_touch.js'
import '@/assets/AlloyTouch/transform.js'
// alloyToucy__end------------

/**
 * 注意事项：
 * 1、请务必设置滚动容器的最大高度！建议使用:样式设置！
 */
function setTranslateY(dom, value) {
  dom.style.transform = dom.style.msTransform = dom.style.OTransform = dom.style.MozTransform = dom.style.webkitTransform =
    'translateY(' + value + 'px) translateZ(0)'
}

export default {
  name: 'scrollY', //Y轴滚动AlloyTouch组件
  props: {
    data: {},
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      //容器的ID
      containerId: '',
      //目标容器的ID
      targetDomId: '',
      //alloyTouch对象
      alloyTouch: null,
      isScrollFlag: 1,
      //容器的高度
      scrollCtnClientHeight: 0,
      //滚动目标的高度
      targetClientHeight: 0,
      //设置滚动的最小距离
      scrollMinHeight: 0,
      _settings: {}
    }
  },
  beforeDestroy() {},
  computed: {
    /**
     * 计算属性：最小高度
     */
    minHeight() {
      return 1
    }
  },
  watch: {
    /**
     * 监听传入的数据变化
     */
    data() {
      setTimeout(() => {
        this.setMin()
      }, this.refreshDelay)
    }
  },
  methods: {
    /**
     * 私有方法：获取到配置信息
     */
    _getSettings(options) {
      this._settings = Object.assign(
        {},
        {
          containerId: this.containerId,
          targetDomId: this.targetDomId,
          property: 'translateY',
          touchEnd: null,
          animationEnd: null
        },
        options
      )
      this.containerId = this._settings.containerId
      this.targetDomId = this._settings.targetDomId
    },
    /**
     * 私有方法：获取到最小高度
     */
    _getminHeight() {
      let ctnHeight = this.$refs.baseAlloyTouch.clientHeight
      let targetHeight = this.$refs.baseScrollTarget.clientHeight
      let minHeight = ctnHeight - targetHeight
      // console.log("最小高度：" + minHeight);
      this.scrollMinHeight = minHeight < 0 ? minHeight : 0
      //console.log(ctnHeight + "  " + targetHeight + "   " + minHeight);
      return this.scrollMinHeight
    },
    /**
     * 私有方法：初始化alloytouch插件
     */
    _initAlloyTouch(options) {
      //容器的ID
      this.containerId = 'containerid' + new Date().getTime()
      //目标容器的ID
      this.targetDomId = 'targetid' + new Date().getTime()

      // console.log(this.containerId)

      this._getSettings(options)
      let _this = this

      this.$nextTick(() => {
        var target = document.querySelector('#' + this.targetDomId)

        //给element注入transform属性
        Transform(target, true)

        this.alloyTouch = new AlloyTouch({
          touch: '#' + this.containerId, //反馈触摸的dom
          vertical: true, //不必需，默认是true代表监听竖直方向touch
          target: target, //运动的对象
          property: this._settings.property, //被滚动的属性
          sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
          factor: 1, //不必需,默认值是1代表touch区域的1px的对应target.y的1
          min: this._getminHeight(), //不必需,运动属性的最小值
          max: 0, //不必需,滚动属性的最大值
          step: 40,
          change: function(value) {
            // console.log(value);
            _this.isScrollFlag = 0
            _this.$emit('change', value)

            //滑动到底部了！
            if (value <= _this.scrollMinHeight) {
              _this.$emit('scrollEnd', value) //向上派发
            }
          },
          touchStart: function(evt, value) {
            //console.log(value);
            _this.isScrollFlag = 1
          },
          touchMove: function(evt, value) {
            // console.log(value);
            _this.$emit('touchMove', evt, value)
          },
          touchEnd: function(evt, value) {
            // console.log(value);
            //console.log(_this._settings.touchEnd);
            if (typeof _this._settings.touchEnd == 'function') {
              _this._settings.touchEnd(evt, value)
            }
          },
          tap: function(evt, value) {},
          pressMove: function(evt, value) {},
          animationEnd: function(value) {
            // console.log(_this._settings.animationEnd);
            if (_this.isScrollFlag === 1) {
              if (typeof _this._settings.animationEnd == 'function') {
                _this._settings.animationEnd(value, {
                  isScrollFlag: _this.isScrollFlag
                })
              }
            }
          }
        })
      })
    },
    /**
     * 对外开发方法：设置最小高度
     * @callback {funciton} 设置最小高度后的，回调函数
     */
    setMin(callback) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          if (this.alloyTouch) {
            setTimeout(() => {
              this.alloyTouch.min = this._getminHeight()
              if (typeof callback == 'function') {
                resolve()
                callback()
              }
            }, 300)
          }
        })
      })
    },
    /**
     * 强制设置高度
     */
    setMinByHeight(minHeight) {
      if (this.alloyTouch) {
        this.alloyTouch.min = minHeight
      }
    },
    /**
     * 公开接口：获得能够滚动的最小距离
     */
    getMinHeight() {
      return this._getminHeight()
    },
    /**
     * 开放方法：滚动到最底部
     */
    toBottom() {
      this.to({
        value: this._getminHeight()
      })
    },
    /**
     * 开放：滚动到指定的位置
     * @value {number} 滚动的位置 （正数向下滚动，负数向上滚动）
     * @time {nunber} 运动时间，默认300
     * @ease {String} 运动形势
     */
    to(options) {
      let opts = Object.assign(
        {},
        {
          value: 0,
          time: 300,
          ease: ''
        },
        options
      )
      this.alloyTouch.to(opts.value, opts.time)
    },
    //获取是否在滚动
    getScrollFlag() {
      return this.isScrollFlag
    },
    /**
     * 停止滚动
     */
    stop() {
      this.alloyTouch.stop()
    },
    /**
     * 公开方法：初始化alloyTouch
     */
    fire(options) {
      this._initAlloyTouch(options)
    }
  }
}
</script>

<style scoped lang="less" >
.base-alloytouch {
  // position: absolute;
  // width: 100%;
  // top: 0px;
  // right: 0px;
  // left: 0px;
  // bottom: 0px;
  // z-index: 1;
  width: 100%;
  height: 100%;
}

.base-scroll-ctn {
  // position: absolute;
  // width: 100%;
  // top: 0px;
  // right: 0px;
  // left: 0px;
  // bottom: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  .base-scroll-target {
    // position: absolute;
    // z-index: 1;
    tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;
    min-height: 100%;
    transform: translateZ(0);
    touch-callout: none;
    user-select: none;
    text-size-adjust: none;
  }
}
</style>
