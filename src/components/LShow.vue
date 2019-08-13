<template>
<div>
  <p>LShow: {{ content }}</p>
</div>
</template>

<script>
export default {
  name: 'LShow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
