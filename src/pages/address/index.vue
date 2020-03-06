<template>
<div class="address">
  <div class="editCon">
    <router-link :to="{name:'homeIn'}">返回</router-link>
    <p><input type="text" placeholder="输入地址" v-model="value" class="minput"></p>
    <div><button @click="ediBtn">提交</button></div>
    </div>
    <div>sjadklsajdlka:{{$store.state.address.address}} </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
import * as types from '@/store/mutation-types'
export default {
  name: '',
  props: {},
  data() {
    return {
      aa: '',
      value: ''
    }
  },
  components: {},
  created() {},
  computed: {
    ...mapState(['address'])
    // address: {
    //   get() {
    //     return this.$store.state.address.address
    //   },
    //   set(val) {
    //     this.$store.state.address.address = val
    //   }
    // }
  },
  mounted() {
    this.aaa()
  },
  watch: {
    value() {
      // console.log(1111)
      this[types.SET_ADDRESS]({ address: this.value })
      // console.log(this.address, 777)
      // this.aa = this.address.address
      // return aa
    }
  },
  methods: {
    aaa() {
      console.log(this.address.address, 111)
    },
    ...mapMutations([types.SET_ADDRESS]),
    ediBtn() {
      // let value = document.getElementsByClassName('minput')[0]
      // if (value.value != '') {
      // this[types.SET_ADDRESS]({ address: this.value })
      // console.log(this.$store.state.address, 999)
      // this.address.address = { ...this.address.address }
      // }
    }
  }
}
</script>
<style scoped lang="less">
.editCon {
  text-align: center;
  p {
    display: inline-block;
    border: #999 solid 1px;
    position: relative;
    top: 30px;
    font-size: 20px;
    padding: 5px 5px;
  }
  button {
    position: relative;
    top: 50px;
    font-size: 20px;
    background: blue;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
  }
}
</style>