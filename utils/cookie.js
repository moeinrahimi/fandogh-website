import Cookies from 'universal-cookie'

const Cookie = new Cookies();
const userId = 'USER_ID'
const userToken = 'USER_TOKEN'

export const getToken = () => {
  return Cookie.get(userToken)
}

export const removeToken = () => {
  return Cookie.remove(userToken)
}

export const setToken = (value) => {
  return Cookie.set(userToken, value, {path:'/'})
}

export const getUserId = () => {
  return Cookie.get(userId)
}

export const removeUserId = () => {
  return Cookie.remove(userId)
}

export const setUserId = (value) => {
  return Cookie.set(userId, value)
}
