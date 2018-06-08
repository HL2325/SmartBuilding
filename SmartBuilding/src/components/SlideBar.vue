<template>
  <div class="SlideBar">
    <el-menu unique-opened class="el-menu-vertical-demo" :default-active='current'>
      <el-submenu :index="tl.default_page" v-for="(tl, index) in getThreeTit" :key="index"  :refs="tl.default_page" >
        <template slot="title">
          <span>{{tl.name}}</span>
        </template>
        <el-menu-item @click="clickThree(sl)" :index="sl.code" v-for="(sl, si) in tl.subset" :key="si">{{sl.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      current:''
    }
  },
  computed: {
    ...mapGetters({
      getThreeTit: 'threeTitle'      
    })
  },
  methods: {
    defaultPage () {
      // this.current = 
    },
    clickThree (sl) {
      this.$router.push(sl.default_page)
    }
  },
  mounted () {}
}
</script>

.<style lang="less">
  .SlideBar {
    height: calc(100vh - 60px);
    .el-menu{
      height: 100%;
    }
  }
</style>
