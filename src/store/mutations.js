import vue from 'vue'
const mutations = {
  changeStatus(state, payload) {
    state.status = payload
  },
  AddVersion(state) {
    vue.set(state, 'version', 2.0)
  }
}
export default mutations
