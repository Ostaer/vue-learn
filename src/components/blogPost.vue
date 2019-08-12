<template>
  <div>
    <div>
      <button @click="enlargeText">Enlarge text</button>
      <span v-html="content"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogPost',
  props: ['content'],
  methods: {
    enlargeText () {
      this.$emit('enlarge-text', 0.1)
    }
  }
}
</script>

<style scoped>

</style>
