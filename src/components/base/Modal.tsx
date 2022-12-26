import Card from '@components/Card';
import ReactPortal from '@components/ReactPortal';
import { getEventListeners } from 'events';
import {useEffect,ReactElement} from 'react'
interface Props {
    children?:React.ReactNode,
    handleClose:()=>void,
    isOpen:boolean,
    card?:boolean,
    fullscreen?:boolean,
    transition?:string,
    persistent?:boolean,
    index?:number
}
function addClass(index?:number){
    document.getElementById(`modal-${index?index:0}`)?.classList.add("scale-105")
    setTimeout(function() {
        document.getElementById(`modal-${index?index:0}`)?.classList.remove("scale-105")
      }, 100);
}
function getIndex(index:number,parent:boolean){
    if(parent)
        switch(index){
            case 1:
                return "z-[101]"
            case 2:
                return "z-[60]"
            case 3:
                return "z-[70]"
            case 4:
                return "z-[80]"
            case 5:
                return "z-[90]"
            default:
                return "z-[100]"
        }
    else
        switch(index){
            case 1:
                return "z-[102]"
            case 2:
                return "z-[103]"
            case 3:
                return "z-[104]"
            case 4:
                return "z-[105]"
            case 5:
                return "z-[106]"
            default:
                return "z-[101]"
        }
}
const Modal = ({children,isOpen,handleClose,card,fullscreen,transition,persistent,index}:Props) => {
    useEffect(()=>{
        const closeOnEscapeKey =  (e:KeyboardEvent) => {
            e.key === "Escape" ? (persistent?addClass(index):handleClose()) : null;
        }
        document.body.addEventListener('keydown',closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown',closeOnEscapeKey);
        }
    },[handleClose,persistent,index])
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    },[isOpen])
    if (!isOpen) return null;
    return (
        <ReactPortal>
            <div id={`modal-${index?index:0}`} className={`flex justify-center items-center ${transition?transition:'animate-popup'} fixed top-0 left-0 h-screen w-screen ${getIndex(index?index:0,true)}`}>
                <div onClick={()=> persistent?addClass(index):handleClose()} className='absolute inset-0 bg-black-1 opacity-50'/>
                <div className={`flex justify-center ${getIndex(index?index:0,false)} ${fullscreen?'h-full w-full':''}`}>
                    {card?
                    <Card className={fullscreen?'h-full w-full':''}>
                        <Card.main>{children}</Card.main>
                    </Card>:
                    <>{children}</>
                    }
                </div>
            </div>
        </ReactPortal>
    );
}
Modal.main = () => {return <div>test</div>}

export default Modal;