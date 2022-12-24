import Avatar from "@components/base/Avatar";
import Checkbox from "@components/base/Checkbox";
import Card from "@components/Card";
import Icon from "@components/Icon";
import Layout from "@components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Avatars = () => {
    const [color,setColor] = useState("primary")
    const [size,setSize] = useState("base")
    return (
        <Layout authenticated>
            <Head>
                <title>Avatar</title>
            </Head>
        <main>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <Card className="w-full">
                        <Card.header>Default Avatar</Card.header>
                        <Card.main>
                            <p className="text-sm text-gray-500 mb-4">Use the <span className="text-rose-500">Avatar</span> Component to show a defaut Avatar</p>
                            <div className="flex items-center justify-center md:justify-start flex-wrap gap-4">
                                <Avatar color="primary">
                                    <Icon name="FaRegClock"/>
                                </Avatar>
                                <Avatar>
                                    <Image src={"/images/hero.jpg"} fill alt="hero" sizes="36px"/>
                                </Avatar>
                                <Avatar color="danger">
                                    A
                                </Avatar>
                            </div>
                        </Card.main>
                    </Card>
                    <Card className="w-full">
                        <Card.header>Avatar Tile</Card.header>
                        <Card.main>
                            <p className="text-sm text-gray-500 mb-4">Use Attribute <span className="text-rose-500">Tile</span> to remove rounded</p>
                            <div className="flex items-center justify-center md:justify-start flex-wrap gap-4">
                                <Avatar color="primary" tile>
                                    <Icon name="FaRegClock"/>
                                </Avatar>
                                <Avatar tile>
                                    <Image src={"/images/hero.jpg"} fill alt="hero" sizes="36px"/>
                                </Avatar>
                                <Avatar color="danger" tile >
                                    A
                                </Avatar>
                            </div>
                        </Card.main>
                    </Card>
                </div>
                <Card>
                    <Card.header>Avatar Size & Color</Card.header>
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
                                <div className="border-b border-t p-2 w-full text-center font-semibold">Size Option</div>
                                <div className="flex p-4 w-full">
                                    <div className="w-1/2">
                                        <Checkbox defaultChecked outline type="radio" name="size" onClick={()=>{setSize("xs")}} label="XS"/>
                                        <Checkbox outline type="radio" name="size" onClick={()=>{setSize("sm")}} label="SM"/>
                                        <Checkbox outline type="radio" name="size" onClick={()=>{setSize("md")}} label="MD"/>
                                        <Checkbox outline type="radio" name="size" onClick={()=>{setSize("base")}} label="BASE" className="mb-0"/>
                                    </div>
                                    <div className="w-1/2">
                                        <Checkbox outline type="radio" name="size" onClick={()=>{setSize("large")}} label="LARGE"/>
                                        <Checkbox outline type="radio" name="size" onClick={()=>{setSize("xl")}} label="XL"/>
                                        <Checkbox outline type="radio" name="size" onClick={()=>{setSize("2xl")}} label="2XL"/>
                                        <Checkbox outline type="radio" name="size" onClick={()=>{setSize("fit")}} label="FIT (parent)" className="mb-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="p-2 border-t border-b md:border-t-0 text-center w-full font-semibold">Result</div>
                                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center p-8">
                                    <Avatar color={color} size={size}>
                                        A
                                    </Avatar>
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

export default Avatars;