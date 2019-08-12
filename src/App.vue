<template>
  <div id="app">
    <input v-model="message" placeholder="编辑我……">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'Hello'
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
