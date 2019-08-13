<template>
  <div id="app">
    {{ message }}
    <br/>
    <div class="box" ref="test"></div>
    <div>
      <button @click="message = 'abc'">更新message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'Hello'
    }
  },
  computed: {
    resversedMessage: function () {
      return this.message.split().reverse()
    }
  },
  methods: {
    handler () {
      console.log('I am handler!')
    }
  },
  beforeCreate () {
    console.log('beforeCreate钩子')
    console.log(this) // VUe实例已经被初始化
    console.log(this.message) // undefined 属性还未初始化
    console.log(this.handler) // methods 还未初始化
    console.log(this.$refs.test) // undefined  dom还未渲染
  },
  created () {
    console.log('Created钩子')
    console.log(this) // VUe实例已经被初始化
    console.log(this.message) // Hello 属性已经初始化
    console.log(this.handler) // methods 方法已经初始化
    console.log(this.$refs.test) // undefined dom还未渲染
  },
  beforeMount () {
    console.log('beforeMount钩子')
    console.log(this) // VUe实例已经被初始化
    console.log(this.message) // Hello 属性已经初始化
    console.log(this.handler) // methods 方法已经初始化
    console.log(this.$refs.test) // undefined dom还未渲染
  },
  mounted () {
    console.log('mounted钩子')
    console.log(this) // VUe实例已经被初始化
    console.log(this.message) // Hello 属性已经初始化
    console.log(this.handler) // methods 方法已经初始化
    console.log(this.$refs.test) // <div class="box"></div> dom已经渲染完成
  },
  beforeUpdate () {
    console.log('beforeUpdate钩子')
    console.log(this) // VUe实例已经被初始化
    console.log(this.message) // abc 属性已经更新
    console.log(this.handler) // methods 方法已经初始化
    console.log(this.$refs.test) // <div class="box"></div> dom已经渲染完成
  },
  updated () {
    console.log('updated钩子')
    console.log(this) // VUe实例已经被初始化
    console.log(this.message) // abc 属性已经渲染到页面上
    console.log(this.handler) // methods 方法已经初始化
    console.log(this.$refs.test) // <div class="box"></div> dom已经渲染完成
  }

}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  width: 500px;
  height: 50px;
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
}
</style>
