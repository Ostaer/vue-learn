<template>
  <div>
    <l-input v-model="inputValue"></l-input>
    <p>{{ inputValue }}</p>
  </div>
</template>

<script>
import LInput from '@/components/Linput'
export default {
  name: 'store',
  components: {
    LInput
  },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style scoped>

</style>
