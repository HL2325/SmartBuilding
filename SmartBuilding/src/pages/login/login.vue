<template>
  <div class="login">
    <div @click="loginBtn">
      登录成功
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    loginBtn () {
      this.$router.push('/home')
    }
  }
}
</script>
