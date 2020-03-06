<style scoped lang="less" src="./my.less"></style>
<template>
  <div class="login">
    <div class="logo">
      <img src="/static/images/logo.png" />
    </div>
    <div class="shortm">
      <h3>短信验证</h3>
    </div>
    <div class="mobii">
      <div class="mobi">
        <input type="text" placeholder="手机号" v-model="form.phone" />
        <div class="mobir" :class="{active:isChange}" @click="getyzm" maxlength="6">{{yzmStr}}</div>
      </div>

      <div class="mobi1">
        <input type="text" placeholder="验证码" v-model="form.yzm" />
      </div>
    </div>

    <div class="hint">
      温馨提示:未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意！
      <a>用户服务协议</a>
    </div>
    <div class="mobii">
      <div class="btn1">
        <van-button type="info" size="large" @click="loginfn">登录</van-button>
      </div>
      <div class="btn1">
        <van-button size="large">关于我们</van-button>
      </div>
    </div>
  </div>
</template>
<script src="./my.js"></script>