<template>
  <div id="app">
    <ol>
      <p v-for="(todo, index) in todos" :key="`todo_${index}`">
        {{ todo.text }}
      </p>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
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
