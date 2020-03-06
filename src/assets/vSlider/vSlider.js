import {
  tool as toolfn
} from "commonJs/tool.js";
// 移动端轮播图插件

var Sli = function (id) {
  this.contain = document.getElementById(id.id);

  // console.log(contain);
  this.imglist = this.contain.getElementsByClassName('imglist')[0];
  this.imglistul = this.imglist.getElementsByClassName('imglistul')[0];
  this.imglistli = this.imglistul.getElementsByClassName('imglistli');
  // console.log(this.imglistli);
  this.step = 1;
  this.conwidth = null;
  this.timer = null;
  fns.fire.call(this);
  this.layer = this.contain.getElementsByClassName('layer')[0];
  // console.log(this.layer);
}
var fns = {
  //克隆第一张和最后一张
  clonefn: function () {
    var that = this;
    var firstchi = that.imglistli[0].cloneNode(true);
    that.imglistul.appendChild(firstchi);
    var lastchi = that.imglistli[(that.imglistli.length - 2)].cloneNode(true);
    that.imglistul.insertBefore(lastchi, that.imglistli[0]);
  },
  //设置ul的宽度，li的宽度
  getulfn: function () {
    var that = this;
    that.conwidth = that.contain.clientWidth;
    var ulwidth = that.imglistul.style.width;
    ulwidth = that.conwidth * that.imglistli.length + 'px';

    for (var i = 0; i < that.imglistli.length; i++) {
      that.imglistli[i].style.width = that.conwidth + 'px';

    }

    that.imglistul.style.width = ulwidth;
    toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
    // that.step++;
    // console.log(conwidth);
  },
  //图片左右滑动的方法
  bindmovfn: function () {
    var that = this;
    var starpageX, endpageX, diff;

    that.imglist.addEventListener("touchstart", function (e) {
      clearInterval(that.timer);
      starpageX = e.changedTouches[0].pageX;
    });

    that.imglist.addEventListener("touchend", function (e) {
      endpageX = e.changedTouches[0].pageX;
      diff = starpageX - endpageX
      that.layer.style.display = 'block';
      if (diff >= 30) {
        that.step++;
        toolfn.setTransition(that.imglistul, 1000);
        toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
        that.imglistul.addEventListener("webkitTransitionEnd", function () {
          if (that.step > that.imglistli.length - 2) {
            toolfn.clearTransition(that.imglistul);
            that.step = 1;

            toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
          }
          that.layer.style.display = 'none';
        }, false)


      } else if (diff < -30) {
        that.layer.style.display = 'block';
        that.step--;
        toolfn.setTransition(that.imglistul, 1000);

        toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
        that.imglistul.addEventListener("webkitTransitionEnd", function () {
          if (that.step < 1) {
            toolfn.clearTransition(that.imglistul);
            that.step = that.imglistli.length - 2;
            toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
          }
          that.layer.style.display = 'none';

        })

      } else {

        toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
        that.layer.style.display = 'none';
      }


      fns.settimeoutfn.call(that);



    });
  },
  settimeoutfn: function (that) {
    var that = this;
    that.timer = setInterval(function () {
      that.layer.style.display = 'block';
      toolfn.setTransition(that.imglistul, 1000);
      that.step++;


      // console.log(that.step);
      toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
      // toolfn.clearTransition(that.imglistul);
      that.imglistul.addEventListener("webkitTransitionEnd", function () {
        if (that.step > that.imglistli.length - 2) {
          toolfn.clearTransition(that.imglistul);
          that.step = 1;
          toolfn.setTransform(that.imglistul, -that.conwidth * that.step, 0);
        }
        that.layer.style.display = 'none';
      })

    }, 3000);
  },
  resizefn: function () {
    var that = this;
    window.addEventListener("resize", function () {
      that.step = 1;
      toolfn.clearTransition(that.imglistul);
      that.layer.style.display = 'block';
      clearInterval(that.timer);
      fns.getulfn.call(that);

      that.layer.style.display = 'none';
      fns.settimeoutfn.call(that);
    }, false)
  },
  fire: function () {
    fns.clonefn.call(this);
    fns.getulfn.call(this);
    fns.settimeoutfn.call(this);
    fns.bindmovfn.call(this);
    fns.resizefn.call(this);

  }

}

const createSilderMobile = function (id) {
  return new Sli(id);
};

export default createSilderMobile;
