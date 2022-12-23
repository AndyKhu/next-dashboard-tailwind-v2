import { ReactNode } from "react";
interface SizeConfig {
    [key: string]: string
}
const sizeConfig:SizeConfig = {
    xs : "h-6 w-6",
    sm : "h-7 w-7",
    md : "h-8 w-8",
    base : "h-9 w-9",
    large : "h-16 w-16",
    xl : "h-32 w-32",
    "2xl" : "h-64 w-64",
    fit : "h-full w-full"
}
const textSizeConfig:SizeConfig = {
    xs : "text-xs",
    sm : "text-sm",
    md : "text-base",
    base : "text-lg",
    large : "text-xl",
    xl : "text-[22px]",
    "2xl" : "text-2xl",
    fit : "text-base"
}
const Avatar = ({ children, className,size,color,tile}: { children?: ReactNode, className?:string,size?:string,color?:string,tile?:boolean}) => {
    return (
        <div className={`inline-block ${color?color:"dark-solid"} ${tile?"":"rounded-full"} overflow-hidden ${className} ${size?sizeConfig[size]:sizeConfig["base"]}`}>
            <div className={`flex justify-center relative items-center ${size?textSizeConfig[size]:textSizeConfig['base']} w-full h-full`}>
                {children}
            </div>
        </div>
    );
}

export default Avatar;