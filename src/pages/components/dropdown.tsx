import DropDown from "@components/base/DropDown";
import Card from "@components/Card";
import Layout from "@components/Layout";
import Head from "next/head";

const Dropdowns = () => {
    return (
        <Layout authenticated>
            <Head>
                <title>Drop Down</title>
            </Head>
        <main>
            <div className="flex flex-col gap-4 p-4">
                <Card>
                    <Card.header>Default Drop Down</Card.header>
                    <Card.main>
                        <p className="text-sm text-gray-500 mb-4">Use the <span className="text-rose-500">Dropdown</span> Component to show a default drop down</p>
                        <DropDown data={['edit','save','delete']}/>
                    </Card.main>
                </Card>
            </div>
        </main>
        </Layout>
    );
}

export default Dropdowns;