import './checkbox.styl'
export default {
  functional: true,
  render(h, {props, ...rest}){
    let classes = ['btn']
    let styles = props.styles ? props.styles.split(' ') : []
    styles.forEach(element => classes.push('btn-'+element));
    return <div class="checkbox"><input onClick={ e => rest.listeners.input(e.target.checked) } type="checkbox" id={props.id} /><label for={props.id}>{props.title}</label></div>
  }
}