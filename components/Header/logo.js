import logo from './../../assets/img/logo.png'
export default {
  functional:true,
  render(h, {props}) {
    return <a href={props.link} > <img width={props.width} height={props.height}  src={logo} /> </a>
  }
}