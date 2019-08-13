<template>
  <div id="app">
    <div>
      <router-link :to='{name: "home"}'>进入home</router-link>
    </div>
    <router-view/>
    <router-view name="email"></router-view>
    <router-view name="tell"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'Hello'
    }
  }
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
