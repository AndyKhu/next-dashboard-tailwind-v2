import Checkbox from "@components/base/Checkbox";
import Card from "@components/Card";
import Layout from "@components/Layout";
import Head from "next/head";

const Checkboxs = () => {
    return (
        <Layout authenticated>
          <Head>
            <title>Checkbox</title>
          </Head>
          <main>
            <div className="flex flex-col gap-4 p-4">
                <Card>
                    <Card.header>Default Checkbox</Card.header>
                    <Card.main className="p-2">
                        <div className="flex flex-wrap">
                            <div className="flex flex-col w-full md:w-1/2 p-3">
                                <p className="font-medium text-md mb-4 text-gray-500">Default Checkbox</p>
                                <p className="text-sm text-gray-500 mb-4">Use the <span className="text-rose-500">Checkbox</span> Component to show a default Checkbox</p>
                                <div className="flex flex-wrap">
                                    <Checkbox className="w-1/2 text-sm font-medium" label="Default Checkbox"/>
                                    <Checkbox className="w-1/2 text-sm font-medium" label="Default Checkbox" defaultChecked/>
                                    <Checkbox className="w-1/2 text-sm font-medium" outline label="Default Outline Checkbox"/>
                                    <Checkbox className="w-1/2 text-sm font-medium" outline label="Default Outline Checkbox" defaultChecked/>
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-1/2 p-3">
                                <p className="font-medium text-md mb-4 text-gray-500">Default Radio</p>
                                <p className="text-sm text-gray-500 mb-4">Use <span className="text-rose-500">type=&quot;radio&quot;</span> on checkbox component to use radio</p>
                                <div className="flex flex-wrap">
                                    <Checkbox type="radio" name="dc" className="w-1/2 text-sm font-medium" label="Default Checkbox"/>
                                    <Checkbox type="radio" name="dc" className="w-1/2 text-sm font-medium" label="Default Checkbox" defaultChecked/>
                                    <Checkbox type="radio" name="doc" className="w-1/2 text-sm font-medium" outline label="Default Outline Checkbox"/>
                                    <Checkbox type="radio" name="doc" className="w-1/2 text-sm font-medium" outline label="Default Outline Checkbox" defaultChecked/>
                                </div>
                            </div>
                        </div>
                    </Card.main>
                </Card>
                <div className="flex gap-4 flex-col md:flex-row">
                    <Card className="w-full md:w-1/2">
                        <Card.header>Disabled Checkbox</Card.header>
                        <Card.main className="p-2">
                            <div className="flex flex-col lg:flex-row p-3">
                                <div className="flex flex-col w-full">
                                    <p className="text-sm text-gray-500 mb-4">Use <span className="text-rose-500">disabled</span> attribute to set a checkbox or Radio disabled</p>
                                    <div className="flex flex-wrap">
                                        <Checkbox disabled className="w-1/2 text-sm font-medium" label="Default Checkbox"/>
                                        <Checkbox disabled className="w-1/2 text-sm font-medium" label="Default Checkbox" defaultChecked/>
                                        <Checkbox disabled type="radio" className="w-1/2 text-sm font-medium" label="Default Checkbox"/>
                                        <Checkbox disabled type="radio" className="w-1/2 text-sm font-medium" label="Default Checkbox" defaultChecked/>
                                    </div>
                                </div>
                            </div>
                        </Card.main>
                    </Card>
                    <Card className="w-full md:w-1/2">
                        <Card.header>Checkbox Without Label</Card.header>
                        <Card.main className="p-2">
                            <div className="flex flex-col lg:flex-row p-3">
                                <div className="flex flex-col w-full">
                                    <p className="text-sm text-gray-500 mb-4">Label attribute is optional , if unset checkbox will have no label</p>
                                    <div className="flex flex-wrap">
                                        <Checkbox color="primary" defaultChecked/>
                                        <Checkbox color="primary" type="radio" defaultChecked/>
                                        <Checkbox color="primary" outline defaultChecked/>
                                        <Checkbox color="primary" outline type="radio" defaultChecked/>
                                    </div>
                                </div>
                            </div>
                        </Card.main>
                    </Card>
                </div>
                <Card>
                <Card.header>Color Checkbox</Card.header>
                    <Card.main className="p-2">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex flex-col w-full p-3">
                                <p className="text-sm text-gray-500 mb-4">Use <span className="text-rose-500">disabled</span> attribute to set a checkbox or Radio disabled</p>
                                <div className="flex flex-col">
                                    <p className="font-medium text-md mb-4 text-gray-500">Default Checkbox</p>
                                    <div className="flex flex-wrap">
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Primary" color="primary" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Secondary" color="secondary" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Success" color="success" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Danger" color="danger" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Warning" color="warning" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Info" color="info" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Light" color="light-solid" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Dark" color="dark-solid" defaultChecked/>
                                    </div>
                                    <p className="font-medium text-md mb-4 text-gray-500">Outline Checkbox</p>
                                    <div className="flex flex-wrap">
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Primary" color="primary" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Secondary" color="secondary" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Success" color="success" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Danger" color="danger" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Warning" color="warning" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Info" color="info" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Light" color="light-solid" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" label="Dark" color="dark-solid" defaultChecked/>
                                    </div>
                                    <p className="font-medium text-md mb-4 text-gray-500">Default Radio</p>
                                    <div className="flex flex-wrap">
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Primary" color="primary" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Secondary" color="secondary" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Success" color="success" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Danger" color="danger" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Warning" color="warning" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Info" color="info" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Light" color="light-solid" defaultChecked/>
                                        <Checkbox className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Dark" color="dark-solid" defaultChecked/>
                                    </div>
                                    <p className="font-medium text-md mb-4 text-gray-500">Outline Radio</p>
                                    <div className="flex flex-wrap">
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Primary" color="primary" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Secondary" color="secondary" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Success" color="success" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Danger" color="danger" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Warning" color="warning" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Info" color="info" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Light" color="light-solid" defaultChecked/>
                                        <Checkbox outline className="w-1/2 md:w-1/4 lg:w-1/8 text-sm font-medium" type="radio" label="Dark" color="dark-solid" defaultChecked/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.main>
                </Card>
            </div>
          </main>
        </Layout>
      )
}

export default Checkboxs;