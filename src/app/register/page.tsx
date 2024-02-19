import React from "react";
import Register from "@/app/register/register";
import Head from "next/head";
import RegisterLayout, { metadata } from "@/app/register/layout";

const RegisterPage: React.FC = () => {

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <Register />
        </>
    );
}

export default RegisterPage;
