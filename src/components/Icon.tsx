import * as fi from "react-icons/fi"
import * as fa from "react-icons/fa"
interface Config {
    [key: string]: typeof fa.FaAddressBook
}
const Icon = ({name,className,size,left,right}:{name:string,className?:string,size?:number,left?:boolean,right?:boolean}) => {
    const IconBank:Config = {...fa,...fi}
    const isFind = name in IconBank
    const Result = IconBank[name]
    return (
        <>
        {isFind?<Result size={size} className={`${left?"mr-2 -ml-1":""} ${right?"ml-2 -mr-1":""} ${className}`}></Result>:<></>}
        </>
        
    );
}

export default Icon;