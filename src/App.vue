<template>
  <div id="app">
    <p v-if="seen">现在你看到我了: v-if</p>
    <p v-show="seen">现在你看到我了: v-show</p>
    <p>当前seen: {{ seen }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      seen: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
