import dianCan from "@/components/diancanHead";
import {
  tool
} from "@/common/js/tool.js";
import {
  API_CONSTS
} from "api/config.js";
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
import * as types from "@/store/mutation-types";
import shopcart from "@/components/shopcart";
require('@/api/mock/dianCan.js')
export default {
  name: '',
  data() {
    return {
      active1: true,
      active2: false,
      active3: false

    };
  },
  components: {
    dianCan,
    shopcart
  },
  mounted() {
    this.getSerllerDetailsById();

  },
  methods: {
    ...mapMutations([types.SET_SELLERINFO]),
    /**
     * 获取商家详情数据
     */
    getSerllerDetailsById() {
      // console.log(this.$route.query, 369);
      jToast.loading("数据加载中...");
      setTimeout(() => {
        tool.get(API_CONSTS.BASE_URL + "/getSellerInfoById", {
          id: this.$route.query.sellId
        }).then((resp) => {
          jToast.close();
          this[types.SET_SELLERINFO](resp.data);
          // console.log(777);
          // console.log(this.$store.state.sellerInfo, 777);
        });
      }, 1000);
    }
  }
};
