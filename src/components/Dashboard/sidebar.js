import React from 'react'
import { Link } from 'react-router-dom'
import { BiCog, BiHomeAlt, BiPowerOff, BiRegistered, BiUser} from 'react-icons/bi'

const DashboardNavbarComponent = () => {

    const url = window.location.pathname
    console.log(url);

    return (
        <div className="items-center bg-gray-50 flex flex-col justify-start min-h-screen py-4">

            <img alt="" className="mt-2" src={require("../../assets/sidebrief.png")} width="96px" />

            {/* <Router> */}
            <ul className="mt-48 w-full">
                <Link to="/dashboard">
                    <div
                        className={ 
                            url === "/dashboard" ? "cursor-pointer flex items-center justify-start link-animate-visited rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" :
                            "cursor-pointer flex  items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" }
                    >
                        <BiHomeAlt className="text-[#5a5a5a]" fontSize={18} />
                        <li className="ml-2 link-display text-[#5a5a5a]">Home</li>
                    </div>
                </Link>

                <Link to="/dashboard/formation">
                    <div
                        className={ 
                            url === "/dashboard/formation" ? "cursor-pointer flex font-two items-center justify-start link-animate-visited rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" :
                            "cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"}
                    >
                        <BiRegistered className="text-[#5a5a5a]" fontSize={18} />
                        <li className="ml-2 link-display text-[#5a5a5a]">Register Company</li>
                    </div>
                </Link>

                <div
                    className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"
                >
                    <BiUser className="text-[#5a5a5a]" fontSize={18} />
                    <li className="ml-2 link-display text-[#5a5a5a]">My Company</li>
                </div>

                <div
                    className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"
                >
                    <BiCog className="text-[#5a5a5a]" fontSize={18} />
                    <li className="ml-2 link-display text-[#5a5a5a]">Settings</li>
                </div>

                <Link to="/login">
                    <div
                        className={ url === "/login" ?
                            "cursor-pointer flex font-two items-center justify-start link-animate-visited rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" :
                            "cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"}
                    >
                        <BiPowerOff className="text-[#5a5a5a]" fontSize={18} />
                        <li className="ml-2 link-display text-[#5a5a5a]">Logout</li>
                    </div>   
                </Link> 
            </ul>

        </div>
    )
}

export default DashboardNavbarComponent;
