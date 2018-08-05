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
  modals[modal] = !modals[modal]
}

export const SET_USER = (state, {token}) => {
  state.user.token = token
  if(token) setToken(token)
}
export const LOGOUT = (state) => {
  removeToken()
  state.user.token = null
}

export const SET_MESSAGE = (state, message) => {
  state.message = message
}

export const SET_IMAGES = (state, images) => {
  state.images = images
}

export const SET_IMAGE_VERSIONS = (state, versions) => {
  state.versions = versions
}

export const SET_IMAGE_VERSION_BUILDS = (state, builds) => {
  state.builds = builds
}
export const UPDATE_PROGRESS = (state, percent) => {
  state.progress = percent
}

