import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaRegistered } from 'react-icons/fa'


const ProfileComponent = () => {

    const [showProfileInfo, setShowProfileInfo] = useState(true)
    const [showCompanyInfo, setShowCompanyInfo] = useState(false)

    const handleProfileInfo = () => {
        setShowProfileInfo(true)
        setShowCompanyInfo(false)
    }

    const handleCompanyInfo = () => {
        setShowProfileInfo(false)
        setShowCompanyInfo(true)
    }

  return (
    <>
        <div className="flex flex-col min-h-screen pb-16 lg:px-6">

            {/* Profile Details */}
            <div className="border-b border-b-gray-50 flex items-center p-2 w-full">
                <div className="border border-gray-50 flex h-60 items-center justify-center w-3/12">
                    <FaUser color="#f3f3f3" size={150} />
                    {/* <img src="" alt="" /> */}
                </div>

                <div className="flex flex-col justify-center p-4 w-9/12">
                    <div className="flex items-center justify-start p-2 pt-4">
                        <p className="font-medium mr-4 text-[.7rem] text-cyan-700 uppercase">Profile Details</p>
                        <hr className="border-b border-b-gray-200 border-t-white w-48 h-1" />
                    </div>
                    
                    <div className="flex items-baseline p-2 pt-4">
                    <p className="font-thin text-xs text-gray-900">Full Name: &nbsp;</p>
                        <p className="font-bold text-md text-gray-700">John S. Doe</p>
                    </div>
                    
                    <div className="flex items-baseline p-2">
                        <p className="font-thin text-xs text-gray-900">Email: &nbsp;</p>
                        <p className="font-bold text-md text-gray-700">johndoe21@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Profile Details */}
            <div className="flex h-full w-full">

                <div className="w-3/12">
                    
                </div>

                <div className="w-9/12">
                    <section className="border-b border-gray-100 flex px-6">
                        <p
                            className={showProfileInfo ? 
                                "cursor-pointer flex font-bold bg-cyan-900 text-white items-center p-2 px-4" :
                                "cursor-pointer flex font-bold hover:text-cyan-900 items-center p-2 px-4 text-cyan-900"
                            }
                            onClick={() => {handleProfileInfo()}}
                        >
                            <FaUser className="m-1 " />
                            <span className="m-1">About</span>
                        </p>

                        <p
                            className={showCompanyInfo ? 
                                "cursor-pointer flex font-bold bg-cyan-900 text-white items-center p-2 px-4" :
                                "cursor-pointer flex font-bold hover:text-cyan-900 items-center p-2 px-4 text-cyan-900"
                            }
                            onClick={() => {handleCompanyInfo()}}
                        >
                            <FaRegistered className="m-1"/> 
                            <span className="m-1">My Company</span>
                        </p>
                    </section>

                    { showProfileInfo ? <ProfileInfo /> : null }
                    { showCompanyInfo ? <CompanyInfo /> : null }
                </div>

            </div>
        </div>
    </>
  )
}


const ProfileInfo = () => {
  return (
    <>
        <div className="border-b border-gray-100 p-4">
            {/* Contact Information */}
            <section className="mb-6">
                <div className="flex items-center justify-start p-2 pt-4">
                    <p className="font-medium mr-4 text-[.7rem] text-cyan-700 uppercase">Contact Information</p>
                    <hr className="border-b border-b-gray-200 border-t-white w-48 h-1" />
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Address Line 1: &nbsp;</p>
                    <p className="font-bold text-md text-gray-700">21, Admiralty way, Lekki, Lagos.</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Address Line 2: &nbsp;</p>
                    <p className="font-bold text-md text-gray-700">15A, Mosafejo Street, Lekki, Lagos.</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Occupation: &nbsp;</p>
                    <p className="font-bold text-md text-gray-700">Hedge Funds Manager</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Phone: &nbsp;</p>
                    <p className="font-bold text-md text-gray-700">+234 800 451 0000</p>
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
                    <p className="font-bold text-md text-gray-700">October 1, 1969</p>
                </div>

                <div className="flex items-baseline p-2">
                    <p className="font-thin text-xs text-gray-900">Gender: &nbsp;</p>
                    <p className="font-bold text-md text-gray-700">Male</p>
                </div>
            </section>

        </div>
    </>
  )
}


const CompanyInfo = () => {
    return (
      <>
          <div className="border-b border-gray-100 p-4">
              {/* Contact Information */}
              <section className="mb-6">
                  <div className="flex items-center justify-start p-2 pt-4">
                      <p className="font-medium mr-4 text-[.7rem] text-cyan-700 uppercase">Registered Company Information</p>
                      <hr className="border-b border-b-gray-200 border-t-white w-48 h-1" />
                  </div>

                  <div className="flex items-baseline p-2">
                      <p className="font-thin text-xs text-gray-900">Company Name: &nbsp;</p>
                      <p className="font-bold text-md text-gray-700">AutoLand Group Co.</p>
                  </div>
  
                  <div className="flex items-baseline p-2">
                      <p className="font-thin text-xs text-gray-900">Address Line 1: &nbsp;</p>
                      <p className="font-bold text-md text-gray-700">21, Admiralty way, Lekki, Lagos.</p>
                  </div>
  
                  <div className="flex items-baseline p-2">
                      <p className="font-thin text-xs text-gray-900">Address Line 2: &nbsp;</p>
                      <p className="font-bold text-md text-gray-700">15A, Mosafejo Street, Lekki, Lagos.</p>
                  </div>
  
                  <div className="flex items-baseline p-2">
                      <p className="font-thin text-xs text-gray-900">Share Capital: &nbsp;</p>
                      <p className="font-bold text-md text-gray-700">2,000,000 Preference Shares</p>
                  </div>
  
                  <div className="flex items-baseline p-2">
                      <p className="font-thin text-xs text-gray-900">Phone: &nbsp;</p>
                      <p className="font-bold text-md text-gray-700">+234 800 451 0000</p>
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
                      <p className="font-bold text-md text-gray-700">October 1, 1969</p>
                  </div>
  
                  <div className="flex items-baseline p-2">
                      <p className="font-thin text-xs text-gray-900">Gender: &nbsp;</p>
                      <p className="font-bold text-md text-gray-700">Male</p>
                  </div>
              </section>
  
          </div>
      </>
    )
  }
  

export default ProfileComponent