import React from 'react'
import { Link } from 'react-router-dom'
import { BiCog, BiHomeAlt, BiPowerOff, BiRegistered, BiUser} from 'react-icons/bi'

const DashboardNavbarComponent = () => {

    const handleClick = () => {
        console.log("Hello");
    }

    return (
        <div className="items-center bg-white flex flex-col h-screen justify-start pt-48">

            {/* <Router> */}
            <ul className="w-full">
                <Link to="/dashboard">
                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" onClick={() => handleClick()}>
                        <BiHomeAlt className="font-two" fontSize={18} />
                        <li className="font-two ml-2 link-display">Home</li>
                    </div>
                </Link>

                <Link to="/dashboard/formation">
                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" onClick={() => handleClick()}>
                        <BiRegistered className="font-two" fontSize={18} />
                        <li className="font-two ml-2 link-display">Register Company</li>
                    </div>
                </Link>

                <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" onClick={() => handleClick()}>
                    <BiUser className="font-two" fontSize={18} />
                    <li className="font-two ml-2 link-display">My Company</li>
                </div>

                <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" onClick={() => handleClick()}>
                    <BiCog className="font-two" fontSize={18} />
                    <li className="font-two ml-2 link-display">Settings</li>
                </div>

                <Link to="/login">
                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6" onClick={() => handleClick()}>
                        <BiPowerOff className="font-two" fontSize={18} />
                        <li className="font-two ml-2 link-display">Logout</li>
                    </div>   
                </Link> 
            </ul>

        </div>
    )
}

export default DashboardNavbarComponent;
