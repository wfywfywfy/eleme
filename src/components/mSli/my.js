import vSlider from "@/assets/vSlider/vSlider.js";



export default {
  name: "mSli",
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {

      contain: "",
      sliderObj: {}
    };
  },
  created() {
    //获得唯一标识
    this.contain = "vSliderId_" + new Date().getTime();
  },
  components: {

  },
  watch: {
    // bannerList(value) {
    //   this.fire();
    // }
  },
  mounted() {

    // this.fire();
  },
  beforeDestroy() {

  },



  computed: {

  },
  methods: {

    fire() {
      this.$nextTick(() => {
        // console.log(this.bannerList);
        if (this.bannerList.length == 0) {
          return;
        }
        // console.log(111);
        this.sliderObj = new vSlider({
          id: this.contain
        });
      });
    }

  }
};
