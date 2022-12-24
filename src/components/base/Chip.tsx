
import Icon from '@components/Icon';
import {ReactNode} from 'react'
import Button from './Button';
type Object = {[key:string]:string}
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
const sizeConfig:Object = {
    "2xsmall": "h-5 px-1",
    xsmall: "h-6 px-2",
    small: "h-7 px-3",
    base: "h-8 px-4",
    large: "h-11 px-5",
    xlarge: "h-[52px] px-6"
}
const Chip = ({children,className,isclose,close,closeEvent,tile,color,size}:{children?:ReactNode,className?:string,close?:boolean,isclose?:boolean,closeEvent?:()=>void,tile?:boolean,color?:string,size?:string}) => {
    const textC = gettcolor(color)
    return (
        <>
        {isclose?<></>:
            <span className={`${size?sizeConfig[size]:sizeConfig["base"]} text-sm ${color?color:"bg-gray-300 text-gray-800"} capitalize font-medium inline-flex ${tile?"rounded":"rounded-full"} ${className}`}>
                <span className='inline-flex items-center'>
                    {children}
                    {close?
                    <Button depressed onClick={closeEvent} icon rounded size="2xsmall" className="ml-2 -mr-1" color={color?`${textC} bg-white`:"bg-gray-500 text-gray-300"}>
                        <Icon name="FaTimes" size={12}/>
                    </Button>
                    :<></>}
                </span>
            </span>
        }
        </>
    );
}

export default Chip;