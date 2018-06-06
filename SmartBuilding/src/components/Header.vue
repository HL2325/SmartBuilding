<template>
  <div class="head">
    <img class="logo" src="../assets/image/logo.png" alt="">
    <div class="midTopTit">
       <router-link tag="span" class="slideList" v-for="(l, index) in list" :key="index" :to="l.uri">
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
export default {
  data () {
    return {
      list: [
        {name: '首页', uri: '/home'},
        {name: '基础管理', uri: '/base'},
        {name: '设备管理', uri: '/device'},
        {name: '运维中心', uri: '/operation'},
        {name: '财务管理',  uri: '/finance'},
        {name: '仓库管理', uri: '/storehouse'},
        {name: '访客管理', uri: '/visitor'}
      ]
    }
  }
}
</script>

<style lang="less">
  .head{
    width: 100%;
    height: 70px;
    background: #00182e;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    .logo{
      width: 180px;
      height: 40px;
      margin-top: 15px;
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
        margin-top: 15px;
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
