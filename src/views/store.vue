<template>
  <div>
    <l-input :value="inputValue" @input="handleInput"></l-input>
    <l-show :content="inputValue"></l-show>
    <p>Show Status: {{ status }}</p>
    <p>Show Name: {{ name }}</p>
    <p>statusDouble: {{ statusDouble }}</p>
  </div>
</template>

<script>
import LInput from '@/components/Linput'
import LShow from '@/components/LShow'
import { mapState } from 'vuex'
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
  computed: {
    // status () {
    //   return this.$store.state.status
    // },
    ...mapState({
      status: state => state.status
    }),
    ...mapState('user',{
      name: state => state.name
    }),
    statusDouble () {
      return this.$store.getters.statusDouble
    }
    // name () {
    //   return this.$store.state.user.name
    // }
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
