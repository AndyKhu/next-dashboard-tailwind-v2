import Badge from "@components/base/Badge";
import Checkbox from "@components/base/Checkbox";
import Card from "@components/Card";
import IconComponent from "@components/IconComponent";
import Layout from "@components/Layout";
import Head from "next/head";
import { useState } from "react";

const Badges = () => {
    const [bot,setBot] = useState(false)
    const [dot,setDot] = useState(false)
    const [left,setLeft] = useState(false)
    const [overlap,setOverlap] = useState(false)
    const [color,setColor] = useState("primary")
    return (
        <Layout authenticated>
            <Head>
                <title>Drop Down</title>
            </Head>
        <main>
            <div className="flex flex-col gap-4 p-4">
                <Card>
                    <Card.header className="p-2 px-4">Badge</Card.header>
                    <Card.main className="p-0 overflow-hidden">
                        <p className="text-sm text-gray-500 p-4">Use the <span className="text-rose-500">Badge</span> Component to show a defaut Badge</p>
                        <div className="flex flex-col md:flex-row rounded-bl rounded-br border-t">
                            <div className="flex flex-col md:border-r w-full md:w-1/4 items-center">
                                <div className="border-b p-2 w-full text-center font-semibold">Attribute</div>
                                <div className="p-4 w-full">
                                    <Checkbox defaultChecked={bot} onClick={()=>{setBot(!bot)}} label="Bottom" />
                                    <Checkbox defaultChecked={dot} onClick={()=>{setDot(!dot)}} label="Dot" />
                                    <Checkbox defaultChecked={left} onClick={()=>{setLeft(!left)}} label="Left" />
                                    <Checkbox className="mb-0" defaultChecked={overlap} onClick={()=>{setOverlap(!overlap)}} label="Overlap" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="p-2 border-t border-b md:border-t-0 text-center w-full font-semibold">Result</div>
                                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center p-8">
                                    <Badge dot={dot} bottom={bot} left={left} overlap={overlap} value="3">
                                        <IconComponent name="FaBell" size={30}/>
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header className="p-2 px-4">Badge Color</Card.header>
                    <Card.main className="p-0 overflow-hidden">
                        <p className="text-sm text-gray-500 p-4">Use the <span className="text-rose-500">Color</span> Attribute to change badge color</p>
                        <div className="flex flex-col md:flex-row rounded-bl rounded-br border-t">
                            <div className="flex flex-col md:border-r w-full md:w-1/2 items-center">
                                <div className="border-b p-2 w-full text-center font-semibold">Color Option</div>
                                <div className="flex p-4 w-full">
                                    <div className="w-1/2">
                                        <Checkbox defaultChecked outline type="radio" name="color" onClick={()=>{setColor("primary")}} label="Primary" color="primary"/>
                                        <Checkbox outline type="radio" name="color" onClick={()=>{setColor("secondary")}} label="Secondary" color="secondary"/>
                                        <Checkbox outline type="radio" name="color" onClick={()=>{setColor("success")}} label="Success" color="success"/>
                                        <Checkbox outline type="radio" name="color" onClick={()=>{setColor("danger")}} label="Danger" color="danger" className="mb-0"/>
                                    </div>
                                    <div className="w-1/2">
                                        <Checkbox outline type="radio" name="color" onClick={()=>{setColor("warning")}} label="Warning" color="warning"/>
                                        <Checkbox outline type="radio" name="color" onClick={()=>{setColor("info")}} label="info" color="info"/>
                                        <Checkbox outline type="radio" name="color" onClick={()=>{setColor("light-solid")}} label="Light" color="light-solid"/>
                                        <Checkbox outline type="radio" name="color" onClick={()=>{setColor("dark-solid")}} label="Dark" color="dark-solid" className="mb-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="p-2 border-t border-b md:border-t-0 text-center w-full font-semibold">Result</div>
                                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center p-8">
                                    <Badge value="3" color={color}>
                                        <IconComponent name="FaBell" size={30}/>
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Card.main>
                </Card>
            </div>
        </main>
        </Layout>
    );
}

export default Badges;