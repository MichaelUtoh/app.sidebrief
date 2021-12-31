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
        <div className="flex items-center mt-14 px-6">

            <div className="bg-green-100 flex flex-col mr-4 w-3/12">
                Sidebar
            </div>

            <div className="flex flex-col w-9/12">

                <div className="p-2">
                    <p className="flex font-one flex-col text-xl">Country</p>
                    <p className="font-two text-sm text-gray-500 mt-2 w-6/12">Where would you like to register your new entity?</p>
                    <div className="flex items-center pt-2">
                        <input className="bg-gray-100 mr-1 outline-none p-2 rounded-sm w-6/12" />
                        <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                    </div>
                </div>

                <div className="p-2">
                    {/* <p className="flex font-one flex-col text-lg">Country</p> */}
                    <p className="font-two text-sm text-gray-500 w-6/12">What is the name of your new entity, provide at least two (2) names?</p>
                    <div className="flex items-center pt-2">
                        <input className="bg-gray-100 mr-1 outline-none p-2 rounded-sm w-6/12" />
                        <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                    </div>
                </div>

                <div className="p-2">
                    {/* <p className="flex font-one flex-col text-lg">Country</p> */}
                    <p className="font-two text-sm text-gray-500 w-6/12">What does your business do, list as many as you can?</p>
                    <div className="flex items-center pt-2">
                        <input className="bg-gray-100 mr-1 outline-none p-2 rounded-sm w-6/12" />
                        <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                    </div>
                </div>

            </div>

        </div>
    )   
}

export default FormationComponent
