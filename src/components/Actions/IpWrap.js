import React from "react"
import IpInfoComponent from './formationComponent'
import LoginComponent from "../Authentication/login"
import NavbarComponent from '../Navigation/navbar'
import SidebarComponent from "../Dashboard/sidebar"


const FormationNewComponent = () => {

    const token = localStorage.getItem("token")
    if (!token) {
        return <LoginComponent />
    }

    return (
        <div className="flex max-h-screen">
            <SidebarComponent />
            <div className="main overflow-y-scroll w-10/12">
                <NavbarComponent />
                <IpInfoComponent />
            </div>
        </div>
    )
}

export default FormationNewComponent