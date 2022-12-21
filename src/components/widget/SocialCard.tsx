import Button from "@components/Button";
import Card from "@components/Card";
import IconComponent from "@components/IconComponent";
interface Props{
    data: {
        name:string,
        icon:string,
        location:string,
        iconC:string
    }[],
    hide?:boolean
}
const SocialCard = ({data,hide}:Props) => {
    return (
        <Card className={`${hide?"h-full flex flex-col justify-between":""}`}>
            <Card.header>Featured Companies</Card.header>
            <Card.main className="p-0 overflow-x-auto">
              <table className='w-full h-full'>
                <tbody>
                    {data.map((item,index)=>{
                        return (
                            <tr key={`data-${index}`} className="border-b hover:bg-zinc-100">
                                <td className='p-3'>
                                <div className='flex items-center'>
                                    <IconComponent name={item.icon} border borderC={item.iconC}/>
                                    <span className='text-sm font-medium'>{item.name}</span>
                                </div>
                                </td>
                                <td className='p-3'>
                                <div className='flex items-center text-sm font-light'>
                                    <IconComponent name="FiMapPin" className='mr-1 text-indigo-700'/>
                                    <span>{item.location}</span>
                                </div>
                                </td>
                                {hide?<></>:<>
                                <td className='p-3'>
                                <div className='flex items-center'>
                                    <Button iconOnly icon='FaFacebookF' className='p-0 bg-transparent text-blue-700 hover:text-blue-500 hover:bg-transparent text-xs mx-1'/>
                                    <Button iconOnly icon='FiMail' className='p-0 bg-transparent text-rose-700 hover:text-rose-500 hover:bg-transparent text-xs mx-1'/>
                                    <Button iconOnly icon='FiGlobe' className='p-0 bg-transparent text-indigo-700 hover:indigo-blue-500 hover:bg-transparent text-xs mx-1'/>
                                    <Button iconOnly icon='FiTwitter' className='p-0 bg-transparent text-sky-700 hover:sky-blue-500 hover:bg-transparent text-xs mx-1'/>
                                </div>
                                </td>
                                <td className='p-3'>
                                <div className='flex items-center text-xs text-indigo-700'>
                                    <span>View More</span>
                                    <IconComponent name="FiArrowRight" className='ml-1'/>
                                </div>
                                </td>
                                </>}
                            </tr>
                        )
                    })}
                </tbody>
              </table>
            </Card.main>
            <Card.footer>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-500">Showing <span className="font-semibold">5</span> of <span className="font-semibold">25</span> Results</span>
                    <div className="flex items-center">
                        <Button icon="FiArrowLeft" iconOnly small className="bg-transparent text-indigo-700"/>
                        <Button label="1" small className="bg-transparent shadow w-6 h-6 p-1 mx-1 text-xs "/>
                        <Button label="2" small className="bg-indigo-700 shadow w-6 h-6 hover:bg-indigo-700 text-white mx-1 text-xs"/>
                        <Button label="3" small className="bg-transparent shadow w-6 h-6 p-1 mx-1"/>
                        <Button icon="FiArrowRight" iconOnly small className="bg-transparent text-indigo-700 text-xs"/>
                    </div>
                </div>
            </Card.footer>
          </Card>
    );
}

export default SocialCard;