import React from "react";
import Register from "@/app/register/register";
import Head from "next/head";
import HomeLayout, { metadata } from "@/app/home/layout"
import Home from "@/app/home/home";

const HomePage: React.FC = () => {

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

export default HomePage;
