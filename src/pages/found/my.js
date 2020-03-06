import scrollY from '@/components/scrollY';
export default {
  name: 'found',
  data() {
    return {
      isChange: false,
      yzmStr: "获取验证码",
      form: {
        phone: "13111111111",
        yzm: ""
      }
    };
  },
  components: {
    'scro-lly': scrollY,
  },
  mounted() {
    setTimeout(() => {
      this.initScrollY();
    }, 500);
  },
  methods: {
    initScrollY() {
      //性能调优：如果scrollY组件没有加载好，就停止执行
      if (!this.$refs.scrollY) {
        return;
      }
      
      this.$refs.scrollY.fire({
        touchMove: function (value) {
          console.log(value);
        },
        animationEnd: function (value) {
          //console.log(value);
        }
      });
    }
  }
};
