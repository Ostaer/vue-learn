<template>
  <div id="app">
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>
</template>

<script>
import buttonCounter from '@/components/buttonCounter'
export default {
  name: 'App',
  components: {
    buttonCounter
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
