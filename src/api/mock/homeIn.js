/**
 * 首页数据接口：
 * 定位接口数据；
 * banner广告数据；
 * 商家列表接口数据；
 */

var Mock = require("mockjs");


/**
 * 获取4张广告banner图片地址
 *
 */
Mock.mock("/getBannerimgs", {
    data: {
        banner: [
            "https://img11.360buyimg.com/pop/s590x470_jfs/t1/72835/13/6659/76632/5d4d53f6E1faa7d96/7cb2abcc733dcf4c.jpg.webp",
            "https://img10.360buyimg.com/pop/s590x470_jfs/t1/35303/9/15180/81649/5d303a24E458089af/4b6bd303f6d811ec.jpg.webp",
            "https://img12.360buyimg.com/pop/s590x470_jfs/t1/83029/37/7058/121033/5d53c4c3E8d85efe7/9eae820de23ad51e.jpg.webp",
            "https://img30.360buyimg.com/pop/s590x470_jfs/t1/78936/25/7883/84402/5d5b5ef0E5bb2b2ab/017d33dbe0fa5ced.jpg.webp",
            "https://img12.360buyimg.com/pop/s590x470_jfs/t1/50743/35/7658/79199/5d561facE6cbc39e4/f8683942982fb4a4.jpg.webp"
        ]
    },
    code: 0,
    msg: "success"
});

