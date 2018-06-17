import Request from '~/plugins/request'

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

export const showModal = ({commit, state}, modal) => {
  commit('SET_MODAL', modal)
}