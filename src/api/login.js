/**
 * login页面的功能接口
 */
// require("../common/js/tool.js");
import { tool } from "commonJs/tool.js";
import { API_CONSTS } from "api/config.js";

//登录页面的接口数据
require("./mock/login.js");
// import { aa } from "./mock/login.js";
/**
 * 接口：用户登录
 *
 * @export
 * @param {any} options
 * @returns
 */
export function userLogin({ verificationCode, phoneNum } = { verificationCode: "", phoneNum: "" }) {
    return tool.post(API_CONSTS.BASE_URL + "/login", {
        verificationCode: verificationCode,
        phoneNum: phoneNum
    });
}

/**
 * 接口：获取手机验证码
 *
 * @export
 * @param {any} options
 * @returns
 */
export function getPhoneVerifyCode(options) {
    let opts = Object.assign(
        {},
        {
            data: {
                //手机号码
                phoneNum: ""
            }
        },
        options
    );
    return tool.post(API_CONSTS.BASE_URL + "/sendVerificationCode", opts.data);
}