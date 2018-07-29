import store from '../store'

export default async function ({req}){
  store().dispatch('checkAuthentication', req.cookies['USER_TOKEN'])
}