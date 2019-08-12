<template>
  <div id="app">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post :content="content" @enlarge-text="onEnlargeText"></blog-post>
    </div>
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
      content: "我是内容",
      postFontSize: 1
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
