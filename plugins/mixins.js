import Vue from 'vue'

Vue.prototype.$dataTable = ({rows, length= 0, props = [], id}) => {
  return rows.map(row => {
    let rowKeys = Object.keys(row)
    let rowValues = rowKeys.filter( key => props.includes(key)).map( key => row[key] )
    let len = rowValues.length < length ? length - rowValues.length : 0
    return {rows: rowValues.concat(new Array(len)), meta: {id: id ? row[id]: null}}
  })
}