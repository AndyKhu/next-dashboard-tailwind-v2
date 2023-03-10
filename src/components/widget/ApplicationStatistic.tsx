import Button from "@components/base/Button";
import Card from "@components/Card";
import LineChartComponent from '@components/chart/LineChartComponent'

const ApplicationStatistic = () => {
    return (
        <Card>
            <Card.header className='border-dashed flex justify-between items-center'>
              <span>Applications Statistic</span>
              <div className='flex gap-1'>
                <Button size="xsmall" className="text-xs" color='bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700'>
                  ALL
                </Button>
                <Button size="xsmall" className="text-xs" color='bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700'>
                  1M
                </Button>
                <Button size="xsmall" className="text-xs" color='bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700'>
                  6M
                </Button>
                <Button size="xsmall" className="text-xs" color='bg-indigo-50 hover:bg-indigo-500 hover:text-white text-indigo-700'>
                  1Y
                </Button>
              </div>
            </Card.header>
            <Card.main className='p-0'>
              <div className='flex flex-wrap border-b border-dashed'>
                <div className='w-1/2 md:w-1/4 border-b md:border-b-0 p-4 flex border-r border-dashed flex-col justify-center items-center'>
                  <span className='font-semibold'>3,364</span>
                  <span className='text-sm text-gray-500 dark:text-white'>New Application</span>
                </div>
                <div className='w-1/2 md:w-1/4 border-b md:border-b-0 p-4 flex border-r border-dashed flex-col justify-center items-center'>
                  <span className='font-semibold'>2,804</span>
                  <span className='text-sm text-gray-500 dark:text-white'>Interview</span>
                </div>
                <div className='w-1/2 md:w-1/4 p-4 flex border-r border-dashed flex-col justify-center items-center'>
                  <span className='font-semibold'>2,402</span>
                  <span className='text-sm text-gray-500 dark:text-white'>Hired</span>
                </div>
                <div className='w-1/2 md:w-1/4 p-4 flex flex-col justify-center items-center'>
                  <span className='font-semibold text-emerald-400'>8k</span>
                  <span className='text-sm text-gray-500 dark:text-white'>Total Applications</span>
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