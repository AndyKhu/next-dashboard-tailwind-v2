import { ReactNode } from "react";
interface Config {
    [key: string]: string
}
const pConfig:Config = {
    bottom: "top-[calc(100%-4px)] right-auto bottom-auto left-[calc(100%-4px)]",
    left: "top-auto right-[calc(100%-4px)] bottom-[calc(100%-4px)] left-auto",
    bottomleft: "top-[calc(100%-4px)] right-[calc(100%-4px)] bottom-auto left-auto",
    default: "top-auto right-auto bottom-[calc(100%-4px)] left-[calc(100%-4px)]"
}
const poConfig:Config = {
    bottom: "top-[calc(100%-8px)] right-auto bottom-auto left-[calc(100%-8px)]",
    left: "top-auto right-[calc(100%-8px)] bottom-[calc(100%-8px)] left-auto",
    bottomleft: "top-[calc(100%-8px)] right-[calc(100%-8px)] bottom-auto left-auto",
    default: "top-auto right-auto bottom-[calc(100%-8px)] left-[calc(100%-8px)]"
}
const Badge = ({ children, className,color,tile,left,bottom,dot,value,overlap}: { children?: ReactNode, className?:string,color?:string,tile?:boolean,left?:boolean,bottom?:boolean,dot?:boolean,value?:string,overlap?:boolean}) => {
    const position = overlap?(bottom?(left?poConfig["bottomleft"]:poConfig["bottom"]):left?poConfig["left"]:poConfig["default"]):(bottom?(left?pConfig["bottomleft"]:pConfig["bottom"]):left?pConfig["left"]:pConfig["default"])
    const mx = overlap?(left?"ml-3":"mr-3"):(left?"ml-4":"mr-4")
    return (
        <div className={`relative inline-block ${mx} ${className}`}>
            <span className={`absolute z-10 inline-flex justify-center items-center ${dot?"h-3 w-3":"h-4 px-1 min-w-[1rem]"} ${color?color:"bg-gray-700 dark:bg-white dark:text-gray-700 text-white"} ${position} ${tile?"":"rounded-full"} text-xs`}>
                {dot?"":value}
            </span>
            {children}
        </div>
    );
}

export default Badge;