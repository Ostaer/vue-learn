<template>
  <div>
    <l-input :value="inputValue" @input="handleInput"></l-input>
    <l-show :content="inputValue"></l-show>
    <p>Show Status: {{ status }}</p>
    <p>Show Name: {{ name }}</p>
    <p>statusDouble: {{ statusDouble }}</p>
    <p>nameFirstLetter: {{ nameFirstLetter }}</p>
    <button @click="status=inputValue">修改</button>
    <button @click="$store.commit('AddVersion')">修改版本</button>
    {{ $store.state.version }}
  </div>
</template>

<script>
import LInput from '@/components/Linput'
import LShow from '@/components/LShow'
import { mapState, mapGetters } from 'vuex'
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
    status: {
      get() {
        return this.$store.state.status
      },
      set (val) {
        this.$store.commit('changeStatus', val)
      }
    },
    // ...mapState({
    //   status: state => state.status
    // }),
    ...mapState('user',{
      name: state => state.name
    }),
    // statusDouble () {
    //   return this.$store.getters.statusDouble
    // }
    ...mapGetters([
      'statusDouble',
      'nameFirstLetter'
    ]),

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
