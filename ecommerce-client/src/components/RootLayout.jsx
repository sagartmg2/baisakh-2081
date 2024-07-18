import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"

export default function RootLayout({user,setUser}) {
    return (
        <div>
            <Header user={user} setUser={setUser} />
            <Outlet />
        </div>
    )
}
