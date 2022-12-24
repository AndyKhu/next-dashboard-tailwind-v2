import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import { setCollapse } from '@redux/initialSlice'
import Head from "next/head";

interface Props {
    children: React.ReactNode
    authenticated?: boolean
  }
const Layout = ({ children, authenticated = false }: Props) => {
    const dispatch = useAppDispatch()
    const collapse = useAppSelector(state => state.init.collapse)
    // useEffect(()=>{
    //     dispatch(setCollapse(false))
    // },[dispatch])
    const toggleCollapse = () => {
        dispatch(setCollapse(!collapse))
    }
    const toggleCollapse2 = () => {
        dispatch(setCollapse(false))
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
        <Head>
            <link rel="icon"  href="/favicon/favicon.ico" />
        </Head>
            {authenticated ? (
                <div className="flex relative w-full h-screen font-inter text-gray-700 dark:text-white overflow-hidden">
                    <Sidebar toggleCollapse={toggleCollapse2} collapse={collapse} activeMenu={activeMenu}/>
                    <div className={`w-full pl-0 ${collapse?"md:pl-[250px] lg:pl-[70px]":"md:pl-[70px] lg:pl-[250px]"} transition-all`}>
                        <Header toggleCollapse={toggleCollapse}/>
                        <div className="h-[calc(100%-70px)]">
                            <div className="p-3 h-[40px] border-b dark:border-b-0 shadow py-2 uppercase font-bold bg-white dark:bg-gray-900">{activeMenu}</div>
                            <div className="h-[calc(100%-40px)] overflow-y-auto scrollbar bg-slate-100 dark:bg-neutral-900">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div onClick={toggleCollapse} className={`${collapse?"bg-black-1 opacity-30 absolute top-0 left-0 bottom-0 right-0 md:hidden":""}`}></div>
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