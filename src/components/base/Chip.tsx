
import {ReactNode} from 'react'
const Chip = ({children,className,close}:{children?:ReactNode,className?:string,close?:boolean}) => {
    return (
        <span className={`px-3 h-8 text-sm bg-gray-200 inline-flex rounded-full`}>
            <span className='inline-flex items-center'>
                {children}
            </span>
        </span>
    );
}

export default Chip;