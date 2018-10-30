import './button.styl'
export default {
  functional: true,
  render(h, { props, ...rest }) {
    let classes = ['btn']
    let styles = props.styles ? props.styles.split(' ') : []
    styles.forEach(element => classes.push('btn-' + element));
    return <button onClick={rest.data.on.onClick} class={classes}> {rest.slots().default} </button>
    // return <a href="/" onClick={rest.data.on.onClick} class={classes}> {rest.slots().default} </a>

  }
}

