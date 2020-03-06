/**
 * 根级别： state(数据源)
 *
 */

const state = {
  /**用户信息 */
  userInfo: {
    avatar: "",
    balance: 0,
    brand_member_new: 0,
    columns: [],
    delivery_card_expire_days: 0,
    email: "",
    gift_amount: 0,
    is_email_valid: false,
    is_mobile_valid: false,
    mobile: "---",
    point: 0,
    real_point: 0,
    supervip_status: 0,
    state: 0,
    username: ""
  },
  sellerInfo: {
    seller: {
      id: "",
      name: "",
      description: "",
      deliveryTime: 0,
      score: 0,
      serviceScore: 0,
      foodScore: 0,
      rankRate: 0,
      minPrice: 0,
      deliveryPrice: 0,
      ratingCount: 0,
      sellCount: 0,
      bulletin: "",
      supports: [],
      avatar: "/static/images/sellerHeader/seller_avatar_256px.jpg",
      pics: [],
      infos: []
    },
    ratings: {}
  },
  //购物车
  shopCart: [],
  //临时购物车列表数据
  tempShopCart: [],
  address: {
    address: ''
  }
};

export default state;
