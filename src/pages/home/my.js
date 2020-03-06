export default {
  name: '',
  data() {
    return {
      isChange1: false,
      isChange2: false,
      isChange3: false,
      isChange4: false,
      yzmStr: "获取验证码",
      active: '',

      form: {
        phone: "13111111111",
        yzm: ""
      }
    };
  },
  mounted() {

  },
  methods: {
    homeInfn() {

      this.$router.push({
        name: `homeIn`
      });

    },
    foundfn() {

      this.$router.push({
        name: `found`
      });

    },
    orderfn() {

      this.$router.push({
        name: `order`
      });

    },
    userfn() {

      this.$router.push({
        name: `user`
      });

    },

  }
};
