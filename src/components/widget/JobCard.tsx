import Card from "@components/Card";
import CircularChart from "./CircularChart";

const JobCard = ({title,value,percentage,color,colorh}:{title:string,value:string,percentage:number,color:string,colorh:string}) => {
    return (
        <Card>
            <Card.main className="flex relative justify-between items-center">
                <div className="absolute top-0 left-0 h-full overflow-hidden z-0">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
                        <path className="opacity-5 fill-[#299cdb]" id="Shape 8" d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"></path>
                    </svg>
                </div>
                <div className="z-10 py-2">
                    <p className="mb-4 text-gray-500 text-[13px] font-medium uppercase tracking-wide">{title}</p>
                    <h4 className="text-[22px] font-semibold">{value}</h4>
                </div>
                <div className="z-10">
                    <CircularChart value={percentage} color={color} colorh={colorh}/>
                </div>
            </Card.main>
        </Card>
    );
}

export default JobCard;