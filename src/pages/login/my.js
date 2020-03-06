import {
  tool
} from "commonJs/tool.js";
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
import {
  userLogin,
  getPhoneVerifyCode
} from "api/login.js";
import * as types from "@/store/mutation-types";
import {
  Toast
} from 'vant';

export default {
  name: '',
  props: {},
  data() {
    return {
      isChange: false,
      yzmStr: "获取验证码",
      form: {
        phone: "13111111111",
        yzm: "123456"
      }
    };
  },
  components: {

  },
  created() {},
  computed: {},
  mounted() {
    // console.log(tool);
  },
  methods: {
    ...mapMutations([types.SET_USERINFO]),
    /**
     * 获得验证码功能
     */
    getyzm() {
      if (this.isChange) {
        return;
      }
      let rules = [];
      rules.push({
        name: "手机号码",
        value: this.form.phone,
        phone: true
      });
      let result = tool.checkForm({
        rules: rules
      });
      if (!result) {
        return;
      }

      //改变按钮状态
      let limitTimes = 60;
      this.yzmStr = `已发送（${limitTimes}s）`;
      this.isChange = true;

      let timer = setInterval(() => {
        if (limitTimes <= 0) {
          clearInterval(timer);
          this.yzmStr = `获取验证码`;
          this.isChange = false;
          return;
        }
        limitTimes--;
        this.yzmStr = `已发送（${limitTimes}s）`;
      }, 1000);
      //发送请求
      //Toast('系统正在发送验证码...');
      jToast.loading("系统正在发送验证码...");
      setTimeout(() => {
        getPhoneVerifyCode({
          phoneNum: this.form.phone
        }).then((resp) => {
          // console.log(resp);
          // Toast.clear(true);
          // Toast('验证码发送成功！');
          jToast.close();
          jToast.show({
            text: "发送成功"
          });
        })
      }, 1000);
    },
    /**
     * 登录功能
     */
    loginfn() {
      if (!this.checkFormfn()) {
        return;
      }
      // console.log("表单提交！");
      jToast.loading("登陆中...");
      userLogin({
        verificationCode: this.form.yzm,
        phoneNum: this.form.phone
      }).then((resp) => {
        jToast.close();
        this[types.SET_USERINFO](resp.data.data);
        console.log(resp.data.data);
        jToast.show({
          text: "登录成功跳转到首页..."
        });
        setTimeout(() => {
          this.$router.push({
            // name: `homeIn`
            path: '/home',
            query: {
              userId: resp.data.data
            }
          });
        }, 500);

      });
    },
    /**
     * 表单验证
     */
    checkFormfn() {

      let rules = [];

      rules.push({
        name: "手机号码",
        value: this.form.phone,
        phone: true
      });

      rules.push({
        name: "验证码",
        value: this.form.yzm,
        required: true
      });

      let result = tool.checkForm({
        rules: rules
      })

      return result;
    }
  }
};
