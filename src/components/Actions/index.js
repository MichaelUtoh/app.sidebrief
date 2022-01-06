import React from "react"
import FormationInfoComponent from '../Actions/formation'
import SidebarComponent from "../Dashboard/sidebar"
import NavbarComponent from '../Navigation/navbar'


const FormationNewComponent = () => {
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