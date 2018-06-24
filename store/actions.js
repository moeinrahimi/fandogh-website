import Request from '~/plugins/request'
import {getToken} from "../utils/cookie";


export const nuxtServerInit = ({ commit }, { req }) => {
  process.__COOKIE__ = req.headers.cookie
  if(process.__COOKIE__) {
    commit('SET_USER', {token: process.__COOKIE__})
  }
}

/**
 *
 * @param commit
 * @param state
 * @param username
 * @param password
 * @returns {Promise<*>}
 */
export const login = async ({commit, state}, {username, password}) => {



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
    console.error(e)
    return Promise.reject(e)
  }
}

export const activation = async ({commit, state}, {code, id}) => {
  try {
    return  await Request().patch('/api/users/activation-codes/'+id, {id})
  } catch (e) {
    return Promise.reject(e)
  }
}