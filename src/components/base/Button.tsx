import {ReactNode} from 'react'
type Object = {[key:string]:string}
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type customProps = {
    block?:boolean,
    disabled?:boolean,
    children?:ReactNode,
    size?:string,
    color?:string,
    iconlabel?:boolean,
    icon?:boolean,
    depressed?:boolean,
    ghost?:boolean,
    uppercase?:boolean,
    rounded?:boolean,
    animated?:boolean
}
type Props =  ButtonProps & customProps
function splitProps(props:Props){
    const result = {...props}
    delete result["block"],
    delete result["size"],
    delete result["children"],
    delete result["color"]
    delete result["iconlabel"]
    delete result["icon"]
    delete result["depressed"]
    delete result["ghost"]
    delete result["uppercase"]
    delete result["rounded"]
    delete result["animated"]
    return result
}
const sizeConfig:Object = {
    "2xsmall": "h-5 min-w-[28px] px-1",
    xsmall: "h-6 min-w-[36px] px-2",
    small: "h-7 min-w-[50px] px-3",
    base: "h-9 min-w-[4rem] px-4",
    large: "h-11 min-w-[78px] px-5",
    xlarge: "h-[52px] min-w-[92px] px-6"
}
const Button = (props:Props) => {
    const atb:ButtonProps = splitProps(props)
    const {children,block,disabled,size,color,iconlabel,icon,depressed,className,ghost,uppercase,rounded,animated} = props
    return (
        <button {...atb} className={`${disabled?"disabled":""} ${size?sizeConfig[size]:sizeConfig["base"]} transition-all overflow-hidden ${color?color:"bg-white dark:bg-gray-500 hover:bg-gray-100"} ${ghost?"!border-0 !shadow-none ghost":""} group relative ${depressed?"":"shadow"} ${rounded?"rounded-full":"rounded"} items-center font-medium justify-center ${uppercase?"uppercase":"capitalize"} text-sm ${block?"flex w-full":"inline-flex"} ${iconlabel?"!p-0":""} ${icon?"!p-1 !min-w-0":""} ${animated?"hover:-translate-y-1":""} ${className}`}>
            <span className={`inline-flex items-center ${iconlabel?"h-full":""}`}>{children}</span>
            {disabled?<></>:<span className={`absolute rounded-[50%] scale-[3] w-full h-full ${color?color.includes("light") ||color == "dark"?"bg-black-2":"bg-white":"bg-black-1"} opacity-30 right-[50%] hidden group-active:block group-active:animate-ripple `}></span>}
        </button>
    );
}

export default Button;