Mock.mock("/getSellers", {
    data: {
        has_next: true,
        items: [
            {
                restaurant: {
                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/4/cb/59eee0d19e3c266c93ab6a4fb2328png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed",
                    activities: [
                        {
                            attribute: '{"35": {"1": 29.0, "0": 0}}',
                            description: "满35减29",
                            icon_color: "f07373",
                            icon_name: "减",
                            id: 21967967090,
                            is_exclusive_with_food_activity: true,
                            name: "自营销复杂满减活动",
                            tips: "满35减29",
                            type: 102
                        },
                        {
                            attribute: "10.0",
                            description: "新用户下单立减10元",
                            icon_color: "70bc46",
                            icon_name: "首",
                            id: 21948472866,
                            is_exclusive_with_food_activity: true,
                            name: "新用户立减(不与其他活动共享)",
                            tips: "新用户下单立减10元",
                            type: 103
                        }],
                    authentic_id: 2395452587907965,
                    business_info: '{"recent_order_num_display": "月售4565", "lemon_support_tags": [{"color": "cce23028", "text": "35减29", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "首单减10", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 0,
                    description: "",
                    distance: 219,
                    favored: false,
                    flavors: [{ id: 882, name: "其他快餐" }, { id: 209, name: "盖浇饭" }],
                    float_delivery_fee: 0,
                    float_minimum_order_amount: 0,
                    has_story: false,
                    id: "E11843326404619015584",
                    image_path: "4cb59eee0d19e3c266c93ab6a4fb2328png",
                    is_new: false,
                    is_premium: false,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.033448,
                    longitude: 119.20557,
                    max_applied_quantity_per_order: -1,
                    name: "和番牛井饭（协和店）",
                    next_business_time: "明天 09:55",
                    only_use_poi: false,
                    opening_hours: ["09:55/13:00", "15:55/20:00"],
                    order_lead_time: 38,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "免配送费",
                        extra_fee: 0,
                        is_extra: false,
                        no_subsidy_fee: "",
                        rules: [{
                            fee: 0,
                            price: 0
                        }],
                        tips: "免配送费"

                    },
                    platform: 0,
                    posters: [],
                    promotion_info: "",
                    rating: 4.6,
                    rating_count: 316,
                    recent_order_num: 4565,
                    recommend: { image_hash: "", is_ad: false, reason: "", track: '{"rankType":"1"}' },
                    recommend_reasons: [{ name: "味道超赞" }],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E11843326404619015584",
                    status: 1,
                    support_tags: [{
                        border: "dddddd",
                        color: "666666",
                        icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                        text: "其他快餐",
                        type: 1
                    }, { border: "dddddd", color: "666666", text: "最近光顾" },
                    { border: "4c000000", color: "99000000", text: "支持自取", type: 20 },
                    { border: "dddddd", color: "333333", text: "品质联盟" }
                    ],
                    supports: [{
                        border: "90dddddd",
                        description: "该商户食品安全已由国泰产险承担，食品安全有保障",
                        icon_color: "999999",
                        icon_name: "保",
                        id: 7,
                        name: "食安保",
                        text_color: "666666",
                        two_characters_icon_name: "保险"
                    }
                    ],
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            },
            {
                restaurant: {
                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/2/75/f18a50b294d749b6c0db76a1abe13jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed",
                    activities: [
                        {
                            attribute: '{"49": {"1": 38.0, "0": 0}, "140": {"1": 92.0, "0": 0}, "100": {"1": 69.0, "0": 0}, "70": {"1": 46.0, "0": 0}, "30": {"1": 23.0, "0": 0}}',
                            description: "满30减23，满49减38，满70减46，满100减69，满140减92",
                            icon_color: "f07373",
                            icon_name: "减",
                            id: 1829299722,
                            is_exclusive_with_food_activity: true,
                            name: "自营销复杂满减活动",
                            tips: "满30减23，满49减38，满70减46，满100减69，满140减92",
                            type: 102
                        }, {
                            description: "特价商品0.99元起",
                            icon_color: "f1884f",
                            icon_name: "特",
                            id: 21778928954,
                            name: "超值换购",
                            tips: "超值换购",
                        },
                        {
                            attribute: "10.0",
                            description: "新用户下单立减10元",
                            icon_color: "70bc46",
                            icon_name: "首",
                            id: 21948706794,
                            is_exclusive_with_food_activity: true,
                            name: "新用户立减(不与其他活动共享)",
                            tips: "新用户下单立减10元",
                            type: 103
                        },
                        {
                            description: "折扣商品7.5折起",
                            icon_color: "f07373",
                            icon_name: "折",
                            id: 21561171418,
                            name: "单品折扣",
                            tips: "单品折扣"
                        }
                    ],
                    authentic_id: 6385472582978143,
                    business_info: '{"recent_order_num_display": "月售6783", "lemon_support_tags": [{"color": "cce23028", "text": "30减23", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "49减38", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "70减46", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "100减69", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "140减92", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "7.5折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "0.99元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减10", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 0,
                    description: "石记烤肉饭，师大西门8年老店，单品销量王！饿了么销量王！店主每日与您同食，用心做外卖(本店外卖自行配送的，不送上楼哦！谢谢！)",
                    distance: 325,
                    favored: false,
                    flavors: [{ id: 882, name: "其他快餐" }, { id: 434, name: "烤肉拌饭" }],
                    float_delivery_fee: 0,
                    float_minimum_order_amount: 2,
                    has_story: false,
                    id: "E9365815573659382237",
                    image_path: "275f18a50b294d749b6c0db76a1abe13jpeg",
                    is_new: false,
                    is_premium: false,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.0342871734045,
                    longitude: 119.205810504916,
                    max_applied_quantity_per_order: - 1,
                    name: "石记土耳其烤肉饭(师大店)",
                    next_business_time: "明天 08:30",
                    only_use_poi: false,
                    opening_hours: ["08:30/20:30"],
                    order_lead_time: 30,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "免配送费",
                        extra_fee: 0,
                        is_extra: false,
                        no_subsidy_fee: "",
                        rules: [{ fee: 0, price: 2 }],
                        tips: "免配送费"
                    },
                    platform: 0,
                    posters: [],
                    promotion_info: "石记烤肉饭，师大西门8年老店，单品销量王！饿了么销量王！(本店外卖自行配送的，不送上楼哦！谢谢！)",
                    rating: 4.6,
                    rating_count: 215,
                    recent_order_num: 6783,
                    recommend: { is_ad: false, reason: "" },
                    recommend_reasons: [{ name: "味道超赞" }, { name: "配送飞快" }],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E9365815573659382237",
                    status: 1,
                    support_tags: [
                        { border: "dddddd", color: "666666", icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng", text: "其他快餐", type: 1 },
                        { border: "4c000000", color: "99000000", text: "支持自取", type: 20 },
                        { border: "dddddd", color: "333333", text: "品质联盟" }

                    ],
                    supports: [{
                        border: "90dddddd",
                        description: "商家原因导致订单取消，赔付代金券",
                        icon_color: "999999",
                        icon_name: "赔",
                        id: 10,
                        name: "拒单赔",
                        text_color: "666666",
                        two_characters_icon_name: ""
                    }, {
                        border: "90dddddd",
                        description: "该商户食品安全已由国泰产险承担，食品安全有保障",
                        icon_color: "999999",
                        icon_name: "保",
                        id: 7,
                        name: "食安保",
                        text_color: "666666",
                        two_characters_icon_name: "保险"
                    }
                    ],
                    tags: [],
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            },
            {
                restaurant: {

                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/f/e1/a452fb0be11e09bc88ec4d1343fb7png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed",
                    activities: [
                        {
                            attribute: '{"49": {"1": 38.0, "0": 0}, "140": {"1": 92.0, "0": 0}, "100": {"1": 69.0, "0": 0}, "70": {"1": 46.0, "0": 0}, "30": {"1": 23.0, "0": 0}}',
                            description: "满30减23，满49减38，满70减46，满100减69，满140减92",
                            icon_color: "f07373",
                            icon_name: "减",
                            id: 1829299722,
                            is_exclusive_with_food_activity: true,
                            name: "自营销复杂满减活动",
                            tips: "满30减23，满49减38，满70减46，满100减69，满140减92",
                            type: 102
                        },
                        {
                            description: "特价商品0.99元起",
                            icon_color: "f1884f",
                            icon_name: "特",
                            id: 21778928954,
                            name: "超值换购",
                            tips: "超值换购"
                        },
                        {
                            attribute: "10.0",
                            description: "新用户下单立减10元",
                            icon_color: "70bc46",
                            icon_name: "首",
                            id: 21948706794,
                            is_exclusive_with_food_activity: true,
                            name: "新用户立减(不与其他活动共享)",
                            tips: "新用户下单立减10元",
                            type: 103
                        },
                        {
                            description: "折扣商品7.5折起",
                            icon_color: "f07373",
                            icon_name: "折",
                            id: 21561171418,
                            name: "单品折扣",
                            tips: "单品折扣"
                        }
                    ],
                    authentic_id: 7395402580714957,
                    business_info: '{"recent_order_num_display": "月售851", "lemon_support_tags": [{"color": "cce23028", "text": "28减17", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "48减21", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "65减32", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "89减42", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "8元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "a25c03", "text": "会员特价", "border": "4ca25c03", "background": null, "type": 3, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "门店新客减1", "border": "4ce23028", "background": null, "type": 6, "icon": null}, {"color": "cce23028", "text": "5折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "2.5元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "返红包", "border": "4ce23028", "background": null, "type": 9, "icon": null}, {"color": "cce23028", "text": "赠", "border": "4ce23028", "background": null, "type": 10, "icon": null}, {"color": "cce23028", "text": "首单减17", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 1.2,
                    delivery_mode: {
                        border: "",
                        color: "2395FF",
                        gradient: { rgb_from: "00AAFF", rgb_to: "0085FF" },
                        icon_hash: "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
                        id: 1,
                        is_solid: true,
                        text: "蜂鸟专送",
                        text_color: "FFFFFF"
                    },
                    description: "这个世界没有什么烦心事是吃一份巨饿便当不能解决的，如果不能，那就试试两份。",
                    distance: 1971,
                    favored: false,
                    flavors: [{ id: 882, name: "其他快餐" }, { id: 978, name: "其他小吃" }],
                    float_delivery_fee: 1.9,
                    float_minimum_order_amount: 20,
                    has_story: false,
                    id: "E16342328327661981941",
                    image_path: "fe1a452fb0be11e09bc88ec4d1343fb7png",
                    is_new: false,
                    is_premium: true,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.033073,
                    longitude: 119.192368,
                    max_applied_quantity_per_order: -1,
                    name: "巨饿便当（蔗洲村店）",
                    next_business_time: "明天 09:30",
                    only_use_poi: false,
                    opening_hours: ["09:30/20:30"],
                    order_lead_time: 33,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "配送费¥1.9",
                        extra_fee: 0.1,
                        is_extra: true,
                        no_subsidy_fee: "¥3.1",
                        rules: [{ fee: 1.9, price: 20 }],
                        tips: "配送费¥1.9"
                    },
                    platform: 0,
                    posters: [],
                    promotion_info: "欢迎进入“巨饿便当”。订餐须知：为了确保能及时用餐，希望您提前45分钟以上预定下单，避开高峰时期。",
                    rating: 4.7,
                    rating_count: 114,
                    recent_order_num: 851,
                    recommend: { image_hash: "731111f3f9379e772eedf4855beae8a1jpeg", is_ad: false, track: '{"rankType":"5"}' },
                    recommend_reasons: [{ name: "回头客多" }, { name: "配送飞快" }],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E16342328327661981941",
                    status: 1,
                    support_tags: [
                        { border: "dddddd", color: "666666", icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng", text: "其他快餐", type: 1 },
                        { border: "4c000000", color: "99000000", text: "支持自取", type: 20 },
                        { border: "dddddd", color: "333333", text: "品质联盟" }],
                    supports: [
                        {
                            border: "90dddddd",
                            description: "该商家支持开发票，请在下单时填写好发票抬头",
                            icon_color: "999999",
                            icon_name: "票",
                            id: 4,
                            name: "开发票",
                            text_color: "666666",
                            two_characters_icon_name: "发票",
                        }

                    ],
                    tags: [],
                    target_tag_path: "d53fc0cb4dc67973038cbc591938a1b6png",
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            },
            {
                restaurant: {

                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/b/f0/ff21dcf1bfa2a260fcc3375e59ea1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed",
                    activities: [
                        {
                            attribute: '{"24": {"1": 6.0, "0": 0}, "32": {"1": 9.0, "0": 0}, "75": {"1": 18.0, "0": 0}, "52": {"1": 15.0, "0": 0}, "99": {"1": 24.0, "0": 0}}',
                            description: "满24减6，满32减9，满52减15，满75减18，满99减24",
                            icon_color: "f07373",
                            icon_name: "减",
                            id: 21873397314,
                            is_exclusive_with_food_activity: true,
                            name: "自营销复杂满减活动",
                            tips: "满24减6，满32减9，满52减15，满75减18，满99减24",
                            type: 102
                        },
                        {
                            attribute: "2.0",
                            description: "本店新用户立减2元",
                            icon_color: "00b762",
                            icon_name: "新",
                            id: 902490874,
                            is_exclusive_with_food_activity: true,
                            name: "门店新客立减",
                            tips: "本店新用户立减2元",
                            type: 108
                        },
                        {
                            attribute: "10.0",
                            description: "新用户下单立减10元",
                            icon_color: "70bc46",
                            icon_name: "首",
                            id: 21948716834,
                            is_exclusive_with_food_activity: true,
                            name: "新用户立减(不与其他活动共享)",
                            tips: "新用户下单立减10元",
                            type: 103
                        }
                    ],
                    authentic_id: 5325432575592001,
                    bidding: '{"core":{"index":3,"extraInfo":"{ \"adUnitMgrAb\":\"-1\",\"bidding\":\"{}\",\"rankId\":\"ef02439813f84c968a348c5f9ffcf6df\",\"rankType\":\"8\",\"adLogo\":\"{\\\"url\\\":\\\"https://cube.elemecdn.com/0/1d/49b90a483860967ed3c67dd27714epng.png\\\",\\\"position\\\":\\\"left-bottom\\\"}\",\"latitude\":\"26.032272\",\"rankTime\":\"1566814946\",\"orientMap\":\"{\\\"163971446\\\":0,\\\"170458265\\\":3,\\\"1960479\\\":0,\\\"170506218\\\":0,\\\"163044499\\\":0,\\\"163214572\\\":0,\\\"170484451\\\":0,\\\"171404701\\\":0,\\\"159488845\\\":0,\\\"170847968\\\":3}\",\"cityId\":\"9\",\"userId\":\"0\",\"longitude\":\"119.206436\"}", "target": { "restaurantId": 171404701, "weight": 100, "probability": 0.050289999693632126 }, "come_from": 0, "next": { "restaurantId": 163971446, "weight": 120, "probability": 0.036740001291036606 } }}',
                    business_info: '{"recent_order_num_display": "月售2229", "lemon_support_tags": [{"color": "cce23028", "text": "24减6", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "32减9", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "52减15", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "75减18", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "99减24", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "门店新客减2", "border": "4ce23028", "background": null, "type": 6, "icon": null}, {"color": "cce23028", "text": "领2元红包", "border": "4ce23028", "background": null, "type": 8, "icon": null}, {"color": "cce23028", "text": "首单减10", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 1,
                    delivery_mode: {
                        border: "",
                        color: "2395FF",
                        gradient: { rgb_from: "00AAFF", rgb_to: "0085FF" },
                        icon_hash: "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
                        id: 1,
                        is_solid: true,
                        text: "蜂鸟专送",
                        text_color: "FFFFFF"
                    },
                    description: "",
                    distance: 2774,
                    favored: false,
                    flavors: [{ id: 442, name: "木桶饭" }],
                    float_delivery_fee: 2.6,
                    float_minimum_order_amount: 20,
                    has_story: false,
                    id: "E15011838693344672075",
                    image_path: "bf0ff21dcf1bfa2a260fcc3375e59ea1jpeg",
                    is_new: false,
                    is_premium: false,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.017577,
                    longitude: 119.217662,
                    max_applied_quantity_per_order: -1,
                    name: "好滋味自选餐小炒",
                    next_business_time: "明天 10:00",
                    only_use_poi: false,
                    opening_hours: ["10:00/14:00", "15:50/21:00"],
                    order_lead_time: 46,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "配送费¥2.6",
                        extra_fee: 1.1,
                        is_extra: true,
                        no_subsidy_fee: "¥3.6",
                        rules: [{ fee: 2.6, price: 20 }],
                        tips: "配送费¥2.6"
                    },
                    platform: 0,
                    posters: [],
                    promotion_info: "",
                    rating: 4.4,
                    rating_count: 689,
                    recent_order_num: 2229,
                    recommend: {
                        image_hash: "731111f3f9379e772eedf4855beae8a1jpeg",
                        is_ad: true,
                        reason: "广告",
                        track: '{"rankType":"8"}',
                        recommend_reasons: [],
                        regular_customer_count: 0,
                        scheme: "https://h5.ele.me/shop/#id=E15011838693344672075",
                        status: 1
                    },
                    recommend_reasons: [],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E15011838693344672075",
                    status: 1,
                    support_tags: [
                        { border: "dddddd", color: "666666", icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng", text: "木桶饭", type: 1 },
                        { border: "4c000000", color: "99000000", text: "支持自取", type: 20 },
                        { border: "dddddd", color: "333333", text: "品质联盟" }
                    ],
                    supports: [
                        {
                            border: "90dddddd",
                            description: "商家原因导致订单取消，赔付代金券",
                            icon_color: "999999",
                            icon_name: "赔",
                            id: 10,
                            name: "拒单赔",
                            text_color: "666666",
                            two_characters_icon_name: ""
                        },
                        {
                            border: "90dddddd",
                            description: "该商户食品安全已由国泰产险承担，食品安全有保障",
                            icon_color: "999999",
                            icon_name: "保",
                            id: 7,
                            name: "食安保",
                            text_color: "666666",
                            two_characters_icon_name: "保险"
                        }
                    ],
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            },
            {
                restaurant: {


                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/3/fa/673c44eddcf1499b91d2382463e74png.png?x-oss-process=image/format,webp/resize,w_150",
                    activities: [
                        {
                            attribute: '{"80": {"1": 33.0, "0": 0}, "50": {"1": 21.0, "0": 0}, "300": {"1": 99.0, "0": 0}, "150": {"1": 48.0, "0": 0}, "31": {"1": 11.0, "0": 0}}',
                            description: "满31减11，满50减21，满80减33，满150减48，满300减99",
                            icon_color: "f07373",
                            icon_name: "减",
                            id: 21878619898,
                            is_exclusive_with_food_activity: true,
                            name: "自营销复杂满减活动",
                            tips: "满31减11，满50减21，满80减33，满150减48，满300减99",
                            type: 102
                        },
                        {
                            description: "特价商品2.3元起",
                            icon_color: "f1884f",
                            icon_name: "特",
                            id: 21877697226,
                            name: "单品定价",
                            tips: "单品定价"
                        },
                        {
                            attribute: "10.0",
                            description: "新用户下单立减10元",
                            icon_color: "70bc46",
                            icon_name: "首",
                            id: 21948611922,
                            is_exclusive_with_food_activity: true,
                            name: "新用户立减(不与其他活动共享)",
                            tips: "新用户下单立减10元",
                            type: 103
                        }
                    ],
                    authentic_id: 4375472590023246,
                    bidding: '{"core":{"index":4,"extraInfo":"{ \"adUnitMgrAb\":\"-1\",\"bidding\":\"{}\",\"rankId\":\"ef02439813f84c968a348c5f9ffcf6df\",\"rankType\":\"8\",\"adLogo\":\"{\\\"url\\\":\\\"https://cube.elemecdn.com/0/1d/49b90a483860967ed3c67dd27714epng.png\\\",\\\"position\\\":\\\"left-bottom\\\"}\",\"latitude\":\"26.032272\",\"rankTime\":\"1566814946\",\"orientMap\":\"{\\\"163971446\\\":0,\\\"170458265\\\":3,\\\"1960479\\\":0,\\\"170506218\\\":0,\\\"163044499\\\":0,\\\"163214572\\\":0,\\\"170484451\\\":0,\\\"171404701\\\":0,\\\"159488845\\\":0,\\\"170847968\\\":3}\",\"cityId\":\"9\",\"userId\":\"0\",\"longitude\":\"119.206436\"}", "target": { "restaurantId": 163971446, "weight": 120, "probability": 0.036740001291036606 }, "come_from": 0, "next": { "restaurantId": 159213687, "weight": 60, "probability": 0.07252000272274017 } }}',
                    business_info: '{"recent_order_num_display": "月售1050", "lemon_support_tags": [{"color": "cce23028", "text": "31减11", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "50减21", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "80减33", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "150减48", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "300减99", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "7元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "2.3元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "领6元红包", "border": "4ce23028", "background": null, "type": 8, "icon": null}, {"color": "cce23028", "text": "首单减10", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 0,
                    description: "",
                    distance: 2692,
                    favored: false,
                    flavors: [{ id: 221, name: "川湘菜" }, { id: 236, name: "小龙虾" }],
                    float_delivery_fee: 3,
                    float_minimum_order_amount: 40,
                    has_story: false,
                    id: "E1573543583443178987",
                    image_path: "3fa673c44eddcf1499b91d2382463e74png",
                    is_new: false,
                    is_premium: true,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.017137,
                    longitude: 119.218516,
                    max_applied_quantity_per_order: - 1,
                    name: "虾溜外卖（正荣店）",
                    next_business_time: "明天 10:25",
                    only_use_poi: false,
                    opening_hours: ["10:25/01:50"],
                    order_lead_time: 43,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "配送费¥3",
                        extra_fee: 0,
                        is_extra: false,
                        no_subsidy_fee: "",
                        rules: [{ fee: 3, price: 40 }],
                        tips: "配送费¥3"
                    },
                    platform: 0,
                    posters: [],
                    promotion_info: " 亲 小龙虾新青虾大量上市了 壳薄肉嫩 QQ的不得了 欢迎品尝！↵↵ 小店牛蛙都是店里现杀的 新鲜 有喜欢吃带皮的可以备注的！",
                    rating: 4.2,
                    rating_count: 171,
                    recent_order_num: 1050,
                    recommend: {
                        image_hash: "731111f3f9379e772eedf4855beae8a1jpeg",
                        is_ad: true,
                        reason: "广告",
                        track: '{"rankType":"8"}'
                    },
                    recommend_reasons: [],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E1573543583443178987",
                    status: 1,
                    support_tags: [
                        { border: "dddddd", color: "666666", icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng", text: "川湘菜", type: 1 },
                        { border: "4c000000", color: "99000000", text: "支持自取", type: 20 },
                        { border: "dddddd", color: "333333", text: "品质联盟" }],
                    supports: [
                        {
                            border: "90dddddd",
                            description: "商家原因导致订单取消，赔付代金券",
                            icon_color: "999999",
                            icon_name: "赔",
                            id: 10,
                            name: "拒单赔",
                            text_color: "666666",
                            two_characters_icon_name: ""
                        },
                        {
                            border: "90dddddd",
                            description: "该商户食品安全已由国泰产险承担，食品安全有保障",
                            icon_color: "999999",
                            icon_name: "保",
                            id: 7,
                            name: "食安保",
                            text_color: "666666",
                            two_characters_icon_name: "保险"
                        }
                    ],
                    target_tag_path: "d53fc0cb4dc67973038cbc591938a1b6png",
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            },
            {
                restaurant: {
                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/c/2c/b312b6c2392a65f2626fee34747b5png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed",
                    activities: [{
                        attribute: '{"102": {"1": 61.0, "0": 0}, "68": {"1": 40.0, "0": 0}, "46": {"1": 35.0, "0": 0}, "30": {"1": 19.0, "0": 0}}',
                        description: "满30减19，满46减35，满68减40，满102减61",
                        icon_color: "f07373",
                        icon_name: "减",
                        id: 21886023506,
                        is_exclusive_with_food_activity: true,
                        name: "自营销复杂满减活动",
                        tips: "满30减19，满46减35，满68减40，满102减61",
                        type: 102
                    },
                    {
                        description: "折扣商品6折起",
                        icon_color: "f07373",
                        icon_name: "折",
                        id: 21727037466,
                        name: "单品折扣",
                        tips: "单品折扣"
                    },
                    {
                        attribute: "10.0",
                        description: "新用户下单立减10元",
                        icon_color: "70bc46",
                        icon_name: "首",
                        id: 21948589530,
                        is_exclusive_with_food_activity: true,
                        name: "新用户立减(不与其他活动共享)",
                        tips: "新用户下单立减10元",
                        type: 103
                    },
                    {
                        description: "特价商品15.9元起",
                        icon_color: "f1884f",
                        icon_name: "特",
                        id: 21724512778,
                        name: "单品定价",
                        tips: "单品定价"

                    }

                    ],
                    authentic_id: 6385432586531410,
                    business_info: '{"recent_order_num_display": "月售2888", "lemon_support_tags": [{"color": "cce23028", "text": "30减19", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "46减35", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "68减40", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "102减61", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "6折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "15.9元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "领1元红包", "border": "4ce23028", "background": null, "type": 8, "icon": null}, {"color": "cce23028", "text": "首单减10", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 0,
                    description: "亲爱的餐厅，带给你不一样的味觉感受。",
                    distance: 1012,
                    favored: false,
                    flavors: [{ id: 882, name: "其他快餐" }, { id: 1114, name: "日本料理" }],
                    float_delivery_fee: 0,
                    float_minimum_order_amount: 10,
                    has_story: false,
                    id: "E3530360997407519945",
                    image_path: "c2cb312b6c2392a65f2626fee34747b5png",
                    is_new: false,
                    is_premium: false,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.038763,
                    longitude: 119.20596,
                    max_applied_quantity_per_order: - 1,
                    name: "亲爱的餐厅(师大店)",
                    next_business_time: "明天 09:30",
                    only_use_poi: false,
                    opening_hours: ["09:30/14:00", "16:00/20:00"],
                    order_lead_time: 37,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "免配送费",
                        extra_fee: 0,
                        is_extra: false,
                        no_subsidy_fee: "",
                        rules: [{ fee: 0, price: 10 }],
                        tips: "免配送费"
                    },
                    platform: 0,
                    posters: [],
                    promotion_info: "♥看过来！！亲爱的餐厅改版这十几日以来，不断有顾客反应，喜欢原来的配菜形式。应广大人民群众需求，亲爱的餐厅决定恢复原状，喜欢沙拉的朋友们也不要伤心，菜单里多添加了一个配菜换沙拉的选项，我们力求做到多元化，照顾到每一位顾客。谢谢支持（本店送餐一律不送上楼，谢谢配合！）",
                    rating: 4.7,
                    rating_count: 342,
                    recent_order_num: 2888,
                    recommend: { color: "#e8470b", image_hash: "ac124c767ffa7fd296d3e2d6f01798c6png", is_ad: false, reason: "口碑人气好店" },
                    recommend_reasons: [{ name: "味道超赞" }, { name: "回头客多" }],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E3530360997407519945",
                    status: 1,
                    support_tags: [
                        { border: "dddddd", color: "666666", icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng", text: "其他快餐", type: 1 },
                        { border: "4c000000", color: "99000000", text: "支持自取", type: 20 },
                        { border: "dddddd", color: "333333", text: "品质联盟" }
                    ],
                    supports: [
                        {
                            border: "90dddddd",
                            description: "该商户食品安全已由国泰产险承担，食品安全有保障",
                            icon_color: "999999",
                            icon_name: "保",
                            id: 7,
                            name: "食安保",
                            text_color: "666666",
                            two_characters_icon_name: "保险",
                        }
                    ],
                    tags: [],
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            },
            {
                restaurant: {
                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/c/f8/43b02085414a73575ca331c3ab0f9jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150",
                    activities: [
                        {
                            attribute: '{"32": {"1": 31.0, "0": 0}, "80": {"1": 62.0, "0": 0}, "130": {"1": 91.0, "0": 0}, "160": {"1": 124.0, "0": 0}}',
                            description: "满32减31，满80减62，满130减91，满160减124",
                            icon_color: "f07373",
                            icon_name: "减",
                            id: 22005054274,
                            is_exclusive_with_food_activity: true,
                            name: "自营销复杂满减活动",
                            tips: "满32减31，满80减62，满130减91，满160减124",
                            type: 102
                        },
                        {
                            description: "特价商品1.5元起",
                            icon_color: "f1884f",
                            icon_name: "换",
                            id: 22009077338,
                            name: "超值换购",
                            tips: "超值换购"
                        },
                        {
                            attribute: "10.0",
                            description: "新用户下单立减10元",
                            icon_color: "70bc46",
                            icon_name: "首",
                            id: 21948727890,
                            is_exclusive_with_food_activity: true,
                            name: "新用户立减(不与其他活动共享)",
                            tips: "新用户下单立减10元",
                            type: 103
                        }
                    ],
                    authentic_id: 7375482580241331,
                    business_info: '{"recent_order_num_display": "月售3132", "lemon_support_tags": [{"color": "cce23028", "text": "32减31", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "80减62", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "130减91", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "160减124", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "1.5元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减10", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 0,
                    description: "让每位顾客都能吃香喝饱，味美唇齿留香",
                    distance: 1035,
                    favored: false,
                    flavors: [{ id: 882, name: "其他快餐" }, { id: 225, name: "江浙菜" }],
                    float_delivery_fee: 0,
                    float_minimum_order_amount: 0,
                    has_story: false,
                    id: "E16758069221549704324",
                    image_path: "cf843b02085414a73575ca331c3ab0f9jpeg",
                    is_new: false,
                    is_premium: false,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.038918,
                    longitude: 119.206136,
                    max_applied_quantity_per_order: - 1,
                    name: "酱骨传承(师大店)",
                    next_business_time: "明天 10:00",
                    only_use_poi: false,
                    opening_hours: ["10:00/14:00", "16:00/20:50"],
                    order_lead_time: 37,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "免配送费",
                        extra_fee: 0,
                        is_extra: false,
                        no_subsidy_fee: "",
                        rules: [{ fee: 0, price: 0 }],
                        tips: "免配送费"
                    },
                    platform: 0,
                    posters: [],
                    promotion_info: "本店谢绝拼单，本店外卖一律不送上楼，单点任何物品或凑满减一律不配送。谢谢大家合作",
                    rating: 4.5,
                    rating_count: 90,
                    recent_order_num: 3132,
                    recommend: { is_ad: false, reason: "" },
                    recommend_reasons: [{ name: "味道超赞" }],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E16758069221549704324",
                    status: 1,
                    support_tags: [
                        { border: "dddddd", color: "666666", icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng", text: "其他快餐", type: 1 },
                        { border: "4c000000", color: "99000000", text: "支持自取", type: 20 },
                        { border: "dddddd", color: "333333", text: "品质联盟" }
                    ],
                    supports: [
                        {
                            border: "90dddddd",
                            description: "该商户食品安全已由国泰产险承担，食品安全有保障",
                            icon_color: "999999",
                            icon_name: "保",
                            id: 7,
                            name: "食安保",
                            text_color: "666666",
                            two_characters_icon_name: "保险"
                        }
                    ],
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            },
            {
                restaurant: {
                    act_tag: 0,
                    imgurl: "https://cube.elemecdn.com/2/ff/8ca969e2b4df844c1ede31cf578f9png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed",
                    activities: [
                        {
                            attribute: '{"65": {"1": 32.0, "0": 0}, "26": {"1": 13.0, "0": 0}, "45": {"1": 22.0, "0": 0}, "38": {"1": 19.0, "0": 0}}',
                            description: "满26减13，满38减19，满45减22，满65减32",
                            icon_color: "f07373",
                            icon_name: "减",
                            id: 21925329242,
                            is_exclusive_with_food_activity: true,
                            name: "满减",
                            tips: "满26减13，满38减19，满45减22，满65减32",
                            type: 102
                        },
                        {
                            attribute: '{"1.0": {"quantity": 2, "must_pay_online": 1, "name": "\u76ca\u8fbe\u54c1\u5c1d\u88c5"}}',
                            description: "满1元赠送益达品尝装2份",
                            icon_color: "3cc791",
                            icon_name: "赠",
                            id: 22008229682,
                            is_exclusive_with_food_activity: true,
                            name: "益达",
                            tips: "满1元赠送益达品尝装2份",
                            type: 106
                        },
                        {
                            attribute: "17.0",
                            description: "新用户下单立减17元",
                            icon_color: "70bc46",
                            icon_name: "首",
                            id: 21915318666,
                            is_exclusive_with_food_activity: true,
                            name: "新用户立减(不与其他活动共享)",
                            tips: "新用户下单立减17元",
                            type: 103
                        },
                        {
                            description: "特价商品1元起",
                            icon_color: "f1884f",
                            icon_name: "特",
                            id: 21974329490,
                            name: "绿豆汤1元",
                            tips: "绿豆汤1元"
                        },
                        {
                            description: "折扣商品5折起",
                            icon_color: "f07373",
                            icon_name: "折",
                            id: 21964497458,
                            name: "火鸡面+蒜香腿排+赠可乐",
                            tips: "火鸡面+蒜香腿排+赠可乐"
                        }
                    ],
                    authentic_id: 1395482589880818,
                    business_info: '{"recent_order_num_display": "月售1086", "lemon_support_tags": [{"color": "cce23028", "text": "26减13", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "38减19", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "45减22", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "65减32", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "5折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "1元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "赠", "border": "4ce23028", "background": null, "type": 10, "icon": null}, {"color": "cce23028", "text": "首单减17", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
                    delivery_fee_discount: 1,
                    delivery_mode: {
                        border: "",
                        color: "2395FF",
                        gradient: { rgb_from: "00AAFF", rgb_to: "0085FF" },
                        icon_hash: "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
                        id: 1,
                        is_solid: true,
                        text: "蜂鸟专送",
                        text_color: "FFFFFF"
                    },
                    description: "",
                    distance: 1973,
                    favored: false,
                    flavors: [{ id: 762, name: "面馆" }, { id: 882, name: "其他快餐" }],
                    float_delivery_fee: 2.1,
                    float_minimum_order_amount: 20,
                    has_story: false,
                    id: "E8212748871392973736",
                    image_path: "2ff8ca969e2b4df844c1ede31cf578f9png",
                    is_new: false,
                    is_premium: false,
                    is_star: false,
                    is_stock_empty: 0,
                    is_valid: 1,
                    latitude: 26.033035,
                    longitude: 119.192356,
                    max_applied_quantity_per_order: -1,
                    name: "陈记状元拌面（蔗州村店）",
                    next_business_time: "明天 09:30",
                    only_use_poi: false,
                    opening_hours: ["09:30/20:30"],
                    order_lead_time: 32,
                    out_of_range: false,
                    piecewise_agent_fee: {
                        description: "配送费¥2.1",
                        extra_fee: 0.1,
                        is_extra: true,
                        no_subsidy_fee: "¥3.1",
                        rules: [{ fee: 2.1, price: 20 }],
                        tips: "配送费¥2.1"
                    },
                    platform: 0,
                    posters: [],
                    promotion_info: "用餐高峰时间请提前下单，谢谢",
                    rating: 4.5,
                    rating_count: 140,
                    recent_order_num: 1086,
                    recommend: { image_hash: "731111f3f9379e772eedf4855beae8a1jpeg", is_ad: false, track: '{"rankType":"5"}' },
                    recommend_reasons: [{ name: "配送飞快" }],
                    regular_customer_count: 0,
                    scheme: "https://h5.ele.me/shop/#id=E8212748871392973736",
                    status: 1,
                    support_tags: [
                        { border: "dddddd", color: "666666", icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng", text: "面馆", type: 1 }
                    ],
                    supports: [{
                        border: "90dddddd",
                        description: "该商家支持开发票，请在下单时填写好发票抬头",
                        icon_color: "999999",
                        icon_name: "票",
                        id: 4,
                        name: "开发票",
                        text_color: "666666",
                        two_characters_icon_name: "发票"
                    }],
                    tags: [],
                    theme: {
                        default_color: "2395ff",
                        header_style: 0,
                        hongbao_style: 0,
                        price_color: "ff5339",
                        third_tab_name: "商家",
                        vanish_fields: []
                    },
                    type: 0
                }
            }

        ]
    }

});
Mock.mock("/getAddess",{
    data:{
        address:'榕苑'
    }
})