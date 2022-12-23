import Button from "@components/base/Button";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useEffect, useState } from "react";
import { setDarkMode,setFullScreen } from '@redux/initialSlice'
import Icon from "./Icon";
import Avatar from "./base/Avatar";
import Badge from "./base/Badge";

function handleFullScreen(){
    if(document.fullscreenElement)
        document.exitFullscreen()
    else 
        document.documentElement.requestFullscreen()
}
const Header = ({toggleCollapse}:{toggleCollapse():void}) => {
    const dispatch = useAppDispatch()
    const darkMode = useAppSelector(state => state.init.darkMode)
    const full = useAppSelector(state => state.init.fullScreen)
    useEffect(() => {
        window.addEventListener("fullscreenchange",(e)=>{
            if(document.fullscreenElement)
                dispatch(setFullScreen(true))
            else
                dispatch(setFullScreen(false))
        })
      }, [dispatch]);
    
    useEffect(() => {
          localStorage.darkMode = darkMode
          if (darkMode) {
            document.documentElement.classList.add('dark')
            document.documentElement.setAttribute('style', 'color-scheme: dark')
          } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.setAttribute('style', 'color-scheme: light')
          }
      }, [darkMode])
    
    return (
        <div className="h-[70px] w-full border-b dark:border-b-2 dark:border-b-neutral-900 flex px-3 items-center justify-between bg-white dark:bg-gray-800 text-gray-600 dark:text-white">
            <Button depressed icon size="small" onClick={toggleCollapse} color="hover:bg-gray-100 dark:hover:bg-neutral-700">
                <Icon name="FaBars" size={20}/>
            </Button>
            <div className="flex h-full items-center justify-center">
                <Button depressed icon size="small" className="mx-1" onClick={()=> handleFullScreen()} color="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <Icon name={full?"FaCompress":"FaExpand"} size={20}/>
                </Button>
                <Button depressed icon size="small" className="mx-1" onClick={() => dispatch(setDarkMode(!darkMode))} color="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <Icon name={darkMode?"FiSun":"FaRegMoon"} size={20}/>
                </Button>
                <Badge color="bg-red-400 text-white" value="3" overlap className="mx-1">
                    <Button depressed icon size="small" color="hover:bg-gray-100 dark:hover:bg-neutral-700">
                        <Icon name="FaRegBell" className="animate-wiggle" size={20}/>
                    </Button>
                </Badge>
                <div className="flex px-2 cursor-pointer h-full items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <Avatar size="md" className="mr-2 dark:bg-white dark:text-gray-700">A</Avatar>
                    <span className="text-sm font-medium tracking-tight">Anna Adame</span>
                    <Icon right name="FaAngleDown"/>
                </div>
            </div>
        </div>
    );
}

export default Header;