<style lang="less" src="./my.less" scoped></style>


<template>

  <div class="homeIn" id="homeIn">
    
    <scro-lly 
    
    ref="scrollY"
     @change="fchange"
    >
    <!-- <div class="wrapper" > -->
      <!-- <div class="wrapper1"> -->
        <!-- <scroll :scrollY="true"
        :pullUpLoad="true"
        @pullingUp = "pullingUp"
        ref="scroll"
        > -->
      <header>
        <div class="h-contain">
          <!-- <button @click="aa">点击我 </button> -->
          <span @click="editAdd"><i class="iconfont icon-address"></i><span>{{maddress}}</span></span></div>
        <div class="h-contain1"><input type="text" placeholder="搜索饿了么商家"></div>
      </header>
      <main>
        <bannerSlider ref="banner" :bannerList="bannerList"></bannerSlider>
        <div class="m-contain">
          <div class="m-contain1">
            <div>
              <img src='/static/images/1.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/2.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/3.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/4.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/5.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/6.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/7.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/8.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/9.webp'>
            </div>
            <span>美食</span>
          </div>
          <div class="m-contain1">
            <div>
              <img src='/static/images/10.webp'>
            </div>
            <span>美食</span>
          </div>
        </div>
        <div class="m-quaa">
          <div class="m-qua">
            <div class="m-qua1 fl">
              <h3>品质套餐</h3>
              <p>搭配齐全吃的好</p>
              <span>立即抢购》</span>
            </div>
            <div class="m-qua2 fr"><img src="/static/images/11.webp"></div>
            <div class="cl"></div>
          </div>
        </div>
        <div class="super">
          <h1 class="fl"><i class="iconfont">&#xe642;</i> 超级会员</h1>
          <h2 class="fl">·已过期21天</h2>
          <p class="fr">立即续费></p>
          <div class="cl"></div>
        </div>
        <div class="poin">
          <img src="/static/images/12.webp">
          <div class="poin1">
            资质证照
          </div>
        </div>
        <div class="poina">
          <span>——</span> 推荐商家 <span>——</span>
        </div>
        <div class="syn">
          <ul>
            <li><a href="#">综合排序</a></li>
            <li><a href="#">距离最近</a></li>
            <li><a href="#">品质联盟</a></li>
            <li><a href="#">帅选</a></li>
          </ul>
        </div>




        <div class="darcom" :list="restaurantList">
          <div class="dar"  
           @click.prevent="xiangQing(item.restaurant.id)"
          v-for="item in restaurantList" :key="item.name">
            <div class="dar1"><img :src="item.restaurant.imgurl"></div>
            <div class="dar2">
              <h1><a href="#">{{item.restaurant.name}}</a></h1>
              <p>{{item.restaurant.rating}} 月售{{item.restaurant.recent_order_num}}单</p>

              <p class="fl">￥{{item.restaurant.float_minimum_order_amount}}元起送 |
                {{item.restaurant.float_delivery_fee}}</p>
              <h3 class="fr">{{item.restaurant.distance}}m | {{item.restaurant.order_lead_time}}分钟</h3>
              <div class="cl"></div>

              <p class="fl">其他快餐</p>
              <p class="fl">最近关顾</p>
              <h2 class="fr">{{item.restaurant.support_tags[0].text}}</h2>
              <div class="cl"></div>
              <h4 class="fl">{{item.restaurant.activities[0].icon_name}}</h4>
              <p class="fl ellipsis hp4">{{item.restaurant.activities[0].description}}</p>
              <h3 class="fr">3个活动</h3>
              <div class="cl"></div>
              <h5 class="fl">{{item.restaurant.activities[1].icon_name}}</h5>
              <p class="fl">{{item.restaurant.activities[1].description}}</p>
              <div class="cl"></div>
            </div>
          </div>
<jiazai></jiazai>
        </div>

      </main>
    </scro-lly>
     <!-- </scroll> -->
    <!-- </div>  -->
     <!-- </div> -->
  </div>


</template>

<script src="./my.js"></script>