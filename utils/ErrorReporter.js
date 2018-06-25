const  ErrorReporter = (error, data) => {
  let errorString = ''
  if(typeof error === 'object'){
    Object.keys(data).map(field => {
      let errorArray = error[field]
      if(errorArray){
        errorArray.map(errorItem => {
          errorString += errorItem+'<br/>'
        })
      }
    })
  } else {
    errorString = error
  }
  return errorString
}

export default ErrorReporter