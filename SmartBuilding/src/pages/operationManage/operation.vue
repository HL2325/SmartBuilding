<template>
  <div class="operation">
    <el-container>
      <el-aside width="200px">
        <slide-bar></slide-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SlideBar from '@/components/SlideBar'
export default {
  data () {
    return {}
  },
  components: {SlideBar}
}
</script>
