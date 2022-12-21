import Button from "@components/base/Button";
import IconComponent from "./IconComponent";

const Header = ({toggleCollapse}:{toggleCollapse():void}) => {
    return (
        <div className="h-[70px] w-full border-b flex px-3 items-center justify-between bg-white">
            <Button shadowless large onClick={toggleCollapse} icon="FaBars" iconOnly color="hover:bg-gray-100 text-gray-600"/>
            <div className="flex h-full items-center justify-center">
                <Button shadowless large icon="FaExpand" iconOnly color="hover:bg-gray-100 text-gray-600"/>
                <Button shadowless large icon="FaRegMoon" iconOnly color="hover:bg-gray-100 text-gray-600"/>
                <span className="relative mr-2">
                    <Button shadowless large icon="FaRegBell" iconOnly color="hover:bg-gray-100 text-gray-600" iconclassName="animate-wiggle"/>
                    <div className="min-w-[1.25rem] px-1 h-4 rounded-full -right-1 -top-1 absolute bg-red-400 text-white flex justify-center items-center text-xs font-medium">3</div>
                </span>
                <div className="flex px-2 cursor-pointer h-full items-center justify-center hover:bg-gray-100">
                    <div className="w-7 h-7 bg-gray-300 rounded-full mr-2 "></div>
                    <span className="text-sm font-medium tracking-tight">Anna Adame</span>
                    <IconComponent className="ml-2" name="FaAngleDown"/>
                </div>
            </div>
        </div>
    );
}

export default Header;