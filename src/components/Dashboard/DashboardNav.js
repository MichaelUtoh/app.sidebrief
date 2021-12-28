import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const DashboardNavComponent = () => {
    return (
        <div className="flex justify-between w-full">
            <div className="bg-gray-100 border-2 flex items-center rounded-full w-4/12">
                <BiSearchAlt className="mx-2" color="#5a5a5a" />
                <input className="bg-gray-100 outline-none p-2 rounded-r-full" name="" placeholder="Search" />
            </div>

            <div className="bg-gray-300 w-6/12">
                <img alt="" src="" />
            </div>
        </div>
    )
}

export default DashboardNavComponent
