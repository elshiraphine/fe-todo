import Head from "next/head";
import RootLayout from "@/app/layout";
import { metadata } from "@/app/layout";
import {Home} from "@/app/home";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <Home />
        </>
    );
}
