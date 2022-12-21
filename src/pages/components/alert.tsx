import Card from "@components/Card";
import Layout from "@components/Layout";
import Head from "next/head";
import Alert from "@components/base/Alert";
import { useState } from "react";
import Button from "@components/base/Button";

const Alerts = () => {
    const[active,setActive] = useState(true)
    const[active2,setActive2] = useState(true)
    const[active3,setActive3] = useState(true)
    const[active4,setActive4] = useState(true)
    const[active5,setActive5] = useState(true)
    const[active6,setActive6] = useState(true)
    const[active7,setActive7] = useState(true)
    const[active8,setActive8] = useState(true)
    return (
        <Layout authenticated>
          <Head>
            <title>Alert</title>
          </Head>
          <main>
            <div className="p-4 flex flex-col gap-4">
                <Card>
                    <Card.header>Default Alerts</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the <span className="text-rose-500">Alert</span> Component to show a default alert</p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert color="primary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert color="secondary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert color="success-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert color="danger-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert color="warning-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert color="info-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                <Alert color="light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Light alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert color="dark" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Borderless Alerts</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">add attribute <span className="text-rose-500">borderless</span> in Component to show a borderless alert</p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert borderless color="primary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert borderless color="secondary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert borderless color="success-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert borderless color="danger-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert borderless color="warning-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert borderless color="info-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                <Alert borderless color="light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Light alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert borderless color="dark" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Dismissing Alerts</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">add attribute <span className="text-rose-500">iconr & close(a function to trigger iconr)</span> in Component to use a dismissing alert</p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                {active?
                                <Alert close={()=>{setActive(false)}} iconr="FaTimes"  color="primary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive(true)}} small color="primary-light" label="Show"/>}
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                {active2?
                                <Alert close={()=>{setActive2(false)}} iconr="FaTimes"  color="secondary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive2(true)}} small color="secondary-light" label="Show"/>}
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                {active3?
                                <Alert close={()=>{setActive3(false)}} iconr="FaTimes"  color="success-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive3(true)}} small color="success-light" label="Show"/>}
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                {active4?
                                <Alert close={()=>{setActive4(false)}} iconr="FaTimes"  color="danger-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive4(true)}} small color="danger-light" label="Show"/>}
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                {active5?
                                <Alert close={()=>{setActive5(false)}} iconr="FaTimes"  color="warning-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive5(true)}} small color="warning-light" label="Show"/>}
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                {active6?
                                <Alert close={()=>{setActive6(false)}} iconr="FaTimes"  color="info-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive6(true)}} small color="info-light" label="Show"/>}
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                {active7?
                                <Alert close={()=>{setActive7(false)}} iconr="FaTimes"  color="light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Light alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive7(true)}} small color="light" label="Show"/>}
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                {active8?
                                <Alert close={()=>{setActive8(false)}} iconr="FaTimes"  color="dark" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>:
                                <Button onClick={()=>{setActive8(true)}} small color="dark" label="Show"/>}
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Outline Alerts</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the color attribute <span className="text-rose-500">primary-outline</span> Component to show a Outline alert</p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert color="primary-outline" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert color="secondary-outline" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert color="success-outline" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert color="danger-outline" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert color="warning-outline" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert color="info-outline" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert color="dark-outline" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>LeftBorder Alerts</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the attribute <span className="text-rose-500">leftborder</span> Component to show a leftborder alert</p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert leftborder iconl="FaRegGrinBeam" color="primary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert leftborder iconl="FaRegGrinAlt" color="secondary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert leftborder iconl="FaRegGrinHearts" color="success-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert leftborder iconl="FaRegFrownOpen" color="danger-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert leftborder iconl="FaRegGrinBeamSweat" color="warning-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert leftborder iconl="FaRegGrimace" color="info-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                <Alert leftborder iconl="FaRegGrinWink" color="light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Light alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert leftborder iconl="FaRegGrinTongue" color="dark" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>TopBorders Alerts</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the attribute <span className="text-rose-500">TopBorders</span> Component to show a TopBorders alert</p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert topborder iconl="FaRegGrinBeam" color="primary-outline" className="mb-3 group">
                                    <p className="text-gray-700 group-hover:text-white"><strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!</p>
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert topborder iconl="FaRegGrinAlt" color="secondary-outline" className="mb-3 group">
                                    <p className="text-gray-700 group-hover:text-white"><strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!</p>
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert topborder iconl="FaRegGrinHearts" color="success-outline" className="mb-3 group">
                                    <p className="text-gray-700 group-hover:text-white"><strong> Hi! </strong> A simple <b>Success alert</b> —check it out!</p>
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert topborder iconl="FaRegFrownOpen" color="danger-outline" className="mb-3 group">
                                    <p className="text-gray-700 group-hover:text-white"><strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!</p>
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert topborder iconl="FaRegGrinBeamSweat" color="warning-outline" className="mb-3 group">
                                    <p className="text-gray-700 group-hover:text-white"><strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!</p>
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert topborder iconl="FaRegGrimace" color="info-outline" className="mb-3 group">
                                    <p className="text-gray-700 group-hover:text-white"><strong> Hi! </strong> A simple <b>Info alert</b> —check it out!</p>
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                <Alert topborder iconl="FaRegGrinWink" color="light-outline" className="mb-3 group">
                                    <p className="text-gray-500 group-hover:text-gray-800"><strong> Hi! </strong> A simple <b>Light alert</b> —check it out!</p>
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert topborder iconl="FaRegGrinTongue" color="dark-outline" className="mb-3 group">
                                    <p className="text-gray-700 group-hover:text-white"><strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!</p>
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Solid Alerts</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the color attribute <span className="text-rose-500">primary</span> Component to show a solid color</p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert color="primary" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert color="secondary" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert color="success" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert color="danger" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert color="warning" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert color="info" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                <Alert color="light-solid" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Light alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert color="dark-solid" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Another Example Alerts</Card.header>
                    <Card.main className="p-3">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert iconl="FaRegGrinBeam" iconlc="bg-blue-500" color="primary" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert iconl="FaRegGrinAlt" iconlc="bg-indigo-400" color="secondary" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert iconl="FaRegGrinHearts" iconlc="bg-green-400" color="success" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert iconl="FaRegFrownOpen" iconlc="bg-red-400" color="danger" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert iconl="FaRegGrinBeamSweat" iconlc="bg-amber-400" color="warning" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert iconl="FaRegGrimace" color="info" iconlc="bg-sky-400" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                <Alert iconl="FaRegGrinWink" color="light-solid" iconlc="bg-gray-200" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Light alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert iconl="FaRegGrinTongue" iconlc="bg-gray-500" color="dark-solid" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Another Example Alerts</Card.header>
                    <Card.main className="p-3">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Primary Alert</p>
                                <Alert iconl="FaRegGrinBeam" borderless iconlc="bg-blue-700 text-white" labelrounded color="primary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Secondary Alert</p>
                                <Alert iconl="FaRegGrinAlt" borderless  iconlc="bg-indigo-700 text-white" labelrounded color="secondary-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Secondary alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Success Alert</p>
                                <Alert iconl="FaRegGrinHearts" borderless iconlc="bg-green-600 text-white" labelrounded color="success-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Success alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Danger Alert</p>
                                <Alert iconl="FaRegFrownOpen" borderless iconlc="bg-red-700 text-white" labelrounded color="danger-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Danger alert</b> —check it out!
                                </Alert>
                            </div>
                            <div className="w-full lg:w-1/2 p-3 pb-0 flex flex-col">
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Warning Alert</p>
                                <Alert iconl="FaRegGrinBeamSweat" borderless iconlc="bg-amber-500 text-white" labelrounded color="warning-light" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Warning alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Info Alert</p>
                                <Alert iconl="FaRegGrimace" borderless color="info-light" iconlc="bg-sky-500 text-white" labelrounded className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Info alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Light Alert</p>
                                <Alert iconl="FaRegGrinWink" borderless color="light" iconlc="bg-gray-200"  labelrounded className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Light alert</b> —check it out!
                                </Alert>
                                <p className="text-sm mb-2 text-gray-600 tracking-wide font-medium">Dark Alert</p>
                                <Alert iconl="FaRegGrinTongue" borderless iconlc="bg-gray-800 text-white" labelrounded color="dark" className="mb-3">
                                    <strong> Hi! </strong> A simple <b>Dark alert</b> —check it out!
                                </Alert>
                            </div>
                        </div>
                    </Card.main>
                </Card>
            </div>
          </main>
        </Layout>
    );
}

export default Alerts;