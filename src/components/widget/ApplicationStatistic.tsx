import Button from "@components/Button";
import Card from "@components/Card";
import LineChartComponent from '@components/chart/LineChartComponent'

const ApplicationStatistic = () => {
    return (
        <Card>
            <Card.header className='border-dashed flex justify-between items-center'>
              <span>Applications Statistic</span>
              <div className='flex gap-1'>
                <Button label='ALL' small className='py-1 shadow text-xs' color='bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700'/>
                <Button label='1M' small className='py-1 shadow text-xs' color='bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700'/>
                <Button label='6M' small className='py-1 shadow text-xs' color='bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700'/>
                <Button label='1Y' small className='py-1 shadow text-xs' color='bg-indigo-50 hover:bg-indigo-500 hover:text-white text-indigo-700'/>
              </div>
            </Card.header>
            <Card.main className='p-0'>
              <div className='flex flex-wrap border-b border-dashed'>
                <div className='w-1/2 md:w-1/4 border-b md:border-b-0 p-4 flex border-r border-dashed flex-col justify-center items-center'>
                  <span className='font-semibold'>3,364</span>
                  <span className='text-sm text-gray-500'>New Application</span>
                </div>
                <div className='w-1/2 md:w-1/4 border-b md:border-b-0 p-4 flex border-r border-dashed flex-col justify-center items-center'>
                  <span className='font-semibold'>2,804</span>
                  <span className='text-sm text-gray-500'>Interview</span>
                </div>
                <div className='w-1/2 md:w-1/4 p-4 flex border-r border-dashed flex-col justify-center items-center'>
                  <span className='font-semibold'>2,402</span>
                  <span className='text-sm text-gray-500'>Hired</span>
                </div>
                <div className='w-1/2 md:w-1/4 p-4 flex flex-col justify-center items-center'>
                  <span className='font-semibold text-emerald-400'>8k</span>
                  <span className='text-sm text-gray-500'>Total Applications</span>
                </div>
              </div>
              <div className='h-[345px] p-4 text-xs '>
                <LineChartComponent/>
              </div>
            </Card.main>
          </Card>
    );
}

export default ApplicationStatistic;