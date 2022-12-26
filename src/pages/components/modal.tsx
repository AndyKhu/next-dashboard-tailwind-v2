import Button from "@components/base/Button";
import Modal from "@components/base/Modal";
import Card from "@components/Card";
import Icon from "@components/Icon";
import Layout from "@components/Layout";
import Head from "next/head";
import {useState} from "react"

const Modals = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [isOpen2,setIsOpen2] = useState(false)
    const [isOpen3,setIsOpen3] = useState(false)
    return (
        <Layout authenticated>
            <Head>
                <title>Modal</title>
            </Head>
            <main>
                <div className="flex flex-col gap-4 p-4">
                    <Card>
                        <Card.header>Default Modal</Card.header>
                        <Card.main>
                            <p className="text-sm text-gray-500 mb-4">Use the <span className="text-rose-500">Modal</span> Component to show a default Modal</p>
                            <div className="flex justify-center">
                                <Button onClick={()=>setIsOpen(true)} color="primary">Click Me</Button>
                                </div>
                            {isOpen && (
                            <Modal isOpen={isOpen} handleClose={()=> setIsOpen(!isOpen)}>
                                <Card className="w-[calc(100%-40px)] md:w-[500px]">
                                    <Card.header className="success hover:bg-success-1">Privacy Policy</Card.header>
                                    <Card.main>
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <div className="flex justify-end gap-4">
                                            <Button color="danger" onClick={()=> setIsOpen(false)}>Cancel</Button>
                                            <Button color="success" onClick={()=> setIsOpen(false)}>Accept</Button>
                                        </div>
                                    </Card.main>
                                </Card>
                            </Modal>)}
                        </Card.main>
                    </Card>
                    <Card>
                        <Card.header>Fullscreen Modal</Card.header>
                        <Card.main>
                            <div className="flex justify-center">
                                <Button onClick={()=>setIsOpen2(true)} color="primary">Click Me</Button>
                                </div>
                            {isOpen2 && (
                            <Modal isOpen={isOpen2} handleClose={()=> setIsOpen2(!isOpen)} fullscreen>
                                <Card>
                                    <Card.header className="success hover:bg-success-1 flex justify-between items-center">
                                        <span>Privacy Policy</span>
                                        <Button onClick={()=> setIsOpen2(false)} depressed size="small" rounded icon color="danger-outline"><Icon name="FaTimes" size={18}></Icon></Button>
                                    </Card.header>
                                    <Card.main>
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <div className="flex justify-end gap-4">
                                            <Button color="danger" onClick={()=> setIsOpen2(false)}>Cancel</Button>
                                            <Button color="success" onClick={()=> setIsOpen2(false)}>Accept</Button>
                                        </div>
                                    </Card.main>
                                </Card>
                            </Modal>)}
                        </Card.main>
                    </Card>
                    <Card>
                        <Card.header>Persistent Modal</Card.header>
                        <Card.main>
                            <p className="text-sm text-gray-500 mb-4">Similar to a Default Dialog, except that it’s not dismissed when touching outside or pressing esc key.</p>
                            <div className="flex justify-center">
                                <Button onClick={()=>setIsOpen3(true)} color="primary">Click Me</Button>
                                </div>
                            {isOpen3 && (
                            <Modal isOpen={isOpen3} handleClose={()=> setIsOpen3(!isOpen)} persistent>
                                <Card className="w-[calc(100%-40px)] md:w-[500px]">
                                    <Card.header className="success hover:bg-success-1">Privacy Policy</Card.header>
                                    <Card.main>
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <div className="flex justify-end gap-4">
                                            <Button color="danger" onClick={()=> setIsOpen3(false)}>Cancel</Button>
                                            <Button color="success" onClick={()=> setIsOpen3(false)}>Accept</Button>
                                        </div>
                                    </Card.main>
                                </Card>
                            </Modal>)}
                        </Card.main>
                    </Card>
                </div>
            </main>
        </Layout>
    );
}

export default Modals;