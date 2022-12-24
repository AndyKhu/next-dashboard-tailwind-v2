import Card from '@components/Card'
import Layout from '@components/Layout'
import ApplicationStatistic from '@components/widget/ApplicationStatistic'
import JobCard from '@components/widget/JobCard'
import SocialCard from '@components/widget/SocialCard'
import Head from 'next/head'


export default function Dashboard() {
  const socialCardData = [
    {
      name:"Force Medicines",
      icon:"FaDelicious",
      location:"Cullera, Spain",
      iconC:"bg-sky-200 text-sky-800"
    },
    {
      name:"Syntyce Solutions",
      icon:"FaCentos",
      location:"Mughairah, UAE",
      iconC:"bg-yellow-200 text-yellow-800"
    },
    {
      name:"Moetic Fashion",
      icon:"FaCentercode",
      location:"Mughairah, UAE",
      iconC:"bg-lime-200 text-lime-800"
    },
    {
      name:"Meta4Systems",
      icon:"FaCodepen",
      location:"Germany",
      iconC:"bg-rose-200 text-rose-800"
    },
    {
      name:"Themesbrand",
      icon:"FaDiscourse",
      location:"Limestone, US",
      iconC:"bg-indigo-200 text-indigo-800"
    }
  ]
  return (
    <Layout authenticated>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className='p-3 flex flex-wrap bg-'>
        <div className='w-full lg:w-1/2 flex flex-wrap'>
          <div className='w-full md:w-1/2 p-3'>
            <JobCard title='total jobs' value="36,894" percentage={90} color="stroke-green-400" colorh="stroke-green-300"/>
          </div>
          <div className='w-full md:w-1/2 p-3'>
            <JobCard title='apply jobs' value="28,410" percentage={92} color="stroke-blue-500" colorh="stroke-blue-300"/>
          </div>
          <div className='w-full md:w-1/2 p-3'>
            <JobCard title='new jobs' value="4,305" percentage={80} color="stroke-lime-500" colorh="stroke-lime-300"/>
          </div>
          <div className='w-full md:w-1/2 p-3'>
            <JobCard title='interview' value="5,021" percentage={89} color="stroke-indigo-500" colorh="stroke-indigo-300"/>
          </div>
          <div className='w-full md:w-1/2 p-3'>
            <JobCard title='hired' value="3,948" percentage={64} color="stroke-sky-500" colorh="stroke-sky-300"/>
          </div>
          <div className='w-full md:w-1/2 p-3'>
            <JobCard title='rejected' value="1,340" percentage={20} color="stroke-rose-500" colorh="stroke-rose-300"/>
          </div>
        </div>
        <div className='w-full lg:w-1/2 p-3'>
          <SocialCard data={socialCardData}/>
        </div>
        <div className='w-full lg:w-2/3 p-3'>
          <ApplicationStatistic/>
        </div>
        <div className='w-full lg:w-1/3 p-3'>
          <SocialCard data={socialCardData} hide/>
        </div>
      </main>
    </Layout>
  )
}
