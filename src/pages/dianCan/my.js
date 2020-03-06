require('@/api/mock/dianCan.js')
import {
  tool
} from "@/common/js/tool.js";
import {
  API_CONSTS
} from "api/config.js";
//下拉刷新组件
import scrollY from '@/components/scrollY';
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
// 购物车小球特效
import shopbar from "@/assets/shopbar/shopbar.js";
import "@/assets/shopbar/shopbar.less";
// 购物车小球特效
import scroll from '@/components/scroll'

export default {
  name: '',
  data() {
    return {
      //商品列表标题
      goodslistTitle: "",
      //菜单列表
      mentList: [],
      //商品列表
      goodsList: [],
      goodsTypeCssList: [
        "decrease",
        "special",
        "discount",
        "guarantee",
        "invoice"
      ],
      isCurrent: 0

    };
  },
  computed: {
    ...mapState(['sellerInfo', 'userInfo'])
  },

  async created() {
    await this.getMenuListBySellerId();
    this.getGoodsListByMenuId(this.mentList[0]);
  },
  components: {
    scrollY

    // scroll
  },
  async mounted() {
    // console.log(this.$refs.scroll.scroll, 111);

    // this.$refs.scroll1._initscroll()
    setTimeout(() => {
      this.$refs.scrollY1.fire();
    }, 300);

    setTimeout(() => {
      this.$refs.scrollY2.fire();
    }, 100);

  },
  methods: {
    ...mapActions(['addShopCartAction']),
    /**
     * 获取菜单列表
     */
    async getMenuListBySellerId() {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          tool.get(API_CONSTS.BASE_URL + "/gettGoodsTypeById", {
            id: this.sellerInfo.seller.id
          }).then((resp) => {

            this.mentList = resp.data.list;

            this.$nextTick(() => {
              setTimeout(() => {
                console.log(111);
                this.$refs.scrollY1.setMin();
                // this.$refs.scroll._initscroll()
                // this.$refs.scroll.scroll.refresh()
                // this.$refs.scroll.scroll.finishPullUp()
              }, 100);
            });
            resolve(resp);

          });
        }, 300);
      });
    },
    /**
     * 获取商品列表
     */
    getGoodsListByMenuId(menuObj) {
      return new Promise((resolve, reject) => {
        this.goodslistTitle = menuObj.name;
        setTimeout(() => {
          tool.get(API_CONSTS.BASE_URL + "/getGoodsListByTypeId", {
            id: menuObj.id
          }).then((resp) => {
            this.goodsList = resp.data.foods;
            // console.log(this.goodsList, 777777);
            this.$nextTick(() => {
              setTimeout(() => {
                this.$refs.scrollY2.setMin();
                // this.$refs.scroll1.scroll.refresh()
                // this.$refs.scroll1.scroll.finishPullUp()
              }, 100);
            });
            resolve(resp);
          });
        }, 300);
      });
    },
    /**选择菜单 */
    selectMenu(item, index) {
      this.isCurrent = index
      jToast.loading("选择中...");
      // tool.removeAllClass(
      //   document.getElementsByClassName("menu-item"),
      //   "current"
      // );
      // //注意：target和currentTarget区别
      // tool.addClass(event.currentTarget, "current");
      this.getGoodsListByMenuId(item).then((resp) => {
        jToast.close();
      });
    },
    /**
     * 添加购物车
     */
    addShopCart(item) {

      shopbar.go({
        pageX: event.pageX - 10,
        pageY: event.pageY - 10,
        endX: -(event.pageX - 20),
        endY: window.screen.height - event.pageY - 30
      });

      this.addShopCartAction({
        goods: item
      });

    }



  }
};
