import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import {getToken} from "../utils/cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      modals: {
        login: false,
        register: false,
        forgot_password: false,
        message: false
      },
      message: '',
      user:{
        token: getToken()
      }
    },
    actions: actions,
    mutations: mutations
  })
}

export default createStore