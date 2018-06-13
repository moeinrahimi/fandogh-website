import store from '../store'

export default async function (ctx){
  try {
    let user =  await store().dispatch('checkAuthentication')
  } catch (e) {
  
  }
}