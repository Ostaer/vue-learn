<template>
  <div id="app">
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br/>
    <span>Selected: {{ selected }}</span>
    <br/>
    <select v-model="multiSelected" multiple style="width: 50px;">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <br/>
    <span>multiSelected: {{ multiSelected }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: '',
      multiSelected: []
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
