import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js';
import fastclick from "fastclick";
import VueLazyload from 'vue-lazyload';


Vue.config.productionTip = false
/**导入vant框架资源 */
import Vant from 'vant';
import 'vant/lib/index.css';
// import VueTouch from 'vue-touch'
// Vue.use(VueTouch, {
//   name: 'v-touch'
// })
Vue.use(Vant);

// 吐司插件----------
import "@/assets/jToast/jToast.js";
import "@/assets/jToast/jToast.less";
// 吐司插件__end----------

// VueTouch.config.swipe = {
//   threshold: 50 //设置左右滑动的距离
// }



const fns = {
  initVueLazyLoad() {
    // or with options
    Vue.use(VueLazyload, {
      preLoad: 1.3,
      // error: 'dist/error.png',
      // loading: 'dist/loading.gif',
      attempt: 1
    })
  },
  /**
   * 注册fastclick
   */
  initFastClick() {
    //安装fastclick
    fastclick.attach(document.body);
  },
  /**
   * 全局路由守卫
   */
  initRouter() {
    router.beforeEach((to, from, next) => {
      // ...
      next();
    })
  },
  /**
   * 字体自适应解决方案
   * @exports
   * @param {any} paramName
   * @returns
   */
  loadFontSizeAuto() {
    let e = window.document,
      t = e.documentElement,
      o = "orientationchange" in window ? "orientationchange" : "resize",
      baseVal = 62.5, //基础值
      a = function () {
        var winWidth = t.clientWidth,
          resultFontSize = 62.5;

        if (winWidth <= 320) {
          resultFontSize = baseVal;
        } else if (winWidth <= 960) {
          resultFontSize = baseVal + ((winWidth - 320) / 1020) * 100;
        } else {
          resultFontSize = 126;
        }
        t.style.fontSize = resultFontSize + "%";
      };

    e.addEventListener &&
      (window.addEventListener(o, a, !1),
        e.addEventListener("DOMContentLoaded", a, !1));
  },
  fire() {
    fns.initFastClick();
    fns.initRouter();
    fns.loadFontSizeAuto();
  }
};

fns.fire();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
