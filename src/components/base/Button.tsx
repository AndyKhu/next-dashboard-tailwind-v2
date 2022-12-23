import IconComponent from "@components/IconComponent";
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {iconr?:string,iconlabel?:boolean,animation?:boolean,ghost?:boolean,shadowless?:boolean,icon?:string,iconclassName?:string,label?:string,className?:string,color?:string,roundedFull?:boolean,small?:boolean,large?:boolean,iconOnly?:boolean}
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['color']
    delete result['icon']
    delete result['label']
    delete result['small']
    delete result['roundedFull']
    delete result['large']
    delete result['iconOnly']
    delete result['iconclassName']
    delete result['shadowless']
    delete result['ghost']
    delete result['animation']
    delete result['iconr']
    delete result['iconlabel']
    return result
}
function getSize(small?:boolean,large?:boolean){
    if(small)
        return "text-xs"
    else if(large)
        return "text-xl"
    else
        return "text-sm"
}
function getLabelColor(color?:string){
    if(color?.includes("primary")){
        return "bg-blue-500"
    }
    else if(color?.includes("secondary")){
        return "bg-indigo-500"
    }
    else if(color?.includes("success")){
        return "bg-emerald-500"
    }
    else if(color?.includes("danger")){
        return "bg-rose-500"
    }
    else if(color?.includes("warning")){
        return "bg-amber-400"
    }
    else if(color?.includes("info")){
        return "bg-sky-400"
    }
    else if(color?.includes("light")){
        return "bg-gray-200"
    }
    else if(color?.includes("dark")){
        return "bg-gray-500"
    }
    return ""
}
const Button = (props:Props) => {
    const atb = splitProps(props)
    const {icon,iconr,color,className,small,large,label,iconOnly,roundedFull,iconclassName,shadowless,ghost,animation,iconlabel} = props
    const size = getSize(small,large).concat(iconOnly?"":" px-3");
    const labelc = getLabelColor(color)
    // const size = iconOnly?(small?"text-sm":medium?"text-base":large?"text-2xl":"text-xl"):(small?"px-2 text-sm":medium?"px-4 text-base":large?"px-8 text-2xl":"px-6 text-xl")
    if(iconlabel){
        return (
            <button className={`px-0 flex ${iconr?"justify-between":""} h-9 ${shadowless?"":"border shadow-md"} justify-center items-center ${roundedFull?"rounded-full":"rounded"} ${size} ${color?color:"bg-gray-300 hover:bg-gray-200"} ${ghost?"border-0 shadow-none ghost":""} ${animation?"hover:-translate-y-1 transition":""} ${className}`} {...atb}>
                {icon?<div className={`flex h-9 px-3 items-center justify-center ${labelc} ${color?.includes("outline")?"text-white":""} ${roundedFull?"rounded-full":"rounded-tl rounded-bl"}`}>
                    <IconComponent name={icon?icon:""} className={`${label?iconOnly?"":"":""} ${iconclassName}`}/>
                </div>:<></>}
                {iconOnly || !label?<></>:<span className="px-3 capitalize font-medium">{label}</span>}
                {iconr?<div className={`flex h-9 px-3 items-center justify-center ${labelc} ${color?.includes("outline")?"text-white":""} ${roundedFull?"rounded-full":"rounded-tr rounded-br"}`}>
                    <IconComponent name={iconr?iconr:""} className={`${label?iconOnly?"":"":""} ${iconclassName}`}/>
                </div>:<></>}
            </button>
        )
    }
    else{
        return (
            <button className={`${iconOnly?"p-1":"p-2"} flex ${iconr?"justify-between":""} ${shadowless?"":"border shadow-md"} justify-center items-center ${roundedFull?"rounded-full":"rounded"} ${size} ${color?color:"bg-gray-300 hover:bg-gray-200"} ${ghost?"border-0 shadow-none ghost":""} ${animation?"hover:-translate-y-1 transition":""} ${className}`} {...atb}>
                {icon?<IconComponent name={icon?icon:""} className={`${label?iconOnly?"":"mr-2":""} ${iconclassName}`}/>:<></>}
                {iconOnly || !label?<></>:<span className="capitalize font-medium">{label}</span>}
                {iconr?<IconComponent name={iconr?iconr:""} className={`${label?iconOnly?"":"ml-2":""} ${iconclassName}`}/>:<></>}
            </button>
        )
    }
}

export default Button;