import React from "react";

export const metadata = {
    title: 'Home',
    description: 'Welcome to TODO App',
}

export default function HomeLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col justify-center items-center min-w-full">{children}</section>
    )
}