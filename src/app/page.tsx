import Head from "next/head";
import {metadata} from "@/app/layout";
import Login from "@/app/login";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
            </Head>
            <h1 className="text-4xl font-bold text-cyan-800 mb-8">Welcome to TODO App</h1>
            <Login />
        </>
    );
}
