<style scoped lang="less" src="./my.less"></style>
<template>
    <div class="dianCanIn">

        <!-- <div class="toplist">
            <div class="toplist1" @click="fanHui">
                <p>返回</p>
            </div>
            <div class="toplist1" @click="dianCan">
                <p :class="{active:active1}">点餐</p>
            </div>
            <div class="toplist1" @click="pingJia">
                <p :class="{active:active2}">评价</p>
            </div>
            <div class="toplist1" @click="shangJia">
                <p :class="{active:active3}">商家</p>
            </div>
        </div> -->
        <!-- <div class="fanhui" @click="fanHui">返回</div> -->

        <dianCan></dianCan>
        <div class="navCon flexbox"> 
            <div class="navLeft">
                <router-link to="/dianCan">点餐</router-link>
            </div>
            <div class="navCen">
                <router-link to="/pingjia">评价</router-link>
            </div>
            <div class="navRight">
                <router-link to="/shangjia">商家</router-link>
            </div>
        </div>

          <!-- 子视图 -->
    <!-- <div class="app-entry-rv-ctn">
      <transition name="slidergo">
        <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive>
      </transition>
    </div> -->
    <!-- 子视图__end -->

            <!-- 购物车模块 -->
              <div class="shopcart-con">
      <transition >
        <keep-alive>
          <shopcart></shopcart>
        </keep-alive>
      </transition>
    </div>
    <!-- 购物车模块__end -->
    </div>
</template>
<script src="./my.js"></script>