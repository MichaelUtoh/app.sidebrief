import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaRegistered } from 'react-icons/fa'


const ProfileComponent = () => {

    const [showContactInfo, setShowContactInfo] = useState(true)
    const [showRegistrations, setShowRegistrations] = useState(false)

    const handleContactInfo = () => {

    }

    const handleRegistrations = () => {

    }

  return (
    <>
        <div className="flex flex-col min-h-screen py-14 lg:px-6">

            {/* Profile Details */}
            <div className="border-b border-b-gray-200 flex items-center p-2 w-full">
                <div className="border border-gray-50 flex h-60 items-center justify-center w-3/12">
                    <FaUser color="#f3f3f3" size={150} />
                    <img src="" />
                </div>

                <div className="flex flex-col justify-center p-4 w-9/12">
                    <div className="flex items-center justify-start p-2 pt-4">
                        <p className="font-medium mr-4 text-[.7rem] text-cyan-700 uppercase">Profile Details</p>
                        <hr className="border-b border-b-gray-200 border-t-white w-48 h-1" />
                    </div>
                    
                    <div className="flex items-baseline p-2 pt-4">
                    <p className="font-thin text-xs text-gray-900">Full Name: &nbsp;</p>
                        <p className="font-bold text-md text-[#5a5a5a]">John S. Doe</p>
                    </div>
                    
                    <div className="flex items-baseline p-2">
                        <p className="font-thin text-xs text-gray-900">Email: &nbsp;</p>
                        <p className="font-bold text-md text-[#5a5a5a]">johndoe21@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Profile Details */}
            <div className="flex h-full w-full">

                <div className="w-3/12">
                    
                </div>

                <div className="w-9/12">
                    <section className="border-b border-gray-200 flex">
                        <p className="cursor-pointer flex font-bold hover:bg-cyan-100 hover:text-cyan-900 items-center p-2 px-4 text-gray-500" onClick={() => {handleContactInfo()}}>
                            <FaUser className="m-1 " />
                            <span className="m-1">About</span>
                        </p>

                        <p className="cursor-pointer flex font-bold hover:bg-cyan-100 hover:text-cyan-900 items-center p-2 px-4 text-gray-500" onClick={() => {handleRegistrations()}}>
                            <FaRegistered className="m-1"/> 
                            <span className="m-1">My Company</span>
                        </p>
                    </section>

                    { showContactInfo ? <ContactInfo /> : null }
                </div>

            </div>
        </div>
    </>
  )
}


const ContactInfo = () => {
  return (
    <>
        <div className="border-b border-gray-300 p-4">
            {/* Contact Information */}
            <section className="mb-6">
                <div className="flex items-center justify-start p-2 pt-4">
                    <p className="font-medium mr-4 text-[.7rem] text-cyan-700 uppercase">Contact Information</p>
                    <hr className="border-b border-b-gray-200 border-t-white w-48 h-1" />
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Address Line 1: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">21, Admiralty way, Lekki, Lagos.</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Address Line 2: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">15A, Mosafejo Street, Lekki, Lagos.</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Occupation: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">Hedge Funds Manager</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Phone: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">+234 800 451 0000</p>
                </div>
            </section>

            {/* Basic Information */}
            <section className="mb-6">
                <div className="flex items-center justify-start p-2 pt-4">
                    <p className="font-medium mr-4 text-[.7rem] text-cyan-700 uppercase">Basic Information</p>
                    <hr className="border-b border-b-gray-200 border-t-white w-48 h-1" />
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Birthday: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">October 1, 1969</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Gender: &nbsp;</p>
                    <p className="font-bold text-md text-[#5a5a5a]">Male</p>
                </div>
            </section>

        </div>
    </>
  )
}

export default ProfileComponent