import Vue from 'vue'
export default (fields, requiredFields) => {
  let pass = true
  Object.keys(fields).forEach(key => {
    if(requiredFields.includes(key)){
      let field = fields[key]
      if(!(field && field.length)) {
        pass = false
        Vue.prototype.$notify({
          title: `فیلد ${key} اجباری است`,
          type: 'error'
        })
      }
    }
  })
  return pass
}