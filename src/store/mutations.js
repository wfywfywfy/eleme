import * as types from './mutation-types.js'

const mutations = {
  /**
   * 设置用户地址
   */
  [types.SET_ADDRESS](state, address) {
    // state.address.address = address
    Object.assign(state.address, address);

  },
  /**
   * 设置用户信息
   */
  [types.SET_USERINFO](state, userInfo) {
    Object.assign(state.userInfo, userInfo);
  },
  /**
   * 设置商家详情数据
   */
  [types.SET_SELLERINFO](state, sellerInfo) {
    // Object.assign(state.sellerInfo, sellerInfo);
    state.sellerInfo = sellerInfo
  },
  /**
   * 设置购物车数据
   */
  [types.SET_SHOPCART](state, goodsInfo) {
    state.tempShopCart.push(goodsInfo);
    let arr = [...state.tempShopCart];
    let hello = [];
    dd(arr, hello);
    state.shopCart = hello;
  },
  /**
   * 删除购物车中的指定的数据
   */
  [types.DEL_SHOPCARTGOODSBYID](state, food) {
    //删除临时中缓存数据
    for (let j = state.tempShopCart.length - 1; j >= 0; j--) {
      let element = state.tempShopCart[j];
      if (element.name == food.name) {
        state.tempShopCart.splice(j, 1);
      }
    }

    //删除购物车中的数据
    //注意：如果只修改shopCart中的元素的属性，这种情况不会触发state中数据的更新，有且只有在数组调用push,unshift,resever,重新赋值等等才能重新更新数据
    for (let i = 0; i < state.shopCart.length; i++) {
      let ele = state.shopCart[i];
      if (ele.name == food.name) {
        if (ele.count == 1) {
          state.shopCart.splice(i, 1);
        } else {
          state.shopCart[i].count--;
        }
        break;
      }
    }
    state.shopCart = [...state.shopCart];
  },
  /**
   * 清空购物车
   */
  [types.CLEAR_SHOPCARTBYID](state) {
    state.tempShopCart = [];
    state.shopCart = [];
  }
};

/**
 * 递归迭代数据
 * 将count属性添加到每个元素中
 *
 * @param {*} list
 * @param {*} newList
 */
function dd(list, newList) {
  let first = list.shift();

  if (newList.length > 0) {
    let flag = false;
    newList.forEach(ele => {
      if (ele.name == first.name) {
        ele.count++;
        flag = true;
      }
    });
    if (!flag) {
      newList.push(first);
      newList[newList.length - 1].count = 1;
    }
  } else {
    newList.push(first);
    newList[newList.length - 1].count = 1;
  }
  if (list.length > 0) {
    dd(list, newList);
  }
}

export default mutations;
