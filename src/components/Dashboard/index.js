import React from 'react'
import HeroComponent from '../Hero'
import NavbarComponent from '../Navigation/navbar'
import DashboardNavbarComponent from './sidebar'


const DashboardNavComponent = () => {    

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
