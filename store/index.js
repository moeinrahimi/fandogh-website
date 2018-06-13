import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
const createStore = () => {
  return new Vuex.Store({
    state: {
      modals: {
        login: false
      }
    },
    actions: actions,
    mutations: mutations
  })
}

export default createStore