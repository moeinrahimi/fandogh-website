import './input.styl'
export default {
  functional: true,
  render(h, {props, ...rest}){
    let classes = ['fandogh-input']
    let styles = props.styles ? props.styles.split(' ') : []
    styles.forEach(element => classes.push(element));
    return <input type={props.type} placeholder={props.placeholder} class={classes}  />
  }
}