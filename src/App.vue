<template>
  <div id="app">
    <blog-post :title="title"></blog-post>
  </div>
</template>

<script>
import blogPost from '@/components/blogPost'
export default {
  name: 'App',
  components: {
    blogPost
  },
  data () {
    return {
      title: '我是父组件标题'
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
