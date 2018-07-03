import service from './service'

const isClient = typeof window !== 'undefined'

export default function request (params, options) {
  if(!options) options = {}
  return {
    get: async (url, body) => {
      try {
        const {data}  = await service(params, options).get(url, body)
        return data
      } catch (e){
        return Promise.reject(e.response.data.message)
      }
    },
    post: async (url, body) => {
      try {
        const {data} = await service(params, options).post(url, body)
        return data
      } catch (e){
        return Promise.reject(e.response.data.message ? e.response.data.message : e.response.data)
      }
    },
    patch: async (url, body) => {
      try {
        const {data} = await service(params, options).patch(url, body)
        return data
      } catch (e){
        console.log(e)
        return Promise.reject(e.response.data.message)
      }
    }
  }
}
