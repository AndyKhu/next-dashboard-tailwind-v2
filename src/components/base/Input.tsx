import IconComponent from "@components/IconComponent";
import { useId, useState } from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {roundedfull?:boolean,iconl?:string,iconr?:string,label?:string,split?:boolean,xlabel?:string}
function splitProps(props:Props){
    const result = {...props}
    delete result['iconl']
    delete result['iconr']
    delete result['label']
    delete result['split']
    delete result['xlabel']
    delete result['roundedfull']
    return result
}
const Input = (props:Props) => {
    const atb = splitProps(props)
    const {iconl,label,readOnly,disabled,split,type,xlabel,roundedfull} = props
    const id = useId()
    const [focus,setFocus] = useState(false)
    const iconr = type === "password"?"FaRegEye": props.iconr
    const [show,setShow] = useState(true)
    const tmp = split?"px-4":(iconl?"pr-4":iconr?"pl-4":"px-4")
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={`input-${id}`} className="text-sm font-medium mb-2">{label}</label>
            <div className={`flex items-center border relative ${disabled?"bg-gray-100 text-gray-400":""} ${roundedfull?"rounded-full":"rounded"}`}>
                <div className={`absolute bottom-0 top-0 scale-y-105 transition-all duration-500 border-b-2 rounded border-indigo-600  ${focus && !readOnly?"w-full left-0":"w-0"}`}></div>
                {iconl?
                <div className={`w-12 h-9 flex items-center justify-center rounded-tl rounded-bl ${split?"bg-gray-200":""}`}>
                    <IconComponent name={iconl}/>
                </div>:<></>}
                <input onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}} id={`input-${id}`} className={`${tmp} text-sm placeholder:text-sm placeholder:font-light placeholder:tracking-wide h-9 focus:outline-none bg-transparent w-full`} {...atb} type={show?type:"text"} />
                {iconr?
                <div onClick={()=>{if(type=="password")setShow(!show)}} className={`w-12 ${type=="password"?"z-10":""} h-9 flex items-center justify-center rounded-tr rounded-br ${split?"bg-gray-200":""} ${type == "password"?"cursor-pointer":""}`}>
                    <IconComponent name={show?iconr:"FaRegEyeSlash"}/>
                </div>:<></>}
            </div>
            {xlabel?<div className="text-xs mt-2 text-zinc-400">{xlabel}</div>:<></>}
        </div>
    );
}

export default Input;