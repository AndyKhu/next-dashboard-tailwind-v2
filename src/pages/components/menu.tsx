import Avatar from "@components/base/Avatar";
import Button from "@components/base/Button";
import Checkbox from "@components/base/Checkbox";
import Menu from "@components/base/Menu";
import Card from "@components/Card";
import Icon from "@components/Icon";
import Layout from "@components/Layout";
import Head from "next/head";
import Link from "next/link";
import {useState} from 'react'

const Menus = () => {
    const [closeOnClick,setCloseOnClick] = useState(false)
    const [closeOnContentClick,setCloseOnContentClick] = useState(false)
    const [onHover,setOnHover] = useState(false)
    const [disabled,setDisabled] = useState(false)
    const [top,setTop] = useState(false)
    const [left,setLeft] = useState(false)
    const [right,setRight] = useState(false)
    return (
        <Layout authenticated>
            <Head>
                <title>Menu</title>
            </Head>
            <main>
                <div className="flex flex-col gap-4 p-4">
                    <Card>
                        <Card.header className="p-2 px-4">Menu</Card.header>
                        <Card.main  className="p-0">
                            <div className="flex flex-col md:flex-row rounded-bl rounded-br border-t">
                                <div className="flex flex-col md:border-r w-full md:w-1/2 items-center">
                                    <div className="border-b p-2 w-full text-center font-semibold">Color Option</div>
                                    <div className="flex p-4 w-full">
                                        <div className="w-1/2">
                                            <Checkbox outline onClick={()=>{setCloseOnClick(!closeOnClick)}} label="CloseOnClick"/>
                                            <Checkbox outline onClick={()=>{setCloseOnContentClick(!closeOnContentClick)}} label="CloseOnContentClick"/>
                                            <Checkbox outline onClick={()=>{setDisabled(!disabled)}} label="Disabled"/>
                                            <Checkbox outline onClick={()=>{setOnHover(!onHover)}} label="On Hover"/>
                                        </div>
                                        <div className="w-1/2">
                                            <Checkbox outline onClick={()=>{setTop(!top)}} label="Top"/>
                                            <Checkbox outline onClick={()=>{setLeft(!left)}} label="Left"/>
                                            <Checkbox outline onClick={()=>{setRight(!right)}} label="Right"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="p-2 border-t border-b md:border-t-0 text-center w-full font-semibold">Result</div>
                                    <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center p-8">
                                        <Menu closeOnClick={closeOnClick} closeOnContentClick={closeOnContentClick} onHover={onHover} disabled={disabled} left={left} top={top} right={right}>
                                            <Link href="#">
                                                <li className="py-2 px-4 block items-center whitespace-nowrap">
                                                    <Icon name="FaUserCircle" left className="inline-block"/>
                                                    <span>Profile</span>
                                                </li>
                                            </Link>
                                            <Link href="#">
                                                <li className="py-2 px-4 block items-center whitespace-nowrap">
                                                    <Icon name="FaRegCommentDots" left className="inline-block"/>
                                                    <span>Message</span>
                                                </li>
                                            </Link>
                                            <Link href="#">
                                                <li className="py-2 px-4 block items-center whitespace-nowrap">
                                                    <Icon name="FaCalendarCheck" left className="inline-block"/>
                                                    <span>TaskBoard</span>
                                                </li>
                                            </Link>
                                            <Link href="#">
                                                <li className="py-2 px-4 block items-center whitespace-nowrap">
                                                    <Icon name="FaRegLifeRing" left className="inline-block"/>
                                                    <span>Help</span>
                                                </li>
                                            </Link>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </Card.main>
                    </Card>
                    <Card>
                        <Card.header>Menu Custom Activator</Card.header>
                        <Card.main className="p-3">
                            <p className="text-sm text-gray-500 mb-4">Use <span className="text-rose-500"></span> attribute to set a checkbox or Radio disabled</p>
                            <div className="flex gap-4">
                                <Menu activator={<Avatar className="cursor-pointer">A</Avatar>} closeOnClick left>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaUserCircle" left className="inline-block"/>
                                            <span>Profile</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaRegCommentDots" left className="inline-block"/>
                                            <span>Message</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaCalendarCheck" left className="inline-block"/>
                                            <span>TaskBoard</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaRegLifeRing" left className="inline-block"/>
                                            <span>Help</span>
                                        </li>
                                    </Link>
                                </Menu>
                                <Menu activator={<Button className="cursor-pointer" color="success">Menu</Button>} closeOnClick left>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaUserCircle" left className="inline-block"/>
                                            <span>Profile</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaRegCommentDots" left className="inline-block"/>
                                            <span>Message</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaCalendarCheck" left className="inline-block"/>
                                            <span>TaskBoard</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaRegLifeRing" left className="inline-block"/>
                                            <span>Help</span>
                                        </li>
                                    </Link>
                                </Menu>
                                <Menu activator={<Button icon rounded className="cursor-pointer" color="danger"><Icon name="FaUserCircle" size={28}></Icon></Button>} closeOnClick left>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaUserCircle" left className="inline-block"/>
                                            <span>Profile</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaRegCommentDots" left className="inline-block"/>
                                            <span>Message</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaCalendarCheck" left className="inline-block"/>
                                            <span>TaskBoard</span>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li className="py-2 px-4 block items-center whitespace-nowrap">
                                            <Icon name="FaRegLifeRing" left className="inline-block"/>
                                            <span>Help</span>
                                        </li>
                                    </Link>
                                </Menu>
                            </div>
                        </Card.main>
                </Card>
                </div>
            </main>
        </Layout>
    );
}

export default Menus;