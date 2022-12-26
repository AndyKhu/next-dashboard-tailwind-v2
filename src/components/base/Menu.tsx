import Link from "next/link";
import Button from "./Button";
import {useEffect, useRef, useState} from 'react'
import Card from "@components/Card";

interface Props {
    children?: React.ReactNode
    closeOnClick?:boolean,
    closeOnContentClick?:boolean,
    onHover?:boolean,
    disabled?:boolean,
    left?:boolean,
    top?:boolean,
    right?:boolean,
    activator?:React.ReactElement,
    card?:boolean
}
const Menu = ({children,closeOnClick,closeOnContentClick,onHover,disabled,left,top,right,card,activator}:Props) => {
    const [active,setActive] = useState(false)
    const menuRef = useRef<HTMLInputElement>(null);
    const activatorRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
    if(menuRef && menuRef.current){
        const element = menuRef.current
        const activatorElement = activatorRef.current
        const handler = (e:MouseEvent) => {
            if(closeOnClick && active && !menuRef.current?.contains(e.target as Node)){
                setActive(false);
            }else if (closeOnContentClick && active && contentRef.current?.contains(e.target as Node)){
                setActive(false);
            }
        }
        const handlermousein = (e:MouseEvent) => {
            if(onHover && !active && !disabled)
                setActive(true)
        }
        const handlermouseout = (e:MouseEvent) => {
            if(onHover && active && !disabled)
                setActive(false)
        }
        const handleractivator = (e:MouseEvent) => {
            if(!disabled)
                setActive(prev=> !prev)
        }
        activatorElement?.addEventListener("click",handleractivator)
        element.addEventListener("mouseenter",handlermousein)
        element.addEventListener("mouseleave",handlermouseout)
        document.body.addEventListener("mousedown",handler)
        return () => {
            document.body.removeEventListener('mousedown',handler);
            element.removeEventListener("mouseenter",handlermousein)
            element.removeEventListener("mouseleave",handlermouseout)
            activatorElement?.removeEventListener("click",handleractivator)
        }
     }
    })
    return (
        <div className="relative" ref={menuRef}>
            {activator?<span className="inline-flex items-center" ref={activatorRef}>{activator}</span>:<span ref={activatorRef}><Button color="primary">Default Activator</Button></span>}
            {active?card?
            <span ref={contentRef}>
                <Card className={`border animate-popup z-10 transition-all overflow-hidden bg-white dark:bg-gray-700 dark:border-0 absolute min-w-full ${left?"left-full":right?"right-full":"left-0"} ${top?"bottom-full":left || right?"top-0":"top-full"}`}>
                    {children}
                </Card>
            </span>:
            <span ref={contentRef}>
                <ul className={`border animate-popup z-10 transition-all overflow-hidden bg-white dark:bg-gray-700 dark:border-0 absolute min-w-full ${left?"left-full":right?"right-full":"left-0"} ${top?"bottom-full":left || right?"top-0":"top-full"}`}>
                    {children}
                </ul>
            </span>
            :<></>
            }
        </div>
    );
}
export default Menu;