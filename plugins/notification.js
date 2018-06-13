import notie from 'notie'
const Notification = () => {
  return {
    success : (message) => {
      notie.alert({
        type: 'success',
        text: message
      })
    },
    error : (message) => {
      notie.alert({
        type: 'error',
        text: message
      })
    }
  }
}

export default Notification
