import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import { setCollapse } from '@redux/initialSlice'

interface Props {
    children: React.ReactNode
    authenticated?: boolean
  }
const Layout = ({ children, authenticated = false }: Props) => {
    const dispatch = useAppDispatch()
    const collapse = useAppSelector(state => state.init.collapse)
    const toggleCollapse = () => {
        dispatch(setCollapse(!collapse))
    }
    const router = useRouter();
    const [activeMenu,setActiveMenu] = useState("dashboard")
    useEffect(()=>{
        const pathA = router.pathname.split("/")
        if(pathA.length == 2)
            setActiveMenu(pathA[1])
        else if(pathA.length == 3)
            setActiveMenu(pathA[2])
    },[router.pathname]);
    return (
        <>
            {authenticated ? (
                <div className="flex relative w-full h-screen text-gray-700 bg-slate-100">
                    <Sidebar collapse={collapse} activeMenu={activeMenu}/>
                    <div className={`w-full pl-0 ${collapse?"md:pl-[250px] lg:pl-[70px]":"md:pl-[70px] lg:pl-[250px]"}`}>
                        <Header toggleCollapse={toggleCollapse}/>
                        <div className="h-[calc(100%-70px)]">
                            <div className="p-3 h-[40px] shadow py-2 uppercase font-bold bg-white">{activeMenu}</div>
                            <div className="h-[calc(100%-40px)]overflow-y-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div onClick={toggleCollapse} className={`${collapse?"bg-black opacity-30 absolute top-0 left-0 bottom-0 right-0 md:hidden":""}`}></div>
                </div>
            ):(
                <div>
                    {children}
                </div>
            )}
        </>
    );
}

export default Layout;