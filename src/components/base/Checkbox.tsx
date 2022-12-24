type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {outline?:boolean,color?:string,className?:string,label?:string,disabled?:boolean}
import Icon from "@components/Icon"
import { useId } from "react"
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['label']
    delete result['color']
    delete result['outline']
    return result
}
function getbcolor(color?:string){
    switch(color){
        case "primary":
            return "border-primary-1"
        case "secondary":
            return "border-secondary-1"
        case "success":
            return "border-success-1"
        case "danger":
            return "border-danger-1"
        case "warning":
            return "border-warning-1"
        case "info":
            return "border-info-1"
        case "light":
            return "border-light-1 shadow"
        case "dark":
            return "border-dark-1"
        default:
            return "border-gray-500"
    }
}
function gettcolor(color?:string){
    switch(color){
        case "primary":
            return "text-primary-1"
        case "secondary":
            return "text-secondary-1"
        case "success":
            return "text-success-1"
        case "danger":
            return "text-danger-1"
        case "warning":
            return "text-warning-1"
        case "info":
            return "text-info-1"
        case "light":
            return "text-light-1"
        case "dark":
            return "text-dark-1"
        default:
            return "text-gray-500"
    }
}
const Checkbox = (props:Props) => {
    const atb = splitProps(props)
    const {label,className,type,outline,color,disabled} = props
    let colors = color?color:"bg-gray-500";
    const radio = type === "radio"
    const id = useId();
    const bcolor = getbcolor(color)
    const tcolor = gettcolor(color)
    return (
        <div className={`flex mb-4 items-center font-medium ${className}`}>
            <div className={`relative inline-flex mr-2 w-[20px] h-[18px] ${radio?"text-[9px]":"text-xs"} items-center justify-center`}>
                <input type="checkbox" {...atb} id={`checkbox-${id}`}  className={`absolute z-10 w-full h-full top-0 cursor-pointer appearance-none peer`}/>
                {/* border */}
                <span className={`absolute h-full w-full top-0 z-0 border-2 ${outline?bcolor:"border-gray-500"} ${disabled?"disabled":""} ${radio?"rounded-full":"rounded"} block ${outline?"":"peer-checked:hidden"}`}/>
                {/* fill */}
                <span className={`absolute h-full w-full top-0 z-0 ${radio?"rounded-full":"rounded"} ${disabled?"disabled":""} hidden peer-checked:block ${outline?"bg-transparent":colors} transition`}/>
                {/* fill effect */}
                <span className={`absolute h-full w-full top-0 z-0 ${radio?"rounded-full":"rounded"} ${disabled?"disabled":""}  hidden ${colors} transition peer-checked:animate-[ping_1s_ease-in-out] ${outline?"":"peer-checked:block"}`}/>
                {/* Icon */}
                <Icon name={radio?"FaCircle":"FaCheck"} className={`z-[1] ${outline?tcolor:color=="light-solid"?"text-gray-300":"text-white"} ${disabled?"disabled":""} hidden peer-checked:block`}/>
            </div>
            {label?<label className="w-[calc(100%-18px)]">{label}</label>:<></>}
        </div>
    );
}

export default Checkbox;