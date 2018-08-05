export const formData = (forms) => {
  let formData = new FormData()
  forms.map(item => {
    if(item.type === 'image') {
      let imageFile = document.querySelector('#'+item.name)
      if(imageFile.files[0]) {
        formData.append(item.name, imageFile.files[0])
      }
    } else {
      formData.append(item.name,item.value)
    }
  })
  return formData
}