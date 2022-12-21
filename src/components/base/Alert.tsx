import IconComponent from "@components/IconComponent";

interface Props{
    children: React.ReactNode,
    className?: string,
    borderless?:boolean,
    color?:string,
    iconl?:string,
    iconlc?:string,
    iconr?:string,
    iconrc?:string,
    leftborder?:boolean,
    topborder?:boolean,
    labelrounded?:boolean,
    close?: ()=> void
}
function getlborderc(color?:string){
    if(color?.includes("primary"))
        return "!border-l-blue-600"
    else if(color?.includes("secondary"))
        return "!border-l-indigo-600"
    else if(color?.includes("success"))
        return "!border-l-green-600"
    else if(color?.includes("danger"))
        return "!border-l-red-600"
    else if(color?.includes("warning"))
        return "!border-l-amber-500"
    else if(color?.includes("info"))
        return "!border-l-sky-500"
    else if(color?.includes("light"))
        return "!border-l-gray-300"
    else if(color?.includes("dark"))
        return "!border-l-gray-700"
}
function getlbordetc(color?:string){
    if(color?.includes("primary"))
        return "!border-t-blue-600"
    else if(color?.includes("secondary"))
        return "!border-t-indigo-600"
    else if(color?.includes("success"))
        return "!border-t-green-600"
    else if(color?.includes("danger"))
        return "!border-t-red-600"
    else if(color?.includes("warning"))
        return "!border-t-amber-500"
    else if(color?.includes("info"))
        return "!border-t-sky-500"
    else if(color?.includes("light"))
        return "!border-t-gray-300"
    else if(color?.includes("dark"))
        return "!border-t-gray-700"
}
const Alert = ({children,className,color,borderless,iconl,iconr,iconlc,iconrc,close,leftborder,topborder,labelrounded}:Props) => {
    const lborderc = getlborderc(color)
    const tborderc = getlbordetc(color)
    return (
        <div className={`w-full flex items-center  rounded text-sm ${borderless?"border-0":"border"} ${color?color:"bg-gray-100 border-gray-300"} ${topborder?`${tborderc} border-t-2`:""} ${leftborder?`${lborderc} border-l-2`:""} shadow ${className}`}>
            {iconl?<div className={`h-full p-3 text-lg rounded-tl rounded-bl flex justify-center items-center ${labelrounded?"":iconlc} ${labelrounded?"relative w-12":""}`}>
                {labelrounded?<div className={`absolute left-0 right-0 rounded-tr-full rounded-br-full py-1 top-1/4 flex justify-center items-center ${iconlc}`}>
                    <IconComponent name={iconl}/>
                </div>: <IconComponent name={iconl}/>}
            </div>:<></>}
            <div className={`p-3 w-full`}>
            {children}
            </div>
            {iconr?<div onClick={close?close:()=>{}} className={`h-full p-3 text-lg rounded-tr rounded-br flex justify-center items-center ${iconrc} ${close?"cursor-pointer":""}`}>
                <IconComponent name={iconr}/>
            </div>:<></>}
        </div>
    );
}

export default Alert;