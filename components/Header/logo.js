import logo from './../../assets/svg/ic-fandogh.svg'
export default {
  functional:true,
  render(h, {props}) {
    return <a href={props.link} > <img width={props.width} height={props.height}  src={logo} /> </a>
  }
}