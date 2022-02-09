import React from 'react'
import { FaUser } from 'react-icons/fa'


const ProfileComponent = () => {
  return (
    <>
        <div className="flex min-h-screen py-14 lg:px-6">
            <div className="flex flex-col w-5/12">
                <div className="border border-gray-100 flex h-60 items-center justify-center w-60">
                    <FaUser color="#f3f3f3" size={150} />
                    <img src="" />
                </div>

                <div className="flex items-center justify-start p-2 pt-4">
                    <p className="font-medium mr-4 text-xs text-[#8a8a8a]">Profile Details</p>
                    <hr className="border-b border-b-gray-200 w-32 h-1" />
                </div>
                
                <div className="flex items-baseline p-2 pt-4">
                <p className="font-thin text-xs text-gray-900">Full Name: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">John Doe</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Location: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">21, Admiralty way, Lekki, Lagos.</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Occupation: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">Hedge Funds Manager</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default ProfileComponent