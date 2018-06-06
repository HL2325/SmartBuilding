<template>
  <div class="root">
    <HeadTop></HeadTop>
    <router-view/>
  </div>
</template>

<script>
import HeadTop from '../../components/Header'
export default {
  data () {
    return {}
  },
  components: {HeadTop}
}
</script>

