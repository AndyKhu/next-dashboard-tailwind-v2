import Button from "@components/base/Button";
import Card from "@components/Card";
import Icon from "@components/Icon";
import Layout from "@components/Layout";
import Head from "next/head";

const Buttons = () => {
    return (
    <Layout authenticated>
        <Head>
            <title>Button</title>
        </Head>
        <main>
            <div className="p-4 flex flex-col gap-4">
                <Card>
                    <Card.header>Default Button</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the <span className="text-rose-500">Button</span> Component to show a default Button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button color="primary">primary</Button>
                            <Button color="secondary">secondary</Button>
                            <Button color="success">success</Button>
                            <Button color="danger">danger</Button>
                            <Button color="warning">warning</Button>
                            <Button color="info">info</Button>
                            <Button color="light-solid">light</Button>
                            <Button color="dark-solid">dark</Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Button Size</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">There are 5 different size of button</p>
                        <div className="flex flex-wrap px-3 gap-2 items-end">
                            <Button size="xsmall" color="primary">xsmall</Button>
                            <Button size="small" color="primary">small</Button>
                            <Button size="base" color="primary">base</Button>
                            <Button size="large" color="primary">large</Button>
                            <Button size="xlarge" color="primary">xlarge</Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Outline Button</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">add the Color attribute with <span className="text-rose-500">Color-outline</span> to show a outline button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button color="primary-outline">primary</Button>
                            <Button color="secondary-outline">secondary</Button>
                            <Button color="success-outline">success</Button>
                            <Button color="danger-outline">danger</Button>
                            <Button color="warning-outline">warning</Button>
                            <Button color="info-outline">info</Button>
                            <Button color="light-outline">light</Button>
                            <Button color="dark-outline">dark</Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Rounded Button</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">add attribute <span className="text-rose-500">rounded</span> to show a rounded button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button rounded color="primary-outline">primary</Button>
                            <Button rounded color="secondary-outline">secondary</Button>
                            <Button rounded color="success-outline">success</Button>
                            <Button rounded color="danger-outline">danger</Button>
                            <Button rounded color="warning-outline">warning</Button>
                            <Button rounded color="info-outline">info</Button>
                            <Button rounded color="light-outline">light</Button>
                            <Button rounded color="dark-outline">dark</Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Soft Button</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">add the Color attribute with <span className="text-rose-500">Color-light</span> to show a Soft button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button color="primary-light">primary</Button>
                            <Button color="secondary-light">secondary</Button>
                            <Button color="success-light">success</Button>
                            <Button color="danger-light">danger</Button>
                            <Button color="warning-light">warning</Button>
                            <Button color="info-light">info</Button>
                            <Button color="light">light</Button>
                            <Button color="dark-light">dark</Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Ghost Button</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the <span className="text-rose-500">Button</span> Component to show a default Button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button ghost color="primary-outline">primary</Button>
                            <Button ghost color="secondary-outline">secondary</Button>
                            <Button ghost color="success-outline">success</Button>
                            <Button ghost color="danger-outline">danger</Button>
                            <Button ghost color="warning-outline">warning</Button>
                            <Button ghost color="info-outline">info</Button>
                            <Button ghost color="light-outline">light</Button>
                            <Button ghost color="dark-outline">dark</Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Button With Icon</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">Example of Button with Icon</p>
                        <div className="flex flex-wrap px-3 gap-2 mb-4">
                            <Button color="primary">
                                <Icon left name="FaRegGrinBeam"/>
                                primary
                            </Button>
                            <Button color="secondary">
                                <Icon left name="FaRegGrinAlt"/>
                                secondary
                            </Button>
                            <Button color="success">
                                <Icon left name="FaRegGrinHearts"/>
                                success
                            </Button>
                            <Button color="danger">
                                <Icon left name="FaRegFrownOpen"/>
                                danger
                            </Button>
                            <Button color="warning">
                                <Icon left name="FaRegGrinBeamSweat"/>
                                warning
                            </Button>
                            <Button color="info">
                                <Icon left name="FaRegGrimace"/>
                                info
                            </Button>
                            <Button color="light-solid">
                                <Icon left name="FaRegGrinWink"/>
                                light
                            </Button>
                            <Button color="dark-solid">
                                <Icon left name="FaRegGrinTongue"/>
                                dark
                            </Button>
                        </div>
                        <div className="flex flex-wrap px-3 gap-2 mb-4">
                            <Button color="primary">
                                primary
                                <Icon right name="FaRegGrinBeam"/>
                            </Button>
                            <Button color="secondary">
                                secondary
                                <Icon right name="FaRegGrinAlt"/>
                            </Button>
                            <Button color="success">
                                success
                                <Icon right name="FaRegGrinHearts"/>
                            </Button>
                            <Button color="danger">
                                danger
                                <Icon right name="FaRegFrownOpen"/>
                            </Button>
                            <Button color="warning">
                                warning
                                <Icon right name="FaRegGrinBeamSweat"/>
                            </Button>
                            <Button color="info">
                                info
                                <Icon right name="FaRegGrimace"/>
                            </Button>
                            <Button color="light-solid">
                                light
                                <Icon right name="FaRegGrinWink"/>
                            </Button>
                            <Button color="dark-solid">
                                dark
                                <Icon right name="FaRegGrinTongue"/>
                            </Button>
                        </div>
                        <div className="flex flex-wrap px-3 gap-2 mb-4">
                            <Button iconlabel color="primary">
                                <div className="p-3 bg-primary-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegGrinBeam"/>
                                </div>
                                <span className="mx-2">
                                    primary
                                </span>
                            </Button>
                            <Button iconlabel color="secondary">
                                <div className="p-3 bg-secondary-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegGrinAlt"/>
                                </div>
                                <span className="mx-2">
                                    secondary
                                </span>
                            </Button>
                            <Button iconlabel color="success">
                                <div className="p-3 bg-success-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegGrinHearts"/>
                                </div>
                                <span className="mx-2">
                                    success
                                </span>
                            </Button>
                            <Button iconlabel color="danger">
                                <div className="p-3 bg-danger-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegFrownOpen"/>
                                </div>
                                <span className="mx-2">
                                    danger
                                </span>
                            </Button>
                            <Button iconlabel color="warning">
                                <div className="p-3 bg-warning-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegGrinBeamSweat"/>
                                </div>
                                <span className="mx-2">
                                    warning
                                </span>
                            </Button>
                            <Button iconlabel color="info">
                                <div className="p-3 bg-info-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegGrimace"/>
                                </div>
                                <span className="mx-2">
                                    info
                                </span>
                            </Button>
                            <Button iconlabel color="light-solid">
                                <div className="p-3 bg-light-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegGrinWink"/>
                                </div>
                                <span className="mx-2">
                                    light
                                </span>
                            </Button>
                            <Button iconlabel color="dark-solid">
                                <div className="p-3 bg-dark-2 flex items-center h-full rounded-tl rounded-bl">
                                    <Icon name="FaRegGrinTongue"/>
                                </div>
                                <span className="mx-2">
                                    dark
                                </span>
                            </Button>
                        </div>
                        <div className="flex flex-wrap px-3 gap-2 mb-4">
                            <Button rounded iconlabel color="primary">
                                <div className="p-3 bg-primary-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegGrinBeam"/>
                                </div>
                                <span className="mx-2">
                                    primary
                                </span>
                            </Button>
                            <Button rounded iconlabel color="secondary">
                                <div className="p-3 bg-secondary-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegGrinAlt"/>
                                </div>
                                <span className="mx-2">
                                    secondary
                                </span>
                            </Button>
                            <Button rounded iconlabel color="success">
                                <div className="p-3 bg-success-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegGrinHearts"/>
                                </div>
                                <span className="mx-2">
                                    success
                                </span>
                            </Button>
                            <Button rounded iconlabel color="danger">
                                <div className="p-3 bg-danger-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegFrownOpen"/>
                                </div>
                                <span className="mx-2">
                                    danger
                                </span>
                            </Button>
                            <Button rounded iconlabel color="warning">
                                <div className="p-3 bg-warning-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegGrinBeamSweat"/>
                                </div>
                                <span className="mx-2">
                                    warning
                                </span>
                            </Button>
                            <Button rounded iconlabel color="info">
                                <div className="p-3 bg-info-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegGrimace"/>
                                </div>
                                <span className="mx-2">
                                    info
                                </span>
                            </Button>
                            <Button rounded iconlabel color="light-solid">
                                <div className="p-3 bg-light-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegGrinWink"/>
                                </div>
                                <span className="mx-2">
                                    light
                                </span>
                            </Button>
                            <Button rounded iconlabel color="dark-solid">
                                <div className="p-3 bg-dark-2 flex rounded-full items-center h-full">
                                    <Icon name="FaRegGrinTongue"/>
                                </div>
                                <span className="mx-2">
                                    dark
                                </span>
                            </Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Button Icon Only</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">Example of Button Icon Only</p>
                        <div className="flex flex-wrap px-3 gap-2 mb-4">
                            <Button icon color="primary">
                                <Icon name="FaRegGrinBeam" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="secondary">
                                <Icon name="FaRegGrinAlt" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="success">
                                <Icon name="FaRegGrinHearts" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="danger">
                                <Icon name="FaRegFrownOpen" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="warning">
                                <Icon name="FaRegGrinBeamSweat" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="info">
                                <Icon name="FaRegGrimace" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="light-solid">
                                <Icon name="FaRegGrinWink" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="dark-solid">
                                <Icon name="FaRegGrinTongue" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="primary-outline">
                                <Icon name="FaRegGrinBeam" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="secondary-outline">
                                <Icon name="FaRegGrinAlt" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="success-outline">
                                <Icon name="FaRegGrinHearts" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="danger-outline">
                                <Icon name="FaRegFrownOpen" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="warning-outline">
                                <Icon name="FaRegGrinBeamSweat" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="info-outline">
                                <Icon name="FaRegGrimace" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="light-outline">
                                <Icon name="FaRegGrinWink" className="mx-1" size={20}/>
                            </Button>
                            <Button icon color="dark-outline">
                                <Icon name="FaRegGrinTongue" className="mx-1" size={20}/>
                            </Button>
                        </div>
                        <div className="flex flex-wrap px-3 gap-2 mb-4">
                            <Button rounded icon color="primary">
                                <Icon name="FaRegGrinBeam" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="secondary">
                                <Icon name="FaRegGrinAlt" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="success">
                                <Icon name="FaRegGrinHearts" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="danger">
                                <Icon name="FaRegFrownOpen" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="warning">
                                <Icon name="FaRegGrinBeamSweat" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="info">
                                <Icon name="FaRegGrimace" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="light-solid">
                                <Icon name="FaRegGrinWink" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="dark-solid">
                                <Icon name="FaRegGrinTongue" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="primary-outline">
                                <Icon name="FaRegGrinBeam" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="secondary-outline">
                                <Icon name="FaRegGrinAlt" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="success-outline">
                                <Icon name="FaRegGrinHearts" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="danger-outline">
                                <Icon name="FaRegFrownOpen" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="warning-outline">
                                <Icon name="FaRegGrinBeamSweat" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="info-outline">
                                <Icon name="FaRegGrimace" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="light-outline">
                                <Icon name="FaRegGrinWink" className="mx-1" size={20}/>
                            </Button>
                            <Button rounded icon color="dark-outline">
                                <Icon name="FaRegGrinTongue" className="mx-1" size={20}/>
                            </Button>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Hover Animation Button</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-2 px-3">add Attribute <span className="text-rose-500">animated</span> to give animation when hover the button</p>
                        <div className="flex flex-wrap px-3 gap-2 mb-2">
                            <Button animated color="primary">primary</Button>
                            <Button animated color="secondary">secondary</Button>
                            <Button animated color="success">success</Button>
                            <Button animated color="danger">danger</Button>
                            <Button animated color="warning">warning</Button>
                            <Button animated color="info">info</Button>
                            <Button animated color="light-solid">light</Button>
                            <Button animated color="dark-solid">dark</Button>
                        </div>
                        <p className="text-sm text-gray-500 mb-2 px-3">add <span className="text-rose-500">animate-wiggle</span> class to give wiggle animation on icon</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button icon color="primary">
                                <Icon name="FaRegGrinBeam" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                            <Button icon color="secondary">
                                <Icon name="FaRegGrinAlt" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                            <Button icon color="success">
                                <Icon name="FaRegGrinHearts" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                            <Button icon color="danger">
                                <Icon name="FaRegFrownOpen" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                            <Button icon color="warning">
                                <Icon name="FaRegGrinBeamSweat" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                            <Button icon color="info">
                                <Icon name="FaRegGrimace" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                            <Button icon color="light-solid">
                                <Icon name="FaRegGrinWink" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                            <Button icon color="dark-solid">
                                <Icon name="FaRegGrinTongue" className="mx-1 animate-wiggle" size={20}/>
                            </Button>
                        </div>
                    </Card.main>
                </Card>
            </div>
        </main>
    </Layout>
    );
}

export default Buttons;