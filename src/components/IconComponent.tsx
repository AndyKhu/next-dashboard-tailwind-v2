import * as icons from "react-icons/fi"
import * as fa from "react-icons/fa"

const selecticon = (value: string): value is keyof typeof icons => {
  return value in icons
}
const selectfa = (value: string): value is keyof typeof fa => {
  return value in fa
}
const IconComponent = (props: {name:string,className?:string,size?:number,border?:boolean,borderC?:string}) => {
    const type = props.name?props.name.substring(0,2).toLowerCase():"fi"
    if(type === "fa"){
      if (selectfa(props.name)) {
        const Icon = fa[props.name]
        if(props.border)
        return (
          <div className={`p-2 rounded mr-2 ${props.borderC?props.borderC:"bg-gray-300"}`}>
            <Icon size={props.size} className={props.className}></Icon>
          </div>
        )
        else
          return <Icon size={props.size} className={props.className}></Icon>
      }
      return <></>
    }else{
      if (selecticon(props.name)) {
        const Icon = icons[props.name]
        if(props.border)
        return (
          <div className={`p-2 rounded mr-2 ${props.borderC?props.borderC:"bg-gray-300"}`}>
            <Icon size={props.size} className={props.className}></Icon>
          </div>
        )
        else
          return <Icon size={props.size} className={props.className}></Icon>
      }
      return <></>
    }
}

export default IconComponent
