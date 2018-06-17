/**
 *
 * @param state
 * @param modal
 * @constructor
 */
export const SET_MODAL = (state, modal) => {
  let modals = state.modals
  console.log(modals)
  Object.keys(modals).forEach(key => {
    if(modal !== key) modals[key] = false
  })
  modals[modal] = !modals[modal]
}
