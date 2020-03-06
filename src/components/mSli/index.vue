<style lang="less" src="./my.less" scoped></style>

<template>
  <div class="mSli">

    <main>
      <div class="contain" :id="contain">
        <div class="layer"></div>
        <div class="moren">
          <img src="/static/images/未标题-1.png">
        </div>
        <div class="imglist">
          <ul class="imglistul">
            <li class="imglistli" v-for="item in bannerList"><img :src="item">
            </li>
          

          </ul>
        </div>
        <div class="dotlist">
          <ul class="dotlistul">
            <li class="dotlistli "></li>
            <li class="dotlistli"></li>
            <li class="dotlistli"></li>
            <li class="dotlistli"></li>
            <li class="dotlistli"></li>
          </ul>
        </div>
      </div>
    </main>
  </div>


</template>

<script src="./my.js"></script>