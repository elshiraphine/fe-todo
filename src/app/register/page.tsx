import React from "react";
import Register from "@/app/register/register";
import RootLayout, {metadata} from "@/app/register/layout";
import Head from "next/head";

const RegisterPage: React.FC = () => {

    return (
        <RootLayout>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <Register />
        </RootLayout>
    );
}

export default RegisterPage;
