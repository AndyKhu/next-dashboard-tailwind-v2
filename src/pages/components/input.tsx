import Input from "@components/base/Input";
import Card from "@components/Card";
import Layout from "@components/Layout";
import Head from "next/head";

const Inputs = () => {
    return (
        <Layout authenticated>
          <Head>
            <title>Input</title>
          </Head>
          <main>
            <div className="p-4 flex flex-col gap-4">
              <Card>
                    <Card.header>Default Input</Card.header>
                    <Card.main className="p-3">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Basic Input"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Input with Label"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Input with placeholder" placeholder="Placeholder"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Input with value" defaultValue="Default Value"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input readOnly label="Readonly Input" defaultValue="Readonly Input"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input disabled label="Disabled Input" defaultValue="Disabled Input"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Input with Icon" iconl="FiMail" placeholder="example@gmail.com"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input split label="Input with Icon" iconl="FiMail" placeholder="example@gmail.com"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Input with Icon" iconr="FiMail" placeholder="example@gmail.com"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input split label="Input with Icon" iconr="FiMail" placeholder="example@gmail.com"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input type="date" label="Input Date" iconr="FaRegCalendarAlt"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input type="time" label="Input Time" iconr="FaRegClock"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input type="password" label="Input Password" defaultValue="password"/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Form Input" xlabel="Must be 8-20 characters long."/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3"> 
                          <Input label="Rounded Input" roundedfull placeholder="Enter your name"/>
                        </div>
                      </div>
                    </Card.main>
              </Card>
            </div>
          </main>
        </Layout>
      )
}

export default Inputs;