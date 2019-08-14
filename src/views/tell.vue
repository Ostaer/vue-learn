<template>
<div>
  <p>Tell: 13xxxxxxxxxx</p>
  <p v-for="(item, index) in message" :key="index">{{ item }}</p>
</div>
</template>

<script>
export default {
  name: 'tell',
  data () {
    return {
      message: []
    }
  },
  mounted () {
    this.$bus.$on('on-click', () => {
      this.message.push('点了一次')
    })
  }
}
</script>

<style scoped>

</style>
