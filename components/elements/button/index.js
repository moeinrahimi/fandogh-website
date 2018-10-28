import './button.styl'
export default {
  functional: true,
  render(h, {props, ...rest}){
    console.log(rest.data.on.onClick.valueOf())
    let classes = ['btn','anchor-tag-btn']
    let styles = props.styles ? props.styles.split(' ') : []
    styles.forEach(element => classes.push('btn-'+element));
    
    return <button tag="button" to={rest.data.on.onClick} class={classes}> {rest.slots().default} </button>
    // return <a href="/" onClick={rest.data.on.onClick} class={classes}> {rest.slots().default} </a>
    
  }
}

