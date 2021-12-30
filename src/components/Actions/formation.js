import React from 'react'
import DashboardNavbarComponent from '../Dashboard/dashboardNav'
import NavbarComponent from '../Navigation/navbar'

const FormationComponent = () => {
    return (
        <div className="flex">
            <DashboardNavbarComponent />
            <div className="main w-10/12">
                <NavbarComponent />
                <FormationInfoComponent />
            </div>
        </div>
    )
}

const FormationInfoComponent = () => {
    return (
        <div className="bg-gray-300 flex items-center mt-14 px-6">

            <div className="bg-green-100 flex flex-col w-3/12">
                Sidebar
            </div>

            <div className="bg-gray-100 flex flex-col w-9/12">
                <div className="p-2">
                    <p className="flex font-one flex-col text-lg">Country</p>
                    <p className="font-two text-sm">Where would you like to register your new entity?</p>
                    <div>
                        <input className="mt-2 outline-none p-2 rounded-sm w-6/12" />
                        <button className="bg-blue-400 p-2 px-4 rounded-sm">Add</button>
                    </div>
                </div>
            </div>

        </div>
    )   
}

export default FormationComponent
