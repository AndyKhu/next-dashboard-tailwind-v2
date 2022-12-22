type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {outline?:boolean,bcolor?:string,color?:string,className?:string,label?:string,disabled?:boolean}
import { useId } from "react"
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['label']
    delete result['bcolor']
    delete result['color']
    delete result['outline']
    return result
}
const Checkbox = (props:Props) => {
    const atb = splitProps(props)
    const {label,className} = props
    const id = useId();
    return (
        <div className="flex items-center">
            <div className="relative border">
                <input type="checkbox" {...atb} id={`checkbox-${id}`}  className={`p-2 cursor-pointer appearance-none peer ${className}`}/>
            </div>
            <label>test2</label>
        </div>
    );
}

export default Checkbox;