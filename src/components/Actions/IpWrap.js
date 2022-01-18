import React from "react"
import IpInfoComponent from './ipComponent'
import LoginComponent from "../Authentication/login"
import NavbarComponent from '../Navigation/navbar'
import SidebarComponent from "../Dashboard/sidebar"


const IpNewComponent = () => {

    document.title = "IP • Sidebrief"

    const user = localStorage.getItem("data")
    if (!user) {
        return <LoginComponent />
    }

    return (
        <div className="flex max-h-screen">
            <SidebarComponent />
            <div className="main overflow-y-scroll w-full">
                <NavbarComponent />
                <IpInfoComponent />
            </div>
        </div>
    )
}

export default IpNewComponent