<template>
  <div id="app">
    <ul>
      <li v-for="(value, key, index) in object" :key="`object_${key}`">
        {{key}} : {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      object: {
        name: '王者荣耀',
        url: 'https://pvp.qq.com/',
        slogan: '玩的不仅是技术，更是梦想！'
      }
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
