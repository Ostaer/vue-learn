<template>
  <div id="app">
    <blog-post
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
    ></blog-post>
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
      posts: [
        {id: 1, title: 'My journey with Vue'},
        {id: 2, title: 'Blogging with Vue'},
        {id: 3, title: 'Why Vue is so fun'}
      ]
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
