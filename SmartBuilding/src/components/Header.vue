<template>
  <div class="head">
    <img class="logo" src="../assets/image/logo.png" alt="">
    <div class="midTopTit">
       <router-link class="slideList" v-for="(l, index) in secondTit" :key="index" @click.native="clickIndex(l.code)" :to="l.default_page">
         {{l.name}}
      </router-link>
    </div>
    <div class="userInfo">
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-icon--" style="font-size:25px"></i>
      <span class="userImg"></span>
      <span class="userName">用户名</span>
    </div>
  </div>
</template>

<script>
import store from '../store/store.js'
import * as types from '../store/types.js'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      secondTit: 'secondTitle'
    })
  },
  methods: {
    ...mapActions([
      'setThreeTit'
    ]),
    clickIndex (l) {
      let threeTit = this.secondTit.find(todo => todo.code === l)
      this.setThreeTit(threeTit)
    }
  }
}
</script>

<style lang="less">
  .head{
    width: 100%;
    height: 60px;
    background: #00182e;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .logo{
      width: 180px;
      height: 40px;
      margin-top: 10px;
      padding-left: 20px;
    }
    .midTopTit{
      width: 60%;
      display: flex;
      justify-content: space-around;
      .slideList{
        color: #a5adb5;
        cursor: pointer;
        height: 100%;
      }
    }
    
    .userInfo{
      padding-right: 20px;
      color: #fff;
      height: 100%;
      i{
        color: #fff;
        font-size: 20px;
        margin-right: 20px;
        float: left;
        cursor: pointer;
      }
      .userImg{
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        margin-left: 10px;
        margin-right: 20px;
        margin-top: 10px;
        float: left;
      }
      .userName{
        font-size: 14px;
      }
    }
  }
  .router-link-active{
    color: #fff !important;
  }
</style>
