const CircularChart = ({value,color,colorh}:{value:number,color?:string,colorh?:string}) => {
    return (
        <div className="w-20 h-20 relative group/item cursor-pointer">
            <svg viewBox="0 0 36 36" className="block">
                <path className="stroke-[#f3f6f9] fill-none max-h-[50px]"
                    strokeWidth="2.5"
                    strokeDasharray="100, 100"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={`${color?color:"stroke-gray-800"} cursor-pointer fill-none max-h-[50px] animate-progress`}
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    strokeDasharray={`${value}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={`${colorh?colorh:"stroke-gray-300"} group-hover/item:inline hidden cursor-pointer fill-none max-h-[50px] `}
                    strokeLinecap="round"
                    strokeWidth="2.8"
                    strokeDasharray={`${value}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
                <p className="font-bold">{value}%</p>
            </div>
        </div>
    );
}

export default CircularChart;