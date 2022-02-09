import React from "react"
import LoginComponent from "../Authentication/login"
import NavbarComponent from '../Navigation/navbar'
import SidebarComponent from "../Dashboard/sidebar"
import ProfileComponent from "../Profile"


const MyProfileComponent = () => {

    document.title = "Profile • Sidebrief"

    const user = localStorage.getItem("data")
    if (!user) {
        return <LoginComponent />
    }

    return (
        <div className="flex max-h-screen">
            <SidebarComponent />
            <div className="main overflow-y-scroll w-full">
                <NavbarComponent />
                <ProfileComponent />
            </div>
        </div>
    )
}

export default MyProfileComponent