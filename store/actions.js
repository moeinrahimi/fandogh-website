import Request from '~/plugins/request'
import {getToken} from "../utils/cookie";

/**
 *
 * @param commit
 * @param state
 * @param username
 * @param password
 * @returns {Promise<*>}
 */
export const login = async ({commit, state}, {username, password}) => {
  try {
    let user = await Request().post('/api/tokens', {username, password})
    commit('SET_USER', user)
    return user
  } catch (e) {
    return Promise.reject(e)
  }
}
export const register = async ({commit, state}, data) => {
  try {
    let user = await Request().post('/api/accounts', data)
    commit('SET_USER', user)
    return user
  } catch (e) {
    return Promise.reject(e)
  }
}

export const showModal = ({commit, state}, modal) => {
  commit('SET_MODAL', modal)
}

export const setMessage = ({commit, state}, message) => {
  commit('SET_MESSAGE', message)
}

export const checkAuthentication =  ({commit, state}, token) => {
  return getToken()
}

export const logout = async ({commit, state}) => {
  try {
    commit('LOGOUT')
  } catch (e) {
    return Promise.reject(e)
  }
}

export const activation = async ({commit, state}, {code, id}) => {
  try {
    return  await Request().patch('/api/users/activation-codes/'+code, {id, code})
  } catch (e) {
    return Promise.reject(e)
  }
}

export const recoveryAccount = async ({commit, state}, {identifier}) => {
  try {
    return await Request().post('/api/users/recovery-tokens', {identifier})
  } catch (e) {
    return Promise.reject(e)
  }
}

export const resetPassword = async ({commit, state}, {id, new_password, code}) => {
  try {
    let data = await Request().patch('/api/users/recovery-tokens/'+code, {new_password: new_password, id: id})
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getImages = async ({commit, state}) => {
  try {
    let images = await Request().get('/api/images')
    commit('SET_IMAGES', images)
    return images
  } catch (e) {
    return Promise.reject(e)
  }
}

export const createImage = async ({commit, state}, {name}) => {
  try {
    return await Request().post('/api/images', name)
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getImageVersions = async ({commit, state}, name ) => {
  try {
    let versions = await Request().get(`/api/images/${name}/version`)
    commit('SET_IMAGE_VERSIONS', versions)
    return versions
  } catch (e) {
    return Promise.reject(e)
  }
}

export const createImageVersion = async ({commit, state}, {name, formData} ) => {
  try {
    return  await Request().post(`/api/images/${name}/version`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (e) {
    return Promise.reject(e)
  }
}
