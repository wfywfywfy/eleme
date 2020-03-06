
<template>
 <div class="dianCanHead">
  <div class="zhouPin">
  
    <div class="goback-btn" @click="backCtn">
      返回
       </div>
       <div class="mcontent flexbox">
         <div class="img-con">
           <img src="/static/images/seller_avatar_256px.jpg">
           </div>
           <div class="right-con">
             <div class="right-con1">
               <div class="right-con1a"><img src="/static/images/brand.png"> </div>
               <div class="right-con1b">粥品香坊 （回龙观）</div>
             </div>
              <div class="right-con2">
                蜂鸟专送/38分钟送达
                </div>
                 <div class="right-con3">
                   <div>
                   <img src="/static/images/decrease.png">
                   </div>
                   <span>在线支付满28减5</span>
                   </div>
                    <div class="right-con4">
               <span>5个 ></span>
               
                </div>
             </div>
          </div>
          <div class="zhoupin-bot" @click="showDetail">
              <div class="zhoupin-bot1">
            <img src="/static/images/bulletin.png">
            </div >
            <div class="zhoupin-bot2 ellipsis">粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方</div>
            <p>></p>
            </div>
           
  </div>
 <transition name="pageFade2">
  <div v-if="isDetail" class="myDetail">
    <h1>粥品香坊 （回龙观）</h1>
    <div class="myDetailTit flexbox">
      <div class="baseLine"></div>
      <div class="baseLineTit">优惠信息</div>
      <div class="baseLine"></div>
      </div>
      <div class="myDetailCon1">
        <div><img src="/static/images/decrease.png"><span>在线支付满28减5</span></div>
        <div><img src="/static/images/decrease.png"><span>在线支付满28减5</span></div>
        <div><img src="/static/images/decrease.png"><span>在线支付满28减5</span></div>
        <div><img src="/static/images/decrease.png"><span>在线支付满28减5</span></div>
        <div><img src="/static/images/decrease.png"><span>在线支付满28减5</span></div>

        </div>
         <div class="myDetailTit flexbox">
      <div class="baseLine"></div>
      <div class="baseLineTit">商家公告</div>
      <div class="baseLine"></div>
      </div>
      <div class="myDetailCon2">秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的秘方粥品香坊烹饪周燎的</div>
      <div class="myDetailCon3">
        <i class="iconfont icon-close" @click="hideDetail"></i>
      </div>
      
    </div>
    </transition>
 </div>
</template>
<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      isDetail: false
    }
  },
  components: {},
  created() {},
  computed: {},
  mounted() {},
  methods: {
    backCtn() {
      this.$router.push({
        path: '/homeIn'
      })
    },
    showDetail() {
      this.isDetail = true
    },
    hideDetail() {
      this.isDetail = false
    }
  }
}
</script>
<style scoped lang="less">
.flexbox {
  display: flex;
}
.ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.zhouPin {
  position: relative;
  min-width: 320px;
  max-width: 480px;
  // height: 300px;
  width: 100%;
  // border: solid red 1px;
  padding: 25px 25px 50px;
  background-color: rgba(7, 17, 27, 0.5);
  color: #fff;
  // background-image: url('../../../static/images/seller_avatar_256px.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // -webkit-filter: blur(5px);
  // filter: blur(15px);
  // transform: scale(1.2);
  // z-index: -100;
  .goback-btn {
    position: absolute;
    left: 0px;
    top: 0px;
    // border: solid red 1px;
    border-radius: 0px 10px 10px 0px;
    font-size: 13px;
    padding: 5px 10px;
    color: white;
    background: rgb(63, 180, 131);
  }
  .img-con {
    width: 64px;
    height: 64px;
    img {
      width: 100%;
    }
  }
  .right-con {
    // font-size: 0px;
    // border: red solid 1px;
    left: 15px;
    position: relative;
    width: 80%;
    .right-con1 {
      .right-con1a {
        width: 30px;
        height: 18px;
        display: inline-block;
        vertical-align: top;
        margin: 3px 10px 0px 0px;
        img {
          width: 100%;
          // vertical-align: middle;
        }
      }
      .right-con1b {
        display: inline-block;
        font-size: 18px;
      }
    }
    .right-con2 {
      margin-top: 3px;
      font-size: 13px;
    }
    .right-con3 {
      margin-top: 3px;
      div {
        padding: 2px;
        display: inline-block;
        // background: #c9f;
        vertical-align: top;
        margin: 2px 2px 0px 0px;
        img {
          width: 12px;
          height: 12px;
        }
      }

      span {
        font-size: 13px;
      }
    }
    .right-con4 {
      padding: 3px 5px;
      border-radius: 12px;
      // border: red solid 1px;
      position: absolute;
      bottom: 0px;
      left: 170px;
      background: rgba(7, 17, 27, 0.5);
      span {
        font-size: 13px;
      }
    }
  }
  .zhoupin-bot {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 5px 10px;
    // border: solid red 1px;
    width: 100%;
    background: rgba(7, 17, 27, 0.5);
    .zhoupin-bot1 {
      display: inline-block;
      vertical-align: top;
      width: 22px;
      height: 12px;
      // border: solid red 1px;
      margin: 3px 3px 0px 0px;

      img {
        width: 100%;
      }
    }
    .zhoupin-bot2 {
      display: inline-block;
      font-size: 13px;
      width: 70%;
    }
    p {
      position: absolute;
      right: 85px;
      bottom: 6px;
      font-size: 13px;
    }
  }
}
.myDetail {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  // &.fade-enter-active,
  // &.fade-leave-active {
  //   transition: all 0.5s;
  // }

  // &.fade-enter,
  // &.fade-leave-active {
  //   opacity: 0;
  //   background: rgba(7, 17, 27, 0);
  // }
  h1 {
    // position: relative;
    // top: 100px;
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
    // overflow: hidden;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  border: solid red 1px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  .myDetailTit {
    // border: solid red 1px;
    width: 80%;
    margin: 20px auto;
    .baseLineTit {
      font-size: 13px;
      padding: 5px 20px;
    }
    .baseLine {
      flex: 1;
      position: relative;
      top: -12px;
      border-bottom: 1px solid #666;
    }
  }
  .myDetailCon1,
  .myDetailCon2 {
    width: 70%;
    margin: 0px auto;
    font-size: 13px;
  }
  .myDetailCon1 {
    div {
      margin-bottom: 5px;
    }
    img {
      width: 16px;
      height: 16px;
      vertical-align: middle;
      margin: -3px 5px 0px 0px;
    }
  }
  .myDetailCon2 {
    line-height: 1.7;
  }
  .myDetailCon3 {
    position: relative;
    top: 150px;
    text-align: center;
    i {
      // color: rgba(7, 17, 27, 0.5);
      font-size: 50px;
    }
  }
}
.pageFade2-enter-active,
.pageFade2-leave-active {
  transition: all 0.36s;
}

.pageFade2-enter,
.pageFade2-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
</style>

