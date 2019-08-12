<template>
  <div id="app">
    <custom-input v-model="searchText"></custom-input>
  </div>
</template>

<script>
import customInput from '@/components/customInput'
export default {
  name: 'App',
  components: {
    customInput
  },
  data () {
    return {
      searchText: "内容"
    }
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
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
</style>
