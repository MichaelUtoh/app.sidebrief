import React from 'react'
import { Link } from 'react-router-dom'
import { BiCog, BiHomeAlt, BiPowerOff, BiRegistered, BiUser} from 'react-icons/bi'

const SidebarComponent = () => {

    const url = window.location.pathname
    // console.log(url);
    const handleLogout = () => {
        localStorage.clear()
    }

    return (
        <div className="bg-gray-50 flex flex-col h-screen items-center justify-start py-4 static w-3/12 z-10">

            <div className="ml-7 p-2 pt-6 w-full">
                <img alt="" className="responsive" src={require("../../assets/sidebrief.png")} width="96px" />
            </div>

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

                <Link to="/">
                    <div
                        className={ 
                            url === "/" ? "cursor-pointer flex font-two items-center justify-start link-animate-visited rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" :
                            "cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"}
                    >
                        <BiUser className="text-[#5a5a5a]" fontSize={18} />
                        <li className="ml-2 link-display text-[#5a5a5a]">My Company</li>
                    </div>
                </Link>

                <Link to="/settings">
                <div
                    className={ 
                        url === "/settings" ? "cursor-pointer flex font-two items-center justify-start link-animate-visited rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" :
                        "cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6"}
                >
                    <BiCog className="text-[#5a5a5a]" fontSize={18} />
                    <li className="ml-2 link-display text-[#5a5a5a]">Settings</li>
                </div>
                </Link>

                <Link to="/login" onClick={() => handleLogout()}>
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

export default SidebarComponent;
