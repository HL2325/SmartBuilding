<template>
  <div class="root">
    <HeadTop></HeadTop>
    <router-view/>
  </div>
</template>

<script>
import {getTit} from '../../api/index.js'
import HeadTop from '../../components/Header'
import store from '../../store/store.js'
import * as types from '../../store/types.js'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      titlst: []
    }
  },
  methods: {
    ...mapActions([
      'setSecondTit'
    ])
  },
  mounted () {
    getTit().then(data => {
      this.titlst = data.data
      this.setSecondTit(this.titlst)
    })
  },
  components: {HeadTop}
}
</script>

