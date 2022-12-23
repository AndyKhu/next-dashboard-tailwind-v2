import Button from "@components/base/Button";
import Card from "@components/Card";
import Icon from "@components/Icon";
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
                            <tr key={`data-${index}`} className="border-b hover:bg-zinc-100 dark:hover:bg-gray-700">
                                <td className='p-3'>
                                <div className='flex items-center'>
                                    <div className={`p-2 rounded mr-2 ${item.iconC?item.iconC:"bg-gray-300"}`}>
                                        <Icon name={item.icon}/>
                                    </div>
                                    <span className='text-sm font-medium'>{item.name}</span>
                                </div>
                                </td>
                                <td className='p-3'>
                                <div className='flex items-center text-sm font-light'>
                                    <Icon name="FiMapPin" className='mr-1 text-indigo-700'/>
                                    <span>{item.location}</span>
                                </div>
                                </td>
                                {hide?<></>:<>
                                <td className='p-3'>
                                <div className='flex items-center'>
                                    <Button depressed icon size="small" className='bg-transparent text-blue-700 hover:text-blue-500 hover:bg-transparent text-xs mx-1'>
                                        <Icon name="FaFacebookF"/>
                                    </Button>
                                    <Button depressed icon size="small" className='bg-transparent text-rose-700 hover:text-rose-500 hover:bg-transparent text-xs mx-1'>
                                        <Icon name="FiMail"/>
                                    </Button>
                                    <Button depressed icon size="small" className='bg-transparent text-indigo-700 hover:indigo-blue-500 hover:bg-transparent text-xs mx-1'>
                                        <Icon name="FiGlobe"/>
                                    </Button>
                                    <Button depressed icon size="small" className='bg-transparent text-sky-700 hover:sky-blue-500 hover:bg-transparent text-xs mx-1'>
                                        <Icon name="FiTwitter"/>
                                    </Button>
                                </div>
                                </td>
                                <td className='p-3'>
                                <div className='flex items-center text-xs text-indigo-700 dark:text-white'>
                                    <span>View More</span>
                                    <Icon name="FiArrowRight" className='ml-1'/>
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
                    <span className="text-sm text-stone-500 dark:text-white">Showing <span className="font-semibold">5</span> of <span className="font-semibold">25</span> Results</span>
                    <div className="flex items-center">
                        <Button depressed icon size="xsmall" className="w-6 text-xs text-indigo-700 dark:text-white">
                            <Icon name="FiArrowLeft"/>
                        </Button>
                        <Button icon size="xsmall" className="mx-1 w-6 text-xs dark:hover:text-gray-700">
                            1
                        </Button>
                        <Button icon size="xsmall" color="bg-indigo-700 hover:bg-indigo-600" className="w-6 text-white mx-1 text-xs">
                            2
                        </Button>
                        <Button icon size="xsmall" className="mx-1 w-6 text-xs dark:hover:text-gray-700">
                            3
                        </Button>
                        <Button depressed icon size="xsmall" className="text-indigo-700 w-6 text-xs dark:text-white">
                            <Icon name="FiArrowRight"/>
                        </Button>
                    </div>
                </div>
            </Card.footer>
          </Card>
    );
}

export default SocialCard;