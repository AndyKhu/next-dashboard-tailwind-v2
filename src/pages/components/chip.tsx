import Button from "@components/base/Button";
import Chip from "@components/base/Chip";
import Card from "@components/Card";
import Icon from "@components/Icon";
import Layout from "@components/Layout";
import Head from "next/head";
import { useState } from "react";

const Chips = () => {
    const [close,setClose] = useState(false)
    return (
    <Layout authenticated>
      <Head>
        <title>Chip</title>
      </Head>
      <main>
        <div className="flex flex-col gap-4 p-4">
            <Card>
                <Card.header>Example Chip</Card.header>
                <Card.main>
                    <div className="flex gap-4 flex-wrap">
                        <Chip>Default</Chip>
                        <div className="inline-flex justify-center">
                            {close?<Button color="primary" onClick={()=>{setClose(false)}}>show</Button>:
                            <Chip isclose={close} close closeEvent={()=>{setClose(true)}}>
                                Closeable
                            </Chip>
                            }
                        </div>
                        <Chip color="border-2 border-gray-300">Outline</Chip>
                        <Chip tile>Default</Chip>
                        <Chip color="border-2 border-gray-300" tile>Outline</Chip>
                    </div>
                </Card.main>
            </Card>
            <Card>
                <Card.header>Size Chip</Card.header>
                <Card.main>
                    <div className="flex gap-4 flex-wrap mb-4 items-end">
                        <Chip size="2xsmall" color="primary">2xsmall</Chip>
                        <Chip size="xsmall" color="primary">xsmall</Chip>
                        <Chip size="small" color="primary">small</Chip>
                        <Chip size="base" color="primary">base</Chip>
                        <Chip size="large" color="primary">large</Chip>
                        <Chip size="xlarge" color="primary">xlarge</Chip>
                    </div>
                </Card.main>
            </Card>
            <Card>
                <Card.header>Color Chip</Card.header>
                <Card.main>
                    <div className="flex gap-4 flex-wrap mb-4">
                        <Chip color="primary">primary</Chip>
                        <Chip color="secondary">secondary</Chip>
                        <Chip color="success">success</Chip>
                        <Chip color="danger">danger</Chip>
                        <Chip color="warning">warning</Chip>
                        <Chip color="info">info</Chip>
                        <Chip color="light-solid">light</Chip>
                        <Chip color="dark-solid">dark</Chip>
                    </div>
                    <div className="flex gap-4 flex-wrap mb-4">
                        <Chip color="primary-outline">primary</Chip>
                        <Chip color="secondary-outline">secondary</Chip>
                        <Chip color="success-outline">success</Chip>
                        <Chip color="danger-outline">danger</Chip>
                        <Chip color="warning-outline">warning</Chip>
                        <Chip color="info-outline">info</Chip>
                        <Chip color="light-outline">light</Chip>
                        <Chip color="dark-outline">dark</Chip>
                    </div>
                </Card.main>
            </Card>
            <Card>
                <Card.header>Color Chip</Card.header>
                <Card.main>
                    <div className="flex gap-4 flex-wrap mb-4">
                        <Chip color="primary">
                            <Icon name="FaUserCircle" left size={20}/>
                            primary
                        </Chip>
                        <Chip color="secondary">
                            secondary
                            <Icon name="FaStar" right size={18}/>
                        </Chip>
                        <Chip color="success">
                            <Icon name="FaCheckCircle" left size={18}/>
                            success
                        </Chip>
                        <Chip color="danger">
                            <Icon name="FaExclamationCircle" left size={20}/>
                            danger
                        </Chip>
                        <Chip color="warning">
                            <Icon name="FaExclamationTriangle" left size={20}/>
                            warning
                        </Chip>
                        <Chip color="info">
                            info
                            <Icon name="FaExclamationCircle" right size={20}/>
                        </Chip>
                        <Chip color="light-solid"><Icon name="FaSun" left size={20}/>light</Chip>
                        <Chip color="dark-solid"><Icon name="FaMoon" left size={20}/>dark</Chip>
                    </div>
                    <div className="flex gap-4 flex-wrap mb-4">
                        <Chip color="primary-outline">
                            <Icon name="FaUserCircle" left size={20}/>
                            primary
                        </Chip>
                        <Chip color="secondary-outline">
                            secondary
                            <Icon name="FaStar" right size={18}/>
                        </Chip>
                        <Chip color="success-outline">
                            <Icon name="FaCheckCircle" left size={18}/>
                            success
                        </Chip>
                        <Chip color="danger-outline">
                            <Icon name="FaExclamationCircle" left size={20}/>
                            danger
                        </Chip>
                        <Chip color="warning-outline">
                            <Icon name="FaExclamationTriangle" left size={20}/>
                            warning
                        </Chip>
                        <Chip color="info-outline">
                            info
                            <Icon name="FaExclamationCircle" right size={20}/>
                        </Chip>
                        <Chip color="light-outline"><Icon name="FaSun" left size={20}/>light</Chip>
                        <Chip color="dark-outline"><Icon name="FaMoon" left size={20}/>dark</Chip>
                    </div>
                </Card.main>
            </Card>
            <Card>
                <Card.header>Tile Chip</Card.header>
                <Card.main>
                    <div className="flex gap-4 flex-wrap mb-4">
                        <Chip tile color="primary">primary</Chip>
                        <Chip tile color="secondary">secondary</Chip>
                        <Chip tile color="success">success</Chip>
                        <Chip tile color="danger">danger</Chip>
                        <Chip tile color="warning">warning</Chip>
                        <Chip tile color="info">info</Chip>
                        <Chip tile color="light-solid">light</Chip>
                        <Chip tile color="dark-solid">dark</Chip>
                    </div>
                    <div className="flex gap-4 flex-wrap mb-4">
                        <Chip tile color="primary-outline">primary</Chip>
                        <Chip tile color="secondary-outline">secondary</Chip>
                        <Chip tile color="success-outline">success</Chip>
                        <Chip tile color="danger-outline">danger</Chip>
                        <Chip tile color="warning-outline">warning</Chip>
                        <Chip tile color="info-outline">info</Chip>
                        <Chip tile color="light-outline">light</Chip>
                        <Chip tile color="dark-outline">dark</Chip>
                    </div>
                </Card.main>
            </Card>
        </div>
      </main>
    </Layout>
    );
}

export default Chips;