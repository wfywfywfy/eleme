import {
  tool
} from "@/common/js/tool.js";
import {
  API_CONSTS
} from "@/api/config.js";
import * as types from "@/store/mutation-types";

//导入模拟数据
require("@/api/mock/dianCan.js");

const actions = {
  /**
   *
   * 将购物信息添加到数据
   * @param {*} { commit, state }
   * @param {*} obj {userId, goods}
   */
  addShopCartAction({
    commit,
    state
  }, obj) {
    jToast.loading("加载中...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tool.post(API_CONSTS.BASE_URL + "/addShopCartfn", {
          userId: state.userInfo.user_id,
          goodsId: obj.goods.goodsId
        }).then((resp) => {
          jToast.close();
          commit(types.SET_SHOPCART, obj.goods);
          resolve(resp);
        });
      }, 200);
    });
  },
  /**
   * 删除购物车数据
   */
  delShopCartGoodsByIdAction({
    commit,
    state
  }, obj) {
    jToast.loading("加载中...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tool.post(API_CONSTS.BASE_URL + "/delShopCartById", {
          userId: state.userInfo.user_id,
          goodsId: obj.goods.goodsId
        }).then((resp) => {
          jToast.close();
          commit(types.DEL_SHOPCARTGOODSBYID, obj.goods);
          resolve(resp);
        });
      }, 200);
    });
  },
  /**
   * 删除购物车数据
   */
  clearShopCartByUserIdAction({
    commit,
    state
  }, obj) {
    jToast.loading("加载中...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tool.post(API_CONSTS.BASE_URL + "/clearShopCartByUserId", {
          userId: state.userInfo.user_id
        }).then((resp) => {
          jToast.close();
          jToast.show({
            text: "清空成功！"
          });
          commit(types.CLEAR_SHOPCARTBYID);
          resolve(resp);
        });
      }, 1000);
    });
  }
};

export default actions;
