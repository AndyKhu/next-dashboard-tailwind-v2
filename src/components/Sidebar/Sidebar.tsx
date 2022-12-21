import IconComponent from "@components/IconComponent";
import Link from "next/link";

const Sidebar = ({collapse,activeMenu}:{collapse:boolean,activeMenu:string}) => {
    
    const menu = [
        {
            title: "menu",
            child: [
                {
                    title: "dashboard",
                    icon:"FaHome",
                    url: "/dashboard"
                }
            ]
        },
        {
            title: "components",
            child: [
                {
                    title: "input",
                    icon: "FaRegSquare",
                    url: "/components/input"
                }
            ]
        }
    ]
    const menuC = menu.map((item,index) => {
        return (
        <div key={`mcw-${index}`}>
            <li key={`mc-${index}`} className={`text-slate-500 font-medium tracking-wide uppercase text-xs ${collapse?"lg:hidden":"hidden sm:hidden lg:list-item"}`}>
                <span className="block p-3">{item.title}</span>
            </li>
            {item.child.map((c,index)=>{
                return(
                    <li key={`mi-${index}`} className={`${c.url.indexOf(activeMenu)>-1?"text-white bg-gray-800":""} relative`}>
                        <Link href={c.url} className={`flex peer items-center pl-4 p-3 hover:text-white ${collapse?"lg:justify-center":"sm:justify-center lg:justify-start"}`}>
                            <IconComponent className={` ${collapse?"text-lg mr-4 lg:text-2xl lg:mr-0":" lg:mr-4 sm:text-2xl lg:text-lg"}`} name={c.icon}/>
                            <span className={collapse?"lg:hidden":"hidden sm:hidden lg:inline-block capitalize"}>{c.title}</span>
                        </Link>
                        <div className={`absolute left-full ml-2 rounded top-0 h-full bg-gray-900 items-center px-3 ${collapse?"hidden peer-hover:lg:flex":"hidden peer-hover:md:flex peer-hover:lg:hidden"}`}>{c.title}</div>
                    </li>
                )
            })}
        </div>
        )
    })
    return (
        <div className={`bg-gray-900 ${collapse?"w-[250px] lg:w-[70px]":"w-0 md:w-[70px] lg:w-[250px]"} z-50 fixed top-0 left-0 bottom-0 transition-all`}>
            <div className="h-[70px] text-white flex items-center justify-center relative">
                <div className={`items-center relative text-2xl ${collapse?"flex mr-5 md:mr-5 lg:mr-0":"mr-5 md:mr-0 lg:mr-5 sm:hidden md:flex"}`}>
                    <IconComponent className={`${collapse?"mr-2 lg:mr-0 lg:text-lime-300":"md:text-lime-300 lg:text-white mr-2 md:mr-0 lg:mr-2"}`}name="FaFreebsd"/>
                    <span className={`text-lime-300  ${collapse?"lg:hidden":"hidden md:hidden lg:inline-block"}`}>Brand</span>
                </div>
                <span className={`border-t h-[1px] border-lime-500 absolute bottom-0 left-2 right-2 ${collapse?"hidden lg:block":"lg:hidden"}`}></span>
            </div>
            <div className="h-full">
                <ul className="text-slate-300">
                    {menuC}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;