<template>
  <div id="app">
    <alert-box>
      <template>
        <span style="color: red;">这是插槽内容</span>
      </template>
    </alert-box>
  </div>
</template>

<script>
import alertBox from '@/components/alertBox'
export default {
  name: 'App',
  components: {
    alertBox
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo-alert-box {
  height: auto;
  width: 100%;
  border: 1px;
  text-align: center;
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
}
</style>
