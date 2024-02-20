import React from "react";

export const metadata = {
  title: 'Register',
  description: 'Register to use this TODO app',
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <section className="flex flex-col justify-center items-center min-w-full">{children}</section>
  )
}