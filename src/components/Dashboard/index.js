import React from 'react'
import LoginComponent from '../Authentication/login'
import HeroComponent from '../Hero'
import NavbarComponent from '../Navigation/navbar'
import DashboardNavbarComponent from './sidebar'


const DashboardNavComponent = () => {
    
    const token = localStorage.getItem("data")
    if (!token) {
        return <LoginComponent />
    }

    return (
        <div className="flex">
            <DashboardNavbarComponent />

            <div className="main w-10/12">
                <NavbarComponent />
                <HeroComponent />
            </div>
        </div>
    )
}

export default DashboardNavComponent
