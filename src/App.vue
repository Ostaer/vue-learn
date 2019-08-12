<template>
  <div id="app">
    <div class="box" :class="{ 'active': isActive, 'text-danger': hasError }">
      对象语法
    </div>
    <div class="box" :class="[isActive ? 'active' : '', hasError2 ? 'text-danger' : '' ]">
      数组语法
    </div>
    <div class="box" :class="[{ 'active': isActive}, hasError2 ? 'text-danger' : '' ]">
      数组语法嵌套对象语法
    </div>
    <div class="box active" :style="[{ 'background': bgColor}]">
      修改style示例
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isActive: true,
      hasError: true,
      hasError2: false,
      bgColor: "blue"
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
.box {
  width: 100%;
  height: 50px;
  margin: 10px;
  text-align: center;
  background-color: black;
}
.active {
  background-color: green;
}
.text-danger {
  color: red;
}
</style>
