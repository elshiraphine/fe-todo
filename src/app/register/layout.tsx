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
    <div>
      {children}
    </div>
  )
}