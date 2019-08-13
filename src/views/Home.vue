<template>
<div>
  <h1>我是Home组件</h1>
  <button @click="handleClick">放回上一页</button>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    handleClick () {
      // this.$router.go(-1)
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
