import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'

const NavbarComponent = () => {
    return (
        <div className="flex justify-between w-full px-6 p-4">
            <div className="border-2 border-gray-300 flex items-center min-w-4/12 rounded-md text-[#5a5a5a]">
                <BiSearchAlt className="mx-2" color="#5a5a5a" size={20} />
                <input className="outline-none p-2 rounded-r-md" name="" placeholder="" />
            </div>

            <div className="flex items-center justify-end w-4/12">
                <FiBell color="#5a5a5a" size={20} />
                <img alt="" src={require("../../assets/avatar.png")} className="border-none ml-4 mx-2" height="30px" width="30px" />
            </div>
        </div>
    )
}

export default NavbarComponent
