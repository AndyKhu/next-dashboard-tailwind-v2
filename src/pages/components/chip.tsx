import Button from "@components/base/Button";
import Checkbox from "@components/base/Checkbox";
import Chip from "@components/base/Chip";
import Card from "@components/Card";
import Icon from "@components/Icon";
import Layout from "@components/Layout";
import Head from "next/head";
import { useState } from "react";

const Chips = () => {
    const [block,setBlock] = useState(false)
    const [disabled,setdisabled] = useState(false)
    return (
    <Layout authenticated>
      <Head>
        <title>Chip</title>
      </Head>
      <main>
        <div className="flex flex-col gap-4 p-4">
            <Card>
                <Card.header>Chip</Card.header>
                <Card.main className="p-0">
                {/* <p className="text-sm text-gray-500 p-4">Use the <span className="text-rose-500">Badge</span> Component to show a defaut Badge</p>
                        <div className="flex flex-col md:flex-row rounded-bl rounded-br border-t">
                            <div className="flex flex-col md:border-r w-full md:w-1/4 items-center">
                                <div className="border-b p-2 w-full text-center font-semibold">Attribute</div>
                                <div className="p-4 w-full">
                                    <Checkbox defaultChecked={block} onClick={()=>{setBlock(!block)}} label="Block" />
                                    <Checkbox defaultChecked={disabled} onClick={()=>{setdisabled(!disabled)}} label="Disabled" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="p-2 border-t border-b md:border-t-0 text-center w-full font-semibold">Result</div>
                                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center p-8">
                                    <ButtonC disabled={disabled} block={block}>
                                        click me
                                    </ButtonC>
                                </div>
                            </div>
                        </div> */}
                </Card.main>
            </Card>
        </div>
      </main>
    </Layout>
    );
}

export default Chips;