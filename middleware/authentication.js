import store from '../store'

export default async function ({req}){
  if(process.isServer && req.cookies['USER_TOKEN']){
    store().dispatch('checkAuthentication', req.cookies['USER_TOKEN'])
  }
}