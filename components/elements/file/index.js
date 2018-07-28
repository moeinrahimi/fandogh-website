import './file.styl'
import FButton from '../button'
export default {
  functional: true,
  render(h, {props, ...rest}){
    let classes = ['btn']
    let styles = props.styles ? props.styles.split(' ') : []
    styles.forEach(element => classes.push('btn-'+element));
    return <div class="upload-btn-wrapper">
      <label> فایل خود را اینجا آپلود کنید</label>
      <FButton styles={'red'}> Browse </FButton>
      <input type="file" id={props.id} />
    </div>
  }
}