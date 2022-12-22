import Button from "@components/base/Button";
import Card from "@components/Card";
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
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-2 px-3">Use the <span className="text-rose-500">Button</span> Component to show a default button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button label="primary" color="primary"/>
                            <Button label="secondary" color="secondary"/>
                            <Button label="success" color="success"/>
                            <Button label="danger" color="danger"/>
                            <Button label="warning" color="warning"/>
                            <Button label="info" color="info"/>
                            <Button label="light" color="light-solid"/>
                            <Button label="dark" color="dark-solid"/>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Outline Button</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-3 px-3">add the Color attribute with <span className="text-rose-500">Color-outline</span> to show a outline button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button label="primary" color="primary-outline"/>
                            <Button label="secondary" color="secondary-outline"/>
                            <Button label="success" color="success-outline"/>
                            <Button label="danger" color="danger-outline"/>
                            <Button label="warning" color="warning-outline"/>
                            <Button label="info" color="info-outline"/>
                            <Button label="light" color="light-outline"/>
                            <Button label="dark" color="dark-outline"/>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Rounded Button</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-3 px-3">add the attribute of <span className="text-rose-500">roundedfull</span> to show a rounded button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button label="primary" color="primary-outline" roundedFull/>
                            <Button label="secondary" color="secondary-outline" roundedFull/>
                            <Button label="success" color="success-outline" roundedFull/>
                            <Button label="danger" color="danger-outline" roundedFull/>
                            <Button label="warning" color="warning-outline" roundedFull/>
                            <Button label="info" color="info-outline" roundedFull/>
                            <Button label="light" color="light-outline" roundedFull/>
                            <Button label="dark" color="dark-outline" roundedFull/>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Soft Button</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-3 px-3">add the attribute of <span className="text-rose-500">roundedfull</span> to show a rounded button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button label="primary" color="primary-light"/>
                            <Button label="secondary" color="secondary-light" />
                            <Button label="success" color="success-light" />
                            <Button label="danger" color="danger-light" />
                            <Button label="warning" color="warning-light" />
                            <Button label="info" color="info-light" />
                            <Button label="light" color="light" />
                            <Button label="dark" color="dark" />
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Ghost Button</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-3 px-3">add the attribute of <span className="text-rose-500">ghost</span> to show a ghost button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button label="primary" color="primary-outline" ghost/>
                            <Button label="secondary" color="secondary-outline" ghost/>
                            <Button label="success" color="success-outline" ghost/>
                            <Button label="danger" color="danger-outline" ghost/>
                            <Button label="warning" color="warning-outline" ghost/>
                            <Button label="info" color="info-outline" ghost/>
                            <Button label="light" color="light-outline" ghost/>
                            <Button label="dark" color="dark-outline" ghost/>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Hover Animation Button</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-3 px-3">add the attribute of <span className="text-rose-500">animation</span> to show a Hover Animation button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button label="primary" color="primary" animation/>
                            <Button label="secondary" color="secondary" animation/>
                            <Button label="success" color="success" animation/>
                            <Button label="danger" color="danger" animation/>
                            <Button label="warning" color="warning" animation/>
                            <Button label="info" color="info" animation/>
                            <Button label="light" color="light-solid" animation/>
                            <Button label="dark" color="dark-solid" animation/>
                        </div>
                        <p className="text-sm text-gray-500 my-3 px-3">add the iconclassName <span className="text-rose-500">animate-wiggle</span> to show a wiggle Icon Animation button</p>
                        <div className="flex flex-wrap px-3 gap-2">
                            <Button label="primary" icon="FaRegGrinBeam" color="primary-outline" iconOnly iconclassName="animate-wiggle"/>
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary-outline" iconOnly iconclassName="animate-wiggle"/>
                            <Button label="success" icon="FaRegGrinHearts" color="success-outline" iconOnly iconclassName="animate-wiggle"/>
                            <Button label="danger" icon="FaRegFrownOpen" color="danger-outline" iconOnly iconclassName="animate-wiggle" />
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning-outline" iconOnly iconclassName="animate-wiggle"/> 
                            <Button label="info" icon="FaRegGrimace" color="info-outline" iconOnly iconclassName="animate-wiggle"/>
                            <Button label="light" icon="FaRegGrinWink" color="light-outline" iconOnly iconclassName="animate-wiggle"/>
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-outline" iconOnly iconclassName="animate-wiggle"/>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Button with Icon</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-3 px-3">add the attribute of <span className="text-rose-500">icon</span> to show a Hover Animation button</p>
                        <div className="flex flex-wrap p-3 gap-2">
                            <Button label="primary" icon="FaRegGrinBeam" color="primary" />
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary" />
                            <Button label="success" icon="FaRegGrinHearts" color="success" />
                            <Button label="danger" icon="FaRegFrownOpen" color="danger" />
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning" />
                            <Button label="info" icon="FaRegGrimace" color="info" />
                            <Button label="light" icon="FaRegGrinWink" color="light-solid" />
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-solid" />
                        </div>
                        <div className="flex flex-wrap p-3 gap-2">
                            <Button label="primary" icon="FaRegGrinBeam" color="primary" iconlabel shadowless />
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary" iconlabel shadowless />
                            <Button label="success" icon="FaRegGrinHearts" color="success" iconlabel shadowless/>
                            <Button label="danger" icon="FaRegFrownOpen" color="danger" iconlabel shadowless/>
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning" iconlabel shadowless/>
                            <Button label="info" icon="FaRegGrimace" color="info" iconlabel shadowless />
                            <Button label="light" icon="FaRegGrinWink" color="light-solid" iconlabel shadowless/>
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-solid" iconlabel shadowless/>
                        </div>
                        <div className="flex flex-wrap p-3 gap-2">
                            <Button label="primary" icon="FaRegGrinBeam" color="primary" iconlabel roundedFull />
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary" iconlabel roundedFull/>
                            <Button label="success" icon="FaRegGrinHearts" color="success" iconlabel roundedFull/>
                            <Button label="danger" icon="FaRegFrownOpen" color="danger" iconlabel roundedFull/>
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning" iconlabel roundedFull/>
                            <Button label="info" icon="FaRegGrimace" color="info" iconlabel roundedFull />
                            <Button label="light" icon="FaRegGrinWink" color="light-solid" iconlabel roundedFull/>
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-solid" iconlabel roundedFull/>
                        </div>
                    </Card.main>
                </Card>
                <Card>
                    <Card.header>Button with Icon Only</Card.header>
                    <Card.main className="p-3">
                        <p className="text-sm text-gray-500 mb-3 px-3">add the attribute of <span className="text-rose-500">icon</span> to show a Hover Animation button</p>
                        <div className="flex flex-wrap p-3 gap-2">
                            <Button label="primary" icon="FaRegGrinBeam" color="primary" iconOnly/>
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary" iconOnly/>
                            <Button label="success" icon="FaRegGrinHearts" color="success" iconOnly/>
                            <Button label="danger" icon="FaRegFrownOpen" color="danger" iconOnly />
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning" iconOnly/> 
                            <Button label="info" icon="FaRegGrimace" color="info" iconOnly/>
                            <Button label="light" icon="FaRegGrinWink" color="light-solid" iconOnly/>
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-solid" iconOnly/>
                            <Button label="primary" icon="FaRegGrinBeam" color="primary-outline" iconOnly/>
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary-outline" iconOnly/>
                            <Button label="success" icon="FaRegGrinHearts" color="success-outline" iconOnly/>
                            <Button label="danger" icon="FaRegFrownOpen" color="danger-outline" iconOnly />
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning-outline" iconOnly/> 
                            <Button label="info" icon="FaRegGrimace" color="info-outline" iconOnly/>
                            <Button label="light" icon="FaRegGrinWink" color="light-outline" iconOnly/>
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-outline" iconOnly/>
                        </div>
                        <div className="flex flex-wrap p-3 gap-2">
                            <Button label="primary" icon="FaRegGrinBeam" color="primary" iconOnly roundedFull />
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary" iconOnly roundedFull/>
                            <Button label="success" icon="FaRegGrinHearts" color="success" iconOnly roundedFull/>
                            <Button label="danger" icon="FaRegFrownOpen" color="danger" iconOnly roundedFull/>
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning" iconOnly roundedFull/>
                            <Button label="info" icon="FaRegGrimace" color="info" iconOnly roundedFull />
                            <Button label="light" icon="FaRegGrinWink" color="light-solid" iconOnly roundedFull/>
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-solid" iconOnly roundedFull/>
                            <Button label="primary" icon="FaRegGrinBeam" color="primary-outline" iconOnly roundedFull />
                            <Button label="secondary" icon="FaRegGrinAlt" color="secondary-outline" iconOnly roundedFull/>
                            <Button label="success" icon="FaRegGrinHearts" color="success-outline" iconOnly roundedFull/>
                            <Button label="danger" icon="FaRegFrownOpen" color="danger-outline" iconOnly roundedFull/>
                            <Button label="warning" icon="FaRegGrinBeamSweat" color="warning-outline" iconOnly roundedFull/>
                            <Button label="info" icon="FaRegGrimace" color="info-outline" iconOnly roundedFull />
                            <Button label="light" icon="FaRegGrinWink" color="light-outline" iconOnly roundedFull/>
                            <Button label="dark" icon="FaRegGrinTongue" color="dark-outline" iconOnly roundedFull/>
                        </div>
                    </Card.main>
                </Card>
            </div>
          </main>
        </Layout>
    );
}

export default Buttons;