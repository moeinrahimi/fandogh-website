const  ErrorReporter = (error, data, returnArray) => {
  let errorString = ''
  let array = []
  if(typeof error === 'object'){
    Object.keys(data).map(field => {
      let errorArray = error[field]
      if(errorArray){
        errorArray.map(errorItem => {
          array.push(errorItem)
          errorString += errorItem+'<br/>'
        })
      }
    })
  } else {
    errorString = error
    array = [error]
  }
  return returnArray ? array : errorString
}

export default ErrorReporter