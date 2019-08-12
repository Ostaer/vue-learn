<template>
  <div id="app">
    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox"  v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <p>多个复选框：</p>
    <input type="checkbox" id="wangzhe" value="wangzhe" v-model="checkedNames">   <label for="wangzhe">Runoob</label>
    <input type="checkbox" id="google" value="Google"  v-model="checkedNames">     <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao"   v-model="checkedNames">   <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      checked : false,
      checkedNames: []
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
