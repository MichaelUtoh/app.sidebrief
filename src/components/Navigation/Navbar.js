import React from 'react'

const NavbarComponent = () => {
    return (
        <div className="items-center bg-white flex flex-col h-screen justify-center w-2/12">
            <ul className="w-full">
                <li className="cursor-pointer font-two link-animate rounded-r-full p-2 lg:pl-10">Home</li>
                <li className="cursor-pointer font-two link-animate rounded-r-full p-2 lg:pl-10">Register Company</li>
                <li className="cursor-pointer font-two link-animate rounded-r-full p-2 lg:pl-10">My Company</li>
                <li className="cursor-pointer font-two link-animate rounded-r-full p-2 lg:pl-10">Settings</li>
                <li className="cursor-pointer font-two link-animate rounded-r-full p-2 lg:pl-10">Logout</li>
            </ul>
        </div>
    )
}

export default NavbarComponent
