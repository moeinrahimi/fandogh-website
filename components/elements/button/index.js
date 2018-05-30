import './button.styl'
export default {
  functional: true,
  render(h, {props, ...rest}){
    let classes = ['btn']
    let styles = props.styles ? props.styles.split(' ') : []
    styles.forEach(element => classes.push('btn-'+element));
    return <button class={classes}> {rest.slots().default} </button>
  }
}