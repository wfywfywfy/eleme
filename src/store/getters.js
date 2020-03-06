const getters = {
  /**
   * 获取购物车数据的所有商品数量
   */
  shopCartLength(state) {
    let length = 0;
    state.shopCart.forEach((ele) => {
      length += ele.count;
    });
    return length;
  },
  /**
   * 获取购物车中商品价格总量
   */
  shopCartTotalPrice(state) {
    let totalPrice = 0;
    state.shopCart.forEach(ele => {
      totalPrice += ele.price * ele.count;
    });
    return totalPrice;
  }
};


export default getters;
