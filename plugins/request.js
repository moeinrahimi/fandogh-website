import service from './service'
import Message from './notification'
const isClient = typeof window !== 'undefined'

export default function request (params, options) {
  if(!options) options = {}
  return {
    get: async (url, body) => {
      try {
        const {data}  = await service(params, options).get(url, body)
        if(data.message && isClient) Message().success(data.message)
        return data
      } catch (e){
        if(e.response.data.message && isClient) Message().error(e.response.data.message)
        return Promise.reject(e.response.data.message)
      }
    },
    post: async (url, body) => {
      try {
        const {data} = await service(params, options).post(url, body)
        if(data.message && isClient) Message().success(data.message)
        return data
      } catch (e){
        if(e.response.data.message && isClient) Message().error(e.response.data.message)
        return Promise.reject(e.response.data.message)
      }
    }
  }
}
