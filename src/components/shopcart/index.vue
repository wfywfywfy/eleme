<style lang="less" src="./vs.less" scoped></style>  

<template>
  <div class="shopcart-ctn">
    <!-- 购物车导航栏 -->
    <div
      class="shopcart"
      @click="showList"
    >
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <!-- 购物车图标 -->
            <!--高亮的状态： <div class="logo highlight"> -->
            <div
              class="logo"
              :class="{highlight:hasGoods}"
            >
              <!-- 高亮状态：<i class="iconfont icon-Shoppingcart highlight"></i> -->
              <i
                class="iconfont icon-gouwucheman"
                :class="{highlight:hasGoods}"
              ></i>
            </div>
            <!-- 购物车图标__end -->

            <!-- 当前购物车商品数据量 -->
            <div
              class="num"
              v-show="hasGoods"
            >{{shopCartLength}}</div>
            <!-- 当前购物车商品数据量__end -->
          </div>

          <!-- 购物车需付金额 -->
          <!--高亮状态 <div class="price highlight">￥0</div> -->
          <div
            class="price"
            :class="{highlight:hasGoods}"
          >￥{{shopCartTotalPrice}}</div>
          <!-- 购物车需付金额__end -->

          <!-- 配送费 -->
          <div class="desc">另需配送费￥{{sellerInfo.deliveryPrice}}元</div>
          <!-- 配送费__end -->

        </div>

        <!--起送费 -->
        <div class="content-right">
          <!-- <div class="pay not-enough"> -->
          <!-- <div class="pay enough"> -->
          <div
            class="pay"
            :class="[isPayEnough!='结算'?'not-enough':'enough']"
          >
            {{isPayEnough}}
          </div>
        </div>
        <!-- 起送费__end -->

      </div>

      <!-- 购物车列表 -->
      <transition name="pageFade2">
        <div
          ref="shopcartlistdom"
          class="shopcart-list"
          v-show="isShowShopCartList"
        >
         <!-- <div class="list-content"> -->
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span
              class="empty"
              @click="clearShopCart"
            >清空</span>
          </div>
          <div class="list-content">
            <scrollY ref="scrollY3">
            <ul ref="shopListul">
              <li
                class="food"
                v-for="item in shopCart"
              >
                <span class="name">{{item.name}}</span>
                <div class="price"><span>￥{{item.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <div
                      class="cart-decrease"
                      @click="delShopFn(item)"
                    >
                      <span class="iconfont icon-jianhao"></span>
                    </div>
                    <div class="cart-count ">{{item.count}}</div>
                    <div
                      class="cart-add"
                      @click="addShopFn(item)"
                    >
                      <span class="iconfont icon-jiahao1"></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            </scrollY>
          </div>
        </div>
      </transition>
      <!-- 购物车列表__end -->

    </div>
    <!-- 购物车导航栏__end -->

    <!-- 遮罩层 -->
    <div
      class="list-mask"
      v-show="isShowShopCartList"
      @click="hideList"
    ></div>
    <!-- 遮罩层__end -->

  </div>
</template>

<script src = "./vm.js"></script>
