import Button from "@components/base/Button";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useEffect, useState } from "react";
import { setDarkMode,setFullScreen } from '@redux/initialSlice'
import IconComponent from "./IconComponent";

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
            <Button shadowless large onClick={toggleCollapse} icon="FaBars" iconOnly color="hover:bg-gray-100 dark:hover:bg-neutral-700"/>
            <div className="flex h-full items-center justify-center">
                <Button onClick={()=> handleFullScreen()}shadowless large icon={full?"FaCompress":"FaExpand"} iconOnly color="hover:bg-gray-100 dark:hover:bg-neutral-700"/>
                <Button onClick={() => dispatch(setDarkMode(!darkMode))} shadowless large icon={darkMode?"FiSun":"FaRegMoon"} iconOnly color="hover:bg-gray-100 dark:hover:bg-neutral-700"/>
                <span className="relative mr-2">
                    <Button shadowless large icon="FaRegBell" iconOnly color="hover:bg-gray-100 dark:hover:bg-neutral-700" iconclassName="animate-wiggle"/>
                    <div className="min-w-[1.25rem] px-1 h-4 rounded-full -right-1 -top-1 absolute bg-red-400 text-white flex justify-center items-center text-xs font-medium">3</div>
                </span>
                <div className="flex px-2 cursor-pointer h-full items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <div className="w-7 h-7 bg-gray-300  dark:bg-white rounded-full mr-2 "></div>
                    <span className="text-sm font-medium tracking-tight">Anna Adame</span>
                    <IconComponent className="ml-2" name="FaAngleDown"/>
                </div>
            </div>
        </div>
    );
}

export default Header;