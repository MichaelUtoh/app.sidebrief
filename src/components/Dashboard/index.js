import React from 'react'
import { BiCog, BiHomeAlt, BiPowerOff, BiRegistered, BiUser} from 'react-icons/bi'
import HeroComponent from '../Hero'
import NavbarComponent from '../Navigation/navbar'


const DashboardNavComponent = () => {

    return (
        <div className="flex">
            <div className="items-center bg-white flex flex-col h-screen justify-start pt-48 w-2/12">

                {/* <Router> */}
                <ul className="w-full">
                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6">
                        <BiHomeAlt className="font-two" fontSize={18} />
                        <li className="font-two ml-2"> <a href="/">Home</a></li>
                    </div>

                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6">
                        <BiRegistered className="font-two" fontSize={18} />
                        <li className="font-two ml-2"> <a href="/">Register Company</a></li>
                    </div>

                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6">
                        <BiUser className="font-two" fontSize={18} />
                        <li className="font-two ml-2"> <a href="/">My Company</a></li>
                    </div>

                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6">
                        <BiCog className="font-two" fontSize={18} />
                        <li className="font-two ml-2"> <a href="/">Settings</a></li>
                    </div>

                    {/* <Link path="/login" component={LoginComponent}> */}
                    <div className="cursor-pointer flex font-two items-center justify-start link-animate rounded-r-sm mr-2 mb-2 p-2 lg:pl-6">
                        <BiPowerOff className="font-two" fontSize={18} />
                        <li className="font-two ml-2"><a href="/login">Logout</a></li>
                    </div>   
                    {/* </Link>  */}
                </ul>
                {/* </Router> */}
            </div>
            
            <div className="w-10/12">
                <NavbarComponent />
                <HeroComponent />
            </div>
        </div>
    )
}

export default DashboardNavComponent
