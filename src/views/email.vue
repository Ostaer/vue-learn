<template>
<div>
  <p>Email: 984952519@qq.com</p>
  <button @click="handleClick">按钮</button>
</div>
</template>

<script>
export default {
  name: 'email',
  methods: {
    handleClick () {
      this.$bus.$emit('on-click')
    }
  }
}
</script>

<style scoped>

</style>
