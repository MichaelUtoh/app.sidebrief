import React from "react"
import FormationInfoComponent from './formationComponent'
import LoginComponent from "../Authentication/login"
import NavbarComponent from '../Navigation/navbar'
import SidebarComponent from "../Dashboard/sidebar"


const FormationWrap = () => {

    document.title = "Formation • Sidebrief"

    const user = localStorage.getItem("data")
    if (!user) {
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

export default FormationWrap