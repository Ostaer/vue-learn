<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'blogPost',
  props: [
    {
      title: {
        type: String,
        require: true,
        default: () => 'default Title'
      }
    }
  ]
}
</script>

<style scoped>

</style>
