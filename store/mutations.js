import Vue from 'vue'
import {setToken, removeToken} from "../utils/cookie";

/**
 *
 * @param state
 * @param modal
 * @constructor
 */
export const SET_MODAL = (state, modal) => {
  if(modal === undefined) return
  let modals = state.modals
  Object.keys(modals).forEach(key => {
    if(modal !== key) modals[key] = false
  })
  console.log(modal)
  console.log(modals[modal])
  modals[modal] = !modals[modal]
}

export const SET_USER = (state, {token}) => {
  state.user.token = token
 // Vue.set(state.user, 'token', token)
  if(token) setToken(token)
}
export const LOGOUT = (state) => {
  removeToken()
  Vue.set(state.user, 'token', null)
}

export const SET_MESSAGE = (state, message) => {
  state.message = message
}

