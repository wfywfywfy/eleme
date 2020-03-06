import {
  tool
} from "commonJs/tool.js";
import {
  API_CONSTS
} from "@/api/config.js";
import bannerSlider from '@/components/mSli';
import scrollY from '@/components/scrollY';
import jiazai from '@/components/jiazai'
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
import * as types from "@/store/mutation-types";
import scroll from '@/components/scroll'
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
require("api/mock/homein.js");
export default {
  name: "homeIn",
  // props: {
  //   list: {
  //     default() {
  //       return [];
  //     }
  //   }
  // },
  data() {
    return {
      mpullUpLoad: {
        threshold: 20
      },
      bannerList: [],
      restaurantList: [],
      //当前页数
      currStep: 1,
      //每页拉去多少条数据
      pageSize: 10,
      //是否在拉去数据
      isLoading: false,
      maddress: '',
      scroll: null

    };
  },


  components: {
    bannerSlider,
    'scro-lly': scrollY,
    jiazai,
    scroll

  },
  mounted() {
    // console.log(1111);
    // openPullUp()

    this.getaddress()


    // this.$nextTick(() => {

    Promise.all([
      this.getBannerList(),
      this.getRestaurantList()
    ]).then(() => {
      setTimeout(() => {
        this.$refs.scrollY.fire()
      }, 500);

      // this.$nextTick(() => {
      // this.$refs.scroll._initscroll()
      // })


    });

  },

  beforeDestroy() {

  },

  computed: {
    ...mapState(['userInfo', 'address'])

  },
  watch: {
    address: {
      handler() {
        // console.log(111);
        this.maddress = this.address.address
        // console.log(this.maddress, 111);
        return this.maddress
      },
      deep: true
    }

  },
  created() {
    this.getBannerList()
    this.getRestaurantList()
  },
  methods: {
    pullingUp() {

      this.currStep++
      this.getRestaurantList({
        currStep: this.currStep,
        pageSize: this.pageSize
      }).then(() => {

        this.$refs.scroll.scroll.refresh()

        this.$refs.scroll.scroll.finishPullUp()


      })
    },
    // aa() {
    //   console.log(this.scroll, 111111111111111);
    // },
    ...mapMutations([types.SET_ADDRESS]),
    getaddress() {
      tool.post(API_CONSTS.BASE_URL + "/getAddess", {
        id: this.userInfo.user_id
      }).then((res) => {

        this[types.SET_ADDRESS]({
          address: res.data.data.address
        })
        this.maddress = this.address.address
        // console.log(888888);
      })

    },
    //修改地址
    editAdd() {
      this.$router.push({
        path: `/address`,
        query: {}
      })

    },
    //跳转到详情页面
    xiangQing(id) {
      console.log(1111);
      this.$router.push({
        name: `dianCan`,
        query: {
          sellId: id
        }
      });
    },
    //获取来轮播图图片
    async getBannerList() {
      return new Promise((resolve, reject) => {
        tool.post(API_CONSTS.BASE_URL + "/getBannerimgs", {}).then((resp) => {
          this.bannerList = resp.data.data.banner;

          this.$refs.banner.fire();
          resolve();
        });
      });
    },

    //获取商家列表信息
    getRestaurantList() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          tool.post(API_CONSTS.BASE_URL + "/getSellers", {
            currStep: this.currStep,
            pageSize: this.pageSize
          }).then((resp) => {

            // this.restaurantList = resp.data.data.items;
            this.restaurantList.push(...resp.data.data.items);
            resolve();
            // console.log(resolve(), 111111);
          });
        }, 2000);

      });
    },
    /**
     * 注册scroll特效
     */
    initScrollY() {
      //性能调优：如果scrollY组件没有加载好，就停止执行
      if (!this.$refs.scrollY) {
        return;
      }
      this.$refs.scrollY.fire({
        touchMove: function (value) {
          // console.log(value);
        },
        animationEnd: function (value) {
          //console.log(value);
        }
      });
    },
    /**监听scrolly的滚动事件 */
    fchange(value) {

      if (this.isLoading) {
        return;
      }

      let targetHeight = this.$refs.scrollY.getMinHeight();
      let cha = Math.abs(targetHeight) - Math.abs(value);
      // let cz = value
      if (cha <= 60) {
        this.isLoading = true;

        setTimeout(() => {
          this.currStep++;
          // console.log(this.currStep, 111);

          this.getRestaurantList({
            currStep: this.currStep,
            pageSize: this.pageSize
          }).then((resp) => {

            this.isLoading = false;
            this.$nextTick(() => {
              this.$refs.scrollY.setMin();
            });
          });
        }, 1000);

      }
    }
  }
};
