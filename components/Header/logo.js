import logo from './../../assets/img/logo.png'
export default {
  functional:true,
  render(h, {props}) {
    return <img width={props.width} height={props.height}  src={logo} />
  }
}