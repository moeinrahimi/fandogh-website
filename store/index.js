import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      modals: {
        login: false
      }
    },
    actions:{
      displayLogin: ({commit, state}) => {
        commit('DISPLAY_LOGIN')
      }
    },
    mutations: {
      DISPLAY_LOGIN: (state) => {
        this.state.modals.login = !this.state.modals.login
      }
    }
  })
}

export default createStore