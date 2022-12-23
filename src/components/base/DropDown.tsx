import { useState } from "react";
import Button from "./Button";
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {data?:string[]}
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['data']
    return result
}
const DropDown = (props:Props) => {
    const atb = {...props}
    const [show,setShow] = useState(false)
    const {data} = props
    return (
        <div className="inline-block relative group">
            <Button onBlur={()=>{setShow(false)}} onClick={()=>{setShow(!show)}} label="test" color="primary" iconr="FaCaretDown"/>
            <div className={`absolute shadow overflow-hidden ${show?"block":"hidden"} top-full left-0 bg-white`}>
                <ul>
                    {data?.map((item,index) =>{
                        return (
                            <li className="p-4 hover:bg-gray-100" key={`item-${index}`}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default DropDown;