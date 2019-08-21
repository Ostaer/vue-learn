import { getResult } from '@/api'
const actions = {
  UPDATE_STATUS ({ commit }) {
     getResult().then(res => {
       console.log(res)
       const { status } = res
       commit('changeStatus', status)
     })
  }
}
export default actions
