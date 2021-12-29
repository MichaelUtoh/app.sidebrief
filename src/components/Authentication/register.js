import React from 'react'
import { BiKey, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const RegisterComponent = () => {
    return (
        <div className="bg-white flex items-center justify-between min-h-screen w-full">
            <div className="flex items-center justify-center h-screen w-7/12">
                <img src={require("../../assets/avatar.png")} />
            </div>

            <div className="flex items-center justify-center h-screen w-5/12">
                <div className="bg-white flex flex-col items-center justify-center h-96 p-4 rounded-sm shadow-sm">
                    {/* <h1 className="font-two mb-14 text-xl">Login</h1> */}

                    <div className="border-2 border-gray-600 flex items-center justify-between mt-4 px-2">
                        <BiUser color="#5a5a5a" />
                        <input className="outline-none p-2" id="username" placeholder="Username" type="text" />
                    </div>

                    <div className="border-2 border-gray-600 flex items-center justify-between mt-4 px-2">
                        <BiKey color="#5a5a5a" />
                        <input className="outline-none p-2" id="password" placeholder="Password" type="password" />
                    </div>

                    <div className="flex items-center justify-between mt-4 w-full">
                        <div className="flex">
                            <p className="font-thin mr-6 text-xs">Already a member</p>
                            <p className="cursor-pointer font-thin text-xs hover:underline"><Link to="/login">Login</Link></p>
                        </div>
                        <button className="bg-blue-400 p-2 px-4 text-white">Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegisterComponent
