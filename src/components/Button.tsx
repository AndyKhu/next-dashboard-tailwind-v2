import IconComponent from "./IconComponent";
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {icon?:string,iconclassName?:string,label?:string,className?:string,color?:string,roundedFull?:boolean,small?:boolean,medium?:boolean,large?:boolean,iconOnly?:boolean}
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['color']
    delete result['icon']
    delete result['label']
    delete result['small']
    delete result['medium']
    delete result['roundedFull']
    delete result['large']
    delete result['iconOnly']
    delete result['iconclassName']
    return result
}
const Button = (props:Props) => {
    const atb = splitProps(props)
    const {icon,color,className,small,large,label,iconOnly,medium,roundedFull,iconclassName} = props
    const size = iconOnly?(small?"text-sm":medium?"text-base":large?"text-2xl":"text-xl"):(small?"px-2 text-sm":medium?"px-4 text-base":large?"px-8 text-2xl":"px-6 text-xl")
    return (
        <button className={`p-2 flex justify-center items-center ${roundedFull?"rounded-full":"rounded"} ${size} ${color?color:"bg-gray-300 hover:bg-gray-200"} ${className}`} {...atb}>
            <IconComponent name={icon?icon:""} className={`${label?iconOnly?"":"mr-2":""} ${iconclassName}`}/>
            {iconOnly?<></>:<span className="capitalize font-medium">{label}</span>}
        </button>
    );
}

export default Button;