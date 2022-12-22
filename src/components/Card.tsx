import { ReactNode } from "react";

const Card = ({ children, className }: { children?: ReactNode, className?:string }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded shadow ${className?className:''}`}>
            {children}
        </div>
    );
}

Card.header = ({ children, className }: { children?: ReactNode, className?:string }) => {
    return(
        <div className={`p-4 rounded-t font-medium text-base border-b capitalize ${className?className:''}`}>
            {children}
        </div>
    )
}
Card.main = ({ children, className }: { children?: ReactNode, className?:string }) => {
    return (
        <div className={`p-4  ${className?className:''}`}>{children}</div>
    )
}
Card.footer = ({ children, className }: { children?: ReactNode, className?:string }) => <div className={`p-4 ${className?className:''}`}>{children}</div>

export default Card;