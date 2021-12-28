import React from 'react'
import DashboardComponent from '../Dashboard/Dashboard'
import { BiHomeAlt, BiCog, BiPowerOff, BiRegistered, BiUser } from 'react-icons/bi'

const MainComponent = () => {
    return (
        <div className="flex">
            <div className="items-center bg-white flex flex-col h-screen justify-center w-2/12">
                <ul className="w-full">
                    <li className="cursor-pointer flex font-two items-center link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"> <BiHomeAlt fontSize={18} /> Home</li>
                    <li className="cursor-pointer flex font-two items-center link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"> <BiRegistered fontSize={18} /> Register Company</li>
                    <li className="cursor-pointer flex font-two items-center link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"> <BiUser fontSize={18} /> My Company</li>
                    <li className="cursor-pointer flex font-two items-center link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"> <BiCog fontSize={18} /> Settings</li>
                    <li className="cursor-pointer flex font-two items-center link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"> <BiPowerOff fontSize={18} /> Logout</li>
                </ul>
            </div>
            
            <DashboardComponent />
        </div>
    )
}

export default MainComponent
