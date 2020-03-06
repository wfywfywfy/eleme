<style scoped lang="less" src="./my.less">
</style>
<template>
 <div class="home">
   <!-- <div
    class="app-entry-ctn"
    > -->
    <!-- <div class="app-entry-rv-ctn">
      <transition>
        <keep-alive> -->
          <router-view></router-view>
          <!-- </keep-alive>
      </transition>
    </div> -->
   <!-- </div> -->
    
     <van-tabbar v-model="active">
      <van-tabbar-item
        icon="1 iconfont icon-changyonglogo40-copy-copy-copy-copy"
        @click="homeInfn"
      >首页</van-tabbar-item>
      <van-tabbar-item icon="1 iconfont icon-faxian-copy-copy-copy-copy" @click="foundfn">发现</van-tabbar-item>
      <van-tabbar-item icon="1 iconfont icon-order-copy" @click="orderfn">订单</van-tabbar-item>
      <van-tabbar-item icon="1 iconfont icon-wode-copy" @click="userfn">我的</van-tabbar-item>
    </van-tabbar>
    <!-- <footerMenu></footerMenu> -->
  </div>
</template>
<script src="./my.js"></script>