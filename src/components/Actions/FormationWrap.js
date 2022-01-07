import React from "react"
import FormationInfoComponent from './formationComponent'
import LoginComponent from "../Authentication/login"
import NavbarComponent from '../Navigation/navbar'
import SidebarComponent from "../Dashboard/sidebar"


const FormationNewComponent = () => {

    document.title = "Formation • Sidebrief"

    const token = localStorage.getItem("token")
    if (!token) {
        return <LoginComponent />
    }

    return (
        <div className="flex max-h-screen">
            <SidebarComponent />
            <div className="main overflow-y-scroll w-10/12">
                <NavbarComponent />
                <FormationInfoComponent />
            </div>
        </div>
    )
}

export default FormationNewComponent