import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
import * as types from "@/store/mutation-types";
import {
  tool
} from "@/common/js/tool.js";
import {
  API_CONSTS
} from "api/config.js";
//下拉刷新组件
import scrollY from '@/components/scrollY';
import {
  Dialog
} from 'vant';

export default {
  props: {},
  data() {
    return {
      isShowShopCartList: false,

    };
  },
  mixins: {},
  components: {
    scrollY
  },
  computed: {
    ...mapState(['shopCart', 'sellerInfo']),
    ...mapGetters(['shopCartLength', 'shopCartTotalPrice']),
    //判断购物车中是否有数据
    hasGoods() {
      return this.shopCartLength > 0;
    },

    /** 
     * 支付状态
     */
    isPayEnough() {
      //最低配送费
      let minPrice = this.sellerInfo.seller.minPrice;
      let resultPrice = minPrice - this.shopCartTotalPrice;
      let resultStr = '';
      if (resultPrice > 0) {
        resultStr = `还差￥${resultPrice}元起送`;
      } else {
        resultStr = `结算`;
      }
      return resultStr;
    }
  },


  create() {},

  mounted() {
    this.$refs.scrollY3.fire()
  },
  beforeDestroy() {},
  watch: {
    shopCart() {

      // console.log(this.$refs.scrollY1.setMin());
      // console.log(this.$refs.scrollY3.setMin());
      // if (!this.$refs.scrollY3) {
      //   return
      // }
      setTimeout(() => {
        this.$refs.scrollY3.setMin();
      }, 500);


    }


  },
  methods: {
    ...mapActions(['addShopCartAction', 'delShopCartGoodsByIdAction', 'clearShopCartByUserIdAction']),
    showList() {
      this.isShowShopCartList = true;
    },
    hideList() {
      this.isShowShopCartList = false;
    },
    /**
     * 添加商品数量
     */
    addShopFn(goods) {
      this.addShopCartAction({
        goods: goods
      });
    },
    /**
     * 删除购物车数据
     */
    delShopFn(goods) {
      this.delShopCartGoodsByIdAction({
        goods: goods
      });
    },
    /**
     * 清空购物车
     */
    clearShopCart() {

      Dialog.confirm({
        title: '消息提示',
        message: '确认清空购物车？'
      }).then(() => {
        // on confirm
        this.clearShopCartByUserIdAction().then(() => {
          this.isShowShopCartList = false;
        });
      }).catch(() => {
        // on cancel
      });

    }
  }
};
