<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'liran'
    }
  }
}
</script>

<style scoped>

</style>
