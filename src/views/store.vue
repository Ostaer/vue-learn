<template>
  <div>
    <l-input :value="inputValue" @input="handleInput"></l-input>
    <l-show :content="inputValue"></l-show>
  </div>
</template>

<script>
import LInput from '@/components/Linput'
import LShow from '@/components/LShow'
export default {
  name: 'store',
  components: {
    LInput,
    LShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style scoped>

</style>
